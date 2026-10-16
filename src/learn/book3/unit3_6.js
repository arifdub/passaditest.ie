/*
  ===========================================================================
  BOOK 3 · UNIT 3.6 — ASPECTS OF VEHICLE REGISTRATION & LICENSING

  Source: "Theory Resource Workbook 3 of 4" (Driver Education Supplies),
  book pages 53–56, with the retention-test answers on page 94 (24
  questions). This unit has no post test.

  Omitted retention questions (answer key unsafe):
  - Q18 (what to produce annually to tax an HGV, keyed "a completed form,
    current D.O.E. certificate, the fee, a valid insurance certificate"):
    not in the unit.
  - Q24 (exemptions from displaying insurance discs, keyed "vehicles owned
    by the state and motorcycles"): the unit gives agricultural tractors
    and vehicles on trade plates as its examples.

  Several kept questions go beyond the text (e.g. Q5, Q10, Q12, Q21–Q23)
  but have only one defensible option. Forms, fees and rules change —
  see motortax.ie.
  ===========================================================================
*/

const P = (page, ref) => ({ book: 3, unit: "3.6", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "motor-tax": {
    title: "Motor tax",
    text: "Motor tax applies to private cars, motorcycles, goods vehicles, taxis, public service vehicles, community buses, agricultural and construction vehicles. A disc is issued for 3, 6 or 12 months; the rate depends on the vehicle's type and size. Renew up to a month before expiry, by post or online — reminders don't always arrive, so keep track. The disc is specific to the vehicle and can't be transferred. Any vehicle driven or parked on a public road must display a current disc, or the owner may be fined and the vehicle towed.",
    src: P(53, "Motor tax; Renewing; Vehicle licensing"),
  },
  "import-tax": {
    title: "VAT and VRT",
    text: "VAT is payable on all new cars and on second-hand vehicles imported into Ireland. VRT (Vehicle Registration Tax) is an import tax on new or second-hand vehicles brought in. Both are paid at or shortly after the point of entry, and the vehicle can't be registered until they're paid and certificates produced.",
    src: P(53, "VAT; Vehicle Registration Tax"),
  },
  "ownership": {
    title: "Buying and selling",
    text: "Private sale: the seller and buyer both complete and sign the change-of-ownership section of the Vehicle Registration Certificate (VRC); the seller sends it to vehicle registration. Selling to a dealer: give the dealer the VRC and complete form RF105 together, with the Garage Identity Code; you then send the signed RF105. The registration document names the registered owner — it doesn't necessarily prove legal ownership.",
    src: P(53, "Purchasing a second-hand vehicle; Selling your vehicle"),
  },
  "online": {
    title: "Taxing online",
    text: "You need the registration number, a PIN, an email address, insurance details and a card. The PIN is the last six digits of the VRC number (a car taxed before) or the last six characters of the chassis number (VIN) for a new or imported car. Re-taxing, it's on your renewal notice. motortax.ie also handles off-road declarations, end-of-life vehicles and changes of ownership or details.",
    src: P(54, "Tax my vehicle online; What is my PIN"),
  },
  "documents": {
    title: "Lost discs and records",
    text: "Report a lost or stolen tax disc on form RF134 and apply for a duplicate. Replacement documents need a form witnessed by a garda at a garda station, plus the fees. Notify the licensing authority of a change of name or address; return any incorrect document immediately; if you find an original after a replacement is issued, return the original. Scrapping a vehicle: the last registered owner surrenders the logbook and tax disc.",
    src: P(54, "Lost or stolen licence discs; End of life vehicles; Replacing"),
  },
  "display": {
    title: "Displaying discs",
    text: "Irish-registered vehicles must display a current tax disc, a valid insurance disc and an NCT disc where appropriate. Some are exempt from displaying insurance discs — for example agricultural tractors and vehicles on trade-licence garage plates.",
    src: P(54, "Vehicle certificate display and exemptions"),
  },
  "refunds": {
    title: "Tax refunds",
    text: "You can claim a refund if the vehicle was scrapped, destroyed or permanently exported; stolen and not recovered; not used in a public place since the disc was issued; or you stopped using it through illness, injury or disability, absence abroad for business or study, or defence forces service overseas. Surrender the disc at once — at least three unexpired whole months must be left. A scrapped vehicle needs a certificate of destruction from an authorised ELV facility.",
    src: P(54, "Refunds of motor tax"),
  },
};

/* ---------------------------------------------------------------------------
   1. LEARN
   --------------------------------------------------------------------------- */
const learn = {
  id: "learn",
  kind: "learn",
  title: "Learn",
  blurb: "The unit in short cards",
  xp: 20,
  remember: [
    "The tax disc stays with the car — never transferred",
    "Private sale: the SELLER sends the VRC in",
    "Refund: at least 3 whole months left on the disc",
  ],
  cards: [
    {
      icon: "💶",
      kicker: "Motor tax",
      title: "3, 6 or 12 months",
      visual: "driving-docs",
      ask: {
        prompt: "Can a tax disc be moved to your other car?",
        options: ["Yes, if you own both", "No — it's specific to the vehicle", "Only within a month"],
        answer: 1,
      },
      list: [
        "Cars, motorcycles, goods vehicles, taxis, buses, tractors and more",
        "Rate depends on the vehicle's type and size",
        "Renew up to a month early — reminders don't always come",
        "On a public road without a current disc: a fine, or towed away",
      ],
      concept: "motor-tax",
      src: P(53, "Motor tax; Renewing; Vehicle licensing"),
    },
    {
      icon: "🛃",
      kicker: "VAT and VRT",
      title: "Paid before registration",
      list: [
        "VAT on all new cars and imported second-hand vehicles",
        "VRT: an import tax on new or used vehicles brought in",
        "Paid at or soon after the point of entry",
        "No registration until both are paid",
      ],
      concept: "import-tax",
      src: P(53, "VAT; Vehicle Registration Tax"),
    },
    {
      icon: "🤝",
      kicker: "Buying and selling",
      title: "The seller sends it in",
      visual: "vrc-transfer",
      list: [
        "Private sale: both sign the VRC's change-of-ownership section",
        "The seller sends it to vehicle registration",
        "To a dealer: VRC plus form RF105 with the garage identity code",
        "The VRC names the registered owner — not necessarily the legal owner",
      ],
      concept: "ownership",
      src: P(53, "Purchasing a second-hand vehicle; Selling your vehicle"),
    },
    {
      icon: "💻",
      kicker: "Taxing online",
      title: "Registration number and PIN",
      list: [
        "Registration number, PIN, email, insurance details, a card",
        "PIN: last 6 digits of the VRC number (taxed before)",
        "New or imported: last 6 characters of the chassis number (VIN)",
        "Re-taxing: the PIN is on your renewal notice",
      ],
      concept: "online",
      src: P(54, "Tax my vehicle online; What is my PIN"),
    },
    {
      icon: "📄",
      kicker: "Lost discs and changes",
      title: "Keep the records right",
      list: [
        "Lost or stolen disc: form RF134 for a duplicate",
        "Replacement documents: a form witnessed at a garda station",
        "Name or address change: tell the licensing authority",
        "Scrapping: surrender the logbook and tax disc",
      ],
      concept: "documents",
      src: P(54, "Lost or stolen licence discs; End of life; Replacing"),
    },
    {
      icon: "🪟",
      kicker: "Displaying discs",
      title: "Tax, insurance, NCT",
      list: [
        "A current tax disc, a valid insurance disc, an NCT disc where needed",
        "Some exemptions from insurance discs: tractors, trade plates",
      ],
      concept: "display",
      src: P(54, "Vehicle certificate display and exemptions"),
    },
    {
      icon: "↩️",
      kicker: "Refunds",
      title: "When you can claim",
      visual: "tax-refund",
      list: [
        "Scrapped, destroyed or exported; stolen and not recovered",
        "Not used on a public road since the disc was issued",
        "Illness, injury, absence abroad, defence forces overseas",
        "At least 3 whole months left; scrapped cars need a destruction certificate",
      ],
      concept: "refunds",
      src: P(54, "Refunds of motor tax"),
    },
  ],
};

/* ---------------------------------------------------------------------------
   2. QUICK RECALL
   --------------------------------------------------------------------------- */
const recall = {
  id: "recall",
  kind: "items",
  mode: "recall",
  title: "Quick Recall",
  blurb: "Flash cards, true or false, fill the gap",
  xpPer: 10,
  items: [
    { id: "r1", type: "fill", concept: "motor-tax",
      before: "A motor tax disc is issued for 3, 6 or", after: "months.",
      options: ["12", "18", "24", "9"], answer: "12",
      explain: "The rate depends on the vehicle's type and size.", src: P(53, "Renewing your motor tax") },
    { id: "r2", type: "flash", concept: "import-tax",
      front: "What is VRT?",
      back: "Vehicle Registration Tax — an import tax on new or second-hand vehicles brought into Ireland.", src: P(53, "Vehicle Registration Tax") },
    { id: "r3", type: "truefalse", concept: "ownership", visual: "vrc-transfer",
      statement: "In a private sale, the buyer must send the registration certificate in.", answer: false,
      explain: "It's the seller's responsibility.", src: P(53, "Purchasing a second-hand vehicle") },
    { id: "r4", type: "fill", concept: "documents",
      before: "A lost or stolen tax disc is reported on form", after: ".",
      options: ["RF134", "RF105", "RF100", "RF666"], answer: "RF134",
      explain: "Then apply for a duplicate.", src: P(54, "Lost or stolen licence discs") },
    { id: "r5", type: "flash", concept: "online",
      front: "Where's the PIN for taxing a brand-new car online?",
      back: "The last six characters of the chassis number (VIN).", src: P(54, "What is my PIN") },
    { id: "r6", type: "fill", concept: "refunds", visual: "tax-refund",
      before: "For a refund, at least", after: "whole months must be left on the disc.",
      options: ["three", "one", "six", "two"], answer: "three",
      explain: "Surrender the disc immediately.", src: P(54, "Refunds of motor tax") },
    { id: "r7", type: "truefalse", concept: "motor-tax",
      statement: "You can renew motor tax up to one month before it expires.", answer: true,
      explain: "By post or online.", src: P(53, "Renewing your motor tax") },
    { id: "r8", type: "flash", concept: "ownership",
      front: "Selling to a dealer — which form?",
      back: "RF105, completed with the dealer and including the Garage Identity Code.", src: P(53, "Selling your vehicle") },
  ],
};

/* ---------------------------------------------------------------------------
   3. ON THE RECORD — recognition.
   --------------------------------------------------------------------------- */
const records = {
  id: "records",
  kind: "items",
  mode: "matching",
  title: "On the Record",
  blurb: "Spot it, sort it — tax, ownership and refunds",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "ownership",
      prompt: "Which picture shows a private sale of a car?",
      options: ["vrc-transfer", "tax-refund", "driving-docs"], answer: 0,
      names: ["Change of ownership", "Tax refunds", "Windscreen discs"],
      explain: "Both sign the VRC; the seller sends it in.", src: P(53, "Purchasing a second-hand vehicle") },
    { id: "k2", type: "picture", label: "Spot it", concept: "refunds",
      prompt: "Which picture shows when you can claim tax back?",
      options: ["tax-refund", "vrc-transfer"], answer: 0,
      names: ["Tax refunds", "Change of ownership"],
      explain: "With at least three whole months left on the disc.", src: P(54, "Refunds of motor tax") },
    {
      id: "k3", type: "sort", concept: "refunds",
      prompt: "Refund possible?",
      categories: [
        { id: "yes", label: "Refund" },
        { id: "no", label: "No refund" },
      ],
      cards: [
        { text: "Car stolen and not recovered", cat: "yes" },
        { text: "Owner away studying abroad", cat: "yes" },
        { text: "Car scrapped, with a destruction certificate", cat: "yes" },
        { text: "Only one month left on the disc", cat: "no" },
        { text: "Car used every day", cat: "no" },
      ],
      explain: "At least three unexpired whole months must be left.", src: P(54, "Refunds of motor tax") },
    {
      id: "k4", type: "sort", concept: "ownership",
      prompt: "Who does it?",
      categories: [
        { id: "seller", label: "Seller" },
        { id: "both", label: "Both" },
      ],
      cards: [
        { text: "Sign the change-of-ownership section", cat: "both" },
        { text: "Send the VRC to vehicle registration", cat: "seller" },
        { text: "Send the signed RF105 after selling to a dealer", cat: "seller" },
      ],
      explain: "The seller is responsible for telling vehicle registration.", src: P(53, "Purchasing; Selling") },
    { id: "k5", type: "picture", label: "Spot it", concept: "display",
      prompt: "Which picture shows the discs a car displays?",
      options: ["driving-docs", "tax-refund"], answer: 0,
      names: ["Tax, insurance, NCT", "Tax refunds"],
      explain: "Tax, insurance and NCT discs where appropriate.", src: P(54, "Vehicle certificate display") },
    {
      id: "k6", type: "sort", concept: "import-tax",
      prompt: "VAT or VRT?",
      categories: [
        { id: "vat", label: "VAT" },
        { id: "vrt", label: "VRT" },
      ],
      cards: [
        { text: "Value Added Tax on every new car", cat: "vat" },
        { text: "Vehicle Registration Tax", cat: "vrt" },
        { text: "An import tax on vehicles brought in", cat: "vrt" },
      ],
      explain: "Both must be paid before registration.", src: P(53, "VAT; VRT") },
  ],
};

