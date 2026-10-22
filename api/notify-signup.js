// Vercel serverless function: POST /api/notify-signup
// Emails the site owner when a new learner account is created.
//
// The app calls this with the new learner's own access token. The function
// checks that token with Supabase, then calls mark_admin_notified() as that
// learner — which returns true only the first time — so each account
// triggers exactly one email and nobody can use this to send spam.
//
// Uses the same Vercel environment variables as the booking emails:
//   VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY
//   RESEND_API_KEY
//   OWNER_NOTIFICATION_EMAIL  (falls back to arifdub@gmail.com)
//   BOOKING_FROM_EMAIL        (optional "from" address)

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const url = process.env.VITE_SUPABASE_URL;
  const anon = process.env.VITE_SUPABASE_ANON_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.OWNER_NOTIFICATION_EMAIL || "arifdub@gmail.com";
  const from = process.env.BOOKING_FROM_EMAIL || "PassDrivingTest.ie <onboarding@resend.dev>";
  if (!url || !anon) return res.status(500).json({ error: "Supabase not configured" });

  const token = String(req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  if (!token) return res.status(401).json({ error: "Not signed in" });
  const auth = { apikey: anon, Authorization: `Bearer ${token}` };

  try {
    const uResp = await fetch(`${url}/auth/v1/user`, { headers: auth });
    if (!uResp.ok) return res.status(401).json({ error: "Invalid session" });
    const user = await uResp.json();

    const mResp = await fetch(`${url}/rest/v1/rpc/mark_admin_notified`, {
      method: "POST",
      headers: { ...auth, "Content-Type": "application/json" },
      body: "{}",
    });
    if (!mResp.ok) return res.status(200).json({ sent: false, reason: "not set up" });
    const first = await mResp.json();
    if (first !== true) return res.status(200).json({ sent: false, reason: "already notified" });

    if (!resendKey) return res.status(200).json({ sent: false, reason: "email not configured" });

    const name = user.user_metadata?.full_name || "";
    const when = new Date(user.created_at || Date.now()).toLocaleString("en-IE", { timeZone: "Europe/Dublin" });
    const html = `
      <p>A new learner has registered on the PassDrivingTest.ie app.</p>
      <ul>
        <li><b>Name:</b> ${esc(name) || "—"}</li>
        <li><b>Email:</b> ${esc(user.email)}</li>
        <li><b>Registered:</b> ${esc(when)}</li>
      </ul>
      <p>Open the app → Settings → Admin to approve, block or view their progress.</p>`;

    const eResp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, subject: `New registration: ${user.email}`, html }),
    });
    return res.status(200).json({ sent: eResp.ok });
  } catch (e) {
    return res.status(500).json({ error: "Notification failed" });
  }
}
