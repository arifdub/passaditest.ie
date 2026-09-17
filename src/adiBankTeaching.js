/*
  ===========================================================================
  BANK 2 — TEACHING ABILITY & DRIVER TESTING PROCEDURES

  163 questions: 97 Pedagogy, 66 Test Procedure.

  ORIGIN: original questions. The resource books were used to establish what
  the exam covers — unit lists, topic headings, subject matter — never as a
  source of questions. Nothing here is copied or reworded from them.

  WHY THESE TWO SECTIONS
  Before this file Pedagogy held 53 questions and Test Procedure 84, against
  20 per section in a mock paper. Pedagogy was the ceiling on how many
  non-overlapping mock papers the bank could fill — two. Both now reach 150,
  which supports seven.

  HOW THESE WERE WRITTEN
  Every question has one defensible answer and three that are wrong for a
  reason a candidate can articulate afterwards. Distractors are plausible
  positions a real candidate might hold, not filler — a question you can
  answer by elimination teaches nothing.

  ACCURACY — checked September 2026
  · EDT is 12 mandatory lessons for category B learner permit holders.
  · A learner permit holder must be accompanied at all times by someone who
    has held a full licence in that category for at least two years.
  · Stage 3 is two 30-minute phases: a beginner, then a driving-test-level
    pupil.
  · The driving test fault grades are Grade 1, Grade 2 and Grade 3.
  Verify against rsa.ie before each release.
  ===========================================================================
*/