/* ---------------------------------------------------------------------------
   4. MATCHING
   --------------------------------------------------------------------------- */
const matching = {
  id: "matching",
  kind: "items",
  mode: "matching",
  title: "Match It Up",
  blurb: "Forms and terms",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "documents",
      prompt: "Match the term to its meaning.",
      pairs: [
        ["VRC", "Vehicle Registration Certificate"],
        ["VRT", "Import tax on vehicles"],
        ["RF105", "Selling to a dealer"],
        ["RF134", "Lost or stolen tax disc"],
        ["VIN", "Chassis number"],
      ],
      explain: "The paperwork pupils ask about.", src: P(53, "Purchasing; p.54") },
  ],
};

/* ---------------------------------------------------------------------------
   5. PROCEDURE BUILDER
   --------------------------------------------------------------------------- */
const procedure = {
  id: "procedure",
  kind: "items",
  mode: "procedure",
  title: "Procedure Builder",
  blurb: "Selling and refunds",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "ownership", visual: "vrc-transfer",
      prompt: "Selling your car privately — in order.",
      steps: ["Agree the sale", "Both sign the change-of-ownership section", "The seller sends the VRC to vehicle registration", "Registration is updated to the buyer"],
      explain: "The seller is responsible.", src: P(53, "Purchasing a second-hand vehicle") },
    { id: "p2", type: "order", concept: "refunds", visual: "tax-refund",
      prompt: "Claiming a refund on a scrapped car — in order.",
      steps: ["Scrap it at an authorised ELV facility", "Get the certificate of destruction", "Surrender the tax disc immediately", "Claim the refund"],
      explain: "Refunds usually count from the month after the disc is surrendered.", src: P(54, "Refunds of motor tax") },
  ],
};

