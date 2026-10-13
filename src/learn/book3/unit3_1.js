/*
  ===========================================================================
  BOOK 3 · UNIT 3.1 — THE DRIVER AND THE DRIVING INSTRUCTOR

  Source: "Theory Resource Workbook 3 of 4" (Driver Education Supplies),
  book pages 5–10, with the post-test model answers on page 88 and the
  retention-test answers on page 93 (1c 2a 3d 4a 5c 6b 7b 8b 9b 10d 11a
  12c 13a 14a 15d 16c 17c 18a 19a 20b).

  Omitted retention question (answer key unsafe):
  - Q5 (the "hallmark of a good driver", keyed "anticipation"): not in
    the unit, which lists anticipation alongside responsibility,
    concentration and others; "sound judgement" is as defensible.

  Several kept questions quote other books (Driving Essential Skills, the
  Rules of the Road) but have only one sensible option (Q4, Q10–Q15, Q17).
  ===========================================================================
*/

const P = (page, ref) => ({ book: 3, unit: "3.1", page, ref });

/* ---------------------------------------------------------------------------
   CONCEPTS
   --------------------------------------------------------------------------- */
export const CONCEPTS = {
  "role": {
    title: "The instructor's role",
    text: "To give both theoretical and practical tuition: practical from 17, theory from 16. You teach self-preservation, the Rules of the Road and the law, sharing the road, basic mechanics and the controls, and pre-start checks. You plan each lesson, say what should be learned, monitor progress and answer questions. No two learners are the same — some start slowly and progress steadily, others fly then plateau; both generally meet at the end.",
    src: P(5, "Unit introduction"),
  },
  "good-driver": {
    title: "The good driver",
    text: "Responsibility, concentration, anticipation, patience, confidence, communication and awareness — together with experience and skill, these make up a driver's attitude. Attitude develops from the very first lesson and improves with constant attention to concentration, patience, courtesy and responsibility, taking pride in your driving and accepting there's always more to learn.",
    src: P(5, "The good driver; p.88 answers 1–3"),
  },
  "responsibility": {
    title: "Responsibility and concentration",
    text: "You owe responsibility to yourself, your passengers and all other road users — especially the vulnerable: children, the elderly, people with disabilities, cyclists, motorcyclists and people with animals. Concentration is helped by good vision, hearing and health, self-discipline and leaving your problems out of the car. Avoid driving — or allow more time to react — when tired, unwell, upset, annoyed or stressed.",
    src: P(88, "Post-test answers 4–6"),
  },
  "patience": {
    title: "Patience and anticipation",
    text: "Do: keep calm, show restraint, use sound judgement. Don't: drive in a spirit of retaliation or competition, use aggressive language or gestures, or try to teach someone a lesson. If another driver inconveniences you, turn the other cheek — set a good example. Anticipation means planning well ahead and acting promptly to the changes around you, questioning what others will do. Confidence comes from skill, judgement and experience.",
    src: P(88, "Post-test answers 7–10"),
  },
  "mechanics": {
    title: "Mechanical knowledge",
    text: "Detailed mechanical knowledge isn't needed to be a good driver, but a better-than-reasonable understanding of how the car and controls work builds vehicle sympathy. Include it in lessons — technical checks are asked before the test.",
    src: P(5, "Mechanical knowledge"),
  },
  "professional": {
    title: "Why professional training",
    text: "Not every good driver is a good teacher: leading a new driver into a situation they can't cope with can ruin their confidence. Unprofessional training is what ruins the confidence of new drivers and instructors. Learners should get regular, planned, professional tuition with plenty of practice, from an instructor on the Register of Approved Driving Instructors kept by the RSA. To give tuition for reward you must be a qualified ADI.",
    src: P(5, "Why take professional training; p.88 answers 11–14, 19"),
  },
  "adi-role": {
    title: "The ADI's responsibilities",
    text: "Today's instructor works in 'adult education' — new drivers rarely have no idea of a car. Teach from the known, using light probe questions. Make each lesson enjoyable, with a positive, confident (not overpowering) attitude. The job needs people skills, patience and understanding, often at unsociable hours, and a high level of concentration — you're responsible for your own safety, your pupil's and other road users'.",
    src: P(6, "Role of the driving instructor; ADI responsibilities; Being an ADI is not easy"),
  },
  "choosing": {
    title: "Choosing an instructor",
    text: "Most new pupils choose on recommendation, so referrals are the life blood of the business. Learners should look for an instructor with qualifications and a good reputation, who is knowledgeable, approachable, adaptable, reliable and punctual, has a car suited to the learner, is examined and monitored, and follows the official teaching syllabus.",
    src: P(6, "A driving instructor; p.88 answer 15"),
  },
  "lesson": {
    title: "The planned lesson",
    text: "Train every pupil to RSA standards with a planned approach, pitched at their level — a beginning, a middle and an end. Recap the last lesson (or find out a new pupil's background). Set behavioural objectives, so progress shows as an observed change in skill. Brief — step by step early on, less as skill grows. Demonstrate or 'talk through' complex tasks. Practise, giving positive feedback. Praise — share the blame, give the credit. Recap at the end with questions: it's the message received that counts. Then link to the next lesson.",
    src: P(6, "The driving lesson; Recap; Objectives; p.7"),
  },
  "instructor-qualities": {
    title: "The good instructor",
    text: "The same qualities as the good driver, tailored to teaching: responsibility for pupils' future safety; concentration on their reactions; anticipation of their actions and needs; patience to keep their confidence; confidence to set an example. Show the right attitudes — pupils follow your example. Be firm and fair but sensitive, firm at times for safety, legal responsibility and teaching. Above all, communicate. Keep up to date and adapt.",
    src: P(88, "Post-test answers 16–18, 20"),
  },
  "aids": {
    title: "Teaching aids",
    text: "About three quarters of a pupil's knowledge comes from visual stimuli, so visual teaching aids are strongly recommended. They shorten explanations, improve interest and attention, and add a professional image — and points are awarded for using one in the ADI exam. Vary delivery to suit each pupil's ability, aptitude and attitude.",
    src: P(7, "Teaching aids; ADI trainers and trainees"),
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
    "Qualities + experience + skill = attitude",
    "Every lesson: a beginning, a middle and an end",
    "Share the blame, give the credit",
  ],
  cards: [
    {
      icon: "🎓",
      kicker: "The instructor's role",
      title: "Theory and practice",
      visual: "learning-curves",
      list: [
        "Practical lessons from 17; theory from 16",
        "Self-preservation, the Rules of the Road, the law, sharing the road",
        "Basic mechanics, the controls, pre-start checks",
        "Plan each lesson, monitor progress, answer questions",
      ],
      callout: "No two learners are the same — slow starters and fast starters generally meet at the end.",
      concept: "role",
      src: P(5, "Unit introduction"),
    },
    {
      icon: "🧭",
      kicker: "The good driver",
      title: "Qualities make the attitude",
      visual: "driver-qualities",
      ask: {
        prompt: "When do you begin to develop a driver's attitude?",
        options: ["After the test", "From the first lesson", "Once they can control the car"],
        answer: 1,
      },
      list: [
        "Responsibility, concentration, anticipation, patience",
        "Confidence, communication, awareness",
        "Plus experience and skill = attitude",
        "Improve it with constant effort — and accept there's always more to learn",
      ],
      concept: "good-driver",
      src: P(5, "The good driver; p.88 answers 1–3"),
    },
    {
      icon: "🛡️",
      kicker: "Responsibility",
      title: "To everyone on the road",
      list: [
        "Yourself, passengers and all other road users",
        "Especially children, the elderly, disabled people, cyclists, motorcyclists, animals",
        "Concentration: good vision, hearing, health, self-discipline",
        "Leave your problems out of the car",
        "Tired, unwell, upset or stressed? Don't drive — or allow more time",
      ],
      concept: "responsibility",
      src: P(88, "Post-test answers 4–6"),
    },
    {
      icon: "😌",
      kicker: "Patience",
      title: "Turn the other cheek",
      ask: {
        prompt: "Another driver cuts you up. You…",
        options: ["Teach them a lesson", "Set a good example and let it go", "Sound the horn and flash"],
        answer: 1,
      },
      sections: [
        { head: "Do", list: ["Keep calm", "Show restraint", "Use sound judgement"] },
        { head: "Don't", list: ["Retaliate or compete", "Use aggressive language or gestures", "Try to teach someone a lesson"] },
      ],
      callout: "Anticipation: plan well ahead, act promptly, question what others will do.",
      concept: "patience",
      src: P(88, "Post-test answers 7–10"),
    },
    {
      icon: "🏫",
      kicker: "Professional training",
      title: "Good drivers aren't always good teachers",
      list: [
        "Leading a learner into what they can't cope with ruins confidence",
        "Best: regular, planned, professional tuition — and plenty of practice",
        "Choose an instructor on the RSA's Register of Approved Driving Instructors",
        "To teach for reward you must be a qualified ADI",
      ],
      concept: "professional",
      src: P(5, "Why take professional training; p.88 answers 11–14"),
    },
    {
      icon: "🧑‍🏫",
      kicker: "The ADI's role",
      title: "Adult education",
      list: [
        "New drivers rarely know nothing — teach from the known",
        "Find out what they know with light probe questions",
        "Make it enjoyable; be positive and confident, not overpowering",
        "People skills, patience, understanding — and high concentration all day",
      ],
      concept: "adi-role",
      src: P(6, "Role of the driving instructor; ADI responsibilities"),
    },
    {
      icon: "⭐",
      kicker: "Choosing an instructor",
      title: "Reputation is everything",
      list: [
        "Most pupils come from recommendations — the life blood of the business",
        "Qualified, knowledgeable, approachable, adaptable",
        "Good reputation, reliable and punctual",
        "A car suited to the learner; follows the official syllabus",
      ],
      concept: "choosing",
      src: P(6, "A driving instructor; p.88 answer 15"),
    },
    {
      icon: "🗂️",
      kicker: "The lesson plan",
      title: "Beginning, middle, end",
      visual: "lesson-plan",
      list: [
        "Recap — or find out a new pupil's background",
        "Objectives — what they'll be able to do by the end",
        "Briefing — step by step at first, less as they progress",
        "Demonstration or a 'talk through'",
        "Practice, with positive feedback",
      ],
      concept: "lesson",
      src: P(6, "The driving lesson; p.7"),
    },
    {
      icon: "👏",
      kicker: "Finishing well",
      title: "Praise, recap, link",
      list: [
        "Praise: share the blame, give the credit",
        "Recap the main points; ask questions",
        "It's the message received that counts, not the one delivered",
        "Link to the next lesson",
      ],
      concept: "lesson",
      src: P(7, "Give praise; Recap at end; Finally"),
    },
    {
      icon: "🤝",
      kicker: "The good instructor",
      title: "The same qualities — aimed at the pupil",
      visual: "instructor-qualities",
      list: [
        "Pupils follow your example — show the right attitudes",
        "Firm and fair, but sensitive to the pupil's needs",
        "Firm at times — for safety, legal responsibility and teaching",
        "Above all: communicate",
      ],
      concept: "instructor-qualities",
      src: P(88, "Post-test answers 16–18, 20"),
    },
    {
      icon: "🖼️",
      kicker: "Teaching aids",
      title: "Three quarters is visual",
      visual: "teaching-aids",
      list: [
        "About ¾ of knowledge comes from what pupils see",
        "Visual aids shorten explanations and keep interest",
        "They add a professional image",
        "Points are awarded for using one in the ADI exam",
      ],
      concept: "aids",
      src: P(7, "Teaching aids; ADI trainers and trainees"),
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
    { id: "r1", type: "flash", concept: "good-driver", visual: "driver-qualities",
      front: "The qualities of a good driver that make up attitude?",
      back: "Responsibility for others' safety, concentration, anticipation, patience and confidence.", src: P(88, "Post-test answer 1") },
    { id: "r2", type: "flash", concept: "good-driver",
      front: "How can a driver's attitude be improved?",
      back: "Constant attention to concentration, patience, courtesy and responsibility; pride in your driving; accepting there's always more to learn.", src: P(88, "Post-test answer 2") },
    { id: "r3", type: "fill", concept: "responsibility",
      before: "Concentration is helped by good vision, hearing and health, self-discipline, and", after: ".",
      options: ["leaving your problems out of the car", "loud music", "a strong coffee", "driving faster"], answer: "leaving your problems out of the car",
      explain: "Self-discipline and a clear head.", src: P(88, "Post-test answer 5") },
    { id: "r4", type: "flash", concept: "patience",
      front: "What, in driving terms, is anticipation?",
      back: "Planning well ahead and acting promptly to changes around you — continually questioning what others will do.", src: P(88, "Post-test answer 9") },
    { id: "r5", type: "flash", concept: "patience",
      front: "Which skills are closely related to confidence?",
      back: "Skill, judgement and experience.", src: P(88, "Post-test answer 10") },
    { id: "r6", type: "truefalse", concept: "professional",
      statement: "All good drivers make good instructors.", answer: false,
      explain: "They could lead pupils into situations they're not ready for.", src: P(88, "Post-test answer 11") },
    { id: "r7", type: "flash", concept: "professional",
      front: "Where must a person giving car lessons for reward be registered?",
      back: "On the Register of Approved Driving Instructors kept by the Road Safety Authority.", src: P(88, "Post-test answer 14") },
    { id: "r8", type: "fill", concept: "lesson", visual: "lesson-plan",
      before: "The best method for lesson planning is to set", after: "objectives.",
      options: ["behavioural", "long-term", "written", "optional"], answer: "behavioural",
      explain: "They let you measure progress by an observed change in skill.", src: P(6, "The driving lesson") },
    { id: "r9", type: "flash", concept: "lesson",
      front: "Giving praise — the instructor's motto?",
      back: "Share the blame and give the credit.", src: P(7, "Give praise and encouragement") },
    { id: "r10", type: "fill", concept: "aids", visual: "teaching-aids",
      before: "About", after: "of a pupil's knowledge is gained from visual stimuli.",
      options: ["three quarters", "half", "a quarter", "a tenth"], answer: "three quarters",
      explain: "So visual teaching aids are very much recommended.", src: P(7, "Teaching aids") },
    { id: "r11", type: "flash", concept: "instructor-qualities",
      front: "What must an instructor be able to do, above all, to be proficient?",
      back: "Communicate!", src: P(88, "Post-test answer 20") },
  ],
};

/* ---------------------------------------------------------------------------
   3. THE GOOD INSTRUCTOR — recognition.
   --------------------------------------------------------------------------- */
const qualities = {
  id: "qualities",
  kind: "items",
  mode: "matching",
  title: "Good Driver, Good Teacher",
  blurb: "Spot it, sort it — qualities and lesson stages",
  xp: 25,
  items: [
    { id: "k1", type: "picture", label: "Spot it", concept: "lesson",
      prompt: "Which picture shows a planned lesson?",
      options: ["lesson-plan", "driver-qualities", "learning-curves"], answer: 0,
      names: ["Lesson plan", "Driver qualities", "Learning curves"],
      explain: "Recap, objectives, briefing, demonstration, practice, praise, recap, link.", src: P(6, "The driving lesson") },
    { id: "k2", type: "picture", label: "Spot it", concept: "role",
      prompt: "Which picture shows that pupils progress at different rates?",
      options: ["learning-curves", "teaching-aids"], answer: 0,
      names: ["Learning curves", "Teaching aids"],
      explain: "Some start slowly, some fly then plateau — both generally meet at the end.", src: P(5, "Unit introduction") },
    {
      id: "k3", type: "sort", concept: "patience",
      prompt: "The patient driver — do or don't?",
      categories: [
        { id: "do", label: "Do" },
        { id: "dont", label: "Don't" },
      ],
      cards: [
        { text: "Keep calm", cat: "do" },
        { text: "Show restraint", cat: "do" },
        { text: "Set a good example", cat: "do" },
        { text: "Drive in a spirit of competition", cat: "dont" },
        { text: "Teach someone a lesson", cat: "dont" },
        { text: "Use aggressive gestures", cat: "dont" },
      ],
      explain: "Turn the other cheek.", src: P(88, "Post-test answers 7, 8") },
    {
      id: "k4", type: "sort", concept: "lesson",
      prompt: "Beginning, middle or end of the lesson?",
      categories: [
        { id: "begin", label: "Beginning" },
        { id: "middle", label: "Middle" },
        { id: "end", label: "End" },
      ],
      cards: [
        { text: "Recap the last lesson", cat: "begin" },
        { text: "Set objectives", cat: "begin" },
        { text: "Demonstration", cat: "middle" },
        { text: "Practice", cat: "middle" },
        { text: "Summarise and ask questions", cat: "end" },
        { text: "Link to the next lesson", cat: "end" },
      ],
      explain: "A planned approach: every lesson has a beginning, middle and end.", src: P(6, "The driving lesson; p.7") },
    { id: "k5", type: "picture", label: "Spot it", concept: "instructor-qualities",
      prompt: "Which picture compares the good driver's qualities with the good instructor's?",
      options: ["instructor-qualities", "driver-qualities"], answer: 0,
      names: ["Driver v instructor", "Driver qualities"],
      explain: "The same qualities, tailored to the instructional situation.", src: P(88, "Post-test answer 17") },
    { id: "k6", type: "picture", label: "Spot it", concept: "aids",
      prompt: "Which picture explains why visual aids help?",
      options: ["teaching-aids", "lesson-plan"], answer: 0,
      names: ["Teaching aids", "Lesson plan"],
      explain: "Three quarters of knowledge comes from what pupils see.", src: P(7, "Teaching aids") },
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
  blurb: "Qualities and lesson stages",
  xp: 20,
  items: [
    {
      id: "m1", type: "match", concept: "instructor-qualities", visual: "instructor-qualities",
      prompt: "Match the quality to how an instructor applies it.",
      pairs: [
        ["Responsibility", "For pupils' future safety"],
        ["Concentration", "On the pupil's reactions"],
        ["Anticipation", "Of the pupil's actions and needs"],
        ["Patience", "To keep the pupil's confidence"],
        ["Confidence", "To set an example"],
      ],
      explain: "The same qualities, aimed at the pupil.", src: P(88, "Post-test answer 17") },
    {
      id: "m2", type: "match", concept: "lesson", visual: "lesson-plan",
      prompt: "Match the lesson stage to its purpose.",
      pairs: [
        ["Recap", "What was achieved last time"],
        ["Objectives", "What the pupil will be able to do"],
        ["Briefing", "How to achieve the objectives"],
        ["Recap at end", "Check the message was received"],
      ],
      explain: "Both ADI and pupil know what's to be learned and can measure progress.", src: P(6, "Recap; Objectives; p.7") },
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
  blurb: "Build a lesson",
  xp: 30,
  items: [
    { id: "p1", type: "order", concept: "lesson", visual: "lesson-plan",
      prompt: "A planned lesson — in order.",
      steps: ["Recap", "Set objectives", "Briefing", "Demonstration", "Practice", "Praise and encouragement", "Recap at the end", "Link to the next lesson"],
      explain: "A beginning, a middle and an end.", src: P(6, "The driving lesson; p.7") },
    { id: "p2", type: "order", concept: "lesson",
      prompt: "How briefing changes as a pupil improves — in order.",
      steps: ["Full step-by-step briefing", "Less verbal explanation", "Question-and-answer to brush up", "Apply knowledge to a new scenario"],
      explain: "Reduce the explanation as skill and knowledge grow.", src: P(7, "Briefing") },
    { id: "p3", type: "order", concept: "lesson",
      prompt: "Teaching a complex task like the turnabout — in order.",
      steps: ["Brief the pupil", "Demonstrate, or talk them through it", "Pupil practises", "Pupil does it unaided"],
      explain: "Retention matters — you won't be there on test day.", src: P(7, "Demonstration") },
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
  blurb: "Real situations as an instructor",
  xpPer: 20,
  items: [
    { id: "s1", type: "choice", label: "Scenario", concept: "lesson",
      scene: "🆕 A new pupil books their first lesson.",
      prompt: "What do you do first?",
      options: ["Start with the hardest manoeuvre", "Find out their background and experience", "Drive them around to show how it's done", "Give them the Rules of the Road to read"], answer: 1,
      explain: "Then decide the level at which instruction should start — teach from the known.", src: P(6, "Recap; ADI responsibilities") },
    { id: "s2", type: "choice", label: "Scenario", concept: "lesson",
      scene: "📉 Your pupil's turnabout went badly, though some parts were fine.",
      prompt: "How do you give feedback?",
      options: ["List every fault", "Praise what went well — share the blame, give the credit", "Say nothing", "Take over the driving"], answer: 1,
      explain: "Reassure them; positive feedback encourages progress.", src: P(7, "Give praise and encouragement") },
    { id: "s3", type: "choice", label: "Scenario", concept: "professional",
      scene: "🧑‍🤝‍🧑 A friend who drives well offers to 'teach' your pupil the roundabouts on a busy road.",
      prompt: "What's the risk?",
      options: ["None — good drivers teach well", "Leading a learner into what they can't cope with can ruin their confidence", "It's quicker", "It saves the pupil money"], answer: 1,
      explain: "Not all good drivers are good teachers.", src: P(5, "Why take professional training; p.88 answer 11") },
    { id: "s4", type: "choice", label: "Scenario", concept: "responsibility",
      scene: "😫 You had very little sleep, and have a full day of lessons.",
      prompt: "What's the responsible approach?",
      options: ["Carry on as normal", "Recognise tiredness affects concentration — avoid driving or allow more time to react", "Drink coffee and push on", "Let pupils drive faster to finish early"], answer: 1,
      explain: "You're responsible for your safety, your pupil's and others'.", src: P(88, "Post-test answer 6; p.6") },
    { id: "s5", type: "choice", label: "Scenario", concept: "instructor-qualities",
      scene: "⚠️ Your pupil keeps cutting corners at junctions despite reminders.",
      prompt: "When is a firm approach right?",
      options: ["Never", "For safety, legal responsibility and teaching — to correct a fault", "Only on the last lesson", "Whenever you're annoyed"], answer: 1,
      explain: "Firm and fair, but sensitive to the pupil's needs.", src: P(88, "Post-test answer 18") },
    { id: "s6", type: "choice", label: "Scenario", concept: "lesson",
      scene: "💬 At the end of a lesson your pupil nods at everything you say.",
      prompt: "How do you check they've learned it?",
      options: ["Assume they have", "Summarise and ask questions", "Give a written test", "Move on"], answer: 1,
      explain: "It's the message received, not the message delivered, that counts.", src: P(7, "Recap at end") },
    { id: "s7", type: "choice", label: "Scenario", concept: "patience",
      scene: "🚗 A driver tailgates and flashes your dual-control car during a lesson.",
      prompt: "What example do you set?",
      options: ["Brake-check them", "Stay calm, let it go and carry on safely", "Gesture back", "Speed up"], answer: 1,
      explain: "Your pupil follows your example.", src: P(88, "Post-test answers 8, 16") },
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
  blurb: "Planning a pupil's lesson",
  xpPer: 10,
  situation: "📝 You're planning lesson 5 for a pupil who struggled with hill starts last time.",
  items: [
    { id: "w1", type: "choice", step: "Start", concept: "lesson", prompt: "Begin the lesson by…",
      options: ["Going straight to a steep hill", "Recapping what was achieved last time", "A theory quiz", "A long drive"], answer: 1,
      explain: "Always remind the pupil what was achieved.", src: P(6, "Recap") },
    { id: "w2", type: "choice", step: "Objectives", concept: "lesson", prompt: "Your objective should be…",
      options: ["'Get better at hills'", "'By the end, you'll move off on a hill without rolling back'", "'Drive for an hour'", "None needed"], answer: 1,
      explain: "A behavioural objective — progress you can observe.", src: P(6, "The driving lesson; Objectives") },
    { id: "w3", type: "choice", step: "Syllabus", concept: "lesson", prompt: "Should you follow the syllabus page by page regardless?",
      options: ["Yes", "No — tailor each unit of learning to the pupil's needs", "Only the Rules of the Road", "Teach to the test only"], answer: 1,
      explain: "ADIs tailor each unit of learning.", src: P(10, "Retention Q19 (answer a, p.93)") },
    { id: "w4", type: "choice", step: "Practice", concept: "lesson", prompt: "The pupil rolls back on the first try.",
      options: ["Stop the lesson", "Expect it — practise, add knowledge as control improves, give positive feedback", "Take over", "Change topic"], answer: 1,
      explain: "It's unlikely they'll get it right first time.", src: P(7, "Practice makes perfect") },
    { id: "w5", type: "choice", step: "Aids", concept: "aids", prompt: "To explain the biting point, you…",
      options: ["Talk for ten minutes", "Use a visual teaching aid", "Skip it", "Let them work it out"], answer: 1,
      explain: "Visual aids shorten the explanation.", src: P(7, "Teaching aids") },
    { id: "w6", type: "choice", step: "Finish", concept: "lesson", prompt: "To end the lesson…",
      options: ["Drop them home", "Recap, ask questions and link to next week's topic", "Book the test", "Point out every fault"], answer: 1,
      explain: "Prepare the pupil for the next task.", src: P(7, "Recap at end; Finally") },
  ],
};

/* ---------------------------------------------------------------------------
   8. RETENTION CHECK — answers from page 93. Q5 is omitted (see header).
   --------------------------------------------------------------------------- */
const R = (n, prompt, options, answer, concept, visual) => ({
  id: `ret${n}`, type: "choice", label: "Retention check", concept, visual,
  prompt, options, answer, src: P(n <= 10 ? 9 : 10, `Retention test Q${n}; answer p.93`),
});

const retention = {
  id: "retention",
  kind: "items",
  mode: "retention",
  title: "Retention Check",
  blurb: "Does it stick? Recall what you learned",
  xpPer: 10,
  items: [
    R(1, "The qualities of the good driver which make up a driver's attitude are", ["experience, skill and judgement", "concentration, anticipation, patience, courtesy", "responsibility, concentration, anticipation, patience and confidence", "control, enthusiasm, power and skill"], 2, "good-driver", "driver-qualities"),
    R(2, "It is a fact that nearly all road accidents are caused, to a larger degree, by", ["the driver", "the vehicle", "the road", "the weather"], 0, "responsibility"),
    R(3, "The responsibility for safe driving rests ultimately with", ["the Road Safety Authority", "driving testers", "the Gardaí", "the driver"], 3, "responsibility"),
    R(4, "According to 'Driving Essential Skills', driver errors frequently lead to", ["accidents", "poor concentration", "lack of anticipation", "learning"], 0, "responsibility"),
    R(6, "If annoyed by another driver's bad manners or driving incompetence, you should", ["teach them a lesson", "do nothing, other than set a good example", "sound the horn", "give an appropriate hand signal"], 1, "patience"),
    R(7, "Regarding other road users, good habits can only improve road safety. The best description of good driver behaviour is", ["relax, dominate and react", "don't dominate and relax", "don't react", "only react if another driver is inconsiderate"], 1, "patience"),
    R(8, "When going on a long journey, the good driver will", ["take the shortest possible route", "take time and plan the journey", "use road maps whilst driving", "plan to take as few rest stops as possible"], 1, "patience"),
    R(9, "The driver of a car carrying animals is advised", ["to let them loose on the road at intervals", "not to allow them to be loose in the vehicle", "to tie them up in the car", "to keep pet treats available"], 1, "responsibility"),
    R(10, "According to 'Driving Essential Skills', drivers are advised to wear sensible clothes for comfort when driving and", ["high heels are suitable for drivers with short legs", "slippery soles are more useful on the foot controls", "shoes are not an important part of driving clothing", "keep a pair of driving shoes in the vehicle"], 3, "responsibility"),
    R(11, "If feeling tired whilst driving and there is no convenient place to pull over for a rest, a driver should", ["open a window for fresh air", "turn the radio up loudly to stay awake", "speed up to lessen the risk of falling asleep", "turn on the car's heaters"], 0, "responsibility"),
    R(12, "The Rules of the Road state that if taking medication, a driver should be aware it could affect driving and", ["stop driving", "try driving after taking it on a short journey", "check with their doctor or pharmacist", "ask a friend to join them"], 2, "responsibility"),
    R(13, "According to the Rules of the Road, the safe rule about alcohol and the driver is", ["if you drink, don't drive", "don't mix your drinks", "only drink within the legal limit", "if you drink alcohol, drink plenty of coffee"], 0, "responsibility"),
    R(14, "Young drivers who want to impress their friends are advised to", ["show their friends how safely they can drive", "use a higher-performance car", "rely on their fast reactions at higher speeds", "drive in a spirit of friendly competition"], 0, "patience"),
    R(15, "To be safe, 'older drivers' are advised above all to", ["expect greater consideration from others", "practise regularly to gain total perfection", "consider giving up", "recognise their own limitations"], 3, "responsibility"),
    R(16, "The best way to learn to drive is by", ["relying on regular, planned professional instruction", "relying on practice with a friend or relative", "having regular, planned, professional tuition and plenty of practice", "having plenty of practice before taking professional tuition"], 2, "professional"),
    R(17, "Any person supervising a learner driver must", ["be an ADI or trainee ADI licence holder", "have a driving licence for the category of vehicle", "have been a qualified driver for two continuous years in the same category", "have held a pass certificate for three years and be at least 21"], 2, "professional"),
    R(18, "To give driving tuition for reward a person must be", ["a qualified ADI", "a licence holder in that category for 5 years", "a full licence holder with dual controls and tuition insurance", "someone who has applied for the ADI part 1 theory test"], 0, "professional"),
    R(19, "ADIs follow, where possible, a teaching syllabus, or suit each unit of learning to their pupil's needs. They", ["tailor each unit of learning to suit their pupil's needs", "follow the syllabus regardless of progress", "follow each page of the Rules of the Road", "teach to pass the driving test, first time"], 0, "lesson"),
    R(20, "The good driving instructor should have all the qualities of a good teacher or coach and", ["be very serious with the pupil", "be firm and fair, but sensitive to the pupil's needs", "allow the pupil to decide what they want to learn", "always expect perfection from the pupil"], 1, "instructor-qualities"),
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
    { id: "c1", skill: "knowledge", type: "choice", label: "Quick recall", concept: "role",
      prompt: "Instructors can give practical driving lessons from age…", options: ["16", "17", "18", "21"], answer: 1,
      explain: "Practical from 17; theory from 16.", src: P(5, "Unit introduction") },
    { id: "c2", skill: "recognition", type: "picture", label: "Spot it", concept: "good-driver",
      prompt: "Which picture shows the qualities that make up attitude?", options: ["driver-qualities", "instructor-qualities", "lesson-plan"], answer: 0,
      names: ["Driver qualities", "Driver v instructor", "Lesson plan"],
      explain: "Together with experience and skill, they make up attitude.", src: P(5, "The good driver") },
    { id: "c3", skill: "knowledge", type: "truefalse", concept: "adi-role",
      statement: "Driving instructors work mainly in the field of adult education.", answer: true,
      explain: "New drivers seldom have no concept of a car — teach from the known.", src: P(6, "Role of the driving instructor") },
    { id: "c4", skill: "application", type: "choice", label: "Scenario", concept: "lesson",
      scene: "🎯 Your pupil is nearly at test standard.",
      prompt: "What sort of briefing now?", options: ["A full step-by-step briefing", "A short question-and-answer session to brush up", "No contact at all", "A demonstration drive"], answer: 1,
      explain: "Reduce verbal explanation as skill grows.", src: P(7, "Briefing") },
    { id: "c5", skill: "recognition", type: "match", label: "Matching", concept: "instructor-qualities",
      prompt: "Match the quality.", pairs: [["Patience", "Keep the pupil's confidence"], ["Confidence", "Set an example"], ["Responsibility", "Pupils' future safety"]],
      explain: "The instructor's version of each quality.", src: P(88, "Post-test answer 17") },
    { id: "c6", skill: "knowledge", type: "order", label: "Procedure", concept: "lesson",
      prompt: "Lesson outline:", steps: ["Recap", "Objectives", "Practice", "Link to next"],
      explain: "Beginning, middle, end.", src: P(6, "The driving lesson") },
    { id: "c7", skill: "application", type: "choice", label: "Scenario decision", concept: "choosing",
      scene: "📞 A learner asks how to pick a good instructor.",
      prompt: "What do you tell them?", options: ["The cheapest one", "Look for a good reputation, punctuality, reliability and a car suited to them", "Whoever has the newest car", "Anyone who drives well"], answer: 1,
      explain: "And one who's examined, monitored and follows the official syllabus.", src: P(88, "Post-test answer 15") },
    { id: "c8", skill: "retention", type: "choice", label: "Recall", concept: "responsibility",
      prompt: "Nearly all road accidents are caused, to a larger degree, by…", options: ["The driver", "The vehicle", "The road", "The weather"], answer: 0,
      explain: "Responsibility rests ultimately with the driver.", src: P(9, "Retention Q2 (answer a, p.93)") },
    { id: "c9", skill: "application", type: "picture", label: "Spot it", concept: "role",
      prompt: "A parent worries their child is slower than a friend. Which picture reassures them?", options: ["learning-curves", "teaching-aids", "lesson-plan"], answer: 0,
      names: ["Learning curves", "Teaching aids", "Lesson plan"],
      explain: "Slow starters and fast starters generally meet at the end.", src: P(5, "Unit introduction") },
    { id: "c10", skill: "retention", type: "choice", label: "Final challenge", concept: "professional",
      prompt: "The best way to learn to drive is by…", options: ["Regular planned professional instruction only", "Practice with a friend", "Regular, planned, professional tuition and plenty of practice", "Plenty of practice first, then tuition"], answer: 2,
      explain: "Professional tuition plus plenty of practice.", src: P(10, "Retention Q16 (answer c, p.93)") },
  ],
};

/* ---------------------------------------------------------------------------
   THE UNIT
   --------------------------------------------------------------------------- */
export default {
  id: "3.1",
  number: "3.1",
  title: "The Driver & the Instructor",
  pages: [5, 10],
  intro: "The qualities of a good driver and a good instructor, professional training and the planned lesson.",
  objectives: [
    "The qualities of the good driver",
    "The reasons for taking professional driving tuition",
    "How to choose a registered, approved driving instructor",
    "The qualities of a good driving instructor",
  ],
  objectivesSrc: P(5, "Objectives"),
  mcqLink: { sectionId: "adi.sec.pedagogy", label: "Teaching Ability – Pedagogy" },
  concepts: CONCEPTS,
  activities: [
    { ...learn, weight: 1 },
    { ...recall, weight: 1 },
    { ...qualities, weight: 1 },
    { ...matching, weight: 1 },
    { ...procedure, weight: 1 },
    { ...scenarios, weight: 1.5 },
    { ...walkthrough, weight: 1 },
    { ...retention, weight: 1.5 },
    { ...challenge, weight: 2 },
  ],
  badges: [
    { id: "good-teacher", icon: "🧑‍🏫", label: "Good Driver, Good Teacher", rule: { activity: "qualities", min: 100 } },
    { id: "instructor-specialist", icon: "🏆", label: "Instructor Specialist", rule: { activity: "scenarios", min: 80 } },
  ],
};