const ADI_BANK_TEACHING = [
  {
    id: "adi-b2-pedagogy",
    title: "Pedagogy",
    questions: [
      /* ---- Lesson structure and planning ---- */
      {
        q: "A pupil arrives for a lesson visibly upset about something unrelated to driving. What is the most appropriate response?",
        options: [
          "Acknowledge it, then agree together whether to continue as planned or adjust the lesson",
          "Ignore it and begin the planned lesson, since personal matters are not your concern",
          "Cancel the lesson immediately and charge the full fee",
          "Spend the lesson discussing the problem rather than driving",
        ],
        correct: 0,
        explain: "Someone distracted is not in a state to learn or drive safely, so pretending otherwise risks both. Acknowledging it and deciding together respects them as an adult and keeps the decision shared, rather than you either ignoring a real risk or taking the choice away.",
      },
      {
        q: "What is the main purpose of a lesson recap at the start of a session?",
        options: [
          "To fill time while the pupil settles into the car",
          "To establish what the pupil retained and where this lesson should begin",
          "To demonstrate to the pupil how much of the previous lesson they have already forgotten",
          "To satisfy a record-keeping requirement",
        ],
        correct: 1,
        explain: "Learning is not continuous — a week between lessons loses detail. A recap tells you where the pupil actually is now, which is the only sound basis for deciding where to start today.",
      },
      {
        q: "A lesson plan should be regarded as:",
        options: [
          "A fixed sequence that must be completed regardless of how the pupil performs",
          "A formality required by the RSA but of little practical use",
          "A working intention that is adapted as the pupil's performance reveals what they need",
          "A document for the pupil to complete before the lesson begins",
        ],
        correct: 2,
        explain: "A plan sets direction; the pupil's performance sets pace. Driving through a plan that the first ten minutes has shown to be wrong is teaching the plan rather than the person.",
      },
      {
        q: "Which is the strongest indicator that a lesson objective was appropriate for the pupil's level?",
        options: [
          "The lesson finished exactly on time",
          "The pupil completed the task perfectly on the first attempt without any input",
          "The pupil was unable to attempt the task without constant intervention",
          "The pupil completed the task with occasional prompting and improving consistency",
        ],
        correct: 3,
        explain: "Perfect first time means the objective was below their level and taught nothing. Constant intervention means it was above it. Improvement with fading prompts is the signature of a task pitched just beyond current ability.",
      },
      {
        q: "What is the purpose of setting a lesson objective with the pupil rather than for them?",
        options: [
          "It gives the pupil ownership of the goal, which improves engagement and retention",
          "It shortens the briefing",
          "It is a legal requirement under the ADI regulations",
          "It transfers responsibility for the outcome of the lesson from the instructor to the pupil",
        ],
        correct: 0,
        explain: "A goal someone helped set is one they have a stake in. Agreeing it together also surfaces mismatches early — what you think they need and what they think they need are not always the same.",
      },
      {
        q: "A pupil wants to spend a whole lesson on parallel parking, but their observation at junctions is weak. The best approach is to:",
        options: [
          "Refuse the request and teach junction observation instead, on the grounds that safety takes priority",
          "Explain why junction observation matters more, then agree a plan covering both",
          "Teach parallel parking as asked without comment",
          "Tell them they are not ready for parallel parking",
        ],
        correct: 1,
        explain: "Overruling them wastes their motivation; going along silently ignores a safety-critical gap. Explaining the reasoning and then agreeing a split respects the request while still addressing what actually matters.",
      },
      {
        q: "The most useful length for a briefing before a new manoeuvre is:",
        options: [
          "As long as it takes to cover every possible variation",
          "Exactly five minutes for every manoeuvre",
          "Short enough that the pupil can still recall it when they start the task",
          "Whatever length fills the time until the route allows the manoeuvre",
        ],
        correct: 2,
        explain: "Working memory is small. A briefing that exceeds what someone can hold has stopped being instruction and become talking — they will start the manoeuvre having lost the beginning of what you said.",
      },
      {
        q: "When is a full demonstration most valuable?",
        options: [
          "At the end of every lesson as a summary",
          "Only when a pupil has failed a task three times",
          "Never, because pupils retain more when they work every task out for themselves",
          "When the task is new and a verbal explanation alone would be hard to picture",
        ],
        correct: 3,
        explain: "Some tasks are far easier to see than to hear described — a reverse around a corner being the classic. A demonstration front-loads the mental picture; it is wasted on something the pupil can already visualise.",
      },
      {
        q: "During a demonstration, the instructor should:",
        options: [
          "Talk through what is being done and why, at a pace the pupil can follow",
          "Perform the task silently so the pupil concentrates on watching",
          "Perform the task at normal speed with no commentary and repeat it three times",
          "Ask the pupil to look away until it is finished",
        ],
        correct: 0,
        explain: "Watching a manoeuvre shows what happened but not why. Commentary links the action to the reasoning, which is what the pupil needs to reproduce it rather than imitate it.",
      },
      {
        q: "A pupil performs well during a lesson but forgets the same skill the following week. This most likely indicates:",
        options: [
          "The pupil is not suited to driving",
          "The skill was performed with heavy prompting rather than genuinely learned",
          "The instructor taught it incorrectly",
          "Forgetting between lessons is entirely normal and requires no particular action from the instructor",
        ],
        correct: 1,
        explain: "Performance under prompting is not the same as learning. If the prompts were carrying the skill, removing them a week later removes the skill with them — which is why prompts have to be faded deliberately within the lesson.",
      },

      /* ---- Questioning technique ---- */
      {
        q: "Which question is most likely to reveal whether a pupil understands, rather than whether they can recall?",
        options: [
          "What is the speed limit here?",
          "Do you understand?",
          "Why did you choose that gear for this bend?",
          "Is this a national speed limit road, or a regional one?",
        ],
        correct: 2,
        explain: "Asking for the reasoning behind a choice exposes the thinking. 'Do you understand?' invites a yes from someone who does not, and the factual questions test recall, which a pupil can have without comprehension.",
      },
      {
        q: "The main weakness of asking a pupil \"Do you understand?\" is that:",
        options: [
          "It is too long a question to ask while the pupil is concentrating on driving",
          "It takes the pupil's attention from the road",
          "It is not permitted during a driving lesson",
          "Most pupils say yes regardless, because saying no feels like admitting failure",
        ],
        correct: 3,
        explain: "It is a closed question with a socially obvious answer. The pupil who most needs to say no is the one least likely to, so the reply carries almost no information.",
      },
      {
        q: "An open question is best described as one that:",
        options: [
          "Requires the pupil to explain, describe or reason",
          "Can be answered in one word",
          "Has no correct answer",
          "Is asked while the vehicle is moving rather than stationary",
        ],
        correct: 0,
        explain: "The value of an open question is the reasoning it forces into the open. A closed question confirms a fact; an open one shows you how the pupil arrived at it.",
      },
      {
        q: "When is a closed question the better choice?",
        options: [
          "Whenever you want to explore the pupil's reasoning",
          "When you need a quick, specific check of a fact in a busy situation",
          "At the end of the lesson during the debrief",
          "Closed questions have no legitimate place in modern driving instruction at all",
        ],
        correct: 1,
        explain: "Closed questions are not inferior, just narrower. In heavy traffic a one-word answer keeps the pupil's attention where it belongs, whereas an open question mid-junction competes with the driving.",
      },
      {
        q: "A pupil answers a question incorrectly. The most productive immediate response is to:",
        options: [
          "Give the pupil the correct answer straight away, so that lesson time is not wasted",
          "Move on and revisit it another day",
          "Ask a follow-up question that leads them towards recognising the error themselves",
          "Tell them they are wrong and ask the question again",
        ],
        correct: 2,
        explain: "An answer someone reaches themselves is far better retained than one they were handed. A follow-up question keeps them thinking; supplying the answer ends the thinking, which is the part that was doing the learning.",
      },
      {
        q: "Asking a pupil a question while they are negotiating a complex junction is poor practice mainly because:",
        options: [
          "It is against the rules of the road",
          "The answer will be inaudible over engine and road noise at speed",
          "Pupils find it irritating",
          "It takes mental capacity away from a task that is already demanding",
        ],
        correct: 3,
        explain: "Attention is finite. A pupil at their limit has nothing spare, so a question does not add learning — it subtracts safety. Save it for the next quiet stretch.",
      },
      {
        q: "After asking an open question, an instructor should:",
        options: [
          "Allow a pause long enough for the pupil to think before answering",
          "Repeat the question immediately if the pupil does not produce an instant answer",
          "Answer it themselves to keep the lesson moving",
          "Ask a second question to clarify the first",
        ],
        correct: 0,
        explain: "Thinking takes time, and silence feels longer to the person who asked than to the person thinking. Filling that silence trains the pupil to wait for you rather than reason for themselves.",
      },
      {
        q: "Which sequence best describes effective use of questioning across a lesson?",
        options: [
          "Ask nothing until the debrief, then cover everything at once",
          "Establish what they know, check understanding as you go, confirm learning at the end",
          "Ask only closed questions while the car is moving and open ones when it is parked",
          "Ask the same question repeatedly until the answer is correct",
        ],
        correct: 1,
        explain: "Questioning is a thread through the lesson rather than an event in it — find the starting point, track progress, confirm what stuck. Saving it all for the debrief means teaching the whole lesson blind.",
      },

      /* ---- Feedback and fault correction ---- */
      {
        q: "A pupil makes a significant error. Feedback is most effective when it is given:",
        options: [
          "At the end of the lesson, so that the flow of the drive is not interrupted",
          "Immediately, even if the pupil is mid-manoeuvre",
          "As soon as it is safe to do so, while the event is still fresh",
          "Only if the pupil asks about it",
        ],
        correct: 2,
        explain: "Feedback has to attach to a memory the pupil still holds. Waiting until the debrief costs that; interrupting mid-manoeuvre costs safety. The first safe moment afterwards is the compromise that keeps both.",
      },
      {
        q: "Which feedback is most likely to change behaviour?",
        options: [
          "That was terrible, you really need to concentrate a great deal harder than you managed to do there",
          "You were a bit close there",
          "Fine, carry on",
          "Your mirror check came after you started to move out rather than before — what would you do differently next time?",
        ],
        correct: 3,
        explain: "Useful feedback names the specific behaviour, not the person, and points at the fix. 'Terrible' gives nothing to act on, 'a bit close' does not say what to change, and 'fine' is not feedback at all.",
      },
      {
        q: "The purpose of asking a pupil to self-assess before you give feedback is that:",
        options: [
          "It shows whether the pupil can identify their own faults, which is what they will need when driving alone",
          "It saves the instructor from having to give detailed feedback on each individual fault observed",
          "It shortens the debrief",
          "It is required by the EDT syllabus",
        ],
        correct: 0,
        explain: "You will not be in the car forever. A driver who cannot spot their own errors has learned to rely on a passenger, which is exactly the dependency instruction should be removing.",
      },
      {
        q: "A pupil consistently makes the same fault despite repeated correction. The most likely reason is:",
        options: [
          "The pupil is not paying attention",
          "The underlying cause has not been identified — the correction is addressing the symptom",
          "The pupil simply lacks the underlying natural ability that safe driving requires",
          "The fault is too minor to matter",
        ],
        correct: 1,
        explain: "A fault that survives repeated correction is being driven by something the correction has not touched. Late braking, for instance, is often a scanning problem rather than a braking one — correcting the brake achieves nothing.",
      },
      {
        q: "When several faults occur in quick succession, the instructor should generally:",
        options: [
          "List all of them so nothing is missed",
          "Address the easiest one to fix first",
          "Address the one with the greatest safety significance first",
          "Say nothing about any of them until the debrief at the end of the lesson",
        ],
        correct: 2,
        explain: "A list of six faults overwhelms and nothing is retained. Taking the most safety-critical one gives the pupil a single thing to change, and fixing it often clears the others because faults cluster around one cause.",
      },
      {
        q: "Praise is most effective when it:",
        options: [
          "Is given constantly to keep the pupil's confidence up",
          "Is given only for perfect performance",
          "Is reserved for the end of the course",
          "Identifies specifically what was done well",
        ],
        correct: 3,
        explain: "'Well done' tells the pupil you approve; 'your mirror check before that signal was well timed' tells them what to repeat. Constant praise devalues itself and stops carrying information.",
      },
      {
        q: "An instructor who intervenes verbally every few seconds during a drive risks:",
        options: [
          "Preventing the pupil from developing their own judgement and anticipation",
          "Nothing at all, because frequent instructor input is always helpful to a learner",
          "Breaching the rules of the road",
          "Making the lesson finish early",
        ],
        correct: 0,
        explain: "Constant prompting produces a pupil who drives well with you and badly without you. Judgement only develops in the gaps where they have to make the call themselves.",
      },
      {
        q: "In a debrief, the most useful structure is to:",
        options: [
          "List every fault in the order it occurred",
          "Cover what went well, what needs work, and what the next lesson will address",
          "Focus only on the faults, so that the pupil leaves knowing exactly what to fix",
          "Ask the pupil to write a report",
        ],
        correct: 1,
        explain: "A debrief that is only faults leaves someone demotivated and without direction. Strengths tell them what to keep, weaknesses what to change, and the next step turns it into a plan rather than a verdict.",
      },
      {
        q: "A pupil disputes your assessment of a fault. The best response is to:",
        options: [
          "Insist on your own assessment, on the basis that you are the qualified instructor",
          "Drop the point to avoid conflict",
          "Describe what you observed factually and invite them to explain what they experienced",
          "End the lesson",
        ],
        correct: 2,
        explain: "Either the pupil has missed something or you have, and describing the observation rather than asserting the verdict finds out which. It also models the honest self-review you want them doing alone.",
      },

      /* ---- Learning theory ---- */
      {
        q: "A pupil who can perform a skill correctly without conscious effort has reached which stage of learning?",
        options: [
          "Unconscious incompetence",
          "Conscious incompetence",
          "Conscious competence",
          "Unconscious competence",
        ],
        correct: 3,
        explain: "The four stages run from not knowing what you cannot do, through knowing it, through doing it with effort, to doing it without thinking. The last is where attention is freed for the road rather than the controls.",
      },
      {
        q: "A pupil who believes they are already a good driver before any instruction is at which stage?",
        options: [
          "Unconscious incompetence",
          "Conscious competence",
          "Unconscious competence",
          "Conscious incompetence",
        ],
        correct: 0,
        explain: "They do not yet know what they do not know. This stage is the hardest to teach through, because the pupil sees no reason to change anything until they become aware of the gap.",
      },
      {
        q: "Moving a pupil from unconscious incompetence to conscious incompetence usually requires:",
        options: [
          "Telling them repeatedly that they are wrong",
          "An experience or question that reveals the gap to them directly",
          "Waiting until they discover the gap for themselves after failing the test",
          "More hours behind the wheel",
        ],
        correct: 1,
        explain: "Being told you have a weakness rarely changes a belief; encountering it does. A well-chosen route or question that surfaces the gap does in one moment what repeated assertion will not.",
      },
      {
        q: "Which best describes a plateau in learning?",
        options: [
          "A deliberate pause in lessons",
          "The point at which the pupil has become ready to present for the driving test",
          "A period where performance stops improving despite continued practice",
          "A sudden loss of previously learned skill",
        ],
        correct: 2,
        explain: "Plateaus are normal and usually mean consolidation is happening below the surface. Treating one as failure, and piling on more of the same, tends to demotivate rather than break through it.",
      },
      {
        q: "A pupil learns a skill on a quiet estate road but cannot perform it in traffic. This is a failure of:",
        options: [
          "Motivation",
          "Physical coordination of the pedals, gears and steering",
          "Memory",
          "Transfer — the skill has not generalised to a new context",
        ],
        correct: 3,
        explain: "Skills learned in one setting do not automatically move to another. The fix is deliberate practice across varied conditions, not more repetition in the setting where it already works.",
      },
      {
        q: "Overloading a pupil with too much information at once typically results in:",
        options: [
          "Little of it being retained and increased anxiety",
          "Better long-term retention",
          "Faster learning because more ground is covered",
          "No particular effect, provided that all of the information given is accurate",
        ],
        correct: 0,
        explain: "There is a hard limit on what can be held and processed at once. Past it, extra information does not just fail to land — it displaces what had landed and raises stress, which narrows capacity further.",
      },
      {
        q: "Practice is most effective for long-term retention when it is:",
        options: [
          "Massed into a single long session",
          "Distributed across several shorter sessions over time",
          "Performed only under direct instructor supervision rather than privately",
          "Repeated identically each time",
        ],
        correct: 1,
        explain: "Spacing practice out beats cramming it together for durable learning, even though cramming often looks better on the day. The forgetting between sessions is part of what makes the relearning stick.",
      },
      {
        q: "A pupil who is highly anxious during lessons is likely to:",
        options: [
          "Learn faster because of heightened alertness",
          "Be largely unaffected, since anxiety is a purely emotional rather than cognitive state",
          "Have reduced attentional capacity and retain less",
          "Perform better in the test",
        ],
        correct: 2,
        explain: "Anxiety consumes the same attention the driving needs, and narrows what someone notices. Reducing it is not being kind at the expense of progress — it is a condition of progress.",
      },
      {
        q: "Which statement about learning styles is most defensible?",
        options: [
          "Every pupil has one fixed learning style, and must therefore only ever be taught in that one way",
          "Learning styles determine how quickly a pupil will pass",
          "Learning styles apply only to classroom teaching",
          "Pupils have preferences, but varying the method suits the task and the pupil better than fixing on one",
        ],
        correct: 3,
        explain: "The evidence for teaching strictly to a fixed style is weak. What holds up is that different tasks suit different methods, and varying them reaches more of the pupil more of the time.",
      },
      {
        q: "The primary benefit of linking a new skill to something the pupil already knows is that:",
        options: [
          "New material attaches to existing knowledge, which makes it easier to recall",
          "It shortens the lesson",
          "It avoids the need for a practical demonstration of the manoeuvre beforehand",
          "It is required by the EDT syllabus",
        ],
        correct: 0,
        explain: "Memory works by association. Isolated facts have nothing to hang on; a new skill connected to an established one inherits its retrieval paths.",
      },

      /* ---- Coaching and client-centred learning ---- */
      {
        q: "Client-centred learning is best described as an approach where:",
        options: [
          "The pupil decides what is to be taught in each lesson and the instructor simply follows that lead",
          "The instructor's expertise is used to guide the pupil's own problem-solving rather than to supply answers",
          "The instructor does not intervene at any point",
          "Lessons are delivered without a plan",
        ],
        correct: 1,
        explain: "It is not the absence of instruction and it is not the pupil taking charge. It is the instructor using their expertise to steer the pupil's thinking, because a conclusion someone reaches is held more firmly than one they are given.",
      },
      {
        q: "The main advantage of a coaching approach over pure instruction is that:",
        options: [
          "It takes less time",
          "It requires considerably less skill and lesson preparation from the instructor",
          "It develops the pupil's ability to solve problems they have not been taught about",
          "It avoids the need to correct faults",
        ],
        correct: 2,
        explain: "No course can cover every situation a driver will meet. Coaching builds the capacity to reason through the novel ones, which is what keeps someone safe after the instruction stops.",
      },
      {
        q: "When is a directive, instructional approach clearly more appropriate than coaching?",
        options: [
          "Directive instruction is never appropriate at any stage of a learner's training",
          "When reviewing a completed drive",
          "When the pupil is close to test standard",
          "When the pupil is a complete beginner meeting the controls for the first time",
        ],
        correct: 3,
        explain: "Coaching draws on experience the pupil has. Someone who has never operated a clutch has none to draw on, so asking them to reason it out wastes time and raises anxiety. Tell first, coach once there is something to coach.",
      },
      {
        q: "Goals for Driver Education (GDE) includes a level concerned with the driver's own motives and life circumstances. Addressing that level matters because:",
        options: [
          "Attitudes and motives shape the decisions a driver makes long after training ends",
          "It is the easiest level to assess",
          "It is required for the theory test",
          "It replaces the need for any basic vehicle control training at the start",
        ],
        correct: 0,
        explain: "Someone can have faultless car control and still drive dangerously because of how they think about risk, peers or time pressure. The higher levels are where most of the crash risk actually sits.",
      },
      {
        q: "An instructor using a coaching approach with a pupil who has just made an error would most likely:",
        options: [
          "State the fault plainly and describe the correct method immediately afterwards",
          "Ask what the pupil noticed and what they would change",
          "Say nothing and note it for the debrief",
          "Take over the controls",
        ],
        correct: 1,
        explain: "Asking what they noticed reveals whether the error was even perceived — and if it was, the pupil usually produces the correction themselves, which is both faster and better retained.",
      },
      {
        q: "A risk of overusing coaching with a nervous beginner is that:",
        options: [
          "It takes too long",
          "It breaches RSA guidance",
          "It can increase anxiety when the pupil has no basis on which to answer",
          "It makes the pupil overconfident about their current standard",
        ],
        correct: 2,
        explain: "Being asked what you would do, when you genuinely have no idea, feels like a test you are failing. With a beginner the answer often has to come first, with the reasoning attached.",
      },
      {
        q: "Establishing a pupil's own goals at the start of a course of lessons is valuable mainly because:",
        options: [
          "It allows an accurate quotation for the full course",
          "It satisfies the ADI record-keeping requirement",
          "It removes any need to assess the pupil's current driving standard before starting",
          "Lessons connected to what the pupil actually wants sustain motivation over a long course",
        ],
        correct: 3,
        explain: "Learning to drive takes months, and motivation is what carries someone through the middle of it. A pupil who wants to drive to a specific job engages differently with a lesson framed around that route.",
      },

      /* ---- Communication ---- */
      {
        q: "Technical terminology should be used with a pupil:",
        options: [
          "Once introduced and explained, so the pupil builds accurate vocabulary they can use",
          "Never, as it confuses learners",
          "Constantly and from the first lesson, so the pupil learns the correct language early",
          "Only in the debrief",
        ],
        correct: 0,
        explain: "Avoiding terms entirely leaves the pupil without the words to describe what they are doing. Using them unexplained leaves them nodding along. Introduce, explain, then use consistently.",
      },
      {
        q: "An instruction given to a pupil should be:",
        options: [
          "Given at the last possible moment, in order to test the pupil's reactions",
          "Given as early as possible so the pupil has maximum time to act",
          "Given in as much detail as possible",
          "Repeated at least twice",
        ],
        correct: 1,
        explain: "A late instruction forces a rushed reaction, which is both a fault in itself and a habit that outlasts the lesson. Early instruction gives the pupil time to plan, which is what you are trying to teach.",
      },
      {
        q: "Which is the clearest instruction for a pupil approaching a junction?",
        options: [
          "Turn here",
          "Left",
          "At the end of this road, turn left",
          "You'll want to be going left in a minute",
        ],
        correct: 2,
        explain: "It states where and what, in that order, with enough warning to act. 'Turn here' arrives too late, 'left' is ambiguous about where, and the last is too vague to plan from.",
      },
      {
        q: "An instructor's tone of voice during a lesson matters because:",
        options: [
          "It has no real effect on learning",
          "It is assessed in the Stage 3 test",
          "It determines how loudly the pupil will speak when replying to questions",
          "It affects the pupil's anxiety level, which affects their capacity to learn",
        ],
        correct: 3,
        explain: "How something is said lands before what is said. A sharp tone raises stress, and stress narrows attention — so the delivery can undo the content.",
      },
      {
        q: "Non-verbal communication from an instructor, such as visibly tensing or gripping the door handle:",
        options: [
          "Can undermine a pupil's confidence even when nothing is said",
          "Has no effect since the pupil is watching the road",
          "Is an effective way to signal danger",
          "Should be used deliberately as a way of keeping the pupil alert to danger",
        ],
        correct: 0,
        explain: "Pupils read their instructor constantly through peripheral vision and feel. Visible alarm says 'you are getting this wrong' louder than any reassurance you offer afterwards.",
      },
      {
        q: "When a pupil is driving in demanding conditions, the instructor's commentary should:",
        options: [
          "Increase, to provide maximum support",
          "Reduce to essential instructions only",
          "Stop entirely",
          "Continue exactly as in quiet conditions",
        ],
        correct: 1,
        explain: "Demanding conditions already consume the pupil's capacity. Adding commentary competes with the driving; going silent removes support they may need. Essentials only is the balance.",
      },
      {
        q: "A pupil with limited English is struggling to follow instructions. The most appropriate adjustment is to:",
        options: [
          "Speak louder",
          "Refuse further lessons",
          "Use simpler, shorter phrasing, consistent terms, and more demonstration",
          "Continue exactly as normal, on the basis that the pupil will adapt in time",
        ],
        correct: 2,
        explain: "Volume does not help comprehension. Consistent simple phrasing and showing rather than describing remove the language load from a task that already has plenty of its own.",
      },

      /* ---- Assessment and readiness ---- */
      {
        q: "The most reliable indicator that a pupil is ready to take the driving test is that they:",
        options: [
          "Have completed the 12 mandatory EDT lessons and had them signed off in the logbook",
          "Have been driving for at least a year",
          "Feel confident about passing",
          "Consistently drive safely and independently without prompting across varied conditions",
        ],
        correct: 3,
        explain: "EDT is a minimum syllabus, not a standard, and confidence is a poor proxy for competence. Consistent unprompted safe driving across varied conditions is the thing the test actually samples.",
      },
      {
        q: "A pupil insists on booking a test before you consider them ready. The most appropriate action is to:",
        options: [
          "Explain specifically what is not yet at standard and what it would take to get there",
          "Say nothing, as the decision is theirs",
          "Refuse to teach them further",
          "Agree that they are ready to book, in order to avoid an unnecessary disagreement",
        ],
        correct: 0,
        explain: "The booking is their decision, but an informed one requires your honest assessment. Naming the specific gaps gives them something to weigh, rather than a verdict to accept or reject.",
      },
      {
        q: "Which best describes the purpose of a mock test during training?",
        options: [
          "To guarantee a pass",
          "To replicate the pressure and independence of the real test and reveal what breaks down under it",
          "To satisfy an EDT requirement",
          "To let the pupil practise the specific route and junctions the test is most likely to use",
        ],
        correct: 1,
        explain: "Plenty of pupils drive well in a normal lesson and fall apart under test conditions. The mock exists to surface that gap while there is still time to work on it.",
      },
      {
        q: "During a mock test, the instructor should:",
        options: [
          "Coach the pupil through any difficulty as normal",
          "Remain completely silent throughout, regardless of what happens on the drive",
          "Refrain from prompting except where safety requires it",
          "Point out each fault as it occurs",
        ],
        correct: 2,
        explain: "Prompting defeats the purpose — you would be measuring your own support rather than their driving. Staying silent through a genuine hazard, though, is not a mock test, it is a risk.",
      },
      {
        q: "Recording a pupil's progress across lessons is useful primarily because:",
        options: [
          "It is a legal requirement for all ADIs",
          "It is required to book a driving test",
          "It allows the instructor to justify charging a higher hourly rate",
          "It provides evidence of trends and informs what each lesson should target",
        ],
        correct: 3,
        explain: "Memory of last week's lesson fades and flatters. A record shows whether a fault is improving, static or recurring — which is the difference between planning and guessing.",
      },
      {
        q: "A pupil performs to a high standard for three lessons, then noticeably worse in the fourth. The best first step is to:",
        options: [
          "Find out what has changed, for the pupil or in the conditions, before deciding",
          "Repeat the previous lesson's content",
          "Assume the skill has been lost entirely and reteach the whole topic from the start",
          "Recommend they take a break from lessons",
        ],
        correct: 0,
        explain: "A sudden drop usually has a cause outside the driving — illness, stress, no sleep, different weather. Reteaching without knowing which wastes a lesson and may address nothing.",
      },
      {
        q: "Which is a Grade 3 fault on the Irish driving test?",
        options: [
          "A minor imperfection with no effect on safety",
          "A dangerous or potentially dangerous fault",
          "A fault repeated often enough to become a concern",
          "A fault recorded only for information",
        ],
        correct: 1,
        explain: "Grade 3 covers the dangerous end of the scale. Knowing the grades matters for instruction because it tells you which faults must be eliminated and which merely improved.",
      },

      /* ---- Managing the pupil and the lesson ---- */
      {
        q: "The primary purpose of the instructor's dual controls is to:",
        options: [
          "Demonstrate manoeuvres to the pupil",
          "Correct the pupil's clutch control and gear selection on a regular basis",
          "Intervene when safety requires it and no other option remains",
          "Reduce wear on the vehicle",
        ],
        correct: 2,
        explain: "They are a last resort, not a teaching tool. Routine use removes the consequences a pupil needs to feel in order to learn, and builds reliance on a pedal that will not be there on test day.",
      },
      {
        q: "After using the dual controls, an instructor should:",
        options: [
          "Say nothing about it afterwards, so as to avoid embarrassing the pupil",
          "Repeat the same situation straight away",
          "End the lesson immediately",
          "Explain what happened and why the intervention was necessary once it is safe",
        ],
        correct: 3,
        explain: "An unexplained intervention leaves the pupil knowing only that something went wrong. The explanation is where the learning is — and without it the same situation will produce the same result.",
      },
      {
        q: "An instructor notices a pupil is fatigued and losing concentration halfway through a two-hour lesson. The best response is to:",
        options: [
          "Take a break or conclude the lesson early and explain why",
          "Continue, as endurance is part of driving",
          "Switch to a more demanding task in order to regain the pupil's flagging attention",
          "Continue but take over the controls more often",
        ],
        correct: 0,
        explain: "Nothing useful is learned past the point of fatigue, and the risk rises. Stopping also teaches something worth knowing — that recognising your own fatigue and acting on it is part of driving.",
      },
      {
        q: "Route selection for a lesson should be based primarily on:",
        options: [
          "The shortest distance from the pupil's home",
          "The lesson objective and the pupil's current level",
          "The roads and junctions the driving test is most likely to use on the day",
          "Avoiding traffic at all times",
        ],
        correct: 1,
        explain: "The route is a teaching tool. Chosen for the objective, it creates the situations the lesson needs; chosen for convenience or test-route mimicry, it leaves the lesson to whatever happens to come up.",
      },
      {
        q: "Teaching to the test route rather than to driving competence is poor practice because:",
        options: [
          "Test routes are not published by the authority and cannot be obtained in advance",
          "It takes longer",
          "It produces a driver who can pass in one area but is not competent generally",
          "Test routes change every week",
        ],
        correct: 2,
        explain: "The test samples competence; it is not the point of the training. A pupil drilled on specific roundabouts has learned those roundabouts, which helps them for one morning and not afterwards.",
      },
      {
        q: "A pupil freezes at a busy junction and cannot proceed. The instructor's immediate priority is to:",
        options: [
          "Ask an open question designed to prompt the pupil's own thinking",
          "Note it for the debrief",
          "Wait for them to work it out",
          "Give a clear, direct instruction to resolve the situation safely",
        ],
        correct: 3,
        explain: "A frozen pupil has no spare capacity for a question. Clear direction resolves the immediate risk; the exploration of what happened belongs afterwards, when they can think again.",
      },
      {
        q: "Which is the most appropriate way to build a nervous pupil's confidence?",
        options: [
          "Set achievable tasks in manageable conditions and build difficulty gradually",
          "Move quickly to busy roads so they get used to pressure",
          "Tell them repeatedly that they are doing well, whatever their actual performance",
          "Avoid giving any corrective feedback",
        ],
        correct: 0,
        explain: "Confidence comes from genuine success, not reassurance. Graded difficulty produces real successes to build on, whereas throwing them into heavy traffic or praising everything produces either panic or hollow confidence.",
      },
      {
        q: "A pupil regularly arrives late, cutting into lesson time. The most professional response is to:",
        options: [
          "Extend each lesson to make up the lost time, at no additional charge",
          "Discuss the effect on their progress and agree how lessons will run in future",
          "Say nothing and shorten the content",
          "Terminate the arrangement immediately",
        ],
        correct: 1,
        explain: "Silently absorbing it costs you and teaches them nothing; ending it is disproportionate. A direct conversation about the effect on their progress treats them as an adult with a decision to make.",
      },
      {
        q: "Setting an unrealistically difficult task for a pupil's current level typically:",
        options: [
          "Accelerates learning through challenge",
          "Has no real effect, provided the instructor remains supportive throughout",
          "Damages confidence and can embed faults under pressure",
          "Is the fastest route to test standard",
        ],
        correct: 2,
        explain: "Beyond someone's capacity they are not learning, they are coping — and coping strategies formed under pressure tend to be exactly the habits you will later have to undo.",
      },

      /* ---- Professional standards ---- */
      {
        q: "An ADI must carry which documents while giving instruction?",
        options: [
          "Their vehicle insurance certificate and roadworthiness disc only",
          "Their tax clearance certificate only",
          "Their ADI permit only",
          "Their full driving licence and their RSA ADI permit",
        ],
        correct: 3,
        explain: "Both, at all times while instructing. The licence proves entitlement to drive the category, the permit proves entitlement to teach it.",
      },
      {
        q: "An ADI may give instruction in:",
        options: [
          "Only categories in which they hold a full licence for at least two years and are registered as an ADI",
          "Any category they hold a licence for",
          "Any category at all, provided that the pupil holds a valid learner permit for that same category",
          "Any category after passing Stage 3",
        ],
        correct: 0,
        explain: "Both conditions have to hold. Registration is category by category, and it rests on having personally held the full licence for that category for two years.",
      },
      {
        q: "A pupil asks an instructor a question the instructor does not know the answer to. The best response is to:",
        options: [
          "Give a plausible-sounding answer in order to maintain their authority",
          "Say they will find out and confirm it next lesson, then do so",
          "Tell the pupil the question is not relevant",
          "Change the subject",
        ],
        correct: 1,
        explain: "Guessing risks teaching something wrong, which is worse than a moment's uncertainty. Saying you will check and then actually checking builds more credibility than a confident invention.",
      },
      {
        q: "Professional behaviour towards other road users during a lesson matters because:",
        options: [
          "It is assessed on the check test",
          "It affects the instructor's insurance position in the event of a claim",
          "The pupil is learning attitudes as well as skills, and will copy what they see",
          "It is a legal requirement",
        ],
        correct: 2,
        explain: "Instruction transmits more than technique. A pupil who watches their instructor react with impatience learns that this is how drivers behave, and that lesson outlasts anything said about courtesy.",
      },
      {
        q: "An instructor who continues teaching a pupil well beyond the point of readiness, without justification:",
        options: [
          "Is acting in the pupil's best interests by being as thorough as possible",
          "Is protecting their pass rate",
          "Is following RSA guidance",
          "Is behaving unprofessionally, as the pupil is paying for lessons they do not need",
        ],
        correct: 3,
        explain: "The pupil's money and time are at stake and they are relying on your judgement. Extending a course past readiness for your benefit is a straightforward conflict of interest.",
      },
      {
        q: "A pupil discloses a medical condition that may affect their driving. The instructor should:",
        options: [
          "Explain the pupil's obligation to declare it and check that they have done so",
          "Report the condition directly to the RSA without telling the pupil they have done so",
          "Ignore it, as medical matters are private",
          "Refuse to teach them",
        ],
        correct: 0,
        explain: "The duty to declare rests with the driver, so the instructor's job is to make sure they know that and have acted on it — not to conceal it, and not to take the decision out of their hands.",
      },
      {
        q: "Keeping accurate records of lessons delivered is most important because:",
        options: [
          "It is needed to renew an ADI permit",
          "It protects both instructor and pupil if progress or content is later disputed",
          "It allows the instructor to claim tax relief against their business expenses",
          "It is required before booking a test",
        ],
        correct: 1,
        explain: "Records settle disagreements about what was covered and what was advised, and they are the evidence behind your assessment of readiness if that is ever questioned.",
      },

      /* ---- EDT and the learner pathway ---- */
      {
        q: "How many mandatory EDT lessons must a category B learner permit holder complete?",
        options: ["6", "10", "12", "18"],
        correct: 2,
        explain: "Twelve, delivered by an ADI and logged. It is a minimum syllabus rather than a measure of readiness — most learners need considerably more than twelve hours.",
      },
      {
        q: "EDT is best described as:",
        options: [
          "A complete course of instruction that prepares a learner fully for both the test and independent driving",
          "An optional programme for nervous drivers",
          "A mandatory minimum syllabus covering core competencies, usually supplemented by further lessons and practice",
          "A replacement for the driving test",
        ],
        correct: 2,
        explain: "It guarantees a floor of structured content, not a finished driver. Treating completion as readiness is one of the more common misunderstandings a learner brings to an instructor.",
      },
      {
        q: "The purpose of the learner's logbook in EDT is to:",
        options: [
          "Record penalty points",
          "Record the instructor's fees",
          "Replace the need to sit a practical driving test at the end of training",
          "Record each lesson delivered and the progress made against the syllabus",
        ],
        correct: 3,
        explain: "It is the formal record of which EDT sessions have been completed and how the learner performed, and the learner needs it to demonstrate they have met the requirement.",
      },
      {
        q: "Sponsored driving practice between EDT lessons is valuable mainly because:",
        options: [
          "It lets the learner consolidate skills between structured sessions",
          "It reduces the number of paid lessons the learner will need to book",
          "It is a legal requirement",
          "It counts towards the 12 EDT hours",
        ],
        correct: 0,
        explain: "Skills consolidate through repetition spread over time, and no realistic number of lessons supplies that alone. Practice between lessons is where much of the actual consolidation happens.",
      },
      {
        q: "A learner permit holder for category B must be accompanied by a person who has held a full category B licence for at least:",
        options: ["1 year", "2 years", "3 years", "5 years"],
        correct: 1,
        explain: "Two years, and in that same category. An accompanying driver who does not meet this is not a valid accompanying driver, whatever their experience feels like.",
      },
      {
        q: "An instructor asked to certify EDT sessions that were not actually delivered should:",
        options: [
          "Certify them if the pupil is competent anyway",
          "Refuse, as this is falsification of an official record",
          "Certify the sessions but record a written reservation in the pupil's logbook",
          "Certify them if the pupil pays for the sessions",
        ],
        correct: 1,
        explain: "The logbook is an official record and certifying undelivered sessions is falsifying it. Competence is not the point — the record would be untrue, and the ADI's registration rests on their good repute.",
      },
      {
        q: "The most useful thing an instructor can give a sponsor supervising private practice is:",
        options: [
          "A list of test routes",
          "A copy of the EDT logbook",
          "Guidance on what to practise and how to support without confusing the learner",
          "Nothing at all, because sponsors should not be involved in formal training",
        ],
        correct: 2,
        explain: "Well-meaning sponsors often teach a different method and undo the lesson. A short brief on what to work on, and how, turns practice from a risk into an accelerator.",
      },

      /* ---- Stage 3 and instructional assessment ---- */
      {
        q: "The Stage 3 instruction ability test consists of:",
        options: [
          "One 60-minute phase with a beginner",
          "A written examination followed by a practical instructional assessment",
          "Three phases of 20 minutes",
          "Two phases of 30 minutes, one with a beginner and one at driving-test level",
        ],
        correct: 3,
        explain: "Two 30-minute phases, with the examiner role-playing first a complete beginner and then a pupil at test standard. The two halves test genuinely different skills.",
      },
      {
        q: "In Stage 3, pitching a beginner's briefing at a driving-test-level pupil would be marked down because:",
        options: [
          "The instruction was not matched to the pupil's demonstrated level",
          "It wastes time",
          "Briefings are not permitted at all during the second phase of the test",
          "It is too short",
        ],
        correct: 0,
        explain: "The core of what Stage 3 assesses is whether your instruction fits the pupil in front of you. Over-explaining to an experienced pupil fails that test as surely as under-explaining to a beginner.",
      },
      {
        q: "During Stage 3, the examiner will deliberately make errors in order to:",
        options: [
          "Test the candidate's own driving ability under close examiner observation",
          "See whether the candidate identifies, analyses and remedies faults appropriately",
          "Waste time",
          "Assess the vehicle's dual controls",
        ],
        correct: 1,
        explain: "Identify, analyse, remedy — the three things you have to do with a fault. The planted errors exist so the examiner can see whether you notice, whether you diagnose the cause, and whether your fix addresses it.",
      },
      {
        q: "A candidate who spots a fault but does not address its underlying cause has failed at which part of fault management?",
        options: ["Identification", "Remedy", "Analysis", "None — spotting it is sufficient"],
        correct: 2,
        explain: "They identified it and may have offered a remedy, but without analysis the remedy is aimed at the symptom. That is why the same fault returns ten minutes later.",
      },
      {
        q: "Which best demonstrates effective fault analysis?",
        options: [
          "Recording the fault for the debrief",
          "Telling the pupil they braked too late",
          "Asking the pupil to make a particular point of braking rather earlier next time",
          "Recognising that late braking is caused by the pupil scanning too close to the bonnet",
        ],
        correct: 3,
        explain: "Analysis is the step that names the cause. The other three notice the fault or prescribe a fix, but none of them explains why it happened — so none of them will stop it happening again.",
      },
      {
        q: "An instructor's own driving during a lesson should:",
        options: [
          "Model the standard being taught, since the pupil observes it constantly",
          "Be largely irrelevant, since it is the pupil rather than the instructor being assessed",
          "Be faster than normal to demonstrate confidence",
          "Only matter during demonstrations",
        ],
        correct: 0,
        explain: "Pupils learn from what they see far more than from what they are told. An instructor who rolls a stop line has taught that, whatever they said about stop lines earlier.",
      },
      {
        q: "The most common reason candidates fail Stage 3 is:",
        options: [
          "Poor personal driving ability",
          "Instruction that is not matched to the pupil's level and needs",
          "Insufficient knowledge of the rules of the road and road traffic law",
          "Arriving late for the test",
        ],
        correct: 1,
        explain: "Candidates reaching Stage 3 have already proved their driving and their knowledge in Stages 2 and 1. What remains untested until now is teaching — and delivering a rehearsed script regardless of the pupil is the classic failure.",
      },
      {
        q: "Preparing for Stage 3 is best done by:",
        options: [
          "Memorising a briefing for each manoeuvre and delivering it verbatim",
          "Studying the rules of the road again",
          "Practising with real learners at different levels under supervision",
          "Practising your own driving",
        ],
        correct: 2,
        explain: "A memorised briefing is exactly what Stage 3 catches, because it cannot adapt. Practice with pupils at genuinely different levels builds the adaptability being assessed.",
      },

      /* ---- Additional pedagogy ---- */
      {
        q: "A pupil who has driven for years abroad is taking lessons before an Irish test. The instructor should first:",
        options: [
          "Treat them as a complete beginner",
          "Assume their previous experience means only minimal instruction will be needed",
          "Focus only on the test routes",
          "Assess their current driving to establish what transfers and what does not",
        ],
        correct: 3,
        explain: "Experienced drivers bring both competence and embedded habits, and you cannot know which is which until you have watched them drive. Assuming either extreme wastes lessons or misses faults.",
      },
      {
        q: "Embedded faults in an experienced driver are harder to correct than errors in a beginner because:",
        options: [
          "The behaviour is automatic and has been reinforced over years",
          "Experienced drivers are less receptive to new information than beginners",
          "They receive fewer lessons",
          "They are less motivated",
        ],
        correct: 0,
        explain: "An automatic behaviour runs without conscious attention, so it reasserts itself the moment the driver stops consciously monitoring it. Undoing it takes deliberate, sustained attention rather than a single correction.",
      },
      {
        q: "The best use of the first lesson with a brand new pupil is to:",
        options: [
          "Cover as many of the controls and basic manoeuvres as the hour allows",
          "Establish rapport, assess the starting point and achieve one clear success",
          "Drive on a busy road to gauge their reaction",
          "Complete all the paperwork",
        ],
        correct: 1,
        explain: "The first lesson sets whether they come back. Rapport, an honest baseline and one thing they can point to as achieved does more for the course than a rushed tour of the syllabus.",
      },
      {
        q: "An instructor should adapt their teaching for an older learner primarily by:",
        options: [
          "Reducing the amount of content covered, on the basis that older learners absorb less",
          "Avoiding busy roads entirely",
          "Allowing more time for consolidation and linking new material to existing experience",
          "Speaking more slowly at all times",
        ],
        correct: 2,
        explain: "Older learners typically bring more relevant life experience to connect new material to, but may consolidate new motor skills more slowly. Adjust the pace, not the ambition.",
      },
      {
        q: "A pupil who is progressing well suddenly asks to stop lessons for financial reasons. The most professional response is to:",
        options: [
          "Pressure them into continuing on the basis that they are already close to test standard",
          "Accept without comment",
          "Offer free lessons",
          "Discuss options honestly, including spacing lessons out, and leave the decision to them",
        ],
        correct: 3,
        explain: "The decision is theirs and money is a legitimate constraint. Setting out realistic options — including what stopping now would cost them in relearning — is more useful than either pressure or silence.",
      },
      {
        q: "The term 'scaffolding' in instruction refers to:",
        options: [
          "Temporary support that is gradually withdrawn as the pupil becomes capable",
          "Physical support equipment fitted to the training vehicle for safety",
          "The structure of the EDT syllabus",
          "The instructor's lesson plan template",
        ],
        correct: 0,
        explain: "The support is meant to come down. Scaffolding left permanently in place stops being support and becomes dependence — which is exactly what happens with an instructor who never stops prompting.",
      },
      {
        q: "Asking a pupil to give a running commentary on what they see and intend is most useful for:",
        options: [
          "Filling silences during a lesson",
          "Making the pupil's perception and planning visible to the instructor",
          "Improving their vocabulary",
          "Testing the pupil's memory of the rules of the road while driving",
        ],
        correct: 1,
        explain: "Observation is invisible from the passenger seat — you cannot tell what someone noticed. Commentary externalises it, which is the only way to find out whether they saw the hazard or simply got lucky.",
      },
      {
        q: "A pupil consistently over-relies on the instructor to decide when it is safe to emerge. The most effective remedy is to:",
        options: [
          "Continue making the decision for them until their confidence has grown",
          "Tell them to emerge more quickly",
          "Progressively withhold the decision and ask them to justify their own",
          "Practise only at quiet junctions",
        ],
        correct: 2,
        explain: "They will not develop judgement while someone else is exercising it. Handing the decision back, with the reasoning made explicit, is uncomfortable for a lesson or two and necessary for the rest of their driving life.",
      },
      {
        q: "When teaching a manoeuvre, breaking it into stages is useful because:",
        options: [
          "It makes the lesson longer",
          "It avoids the need for a practical demonstration of the manoeuvre beforehand",
          "It is required by the EDT syllabus",
          "Each stage can be mastered and given feedback separately, reducing overload",
        ],
        correct: 3,
        explain: "A whole manoeuvre attempted at once produces several simultaneous faults and no clear feedback. Staged, each part gets attention and success before the next is added.",
      },
      {
        q: "A pupil performs a manoeuvre correctly but cannot explain why each step is done. This suggests:",
        options: [
          "They have learned a sequence by rote rather than understanding the principle",
          "Complete mastery of the skill",
          "The instructor explained the manoeuvre rather too thoroughly at the briefing",
          "No cause for concern",
        ],
        correct: 0,
        explain: "Rote sequences fail as soon as the situation differs from the one rehearsed — a different kerb, a different car length. Understanding the principle is what lets someone adapt.",
      },
      {
        q: "The purpose of varying lesson conditions — weather, time of day, road type — is to:",
        options: [
          "Keep the pupil interested and engaged across what is often a very long course",
          "Build competence that transfers to the conditions the pupil will actually meet alone",
          "Meet the EDT requirement",
          "Make the lessons harder",
        ],
        correct: 1,
        explain: "A pupil taught only on dry weekday mornings has competence for dry weekday mornings. Varied conditions during training are what make the skill general rather than situational.",
      },
      {
        q: "An instructor should review and adjust their own teaching methods because:",
        options: [
          "The RSA requires an annual review",
          "It is necessary in order to retain the ADI permit at renewal",
          "What works for one pupil may not work for another, and methods date",
          "Pupils expect variety",
        ],
        correct: 2,
        explain: "An instructor who teaches every pupil identically is teaching a method rather than a person. Reflecting on what worked and what did not is the mechanism by which instruction improves.",
      },
      {
        q: "The most useful question an instructor can ask themselves after a lesson that went badly is:",
        options: [
          "Was the pupil trying hard enough?",
          "Did I follow my lesson plan?",
          "Should I stop teaching this particular pupil altogether and refer them on?",
          "What in my planning or delivery contributed to this, and what would I change?",
        ],
        correct: 3,
        explain: "The only variable you control is your own practice. Locating the cause in the pupil ends the inquiry and guarantees the next lesson goes the same way.",
      },
      {
        q: "Giving a pupil a specific target for the coming week's private practice is valuable because:",
        options: [
          "Unfocused practice tends to reinforce existing habits rather than change them",
          "It reduces the total number of paid lessons the pupil will need to book",
          "It is required in the logbook",
          "It keeps the sponsor occupied",
        ],
        correct: 0,
        explain: "Practice consolidates whatever is practised, including the faults. A specific target directs the repetition at the thing that needs changing rather than at everything indiscriminately.",
      },
      {
        q: "A pupil is convinced they failed their test because of an unfair examiner. The instructor should:",
        options: [
          "Agree with them, in order to preserve the working relationship",
          "Go through the report objectively and identify what can be worked on",
          "Tell them examiners are never wrong",
          "Suggest they change test centres",
        ],
        correct: 1,
        explain: "Agreeing removes any reason to change anything, which guarantees a repeat. Working through the report shifts the conversation from blame to the specific things that are within their control.",
      },
      {
        q: "The main risk of an instructor promising a pupil they will pass is that:",
        options: [
          "It is against RSA regulations",
          "It makes the pupil complacent",
          "No outcome can be guaranteed, and the promise damages trust when it fails",
          "It carries no real risk provided the pupil is genuinely well prepared",
        ],
        correct: 2,
        explain: "The test is not in your gift. A guarantee that fails costs the pupil's trust in everything else you told them, including the assessments that were accurate.",
      },
      {
        q: "Teaching a pupil to check mirrors by reciting a fixed routine, without linking it to what is being looked for, typically results in:",
        options: [
          "Reliable and consistent observation across every kind of driving situation",
          "Better performance on test",
          "Faster progress through the syllabus",
          "Mirror checks performed as a ritual without the information being processed",
        ],
        correct: 3,
        explain: "The examiner can see the head move; the driver still has to notice what is there. A routine detached from its purpose produces a pupil who looks without seeing.",
      },
      {
        q: "Which best describes the instructor's role in developing a pupil's hazard perception?",
        options: [
          "Prompting the pupil to scan and predict, then confirming or correcting what they report",
          "Pointing out every hazard as it appears",
          "Testing them on hazard perception clips",
          "Avoiding any route containing significant hazards until the pupil is far more experienced",
        ],
        correct: 0,
        explain: "Pointing hazards out does the perceiving for them. Prompting them to look and predict, then checking what they found, builds the scanning habit that has to run without you.",
      },
      {
        q: "An instructor should be cautious about comparing one pupil's progress to another's because:",
        options: [
          "It breaches data protection",
          "Pupils progress at different rates for reasons that say nothing about eventual competence",
          "It takes valuable time away from the practical driving element of the lesson itself",
          "Pupils never ask about others",
        ],
        correct: 1,
        explain: "Rate of progress and eventual standard are only loosely related. The comparison demotivates the slower pupil and tells the faster one they can ease off, and neither is true or useful.",
      },
      {
        q: "The clearest sign that a briefing was pitched at the right level is that:",
        options: [
          "The pupil said they understood",
          "The briefing covered every last detail of the manoeuvre thoroughly",
          "The pupil attempted the task with a reasonable idea of what to do",
          "The pupil asked no questions",
        ],
        correct: 2,
        explain: "The proof of a briefing is in the attempt that follows, not the nod at the end. A pupil who says yes and then sits frozen has told you the briefing did not land.",
      },
      {
        q: "A pupil who has failed two tests is losing motivation. The most constructive approach is to:",
        options: [
          "Book a third test immediately, in order to maintain the pupil's momentum",
          "Reassure them that most people fail twice",
          "Suggest they take an extended break",
          "Identify the specific recurring faults and build a plan targeting them",
        ],
        correct: 3,
        explain: "Motivation returns with visible progress, and progress requires knowing exactly what is going wrong. A plan aimed at the specific recurring faults gives them something to see improving.",
      },
      {
        q: "Recording a lesson on video, with the pupil's consent, can be useful because:",
        options: [
          "The pupil can see faults they were unaware of at the time",
          "It provides documentary evidence for insurance and liability purposes",
          "It replaces the need for a debrief",
          "It is required for EDT",
        ],
        correct: 0,
        explain: "A driver at their limit often has no memory of the fault at all. Seeing it removes the argument about whether it happened and moves straight to why.",
      },
      {
        q: "Two pupils make the same fault. Giving both the same correction is:",
        options: [
          "Always correct, on the basis that the observed fault was exactly the same one",
          "Potentially wrong, because the same fault can have different underlying causes",
          "Efficient and therefore good practice",
          "Required for consistency",
        ],
        correct: 1,
        explain: "Stalling can be clutch control, or anticipation, or nerves. The visible fault is the same; the fix is not, and applying one correction to both means being right about half the time.",
      },
      {
        q: "An instructor teaching a pupil with a disability should:",
        options: [
          "Recommend they do not learn to drive",
          "Lower the standard expected",
          "Establish what adaptations or approaches are needed and teach to the same standard",
          "Refer them automatically to another instructor with specialist experience",
        ],
        correct: 2,
        explain: "The standard for safe independent driving does not change. What may change is the vehicle adaptations and the route to that standard, and establishing those is part of the job.",
      },
      {
        q: "The instructor's responsibility for safety during a lesson:",
        options: [
          "Passes to the pupil as soon as they hold a valid learner permit",
          "Is shared equally with the pupil at all times",
          "Applies only while the dual controls are in use",
          "Remains with the instructor throughout, regardless of the pupil's level",
        ],
        correct: 3,
        explain: "You are in charge of the vehicle and the lesson from start to finish. Handing over decisions to build the pupil's judgement is a teaching choice, not a transfer of responsibility.",
      },
      {
        q: "A pupil asks to be taught a technique the instructor considers unsafe. The instructor should:",
        options: [
          "Explain why it is unsafe and teach the correct method",
          "Teach it, as the pupil is paying",
          "Refuse without explanation",
          "Teach it as asked, but record their professional disagreement",
        ],
        correct: 0,
        explain: "Paying for lessons does not buy instruction in something unsafe. Explaining the reasoning is what separates a professional refusal from a flat one, and usually resolves it.",
      },
      {
        q: "Which is the best measure of an instructor's effectiveness?",
        options: [
          "First-time pass rate alone",
          "Whether their pupils drive safely and independently after qualifying",
          "Number of lessons delivered per week",
          "How quickly their pupils reach test standard from a standing start",
        ],
        correct: 1,
        explain: "Pass rates can be lifted by teaching to the test or by only presenting strong candidates. What the training is actually for is safe independent driving afterwards, which is the harder thing to measure and the right one.",
      },
    ],
  },
  {
    id: "adi-b2-procedure",
    title: "Driving Test Procedure & Documentation",
    questions: [
      /* ---- The driving test itself ---- */
      {
        q: "Before a driving test begins, the candidate must produce:",
        options: ["Proof of EDT completion only", "A learner permit only", "A valid learner permit and evidence the vehicle is roadworthy, taxed and insured", "A signed letter of readiness from their instructor and proof of lessons completed"],
        correct: 2,
        explain: "The test cannot start without both the permit and a vehicle that is legally on the road. Turning up short of either loses the fee as surely as failing.",
      },
      {
        q: "A candidate arrives for a driving test in a vehicle with a defective brake light. The most likely outcome is:",
        options: ["The test proceeds and the fault is recorded as a Grade 1", "The test proceeds using the examiner's vehicle", "The examiner allows the test if the candidate promises to repair it", "The test is refused and the fee is lost"],
        correct: 3,
        explain: "The vehicle has to be roadworthy before the test starts. A defective light is a roadworthiness failure, and the test does not begin.",
      },
      {
        q: "During the vehicle checks at the start of a test, a candidate is typically asked to:",
        options: ["Explain and demonstrate specified safety checks on the vehicle", "Remove a wheel", "Demonstrate a manoeuvre", "Complete a short written questionnaire on vehicle maintenance"],
        correct: 0,
        explain: "The checks confirm a driver can satisfy themselves the car is fit to drive, which is a responsibility that continues long after the test.",
      },
      {
        q: "The rules of the road questions at the start of a driving test are asked:",
        options: ["While driving on the test route", "Before the driving element begins", "After the driving element is complete", "Only if the candidate makes errors"],
        correct: 1,
        explain: "They come at the start, alongside the vehicle checks, before the car moves.",
      },
      {
        q: "A candidate who commits a Grade 3 fault during a test:",
        options: ["Receives a warning and continues", "May still pass if the rest of the drive is good", "Will fail the test", "Has the fault recorded for information only"],
        correct: 2,
        explain: "Grade 3 is the dangerous or potentially dangerous category. One is enough on its own, whatever the rest of the drive looked like.",
      },
      {
        q: "Repeated Grade 2 faults in the same aspect of driving are significant because:",
        options: ["They are automatically upgraded to Grade 3", "They are recorded on the report sheet but never affect the overall result", "They shorten the test", "A pattern indicates an unreliable competency rather than a one-off lapse"],
        correct: 3,
        explain: "A single lapse can happen to anyone. The same fault four times says the skill is not reliably there, which is exactly what the test is sampling.",
      },
      {
        q: "If a candidate takes a wrong turn during a driving test:",
        options: ["It does not affect the result, provided the manoeuvre was performed safely", "It counts as a Grade 2 fault", "The test is terminated", "The candidate must return to the original test route at the first opportunity"],
        correct: 0,
        explain: "The test measures how you drive, not whether you followed directions. Going the wrong way safely costs nothing; going the right way dangerously costs a great deal.",
      },
      {
        q: "An examiner may terminate a driving test early if:",
        options: ["The candidate appears nervous", "The candidate's driving becomes a danger to the public", "The candidate takes a wrong turn", "The weather deteriorates slightly during the course of the test"],
        correct: 1,
        explain: "Termination is a safety measure, not a scoring one. It happens when continuing would put people at risk.",
      },
      {
        q: "The driving test report given to an unsuccessful candidate:",
        options: ["Is sent to their instructor rather than the candidate", "Gives only a pass or fail result", "Lists the faults recorded and their grades", "Is available only on request"],
        correct: 2,
        explain: "The itemised report is what makes a failure useful — it names exactly what to work on, which is the basis of the next few lessons.",
      },
      {
        q: "A candidate who passes the driving test receives:",
        options: ["A full driving licence immediately", "An ADI permit", "A provisional full licence which remains valid for the following six months", "A certificate of competency, which is used to apply for a full licence"],
        correct: 3,
        explain: "Passing gives a certificate of competency. The full licence is a separate application to the NDLS, and until it is issued the driver is still on their learner permit.",
      },
      {
        q: "A certificate of competency is valid for:",
        options: ["2 years", "1 year", "5 years", "It does not expire"],
        correct: 0,
        explain: "Two years from the date of the test. Leaving it longer than that means sitting the test again.",
      },
      {
        q: "During the test the examiner asks the candidate to pull in on the left. The candidate should:",
        options: ["Stop immediately wherever they are", "Continue to a safe, legal and convenient place before stopping", "Ask the examiner where to stop", "Stop only where a designated parking bay or lay-by is provided"],
        correct: 1,
        explain: "Choosing a safe and legal place is part of what is being assessed. Stopping on the spot, on a bend or across an entrance, converts a routine instruction into a fault.",
      },
      {
        q: "The reversing manoeuvres assessed on the Irish driving test are:",
        options: ["Emergency stop and hill start only", "Parallel parking and bay parking only", "Reverse around a corner and turnabout", "Three-point turn and reverse parking only"],
        correct: 2,
        explain: "Reversing around a corner and the turnabout are the manoeuvres assessed, with a hill start where the route allows one.",
      },
      {
        q: "Observation during a reversing manoeuvre is assessed because:",
        options: ["It is the only way to judge steering accuracy", "It slows the manoeuvre to a safe speed", "It is a specific legal requirement set out in the rules of the road", "The driver's view is restricted and other road users may approach unseen"],
        correct: 3,
        explain: "Reversing is the manoeuvre with the worst view, so effective all-round observation throughout is what separates it from a controlled collision.",
      },
      {
        q: "A candidate stalls once during the test. This will:",
        options: ["Be assessed on its circumstances and on how the candidate recovers", "Result in an automatic fail", "Be ignored entirely", "Result in the test being terminated immediately by the examiner"],
        correct: 0,
        explain: "A stall in a quiet side road, recovered calmly, is a different matter from stalling while emerging into traffic. The context and the recovery are what get assessed.",
      },
      {
        q: "The purpose of the hill start element of the test is to assess:",
        options: ["The vehicle's handbrake", "Clutch, accelerator and handbrake coordination without rolling back", "The engine's power", "How quickly and smoothly the candidate can move off from a standstill"],
        correct: 1,
        explain: "It is a coordination test. Rolling back is the fault it looks for, because that is what endangers whatever is behind.",
      },

      /* ---- Documentation and licensing ---- */
      {
        q: "How long is a first Irish learner permit valid for?",
        options: ["1 year", "2 years", "3 years", "5 years"],
        correct: 1,
        explain: "Two years. A learner permit is a temporary entitlement while learning, not a long-term licence.",
      },
      {
        q: "A learner permit holder for category B may not:",
        options: ["Drive between 11pm and 6am", "Drive outside their home county", "Drive on a motorway", "Carry more than one passenger"],
        correct: 2,
        explain: "Motorways are prohibited on a learner permit, and so is towing a trailer. The other restrictions listed do not exist.",
      },
      {
        q: "L-plates must be displayed on a vehicle driven by a learner permit holder:",
        options: ["On the front only", "On the rear only", "Only when accompanied by a qualified driver", "To the front and rear, clearly visible"],
        correct: 3,
        explain: "Front and rear, visible to traffic in both directions, for as long as the driver holds a learner permit.",
      },
      {
        q: "After passing the driving test, N-plates must be displayed for:",
        options: ["2 years", "1 year", "6 months", "N-plates are optional"],
        correct: 0,
        explain: "Two years as a novice driver, front and rear. The novice period also carries a lower penalty point disqualification threshold.",
      },
      {
        q: "A novice driver is disqualified on reaching how many penalty points?",
        options: ["6", "7", "9", "12"],
        correct: 1,
        explain: "Seven for novice and learner drivers, against twelve for a fully licensed driver — a deliberately tighter margin during the riskiest period.",
      },
      {
        q: "A fully licensed driver is disqualified on reaching how many penalty points?",
        options: ["7", "9", "12", "15"],
        correct: 2,
        explain: "Twelve points within a three-year period brings an automatic disqualification.",
      },
      {
        q: "Penalty points remain on a driver's record for:",
        options: ["1 year", "2 years", "3 years", "5 years"],
        correct: 2,
        explain: "Three years from the date they come into effect, after which they drop off.",
      },
      {
        q: "A driving licence application requires evidence of:",
        options: ["A tax clearance certificate", "Identity, address and PPSN", "Vehicle ownership", "Membership of a motoring organisation"],
        correct: 1,
        explain: "The NDLS needs to establish who you are, where you live and your PPSN. The rest are not part of a licence application.",
      },
      {
        q: "Motor tax on a private car is charged based on:",
        options: ["The vehicle's age only", "The distance driven each year and the fuel type of the vehicle", "CO2 emissions for newer cars, or engine size for older ones", "The value of the vehicle"],
        correct: 2,
        explain: "Cars registered from mid-2008 are taxed on emissions; older ones remain on engine capacity.",
      },
      {
        q: "A vehicle must display a current NCT disc if it is:",
        options: ["More than 2 years old", "Any vehicle, regardless of age", "More than 10 years old", "More than 4 years old"],
        correct: 3,
        explain: "The first test falls due at four years, then every two years, and annually once the car passes ten.",
      },
      {
        q: "Driving without valid motor insurance is:",
        options: ["A serious offence that can lead to penalty points, a fine, disqualification and vehicle seizure", "A minor offence attracting a fixed charge", "Permitted for a grace period of up to 14 days after an existing insurance policy has lapsed", "Only an offence on public roads at night"],
        correct: 0,
        explain: "It is among the most serious motoring offences precisely because it leaves anyone you injure without recourse.",
      },
      {
        q: "An instructor's vehicle used for paid instruction must be insured:",
        options: ["Under an ordinary private policy", "For driving instruction, which a private policy does not cover", "Only in cases where the pupil already holds a valid learner permit", "Under the pupil's own policy"],
        correct: 1,
        explain: "Paid instruction is a business use. A standard private policy excludes it, which means a claim during a lesson would not be met.",
      },
      {
        q: "A fixed charge notice must normally be paid within:",
        options: ["7 days", "14 days", "28 days", "56 days"],
        correct: 2,
        explain: "Twenty-eight days at the initial amount, then a further 28 at a higher rate before it goes to court.",
      },
      {
        q: "Who is responsible for ensuring a vehicle is roadworthy?",
        options: ["The NCT centre", "The owner only", "The driver, each time the vehicle is used", "An Garda Síochána at a routine checkpoint"],
        correct: 2,
        explain: "An NCT certifies a moment in the past. The driver is responsible every time the car is used, which is why the daily checks matter.",
      },
      {
        q: "A driver who changes address must notify the NDLS within:",
        options: ["10 days", "There is no requirement", "3 months", "1 month"],
        correct: 3,
        explain: "Licence records have to stay current — it is how official correspondence, including anything about penalty points, reaches the driver.",
      },

      /* ---- ADI regulation ---- */
      {
        q: "An ADI permit is valid for:",
        options: ["1 year", "2 years", "3 years", "5 years"],
        correct: 1,
        explain: "Two years, renewed with a check test, fresh Garda vetting and a re-registration fee.",
      },
      {
        q: "The ADI check test is best described as:",
        options: ["A periodic assessment of an ADI's instructional standard during the renewal cycle", "A re-sit of the Stage 3 test", "An inspection of the instructor's vehicle, dual controls and teaching materials", "A written examination"],
        correct: 0,
        explain: "It checks that teaching standards are being maintained in practice, and can be taken at any point in the year before the permit expires.",
      },
      {
        q: "An ADI whose permit has expired:",
        options: ["May continue teaching for 30 days", "May not give paid instruction until it is renewed", "May teach only existing pupils", "May teach provided they hold a full licence"],
        correct: 1,
        explain: "The permit is the entitlement. Once it expires, paid instruction stops until it is back in force.",
      },
      {
        q: "A trainee instructor licence is valid for a maximum of:",
        options: ["3 months", "6 months", "12 months", "24 months"],
        correct: 1,
        explain: "Six months, non-renewable, and only one is ever issued to a candidate.",
      },
      {
        q: "A trainee licence holder may not deliver:",
        options: ["Any instruction to learner drivers", "Instruction in category B", "EDT or IBT training", "Instruction on quiet roads"],
        correct: 2,
        explain: "The scheme allows paid instruction in the approved category but stops short of EDT and IBT, which require full registration.",
      },
      {
        q: "A trainee licence holder must have what proportion of their lessons directly supervised by their sponsor?",
        options: ["At least 10%", "All of them", "At least 50%", "At least 20%"],
        correct: 3,
        explain: "A minimum of 20%. The sponsorship is what makes the scheme a training arrangement rather than an early shortcut to practice.",
      },
      {
        q: "Before applying for a trainee instructor licence, a candidate must have completed:",
        options: ["20 hours of practical training with an approved mentor", "10 hours of practical training with an approved mentor", "40 hours of practical training with an approved mentor", "No formal training requirement"],
        correct: 0,
        explain: "Twenty hours with an approved mentor, on top of having passed Stages 1 and 2 within the previous two years.",
      },
      {
        q: "An ADI must complete each stage of the qualification process within what period of the previous stage?",
        options: ["3 months", "6 months", "12 months", "24 months"],
        correct: 1,
        explain: "Six months between stages, with all three completed inside two years. Drifting past either means starting the process again.",
      },
      {
        q: "All three ADI qualification stages must be completed within:",
        options: ["1 year", "2 years", "3 years", "5 years"],
        correct: 1,
        explain: "Two years overall. Combined with the six-month rule, the timetable is tighter than most candidates expect.",
      },
      {
        q: "An ADI may be removed from the register for:",
        options: ["A low pass rate among their pupils", "Failing to maintain the standards or good repute required for registration", "Charging significantly above the average hourly lesson fee for their area", "Teaching fewer than ten pupils a year",],
        correct: 1,
        explain: "Registration rests on standards and good repute. Pass rates and commercial decisions are not grounds in themselves.",
      },
      {
        q: "Garda vetting for an ADI applicant is:",
        options: ["Required once, at first registration", "Optional", "Required at first registration and again at each renewal", "Required only for instructors teaching under-18s"],
        correct: 2,
        explain: "It is repeated at renewal, because good repute is a continuing condition rather than a one-off check.",
      },
      {
        q: "The RSA advises allowing how long for Garda vetting to complete?",
        options: ["1 to 2 weeks", "3 to 4 weeks", "Up to 6 months from the date of application", "A minimum of 6 to 8 weeks"],
        correct: 3,
        explain: "Six to eight weeks at least, and Stage 1 cannot be booked until it clears — which is why it is worth starting early and studying while you wait.",
      },
      {
        q: "An ADI wishing to instruct in an additional licence category must:",
        options: ["Hold a full licence in that category for two years and qualify as an ADI for it", "Simply notify the RSA", "Complete a short conversion course", "Have taught in category B for at least five years and hold a current permit"],
        correct: 0,
        explain: "Registration is category by category, and each rests on two years of personally holding the full licence for it.",
      },
      {
        q: "An ADI must be tax compliant, evidenced by:",
        options: ["A receipt for the previous year's tax", "A tax clearance access number from Revenue", "A letter from an accountant", "A VAT registration number"],
        correct: 1,
        explain: "The application asks for the access number directly, so it is worth obtaining before starting the form rather than stalling halfway through.",
      },

      /* ---- Test administration ---- */
      {
        q: "A candidate who cancels a driving test at short notice:",
        options: ["Always receives a full refund", "Is automatically rebooked for the next available date at no additional cost", "May lose the fee, particularly where tests have already been cancelled before", "Must reapply from the beginning"],
        correct: 2,
        explain: "Short-notice cancellation risks the fee, and the risk hardens once a candidate has cancelled repeatedly.",
      },
      {
        q: "From 9 March 2026, a candidate presenting for an ADI test must produce:",
        options: ["Proof of 40 hours' driving", "A copy of their EDT logbook together with written confirmation from their sponsoring instructor", "A letter from their sponsor", "A valid certificate of motor insurance covering the examiner to drive the vehicle"],
        correct: 3,
        explain: "The examiner has to be insured to take control of the vehicle, and from that date the certificate must be produced rather than assumed.",
      },
      {
        q: "The Stage 2 ADI driving test lasts approximately:",
        options: ["60 to 100 minutes", "30 to 40 minutes", "2 to 3 hours", "Exactly 90 minutes"],
        correct: 0,
        explain: "Between 60 and 100 minutes depending on how many categories are being covered — substantially longer than a learner test.",
      },
      {
        q: "The Stage 2 test differs from the ordinary driving test mainly in that it:",
        options: ["Uses a different vehicle", "Is longer and assesses driving to a higher, instructor-level standard", "Includes a written element", "Is conducted on a closed circuit rather than on public roads"],
        correct: 1,
        explain: "It is the same activity held to a higher standard, on the reasoning that someone teaching driving should drive better than someone merely permitted to.",
      },
      {
        q: "Results of the Stage 3 instruction ability test are issued within:",
        options: ["Immediately at the test centre", "4 weeks", "10 working days", "3 months"],
        correct: 2,
        explain: "Within 10 working days, unlike the ordinary driving test where the result is given on the day.",
      },
      {
        q: "A candidate sitting the ADI theory test must bring:",
        options: ["Proof of address only", "Two forms of identity, one of which may be a photocopy", "Their instructor's ADI permit", "One original photographic identity document"],
        correct: 3,
        explain: "One original photo ID. Photocopies are refused at the door and the fee is lost.",
      },
      {
        q: "The ADI theory test fee is:",
        options: ["€85", "€150", "€200", "€250"],
        correct: 1,
        explain: "€150 per attempt, against €200 each for Stages 2 and 3 and €250 to register once all three are passed.",
      },
      {
        q: "A driving test applicant must have held their learner permit for a minimum period before applying. That period is:",
        options: ["3 months", "6 months", "9 months", "12 months"],
        correct: 1,
        explain: "Six months, which sits alongside the EDT requirement as a floor on how quickly someone can present for test.",
      },
      {
        q: "An examiner's role during a driving test is to:",
        options: ["Assess the candidate's driving against a set standard without coaching", "Instruct the candidate where their driving is weak", "Give advice on how to improve during the drive", "Decide whether the candidate ought to continue taking lessons"],
        correct: 0,
        explain: "The examiner assesses; the instructor teaches. Coaching during a test would contaminate the very thing being measured.",
      },
      {
        q: "A candidate may bring their instructor on the driving test:",
        options: ["Never", "Only as an observer, with the examiner's agreement", "Always, as a matter of right", "Only for the ADI Stage 2 driving test, not the ordinary test"],
        correct: 1,
        explain: "As a silent observer where the examiner agrees. Observing is permitted; participating is not.",
      },
      {
        q: "If a candidate becomes unwell during a driving test, the examiner will:",
        options: ["Continue and record a fail", "Continue but shorten the route", "Stop the test and make arrangements for the candidate's welfare", "Hand the remainder of the test over to a second examiner"],
        correct: 2,
        explain: "Welfare comes before assessment. A test that continues with an unwell driver is unsafe and would not be measuring anything meaningful.",
      },
      {
        q: "Test routes are not published because:",
        options: ["They change daily", "They are decided by each examiner on the morning of the test and vary constantly", "Of security concerns", "Candidates would practise the specific route rather than develop general competence"],
        correct: 3,
        explain: "The test samples competence. A rehearsed route measures how well someone learned that route, which is of no use once they drive anywhere else.",
      },
      {
        q: "An accompanying driver in the vehicle during a learner's private practice must:",
        options: ["Hold a full licence in that category for at least two years", "Be over 25 years of age", "Hold an ADI permit", "Have held a full licence in any category for at least one year"],
        correct: 0,
        explain: "Two years of holding the full licence in that same category. Age and general driving experience are not the test.",
      },
      {
        q: "A driver disqualified by the courts must:",
        options: ["Keep their licence but not drive", "Surrender their licence as directed by the court", "Apply for a learner permit", "Retake the practical driving test before driving again"],
        correct: 1,
        explain: "The licence is surrendered as the court directs. Holding onto it and simply not driving does not satisfy the order.",
      },
      {
        q: "The primary purpose of the driving test is to establish that a candidate:",
        options: ["Knows the test route", "Has completed a set minimum number of professional lessons", "Can drive safely and competently without supervision", "Can perform manoeuvres quickly"],
        correct: 2,
        explain: "Everything on the test is a sample of that one question — whether it is safe to let this person drive alone.",
      },
      {
        q: "An ADI should explain the driving test process to a pupil because:",
        options: ["It is required by the EDT syllabus", "Examiners expect every candidate to have been fully briefed beforehand", "It guarantees a pass", "Understanding what will happen reduces anxiety, which improves performance"],
        correct: 3,
        explain: "Much of test-day anxiety is uncertainty about the process rather than doubt about the driving. Removing the uncertainty leaves more capacity for the driving itself.",
      },
      {
        q: "A pupil asks whether they can use their instructor's car for the test. The instructor should confirm that:",
        options: ["The vehicle meets the test requirements and is properly insured for the purpose", "Any vehicle is acceptable", "Only the pupil's own car may be used, and it must be insured in their name", "The examiner will supply a vehicle"],
        correct: 0,
        explain: "The candidate supplies the vehicle, and it has to meet the requirements and be correctly insured for the test. Assuming either is where tests get refused at the door.",
      },
      {
        q: "A vehicle presented for a driving test must have:",
        options: ["Dual controls fitted", "Valid tax, insurance, NCT where applicable, and be in roadworthy condition", "Fewer than 100,000 kilometres on the odometer and a full service history", "A manual gearbox"],
        correct: 1,
        explain: "Legal and roadworthy is the requirement. Dual controls are an instructor's tool, not a test condition, and an automatic simply restricts the resulting licence.",
      },
      {
        q: "A candidate who passes the test in an automatic vehicle receives a licence that:",
        options: ["Covers both manual and automatic vehicles", "Requires a further test within two years", "Is restricted to automatic vehicles", "Is valid for one year only"],
        correct: 2,
        explain: "The licence is restricted to automatics. Driving a manual on it means passing another test in a manual car.",
      },
      {
        q: "An instructor should advise a pupil to arrive at the test centre:",
        options: ["Exactly at the appointment time", "Whenever it happens to be convenient, since tests usually run late anyway", "At least an hour early", "In good time, with documents ready and the vehicle checked"],
        correct: 3,
        explain: "Arriving in good time with the paperwork sorted removes an avoidable source of stress, and leaves room for the checks that would otherwise stop the test starting.",
      },
    ],
  },
];

export default ADI_BANK_TEACHING;