/* ---------------------------------------------------------------------------
   6. WHAT WOULD YOU DO?
   --------------------------------------------------------------------------- */
const scenarios = {
  id: "scenarios",
  kind: "items",
  mode: "scenario",
  title: "What Would You Do?",
  blurb: "Questions pupils ask",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "documents",
      scene: "📬 A pupil's new registration document has a spelling mistake in their address.",
      prompt: "What should they do?",
      options: ["Fix it when the tax is due", "Return it to vehicle registration immediately, explaining the error", "Correct it in pen", "Ignore it"], answer: 1,
      explain: "Don't wait until you re-license or sell.", src: P(55, "Retention Q4 (answer d, p.94)") },
    { id: "s2", type: "choice", label: "Scenario", concept: "motor-tax",
      scene: "🚗 A pupil's car tax ran out last week; they only drive it at weekends.",
      prompt: "What's the rule?",
      options: ["14 days' grace", "It must not be kept or used on a public road", "Fine if insured", "Park it off-road only when not driving"], answer: 1,
      explain: "A vehicle on a public road must display a current disc.", src: P(56, "Retention Q16 (answer c, p.94)") },
    { id: "s3", type: "choice", label: "Scenario", concept: "documents",
      scene: "🚨 A pupil's car has been stolen.",
      prompt: "Who should they tell?",
      options: ["Driver registrations", "The gardaí and their insurer", "The gardaí and driver registrations", "The showroom"], answer: 1,
      explain: "And they may later claim a tax refund if it isn't recovered.", src: P(55, "Retention Q8 (answer b, p.94)") },
    { id: "s4", type: "choice", label: "Scenario", concept: "ownership",
      scene: "💸 Your pupil is selling their old car to a neighbour.",
      prompt: "Who must inform the authorities?",
      options: ["The buyer", "The seller", "Both", "The buyer at the next renewal"], answer: 1,
      explain: "The seller sends the signed VRC to vehicle registration.", src: P(56, "Retention Q19 (answer b, p.94)") },
    { id: "s5", type: "choice", label: "Scenario", concept: "documents",
      scene: "🔍 A replacement registration document arrived — then the original turned up.",
      prompt: "What now?",
      options: ["Tell them at the next tax renewal", "Destroy the original", "Destroy the replacement", "Return the original"], answer: 3,
      explain: "Only one valid document should exist.", src: P(55, "Retention Q7 (answer d, p.94)") },
  ],
};

