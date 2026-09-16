/*
  ===========================================================================
  EXPANSION BANK

  Written to fill the gaps found by working through the five resource books
  topic by topic and comparing their syllabus coverage against what the app
  already held.

  ORIGIN: original questions. The books were used to establish what the exam
  covers — unit lists, topic headings, subject matter — not as a source of
  questions. Nothing here is copied or reworded from them.

  WHY THESE SECTIONS
  Before this file the banks stood at Pedagogy 29, Category B & BE 30,
  Mechanics 34 and Test Procedure 68, while the mock draws 20, 10, 15 and 25
  from them. A candidate would have seen most of the Pedagogy and Category B
  questions repeatedly. These are the four that needed depth.

  ACCURACY — checked September 2026
  · Category B tows a trailer up to 750 kg MAM, or over 750 kg provided the
    combined MAM stays within 3,500 kg. Above that, BE is required.
  · BE covers a combination up to 7,000 kg.
  · A category B learner permit holder may not tow any trailer, of any size.
  · Anything towing a trailer is limited to 80 km/h on every road, motorway
    included, and may not use the outermost lane of a motorway.
  Verify against rsa.ie before each release.
  ===========================================================================
*/

const ADI_EXPANSION = [
  {
    id: "adi-exp-categoryb",
    title: "Category B & BE Towing",
    questions: [
      {
        q: "A full category B licence holder may tow a trailer with a MAM over 750 kg provided that:",
        options: ["The trailer is fitted with brakes", "The journey is under 50 km", "The trailer is no wider than the towing vehicle", "The combined MAM of vehicle and trailer does not exceed 3,500 kg"],
        correct: 3,
        explain: "Category B covers a trailer up to 750 kg MAM whatever the combination weighs, or a heavier trailer so long as vehicle and trailer together stay within 3,500 kg MAM. Past that it's BE.",
      },
      {
        q: "A category BE licence permits a vehicle and trailer combination up to a maximum of:",
        options: ["7,000 kg", "3,500 kg", "5,000 kg", "7,500 kg"],
        correct: 0,
        explain: "BE covers a combination up to 7,000 kg — a category B towing vehicle of up to 3,500 kg with a trailer of up to 3,500 kg.",
      },
      {
        q: "A pupil holding a category B learner permit asks whether they may tow a small empty trailer. The correct answer is:",
        options: ["Yes, if the trailer is unbraked and under 750 kg", "Yes, if accompanied by a full licence holder", "Yes, but not on national roads", "No — a learner permit holder in category B may not tow any trailer"],
        correct: 3,
        explain: "No trailer, of any size, braked or not, loaded or empty. The restriction is on the permit, not the trailer, and the same applies to learner permits in C1, C, D1 and D.",
      },
      {
        q: "The maximum speed for any vehicle towing a trailer in Ireland is:",
        options: ["60 km/h", "80 km/h", "100 km/h", "The posted limit for that road"],
        correct: 1,
        explain: "80 km/h on every road type, motorway included. The posted limit does not raise it — a motorway signed at 120 still means 80 for anything towing.",
      },
      {
        q: "A vehicle towing a trailer on a three-lane motorway:",
        options: ["May use any lane", "May use the right-hand lane only when overtaking", "May not use the outermost right-hand lane", "Must remain on the hard shoulder"],
        correct: 2,
        explain: "Anything drawing a trailer is barred from the outermost lane of a motorway with three or more lanes. With the 80 km/h limit as well, the left lane is where it belongs.",
      },
      {
        q: "Which weight determines whether a driver needs a BE licence?",
        options: ["The plated maximum authorised mass of vehicle and trailer", "The actual weight carried on the day", "The unladen weight of the trailer", "The manufacturer's towing capacity"],
        correct: 0,
        explain: "The plated MAM figures decide the licence category, regardless of how lightly loaded the trailer happens to be. Towing capacity is a separate limit that must also be respected.",
      },
      {
        q: "A breakaway cable is fitted to a braked trailer in order to:",
        options: ["Provide an earth connection for the lights", "Apply the trailer brakes if it becomes detached from the towing vehicle", "Secure the load to the trailer bed", "Limit the angle the trailer can turn through"],
        correct: 1,
        explain: "If the coupling fails, the cable pulls the trailer's brakes on and brings it to a stop rather than letting it run free. An unbraked light trailer uses a safety chain instead.",
      },
      {
        q: "Towing mirrors are required when:",
        options: ["Any trailer is being towed", "The trailer is wider than the towing vehicle", "The trailer exceeds 750 kg", "Towing at night"],
        correct: 1,
        explain: "If the trailer is wider than the car, the standard mirrors no longer give an adequate view down each side, so extension mirrors are needed.",
      },
      {
        q: "The BE practical test includes which of these, in addition to on-road driving?",
        options: ["Coupling and uncoupling the trailer, and a reversing manoeuvre", "A written examination on trailer law", "An emergency stop with a loaded trailer", "A motorway driving section"],
        correct: 0,
        explain: "Coupling and uncoupling, a reversing exercise into a marked area, and vehicle safety questions on trailer roadworthiness — alongside the on-road drive.",
      },
      {
        q: "An unbraked light trailer must not exceed a maximum authorised mass of:",
        options: ["500 kg", "750 kg", "1,000 kg", "1,500 kg"],
        correct: 1,
        explain: "750 kg including its load. Anything heavier must have its own braking system.",
      },
      {
        q: "Advising a pupil on loading a trailer, the noseweight should be:",
        options: ["As light as possible to reduce strain on the towbar", "Concentrated entirely at the rear of the trailer", "Positioned so the load is balanced slightly ahead of the axle, within the towbar's rated noseweight", "Irrelevant provided the total weight is legal"],
        correct: 2,
        explain: "Weight slightly ahead of the axle keeps the trailer stable. Load it tail-heavy and the trailer begins to snake at speed, which is one of the most common causes of towing accidents.",
      },
      {
        q: "A category C licence is required for a goods vehicle with a MAM exceeding:",
        options: ["2,000 kg", "3,500 kg", "5,000 kg", "7,500 kg"],
        correct: 1,
        explain: "Over 3,500 kg needs category C. C1 covers 3,500 to 7,500 kg. Category B tops out at 3,500 kg with up to eight passenger seats.",
      },
      {
        q: "A trailer begins to snake at speed. The driver should:",
        options: ["Brake firmly to bring it under control", "Accelerate to pull the trailer straight", "Ease off the accelerator gently and hold the steering steady", "Steer sharply against the swing"],
        correct: 2,
        explain: "Ease off and let speed fall while holding the wheel steady. Braking hard or steering against it usually amplifies the oscillation. Afterwards, stop and check the loading.",
      },
      {
        q: "Before a journey with a trailer, a driver should check the tyre pressures on:",
        options: ["Both the towing vehicle and the trailer", "The towing vehicle only", "The trailer only", "Neither, unless the trailer is loaded"],
        correct: 0,
        explain: "Both. Trailer tyres often sit unused for months, and they lose pressure and perish with age even when the tread looks fine.",
      },
      {
        q: "Category B entitles the holder to drive a vehicle carrying a maximum of how many passengers, excluding the driver?",
        options: ["4", "8", "6", "12"],
        correct: 1,
        explain: "Up to eight passenger seats plus the driver, with a MAM up to 3,500 kg. More than eight passengers takes it into category D1 or D.",
      },
      {
        q: "Stopping distances when towing a loaded trailer are:",
        options: ["The same as without a trailer", "Shorter, because of the extra braking surfaces", "Only affected in wet weather", "Longer, because of the additional mass being carried"],
        correct: 3,
        explain: "The extra mass has to be brought to rest by the same brakes, so separation distances need to grow accordingly. That's a key point to teach before a pupil's first tow.",
      },
    ],
  },

  {
    id: "adi-exp-pedagogy",
    title: "Pedagogy — Teaching & Learning",
    questions: [
      {
        q: "Intrinsic motivation in a learner driver comes from:",
        options: ["The learner's own satisfaction in mastering the skill", "Pressure from family to pass quickly", "The cost already spent on lessons", "A test date already booked"],
        correct: 0,
        explain: "Intrinsic motivation comes from within — genuine interest and the satisfaction of improving. Extrinsic motivation comes from outside: a booked test, a job requirement, family pressure. Intrinsic sustains learning far better.",
      },
      {
        q: "'Chaining' or linking, as a form of learning, describes:",
        options: ["Repeating a single action until it becomes automatic", "Associating a word with a physical control", "Learning by watching another driver", "Joining a sequence of separately learned actions into one smooth operation"],
        correct: 3,
        explain: "Moving off is a chain: mirrors, signal, clutch, gas, handbrake, look. Each is learned separately, then linked until the whole sequence runs as one action.",
      },
      {
        q: "Verbal association learning is best illustrated by a pupil who:",
        options: ["Connects the word 'clutch' with the correct pedal without having to think", "Works out a junction problem for themselves", "Copies the instructor's demonstration", "Repeats a manoeuvre until it improves"],
        correct: 0,
        explain: "Verbal association attaches a name to a thing or action, so the instruction 'clutch down' produces the right response without translation. It's why consistent terminology matters from the first lesson.",
      },
      {
        q: "Multiple discrimination learning is demonstrated when a pupil:",
        options: ["Repeats the same manoeuvre correctly several times", "Tells apart similar situations that require different responses", "Remembers a list of road signs in order", "Follows instructions without questioning them"],
        correct: 1,
        explain: "Distinguishing between things that look alike but call for different action — a give way and a stop sign, a zebra and a pelican crossing. It's the step beyond simply naming them.",
      },
      {
        q: "A behavioural objective for a driving lesson should state:",
        options: ["What the pupil will be able to do, and to what standard", "What the instructor intends to cover", "How long the lesson will last", "Which route will be used"],
        correct: 0,
        explain: "An objective describes observable pupil performance and the standard expected — not instructor activity. 'The pupil will emerge safely at T-junctions without prompting' can be judged at the end; 'cover junctions' cannot.",
      },
      {
        q: "The main purpose of validation at the end of a lesson is to:",
        options: ["Confirm the pupil enjoyed the lesson", "Check whether the lesson objective was actually achieved", "Record the lesson in the EDT logbook", "Decide the fee for the next lesson"],
        correct: 1,
        explain: "Validation tests the objective: did the pupil reach the standard set at the start? It's what turns a lesson into a measurable step rather than an hour of driving.",
      },
      {
        q: "A diagnostic assessment lesson is used primarily to:",
        options: ["Decide whether a pupil is ready for test", "Establish a new pupil's existing level of skill and knowledge", "Correct a specific fault", "Satisfy an RSA record-keeping requirement"],
        correct: 1,
        explain: "It finds out where a pupil actually is, so instruction starts at the right level. Teaching above their level loses them, and below it wastes their money.",
      },
      {
        q: "Closed questions are most appropriate when an instructor wants to:",
        options: ["Explore how a pupil is reasoning", "Encourage a pupil to talk at length", "Confirm a specific fact quickly", "Assess attitude toward risk"],
        correct: 2,
        explain: "Closed questions confirm facts and can be answered in a word. Open questions reveal reasoning. A lesson needs both, used deliberately rather than by habit.",
      },
      {
        q: "Asking a question while a pupil is negotiating a busy junction is poor technique because:",
        options: ["It wastes lesson time", "Pupils cannot hear clearly at speed", "It adds to the pupil's mental workload at the point of highest demand", "It is prohibited by the RSA"],
        correct: 2,
        explain: "Attention is finite. Loading a question onto a pupil who is already at capacity degrades both the answer and the driving. Question before or after, not during.",
      },
      {
        q: "A pupil who is visibly nervous at the start of a lesson is best helped by:",
        options: ["Starting with something they can already do well, in a quiet area", "Moving straight to a challenging task to build confidence", "Telling them there is nothing to be nervous about", "Shortening the lesson"],
        correct: 0,
        explain: "Early success settles a nervous pupil and gets them driving rather than worrying. Dismissing the feeling doesn't remove it, and a hard task while anxious usually confirms their fear.",
      },
      {
        q: "Non-verbal signs an instructor should watch for in a pupil include:",
        options: ["Grip on the wheel, posture, hesitation and where the eyes are looking", "Only what the pupil says about their confidence", "The pupil's punctuality", "Their performance on the previous lesson"],
        correct: 0,
        explain: "A white-knuckle grip, a fixed stare at the bonnet or a rigid posture say more about a pupil's state than their answer to 'are you alright?'. They also tell you when to ease off.",
      },
      {
        q: "'Transfer of learning' describes:",
        options: ["Moving a pupil to a different instructor", "Passing knowledge from instructor to pupil", "Applying a skill learned in one situation to a new but related one", "A pupil teaching another learner"],
        correct: 2,
        explain: "A pupil who has learned to emerge at a quiet T-junction transferring that to a busy one. Lessons should be structured so transfer is likely rather than left to chance.",
      },
      {
        q: "When a pupil answers a question incorrectly, the most useful instructor response is to:",
        options: ["Give the correct answer immediately and move on", "Ask a follow-up question that leads them toward the right answer", "Repeat the same question more slowly", "Note it and return to it at the end of the course"],
        correct: 1,
        explain: "A follow-up question keeps the pupil thinking and shows you where the misunderstanding actually is. Supplying the answer ends the process with the gap still in place.",
      },
      {
        q: "Adults differ from younger learners in that they typically:",
        options: ["Learn faster in every respect", "Prefer instruction without explanation", "Bring existing experience and want to know why something is done", "Need less practice to reach test standard"],
        correct: 2,
        explain: "Adults arrive with experience and expect reasons. 'Because I said so' works poorly; explaining the purpose of a routine gets a far better response and better retention.",
      },
      {
        q: "A demonstration is most effective when it is:",
        options: ["Performed at normal speed without interruption", "Repeated three times before the pupil attempts it", "Given at the end of the lesson", "Preceded by an explanation of what to watch for, then performed with commentary"],
        correct: 3,
        explain: "Without knowing what to attend to, a pupil watches a skilled driver and takes away very little. Telling them what to watch for turns observation into learning.",
      },
      {
        q: "Feedback given to a pupil is most effective when it is:",
        options: ["Specific, timely and focused on the action rather than the person", "Delivered entirely at the end of the lesson", "Limited to what went wrong", "Given in writing"],
        correct: 0,
        explain: "'Your observation at that junction was late' is usable. 'That was careless' is a judgement about them, and it produces defensiveness rather than improvement.",
      },
      {
        q: "A pupil's 'learning plateau' is best described as:",
        options: ["The point at which they have reached their maximum ability", "The stage at which they are ready for test", "A loss of interest in lessons", "A period of little apparent progress despite continued practice"],
        correct: 3,
        explain: "A normal stage, not a ceiling. Consolidating, varying the approach or changing the environment usually moves a pupil through it. Treating it as a limit is a self-fulfilling mistake.",
      },
      {
        q: "In fault assessment, the three steps an instructor works through are:",
        options: ["Observe, record, report", "Question, demonstrate, repeat", "Warn, correct, re-test", "Identify, analyse, remedy"],
        correct: 3,
        explain: "Identify what went wrong, analyse why it happened, then give the remedy. Skipping the analysis produces correction that treats a symptom while the cause stays put.",
      },
      {
        q: "A serious fault, in the context of fault assessment, is one which:",
        options: ["The pupil repeats more than twice", "Has potential to cause danger to the pupil or another road user", "Occurs during a manoeuvre", "The pupil cannot explain"],
        correct: 1,
        explain: "Potential danger is what raises a fault's seriousness, not how often it happens. A single badly judged emergence matters more than a dozen slightly rough gear changes.",
      },
      {
        q: "Perception, in the context of driver training, refers to:",
        options: ["How well the pupil can see", "The pupil's opinion of their own ability", "The process of interpreting what is sensed and giving it meaning", "The instructor's judgement of the pupil"],
        correct: 2,
        explain: "Seeing is not perceiving. A pupil may look directly at a hazard and not recognise it as one. Developing perception — not just observation — is what hazard training is really about.",
      },
      {
        q: "Briefing a pupil before a new manoeuvre should normally happen:",
        options: ["Stationary, in a quiet location, before the manoeuvre is attempted", "While driving toward the exercise area", "After a first attempt, so the pupil has context", "Only if the pupil requests it"],
        correct: 0,
        explain: "A pupil cannot absorb a new briefing while also controlling the car. Stationary and quiet means the explanation lands before their attention is needed elsewhere.",
      },
      {
        q: "An instructor who talks for most of the lesson is most likely to:",
        options: ["Ensure thorough coverage of the syllabus", "Reduce the pupil's opportunity to think and practise", "Build the pupil's confidence", "Satisfy RSA lesson requirements"],
        correct: 1,
        explain: "Instruction is not the same as talking. Beyond a point, commentary crowds out the pupil's own decision-making — and decisions are the thing being trained.",
      },
      {
        q: "The recap at the start of a lesson mainly serves to:",
        options: ["Fill time while driving to the training area", "Link the previous lesson to this one and check retention", "Allow the instructor to plan the route", "Demonstrate the instructor's knowledge"],
        correct: 1,
        explain: "It connects the sessions into a course rather than a series of unrelated hours, and shows you what survived the gap since last time.",
      },
      {
        q: "Setting a lesson objective that is too ambitious for a pupil's current level is likely to:",
        options: ["Accelerate their progress", "Have no effect provided the instructor is patient", "Undermine confidence and produce repeated failure", "Reduce the number of lessons required"],
        correct: 2,
        explain: "Objectives should stretch a pupil slightly, not overwhelm them. Repeated failure teaches a pupil that they cannot do it, which then has to be undone.",
      },
    ],
  },

  {
    id: "adi-exp-mechanics",
    title: "Mechanical Knowledge",
    questions: [
      {
        q: "The purpose of the differential in the transmission is to:",
        options: ["Increase engine torque at low speed", "Allow the driven wheels to rotate at different speeds when cornering", "Disconnect drive when changing gear", "Balance the crankshaft"],
        correct: 1,
        explain: "On a bend the outer wheel travels further than the inner one. Without a differential the wheels would fight each other, scrubbing tyres and stressing the drivetrain.",
      },
      {
        q: "Synchromesh in a gearbox exists to:",
        options: ["Match the speeds of gear wheel and collar before they engage", "Prevent the gearbox overheating", "Lock the gearbox in neutral when stationary", "Reduce the effort needed to press the clutch"],
        correct: 0,
        explain: "A conical ring brings the gear wheel and sliding collar to the same speed before they lock together, which is why modern gearboxes select cleanly without double-declutching.",
      },
      {
        q: "A constant velocity joint on a front-wheel-drive car allows:",
        options: ["Power to be transmitted while the wheel steers and moves with the suspension", "The wheels to rotate at different speeds", "The driveshaft to slip under heavy load", "The gearbox to be disconnected from the engine"],
        correct: 0,
        explain: "It carries drive to a wheel that is simultaneously steering and moving up and down. A clicking noise on full lock is the classic sign of a worn CV joint and split boot.",
      },
      {
        q: "An anti-roll bar works by:",
        options: ["Linking the wheels on an axle so one resists the other's vertical movement", "Stiffening the springs at high speed", "Damping the oscillation of the spring", "Preventing the body contacting the wheels"],
        correct: 0,
        explain: "Linking the two sides means the bar twists when one wheel rises relative to the other, resisting body roll in a corner. It's separate from the spring and the damper.",
      },
      {
        q: "The damper, or shock absorber, actually:",
        options: ["Absorbs the impact of a bump", "Supports the weight of the vehicle", "Maintains tyre pressure over rough ground", "Controls the rate at which the spring releases absorbed energy"],
        correct: 3,
        explain: "The spring absorbs the shock; the damper stops it bouncing back repeatedly. Without it the car would oscillate after every bump and lose tyre contact with the road.",
      },
      {
        q: "A simple test for worn dampers is to:",
        options: ["Check the tyre pressures", "Listen for a knocking noise when braking", "Measure tread depth across the tyre", "Push down firmly on one corner and release — it should settle, not continue bouncing"],
        correct: 3,
        explain: "Continued bouncing after release points to a damper that has lost fluid or has a worn piston. Uneven ride height at one corner suggests a weak or broken spring instead.",
      },
      {
        q: "Brake fade during a long descent is caused by:",
        options: ["Air entering the hydraulic system", "Brake fluid leaking past the seals", "Worn wheel bearings", "Heat build-up reducing the friction between pads and disc"],
        correct: 3,
        explain: "Continuous braking converts motion into heat faster than it can dissipate, and the friction material becomes less effective. The remedy is engine braking in a lower gear, not harder pedal pressure.",
      },
      {
        q: "Why should a driver select a low gear before a long descent rather than during it?",
        options: ["It reduces fuel consumption", "Engine braking then controls speed, avoiding continuous use of the footbrake", "The gearbox cannot change down on a slope", "It prevents the clutch overheating"],
        correct: 1,
        explain: "Getting the gear in early lets engine compression hold the car back, so the brakes are used in short applications rather than continuously — which is what prevents fade.",
      },
      {
        q: "The turbocharger in a modern engine works by:",
        options: ["Using exhaust gas to drive a compressor that forces more air into the cylinders", "Increasing the compression ratio mechanically", "Injecting additional fuel at high revs", "Reducing exhaust back pressure only"],
        correct: 0,
        explain: "Exhaust energy that would otherwise be wasted drives a turbine, which forces more air in. More air allows more fuel to be burned, so a smaller engine produces more power.",
      },
      {
        q: "A driver reports the steering pulls to one side under braking. The most likely cause is:",
        options: ["Low tyre pressure on one rear wheel", "A worn clutch", "A seized slave cylinder or contaminated pads on one side", "Incorrect headlight alignment"],
        correct: 2,
        explain: "Uneven braking force across an axle pulls the car. Common causes are a seized cylinder, oil-contaminated pads or a warped disc on one side. It needs investigating, not compensating for.",
      },
      {
        q: "Engine oil performs which of these functions in addition to lubrication?",
        options: ["It cools the brakes", "It filters air entering the engine", "It cools, cleans, and helps seal the pistons against the cylinder walls", "It maintains battery charge"],
        correct: 2,
        explain: "Oil carries heat away, carries combustion deposits to the filter, prevents corrosion and helps seal the gap between piston rings and cylinder wall. Lubrication is only part of the job.",
      },
      {
        q: "A multigrade oil rated 15W-40 means it:",
        options: ["Must be changed every 15,000 to 40,000 km", "Contains 15% additives and 40% base oil", "Is suitable only between 15°C and 40°C", "Behaves like a thin oil when cold and a thicker oil when hot"],
        correct: 3,
        explain: "The W figure is its cold-weather viscosity, the second its viscosity at operating temperature. The point is to circulate quickly on a cold start while still protecting once hot.",
      },
      {
        q: "The coolant expansion tank exists to:",
        options: ["Take up coolant that expands as it heats, and return it as the engine cools", "Store spare coolant for topping up", "Separate antifreeze from water", "Pressurise the cooling system"],
        correct: 0,
        explain: "Coolant expands when hot and has to go somewhere. As the engine cools the contents are drawn back into the radiator. It is not simply a reservoir.",
      },
      {
        q: "A driver should top up coolant only when the engine is cool because:",
        options: ["Hot coolant is less effective", "The thermostat will stick open", "The system is pressurised and opening it hot can cause severe scalding", "It would dilute the antifreeze"],
        correct: 2,
        explain: "A hot system is under pressure and releasing the cap can eject boiling coolant and steam. Antifreeze is also poisonous, which is worth mentioning to pupils with children or pets.",
      },
      {
        q: "Tyre aspect ratio, as in 195/65 R15, refers to:",
        options: ["The tyre's height as a percentage of its width", "The rim diameter in inches", "The maximum load rating", "The tread depth when new"],
        correct: 0,
        explain: "65 means the sidewall height is 65% of the 195 mm width. R indicates radial construction and 15 the rim diameter in inches.",
      },
      {
        q: "A space-saver spare tyre should be used:",
        options: ["Only to reach a repair centre, at reduced speed", "As a permanent replacement if the tread is good", "On the front axle only", "Only in dry conditions"],
        correct: 0,
        explain: "It's a get-you-there tyre with a speed restriction, usually 80 km/h, marked on the wheel. It handles differently from a full-size tyre and should be replaced promptly.",
      },
      {
        q: "The alternator differs from a dynamo in that it:",
        options: ["Runs from the timing belt rather than the fan belt", "Requires no drive belt at all", "Produces current at engine idle speed as well as at higher revs", "Charges the battery only when the engine is off"],
        correct: 2,
        explain: "An alternator generates usable current at low engine speeds, which matters in traffic when a dynamo would leave the battery discharging while the engine runs.",
      },
      {
        q: "The purpose of the glow plug warning light in a diesel engine is to indicate that:",
        options: ["The engine oil is too cold to circulate", "The combustion chambers are being pre-heated before starting", "The diesel particulate filter is regenerating", "The fuel filter needs draining"],
        correct: 1,
        explain: "Diesel ignites by compression, and a cold engine needs help. Cranking before the light goes out gives a hard start and strains the starter and battery.",
      },
      {
        q: "A vehicle fitted with power-assisted steering should not be operated with the engine off because:",
        options: ["The steering lock will engage", "The steering column will collapse", "The wheels will not self-centre", "The assistance is hydraulic and the pump is engine-driven — damage can result"],
        correct: 3,
        explain: "No engine means no pump, so the steering is heavy and dry-steering in that state can damage the system. The same is true when the PAS fluid level is below minimum.",
      },
      {
        q: "Regenerative braking in an electric or hybrid vehicle:",
        options: ["Uses the friction brakes to charge the battery", "Increases braking distance", "Only operates below 20 km/h", "Turns the motor into a generator, recovering energy that would be lost as heat"],
        correct: 3,
        explain: "Under deceleration the motor acts as a generator, feeding charge back to the battery. It also means far less friction brake wear than on a conventional car.",
      },
      {
        q: "'Tracking' or wheel alignment being out is most easily recognised by:",
        options: ["A vibration through the steering at speed", "A knocking noise over bumps", "Poor fuel economy alone", "Excessive wear on one edge of the tread"],
        correct: 3,
        explain: "Misalignment scrubs one shoulder of the tyre. A vibration at speed is usually wheel balance instead, and knocking over bumps points at suspension joints.",
      },
    ],
  },

  {
    id: "adi-exp-procedure",
    title: "Test Procedure, Law & Documentation",
    questions: [
      {
        q: "During the pre-drive checks on a driving test, a candidate may be asked to:",
        options: ["Change a wheel", "Demonstrate an emergency stop", "Reverse into a parking bay", "Identify vehicle controls and answer questions on roadworthiness checks"],
        correct: 3,
        explain: "The tester asks about the controls and basic roadworthiness before the drive begins. It's a section candidates lose marks on simply because they revise driving and not the car.",
      },
      {
        q: "A candidate who arrives for a driving test in a vehicle without a valid NCT certificate will:",
        options: ["Be allowed to proceed with a warning", "Be given 24 hours to produce the certificate", "Have the test refused and the fee forfeited", "Be tested in the examiner's vehicle"],
        correct: 2,
        explain: "The vehicle must be roadworthy, taxed, insured and, where applicable, have a valid NCT. The test will not go ahead without it, and the fee is normally lost.",
      },
      {
        q: "The purpose of the driving test report form given to a candidate is to:",
        options: ["Provide a legal record for insurance purposes", "Confirm the candidate's identity", "Show which aspects were faulted and how those faults were graded", "Record the route taken during the test"],
        correct: 2,
        explain: "It lists the aspects assessed and the grade of any faults recorded. For an instructor it's the clearest possible plan for the next few lessons.",
      },
      {
        q: "An ADI giving instruction must display which of the following on the vehicle?",
        options: ["An L-plate only", "A trading licence from the local authority", "Their ADI certificate, so it is visible from outside the vehicle", "Nothing is required to be displayed"],
        correct: 2,
        explain: "The ADI certificate must be displayed on the vehicle while instruction is being given for reward, so a pupil or a Garda can see the instructor is registered.",
      },
      {
        q: "A pupil asks how long a learner permit is valid for. The answer is:",
        options: ["One year", "Three years", "Five years", "Two years"],
        correct: 3,
        explain: "Two years. A third or subsequent permit may carry conditions, including evidence of a booked test, which is worth flagging to pupils who keep renewing rather than testing.",
      },
      {
        q: "Novice plates, or N-plates, must be displayed by a driver:",
        options: ["For the first year after passing the test", "Until they reach 21 years of age", "For the first two years after passing the test", "Only if they were disqualified previously"],
        correct: 2,
        explain: "Two years from passing, front and rear. Novice drivers also remain on the lower 7-point disqualification threshold and the 20 mg alcohol limit.",
      },
      {
        q: "A driver involved in a collision causing injury must:",
        options: ["Report the collision to a member of An Garda Síochána", "Exchange details and continue the journey", "Notify their insurer within 30 days only", "Move the vehicles before doing anything else"],
        correct: 0,
        explain: "Injury collisions must be reported to the Gardaí. Vehicles should not be moved before that unless they are causing danger, since their positions are evidence.",
      },
      {
        q: "At the scene of a collision, the first priority for any driver who stops is to:",
        options: ["Photograph the vehicles", "Exchange insurance details", "Move the vehicles off the carriageway", "Make the scene safe and check for injuries"],
        correct: 3,
        explain: "Safety first — warning other traffic and preventing a second collision — then casualties. Details and photographs come afterwards, once nobody is in immediate danger.",
      },
      {
        q: "An instructor's responsibility for the safety of a lesson:",
        options: ["Passes to the pupil once they hold a learner permit", "Is shared equally with the pupil's sponsor", "Applies only during EDT lessons", "Remains with the instructor throughout the lesson"],
        correct: 3,
        explain: "The instructor is in charge of the lesson and responsible for its safe conduct, which is why route choice has to match the pupil's current ability rather than the syllabus plan.",
      },
      {
        q: "A pupil wishes to sit a category C theory test having already passed the category B test. They:",
        options: ["Need not sit any further theory test", "Must sit the theory test module for the new category", "Must re-sit the category B test as well", "May sit the practical test without any theory test"],
        correct: 1,
        explain: "Each licence category has its own theory test module. Passing category B does not carry across to truck or bus categories.",
      },
      {
        q: "Motor insurance must, at minimum, cover:",
        options: ["Damage to the policyholder's own vehicle", "Injury to third parties and their property", "Legal costs only", "Theft of the vehicle"],
        correct: 1,
        explain: "Third party cover is the legal minimum. Comprehensive cover adding the policyholder's own vehicle is a commercial product, not a legal requirement.",
      },
      {
        q: "A person driving with a licence that has expired:",
        options: ["Commits no offence within the first 12 months", "Is driving without a licence, and their insurance may be affected", "May drive to and from a renewal appointment only", "Commits an offence only if involved in a collision"],
        correct: 1,
        explain: "An expired licence is no licence, and an insurer may decline cover as a result — which turns an administrative lapse into a very expensive one.",
      },
      {
        q: "A driving test candidate whose vehicle breaks down during the test will normally:",
        options: ["Be failed automatically", "Complete the test in the examiner's vehicle", "Be given the result based on performance up to that point", "Have the test terminated, and need to rebook"],
        correct: 3,
        explain: "The test cannot continue without a roadworthy vehicle, so it's terminated and rebooked. It's a good reason to check the car properly before test day.",
      },
      {
        q: "Penalty points remain on a driver's record for:",
        options: ["1 year", "2 years", "3 years", "5 years"],
        correct: 2,
        explain: "Three years from the date they come into effect. A disqualification period does not count toward that three years.",
      },
      {
        q: "The RSA requires that all three stages of the ADI qualification be completed within:",
        options: ["Two years of passing the theory test", "One year of passing the theory test", "Two years of first applying", "There is no time limit"],
        correct: 0,
        explain: "Two years from passing Stage 1. Attempts at Stage 1 itself are unlimited, but passing it starts the clock on Stages 2 and 3.",
      },
      {
        q: "A candidate on the driving test is signalled by a Garda directing traffic, contradicting a green light. They should:",
        options: ["Obey the traffic light", "Stop and wait for the Garda to move", "Obey the Garda", "Proceed with caution regardless"],
        correct: 2,
        explain: "A Garda directing traffic overrides signals and signs. Ignoring that direction is a disregard of a traffic control, which is a Grade 3 fault and an immediate fail.",
      },
    ],
  },
];

export default ADI_EXPANSION;