/* ---------------------------------------------------------------------------
   7. SITUATION → DECISION
   --------------------------------------------------------------------------- */
const walkthrough = {
  id: "walkthrough",
  kind: "items",
  mode: "walkthrough",
  title: "Situation → Decision",
  blurb: "A pupil's first car",
  xpPer: 10,
  situation: "🚙 A pupil buys their first car, a used hatchback, and wants to get it on the road.",
  items: [
    { id: "w1", type: "choice", step: "The paperwork", concept: "ownership", prompt: "The registration document names…",
      options: ["The user", "The registered owner", "The co-owner", "Whoever is insured"], answer: 1,
      explain: "It doesn't necessarily prove legal ownership.", src: P(55, "Retention Q2 (answer b, p.94)") },
    { id: "w2", type: "choice", step: "Taxing it", concept: "online", prompt: "Taxing online, the PIN for a car taxed before is…",
      options: ["Their PPSN", "The last six digits of the VRC number", "The chassis number", "Their phone number"], answer: 1,
      explain: "New or imported cars use the last six characters of the VIN.", src: P(54, "What is my PIN") },
    { id: "w3", type: "choice", step: "The disc", concept: "motor-tax", prompt: "The tax disc is…",
      options: ["Compulsory for all vehicles using public roads", "Just a receipt", "Needed for insurance", "Only for full licence holders"], answer: 0,
      explain: "Display it on the windscreen.", src: P(55, "Retention Q9 (answer a, p.94)") },
    { id: "w4", type: "choice", step: "A move", concept: "documents", prompt: "Six months later they move house. They…",
      options: ["Needn't tell anyone", "Need not — post follows them", "Report it at the next tax", "Must inform the licensing authority"], answer: 3,
      explain: "Keep the registration details correct.", src: P(55, "Retention Q6 (answer d, p.94)") },
    { id: "w5", type: "choice", step: "A year abroad", concept: "refunds", prompt: "They'll study abroad for a year with 8 months' tax left.",
      options: ["No refund possible", "Surrender the disc and claim a refund", "Lend the disc to a friend", "Keep driving it"], answer: 1,
      explain: "Absence abroad for education qualifies.", src: P(54, "Refunds of motor tax") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 94. Q18 and Q24 are omitted (see
   header).
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(n <= 12 ? 55 : 56, `Retention test Q${n}; answer p.94`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "Information about registering and licensing a new or second-hand vehicle is held by", ["driver licensing at the motor tax office", "VRT at the motor tax office", "the VAT office", "vehicle registrations at the motor tax office"], 3, "ownership"),
    R(2, "A vehicle registration document gives the name of the person who", ["uses the vehicle", "is the registered owner", "co-owns it", "is insured on it"], 1, "ownership"),
    R(3, "To get a duplicate of a lost or stolen tax disc, apply on", ["form 166", "form 187", "form 666", "form ref 134"], 3, "documents"),
    R(4, "Your new registration document has incorrect details. You should", ["report it when tax is next due", "wait until you re-license", "send it back when you sell", "return it immediately, explaining what's wrong"], 3, "documents"),
    R(5, "The registration document of a vehicle", ["proves legal ownership", "shows the seller is the owner", "doesn't necessarily prove legal ownership", "proves who the previous owner was"], 2, "ownership"),
    R(6, "If the registered owner changes their name or address they", ["needn't notify immediately", "needn't — post will follow", "report it when tax is next due", "must inform the licensing authority"], 3, "documents"),
    R(7, "After a replacement registration document is issued, you find the original. You should", ["tell them at the next tax", "destroy the original", "destroy the replacement", "return the original"], 3, "documents"),
    R(8, "If your vehicle is stolen, you should", ["notify driver registrations", "notify the gardaí and your insurer", "notify the gardaí and driver registrations", "notify the showroom"], 1, "documents"),
    R(9, "A vehicle licence (tax disc) is", ["compulsory for all vehicles using public roads", "just a receipt", "essential for insurance", "only for full licence holders"], 0, "motor-tax"),
    R(10, "The tax disc should", ["be kept with your licence", "be displayed on the left-hand side of the windscreen", "be kept in a self-adhesive holder", "be kept safe out of the car"], 1, "display"),
    R(11, "Vehicle licences (tax discs) may", ["not be transferred from one vehicle to another", "be transferred between vehicles", "be transferred between vehicles with the same owner", "be transferred between vehicles with the same keeper"], 0, "motor-tax"),
    R(12, "When renewing your vehicle licence you must produce", ["your driving licence", "the previous vehicle licence", "a utility bill", "an insurance certificate and NCT certificate if applicable"], 3, "motor-tax"),
    R(13, "An owner scrapping or dismantling a vehicle must", ["take a photo", "destroy everything and tell the gardaí", "destroy the certificate and tell the tax office", "— as last registered owner — surrender the tax certificate to the tax office"], 3, "documents"),
    R(14, "A disused vehicle left on a public road", ["must have a current tax disc displayed", "needn't have a disc", "won't be prosecuted", "won't usually be towed"], 0, "motor-tax"),
    R(15, "Which is an offence relating to vehicle licensing?", ["no disc on a car kept off the road", "keeping a vehicle on the road without a current licence", "driving untaxed to a pre-arranged NCT", "displaying a licence"], 1, "motor-tax"),
    R(16, "If your vehicle tax has expired, you", ["may drive 14 days first", "may keep it on the road if insured", "must not keep or use it on a public road", "can avoid paying by parking off-road when not driving"], 2, "motor-tax"),
    R(17, "For a motor tax refund, the minimum time remaining after surrender is", ["no refunds", "6 months", "3 months", "1 month"], 2, "refunds", "tax-refund"),
    R(19, "If you sell your car privately, who is responsible for informing the authorities?", ["the buyer", "the seller", "both", "the buyer at renewal"], 1, "ownership", "vrc-transfer"),
    R(20, "A driver stopped with an expired tax disc on a public road may", ["make an excuse", "be prosecuted", "have 3 months' grace", "say they forgot"], 1, "motor-tax"),
    R(21, "To change your surname on a vehicle registration after marriage or deed poll, you may", ["apply for a new licence", "tick the box on the back of the VRC and return it with the correct details", "not bother", "change it yourself"], 1, "documents"),
    R(22, "Exemption from VRT may be available for vehicles used by or for a disabled person if", ["they receive disability allowance and apply", "they receive no allowance", "they receive a widow's pension", "they buy a second-hand disability vehicle"], 0, "import-tax"),
    R(23, "Your vehicle needs an NCT certificate but you don't get one. This could mean you", ["can't tax your car", "can't renew the VRC", "can't renew your licence", "can't change insurer"], 0, "motor-tax"),
  ],
};

/* ---------------------------------------------------------------------------
   9. UNIT CHALLENGE
   --------------------------------------------------------------------------- */
const challenge = {
  id: "challenge",
  kind: "items",
  mode: "challenge",
  title: "Unit Challenge",
  blurb: "Ten mixed challenges across four skills",
  xpPer: 10,
  xpBonus: 50,
  items: [
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "import-tax",
      prompt: "Until VAT and VRT are paid, a vehicle…", options: ["Can be driven 30 days", "Can't be registered", "Can be taxed", "Needs no insurance"], answer: 1,
      explain: "Certificates must be produced to the licensing authority.", src: P(53, "VAT; VRT") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "ownership",
      prompt: "Which picture shows who sends the VRC after a private sale?", options: ["vrc-transfer", "tax-refund"], answer: 0,
      names: ["Change of ownership", "Refunds"],
      explain: "The seller.", src: P(53, "Purchasing a second-hand vehicle") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "documents",
      statement: "Replacement vehicle documents need a form witnessed by a garda.", answer: true,
      explain: "At a garda station, with the fees.", src: P(54, "Replacing a lost tax disc or certificate") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "refunds",
      scene: "🤕 A pupil's dad broke his leg and won't drive for 6 months; 9 months' tax is left.",
      prompt: "Can he claim a refund?", options: ["No", "Yes — illness or injury qualifies; surrender the disc", "Only if scrapped", "Only half"], answer: 1,
      explain: "At least three whole months must be left.", src: P(54, "Refunds of motor tax") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "documents",
      prompt: "Match the form.", pairs: [["RF105", "Selling to a dealer"], ["RF134", "Lost tax disc"], ["VRC", "Registration certificate"]],
      explain: "Forms pupils may ask about.", src: P(53, "Selling; p.54") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "ownership",
      prompt: "Private sale:", steps: ["Agree the sale", "Both sign the VRC", "Seller sends it in"],
      explain: "The seller is responsible.", src: P(53, "Purchasing a second-hand vehicle") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "motor-tax",
      scene: "🏠 A car sits untaxed on the street outside a house; it isn't being driven.",
      prompt: "Is that allowed?", options: ["Yes, if not driven", "No — parked on a public road it must display a current disc", "Only for a month", "Only with insurance"], answer: 1,
      explain: "It may be towed and the owner fined.", src: P(53, "Vehicle licensing") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "motor-tax",
      prompt: "Tax discs may…", options: ["Not be transferred between vehicles", "Be transferred freely", "Move between cars with the same owner", "Move between cars with the same keeper"], answer: 0,
      explain: "Specific to the vehicle's index number.", src: P(55, "Retention Q11 (answer a, p.94)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "refunds",
      prompt: "A pupil asks if they can get tax back while working abroad. Which picture answers?", options: ["tax-refund", "driving-docs"], answer: 0,
      names: ["Tax refunds", "Windscreen discs"],
      explain: "Absence abroad for business or study qualifies.", src: P(54, "Refunds of motor tax") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "refunds",
      prompt: "For a refund, the minimum time left on the disc is…", options: ["None", "6 months", "3 months", "1 month"], answer: 2,
      explain: "Three unexpired whole calendar months.", src: P(56, "Retention Q17 (answer c, p.94)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "3.6",
  number: "3.6",
  title: "Vehicle Registration & Licensing",
  pages: [53, 56],
  intro: "Motor tax, VAT and VRT, buying and selling, taxing online, lost discs, displaying discs and refunds.",
  objectives: [
    "Advice to clients on vehicle registration and the law",
    "The registered owner of a vehicle",
  ],
  objectivesSrc: P(53, "Objectives"),
  mcqLink: { sectionId: "adi.sec.procedure", label: "Driving Test Procedure & Documentation" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...records, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "on-the-record", icon: "📋", label: "On the Record", rule: { activity: "records", min: 100 } },
    { id: "registration-specialist", icon: "🏆", label: "Registration Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
