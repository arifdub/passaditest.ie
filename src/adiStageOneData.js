/*
  ===========================================================================
  ADI STAGE 1 QUESTION BANK

  ORIGIN: original questions written against the RSA Stage 1 syllabus. The
  section structure follows the four Theory Resource Workbooks because that
  is how the syllabus is conventionally divided — but no question, option or
  explanation is taken or reworded from those books.

  SECTION MAP
    procedure   WB1  hazards, signals, positioning, junctions, hills,
                     overtaking, level crossings, motorways, night, weather
    mechanics   WB2  car controls, road holding, mechanical principles
                     + The Motor Car Mechanical Principles
    vulnerable  WB2  pedestrians and cyclists
    law         WB3  law, licensing, vehicle registration, ADI regulations
    testing     WB3  driving test procedure, forms, teaching disabled drivers
    pedagogy    WB4  communication, lesson structure, learning theory,
                     Q&A technique, fault assessment

  ACCURACY — checked September 2026. Stage 1 is computer-based, 100 questions
  in 90 minutes, sat through Prometric. Sections carry their own pass marks,
  so a good overall score with one weak section is still a fail. Attempts are
  unlimited, but all three stages must be completed within two years of
  passing the theory test. Verify fees and pass marks at rsa.ie.
  ===========================================================================
*/

const ADI_STAGE_ONE_CATEGORIES = [
  {
    id: "adi-s1-procedure",
    title: "Road Procedure & Hazard Management",
    blurb: "Hazards, signals, positioning, junctions, motorways",
    questions: [
      {
        q: "An instructor teaching hazard management should present the hazard routine as applying:",
        options: ["Only where a warning sign has been posted", "In any situation presenting actual or potential risk", "Only in built-up areas", "Only once the pupil nears test standard"],
        correct: 1,
        explain: "It applies to any actual or potential risk. Teaching it as sign-triggered leaves a pupil unprepared for the hazards that carry no warning at all — which is most of them.",
      },
      {
        q: "A pupil asks why early positioning matters on approach to a hazard. The best answer is that it:",
        options: ["Makes signalling unnecessary", "Reduces fuel consumption", "Lets others anticipate your actions and gives you the best view", "Means you can hold your original speed"],
        correct: 2,
        explain: "Early positioning does two jobs: it opens up your view, and it tells other road users what you intend in time for them to act on it.",
      },
      {
        q: "Signals given by a driver are best described to a pupil as:",
        options: ["Information about intention, conferring no right of way", "Instructions other road users must obey", "A legal requirement before every manoeuvre", "A substitute for observation"],
        correct: 0,
        explain: "A signal informs; it does not instruct and confers no priority. Pupils who think a signal buys right of way will pull into gaps that were never theirs.",
      },
      {
        q: "Which of these is an example of unnecessary signalling?",
        options: ["Signalling left before pulling in beyond a side road", "Signalling right before passing a parked vehicle", "Signalling left when moving off with no other road user in sight", "Signalling left on approach to a motorway exit"],
        correct: 2,
        explain: "A signal with no audience achieves nothing, and signalling regardless of circumstance stops a pupil thinking about who the signal is for. That judgement is the skill.",
      },
      {
        q: "Approaching a left-hand bend with a restricted view, the position giving the best view is:",
        options: ["Towards the centre of your own lane", "Tight to the nearside kerb", "Straddling the centre line", "The middle of the road"],
        correct: 0,
        explain: "Moving out within your lane opens the sightline round a left-hand bend; keeping left does the same on a right-hander. The vehicle stays inside its own lane either way.",
      },
      {
        q: "'Under acceleration' through a bend means:",
        options: ["Accelerating hard as you turn in", "Coasting with the clutch down", "The engine doing just enough work to drive the car round", "Braking gently through the bend"],
        correct: 2,
        explain: "Enough throttle to keep the car settled and the weight balanced, not enough to increase speed. Coasting reduces control, which is why it is taught against.",
      },
      {
        q: "Parking facing downhill, the correct procedure is:",
        options: ["Wheels right, handbrake on, first gear", "Wheels straight, handbrake on, neutral", "Wheels left, handbrake on, reverse gear", "Wheels left, handbrake off, first gear"],
        correct: 2,
        explain: "Facing downhill: wheels left so the kerb stops any roll, reverse gear so compression opposes forward movement. Facing uphill with a kerb it is the mirror image.",
      },
      {
        q: "A pupil is being overtaken by a vehicle making slow progress. Advise them to:",
        options: ["Accelerate to discourage it", "Ease off and allow the overtaking vehicle in", "Move onto the hard shoulder", "Flash the headlights"],
        correct: 1,
        explain: "Ease off and keep as far left as is safe so they can complete the manoeuvre. Accelerating extends their time on the wrong side of the road, which is where the danger is.",
      },
      {
        q: "On a motorway, illuminated red signals above a lane mean:",
        options: ["Reduce speed and proceed with caution", "The lane is for overtaking only", "Roadworks ahead in that lane", "Do not proceed further in that lane"],
        correct: 3,
        explain: "Red means do not proceed in that lane. Amber signals give advisory or mandatory information such as speed limits or closures ahead.",
      },
      {
        q: "The safest lane for routine driving on a three-lane motorway is:",
        options: ["Lane two, the middle lane", "Lane three, the right-hand lane", "Whichever has least traffic", "Lane one, the left-hand lane"],
        correct: 3,
        explain: "Lane one. Lanes two and three are for overtaking, returning left as soon as practicable. Middle-lane occupation reduces road capacity and pushes others into riskier moves.",
      },
      {
        q: "At an unattended level crossing with user-operated gates, the correct procedure is:",
        options: ["Open one gate, drive through, then open the second", "Drive through slowly without stopping if no train is visible", "Open the gates at both sides, drive across, then close both", "Sound the horn and proceed"],
        correct: 2,
        explain: "Stop, get out, look and listen both ways, open both gates, drive across, close both behind you. Opening only the near gate risks being trapped on the crossing.",
      },
      {
        q: "Before entering a tunnel, a driver should:",
        options: ["Switch on full beam", "Increase speed to reduce time inside", "Switch off the radio", "Remove sunglasses and switch on dipped headlights"],
        correct: 3,
        explain: "Sunglasses off so the eyes adjust, dipped headlights on, radio tuned to the tunnel's break-in frequency where provided. Fuel level is worth checking too.",
      },
      {
        q: "A pupil asks how far ahead to look on a motorway. The most useful guidance is:",
        options: ["Well beyond the vehicle in front, using mirrors frequently", "To the vehicle immediately ahead", "To the next countdown marker", "As far as the headlights reach"],
        correct: 0,
        explain: "Reading traffic well beyond the car in front gives early warning of brake lights, lane closures and congestion. Fixating on the vehicle ahead removes all that warning time.",
      },
      {
        q: "Teaching separation distance in fog, an instructor should stress that:",
        options: ["The distance you can see to be clear is the only distance you can plan to stop within", "Following the tail lights ahead is a safe guide to the layout", "The two-second rule applies unchanged", "Hazard lights should be left on throughout"],
        correct: 0,
        explain: "Following tail lights gives false security and usually means driving too close. The principle is unchanged but much longer in practice: stop within the distance you can see to be clear.",
      },
    ],
  },

  {
    id: "adi-s1-mechanics",
    title: "Vehicle Controls & Mechanical Knowledge",
    blurb: "Controls, engine, transmission, brakes, tyres, electrics",
    questions: [
      {
        q: "The four strokes of the Otto cycle, in order, are:",
        options: ["Compression, induction, ignition, exhaust", "Induction, ignition, compression, exhaust", "Ignition, induction, compression, exhaust", "Induction, compression, ignition, exhaust"],
        correct: 3,
        explain: "Induction, compression, ignition, exhaust. The piston travels up and down twice per complete cycle, while the inlet and exhaust valves each open only once.",
      },
      {
        q: "The camshaft rotates at what speed relative to the crankshaft?",
        options: ["Half the speed", "The same speed", "Twice the speed", "Four times the speed"],
        correct: 0,
        explain: "Half crankshaft speed, achieved by the crankshaft sprocket having half the teeth of the camshaft sprockets. Hence the valves open once per two crankshaft revolutions.",
      },
      {
        q: "A typical four-cylinder engine firing order is:",
        options: ["1-3-4-2", "1-2-3-4", "1-4-2-3", "4-3-2-1"],
        correct: 0,
        explain: "1-3-4-2 is typical. Staggering the order keeps the crankshaft turning smoothly and the engine balanced — the cylinders cannot all be on the same stroke at once.",
      },
      {
        q: "The purpose of the catalytic converter is to:",
        options: ["Convert partly burned fuel and harmful gases into water, carbon dioxide and nitrogen", "Increase power at high revs", "Reduce exhaust noise", "Filter sediment from the fuel line"],
        correct: 0,
        explain: "It completes combustion chemically. It must reach operating temperature to work, which is why very short journeys pollute most, and it is damaged by leaded fuel or push-starting.",
      },
      {
        q: "A dual-circuit hydraulic braking system is designed so that:",
        options: ["The handbrake and footbrake work independently", "The brakes work without engine assistance", "Front and rear brakes wear evenly", "If one circuit leaks, braking remains on at least two wheels"],
        correct: 3,
        explain: "Split diagonally or in an 'L' pattern so a single leak cannot remove all braking. It is a fail-safe arrangement, not a performance feature.",
      },
      {
        q: "A pupil reports the brake pedal feels spongy. The most likely cause is:",
        options: ["Worn brake pads", "A seized handbrake cable", "Over-inflated tyres", "Air or water vapour in the hydraulic fluid"],
        correct: 3,
        explain: "Sponginess indicates air or water vapour, which compresses where fluid does not. Brake fluid absorbs moisture over time, which is why it needs periodic replacement.",
      },
      {
        q: "ABS is best explained to a pupil as a system that:",
        options: ["Shortens stopping distances on every surface", "Removes the need to brake early", "Prevents skidding on ice", "Prevents wheels locking so the driver retains steering control"],
        correct: 3,
        explain: "It prevents wheel lock so you can still steer. It does not shorten stopping distances on loose or icy surfaces — sometimes the reverse — and will not prevent a speed-induced skid.",
      },
      {
        q: "The function of the thermostat in the cooling system is to:",
        options: ["Drive the water pump", "Operate the electric fan", "Keep coolant out of the radiator until the engine reaches operating temperature", "Pressurise the expansion tank"],
        correct: 2,
        explain: "It keeps coolant from the radiator while the engine warms. Thermostats usually fail closed, causing rapid overheating because coolant can no longer circulate through the radiator.",
      },
      {
        q: "Excessive wear on one edge only of a tyre most likely indicates:",
        options: ["Misaligned wheels", "Under-inflation", "Over-inflation", "Worn brake pads"],
        correct: 0,
        explain: "One edge points to alignment. Both edges indicates under-inflation and centre wear over-inflation — a useful diagnostic distinction to teach.",
      },
      {
        q: "Cross-ply and radial tyres must not be mixed on the same axle because:",
        options: ["Their different construction adversely affects handling", "They wear at different rates", "It invalidates the NCT only", "Cross-ply tyres are illegal in Ireland"],
        correct: 0,
        explain: "The two constructions flex differently, so handling becomes unpredictable. If mixing is unavoidable, radials go on the rear — but all of one type is the safe answer.",
      },
      {
        q: "'Negative earth' in a car's electrical system means:",
        options: ["The battery has no earth connection", "The negative terminal connects to the metal body, completing circuits", "All circuits run on two separate wires", "The alternator supplies negative current"],
        correct: 1,
        explain: "The body is the return path, so each load needs one wire plus an earth connection. It greatly reduces the wiring in the vehicle.",
      },
      {
        q: "A replacement fuse blows immediately after fitting. The correct advice is:",
        options: ["Fit a higher rating", "Bypass the fuse with wire", "Disconnect the battery for an hour and refit", "Have the system checked by a competent auto electrician"],
        correct: 3,
        explain: "A blown fuse is a symptom; a second confirms a fault. A higher rating or a bypass removes the protection and risks an electrical fire.",
      },
      {
        q: "The purpose of the vacuum servo in the braking system is to:",
        options: ["Add pressure to the master cylinder, reducing pedal effort", "Prevent the rear wheels locking", "Store brake fluid under pressure", "Operate the handbrake automatically"],
        correct: 0,
        explain: "It uses inlet manifold vacuum to assist the driver. Without the engine running there is no assistance — which is why a car being towed needs far heavier pedal pressure.",
      },
      {
        q: "Symptoms of a worn clutch release bearing typically include:",
        options: ["A rasping or squealing noise when the clutch pedal is pushed down", "Engine revving without an increase in road speed", "Judder as the clutch engages", "Difficulty selecting reverse only"],
        correct: 0,
        explain: "A rasping noise on depressing the pedal points to the release bearing. Revving without speed increase is a slipping clutch; judder usually means distorted or oil-contaminated plates.",
      },
    ],
  },

  {
    id: "adi-s1-vulnerable",
    title: "Vulnerable Road Users",
    blurb: "Pedestrians, cyclists, motorcyclists, older and disabled road users",
    questions: [
      {
        q: "A pupil intends to turn left while following a cyclist. Advise them to:",
        options: ["Hold back until the cyclist has cleared the junction", "Overtake the cyclist before the junction", "Move alongside and turn together", "Sound the horn before turning"],
        correct: 0,
        explain: "Overtaking then turning across a cyclist's path is one of the most common serious collisions involving cyclists. Holding back costs seconds and removes the risk.",
      },
      {
        q: "Teaching about convex door mirrors, a pupil should understand that vehicles seen in them:",
        options: ["Appear closer than they are", "Appear smaller and further away than they are", "Appear at the correct distance", "Appear curved but at true distance"],
        correct: 1,
        explain: "A convex mirror widens the field of view at the cost of distorting distance. Pupils misjudge overtaking gaps because of it, so demonstrate rather than just state it.",
      },
      {
        q: "An older pedestrian is crossing slowly ahead as the lights change. The correct response is:",
        options: ["Move off slowly to encourage them", "Wait until they have completed the crossing", "Sound the horn briefly", "Drive around behind them"],
        correct: 1,
        explain: "Wait. Pedestrians already on the crossing retain priority, and an older pedestrian may not be able to speed up even if they wish to.",
      },
      {
        q: "Why teach extra caution around motorcyclists at junctions?",
        options: ["Motorcycles have poorer brakes", "Their narrow profile makes them easy to miss, especially filtering or overtaking", "They are not required to signal", "They cannot legally overtake on the right"],
        correct: 1,
        explain: "A motorcycle is easily hidden behind a windscreen pillar or lost against a busy background. The 'looked but did not see' failure is what a final offside check catches.",
      },
      {
        q: "A pupil approaches a zebra crossing with a central island. They should understand that:",
        options: ["It is one crossing, so give way to pedestrians on either side", "Pedestrians on the far side can be ignored", "The island removes the need to slow", "Each half is treated as a separate crossing"],
        correct: 3,
        explain: "A central island divides a zebra crossing into two. You must give way to pedestrians on your half, though anticipating those approaching from the other side is still good practice.",
      },
      {
        q: "When passing animals on the road, a driver should:",
        options: ["Sound the horn to alert the handler", "Pass as quickly as possible", "Slow down, allow room, and watch for the handler's signals", "Flash headlights to warn oncoming traffic"],
        correct: 2,
        explain: "Animals are frightened by noise and proximity. The person in charge knows the animal's temperament — their signals should be acted on.",
      },
      {
        q: "A driver who has lost the sight of one eye may:",
        options: ["Not drive at all", "Drive only with a companion", "Drive a car, subject to meeting the licensing medical requirements", "Drive only in daylight"],
        correct: 2,
        explain: "Monocular vision does not automatically disqualify a person from driving a car, provided the medical standards for the category are met. Heavier categories differ.",
      },
      {
        q: "A pupil who is profoundly deaf:",
        options: ["May not drive a car", "May drive a car", "May drive only if accompanied", "May drive only an automatic"],
        correct: 1,
        explain: "Deafness is not a bar to driving a car. It changes how you deliver instruction — visual signals and briefing before moving off rather than commentary while driving.",
      },
    ],
  },

  {
    id: "adi-s1-law",
    title: "Law, Licensing & ADI Regulation",
    blurb: "Driver licensing, vehicle documents, ADI scheme, EDT",
    questions: [
      {
        q: "Essential Driver Training for a category B learner consists of:",
        options: ["6 lessons", "12 lessons", "10 lessons", "16 lessons"],
        correct: 1,
        explain: "Twelve EDT lessons delivered by an ADI against a set syllabus and recorded in the learner's logbook. EDT is a minimum, not a complete course.",
      },
      {
        q: "A sponsor, in the context of EDT, is:",
        options: ["The person who pays for the lessons", "The ADI delivering the syllabus", "The RSA official who validates the logbook", "A qualified driver who supervises practice outside lessons and tracks it"],
        correct: 3,
        explain: "A sponsor supervises practice between lessons and records it. Practice between lessons is where EDT content is consolidated.",
      },
      {
        q: "To give driving instruction for reward in Ireland, a person must:",
        options: ["Hold a full licence for two years", "Hold a local authority trading licence", "Be approved by the Revenue Commissioners", "Be registered as an Approved Driving Instructor"],
        correct: 3,
        explain: "Instruction for reward requires ADI registration. The three stages — theory, driving ability, instructional ability — must be completed within two years of passing the theory test.",
      },
      {
        q: "A candidate who has passed Stage 1 must complete the remaining stages within:",
        options: ["One year", "Three years", "Two years", "No time limit"],
        correct: 2,
        explain: "Two years from passing the theory test. Attempts at Stage 1 are unlimited, but the clock on the other two stages starts the day you pass it.",
      },
      {
        q: "After initial registration, an ADI will be check tested:",
        options: ["Only if a complaint is made", "Within the first six months", "Once, within the first twelve months", "For as long as registration continues"],
        correct: 3,
        explain: "Check testing continues throughout registration. It is a standards-maintenance mechanism, not a one-off probation.",
      },
      {
        q: "A vehicle used for driving instruction for reward must:",
        options: ["Have dual controls fitted", "Be insured for tuition purposes", "Have an extra interior mirror", "Display a training certificate"],
        correct: 1,
        explain: "Insurance covering tuition is the legal requirement. Dual controls and an extra mirror are strongly advisable and expected in practice, but insurance is what makes it lawful.",
      },
      {
        q: "The permitted blood alcohol concentration for a learner, novice or professional driver is:",
        options: ["20 mg per 100 ml", "50 mg per 100 ml", "35 mg per 100 ml", "80 mg per 100 ml"],
        correct: 0,
        explain: "20 mg per 100 ml, against 50 mg for other drivers. In practice the safe advice to any pupil is none at all before driving.",
      },
      {
        q: "A learner driver must display:",
        options: ["L-plates front only", "N-plates front and rear", "L-plates only when accompanied", "L-plates front and rear"],
        correct: 3,
        explain: "L-plates front and rear at all times, with an accompanying driver holding a full licence in that category for two years. N-plates apply for two years after passing.",
      },
      {
        q: "Penalty point disqualification for a learner or novice driver occurs at:",
        options: ["5 points", "9 points", "7 points", "12 points"],
        correct: 2,
        explain: "Seven points for learner and novice drivers, against twelve for experienced drivers, reflecting the higher risk in the first years of driving.",
      },
      {
        q: "A driver required to produce documents at a Garda station must do so within:",
        options: ["3 days", "7 days", "14 days", "10 days"],
        correct: 3,
        explain: "Ten days, at a Garda station of the driver's choosing.",
      },
      {
        q: "A person registered to instruct in category B who wishes to instruct in category C must:",
        options: ["Instruct immediately, as B covers all categories", "Hold a category C licence only", "Apply to add that category and qualify for it", "Obtain the vehicle owner's permission"],
        correct: 2,
        explain: "ADI registration is category-specific. Instruction for reward may only be given in the categories a person is registered for.",
      },
      {
        q: "A person on prescribed medication who intends to drive should seek further information:",
        options: ["From their own doctor or pharmacist", "From the driver licensing authority", "From the RSA website only", "From their insurer"],
        correct: 0,
        explain: "The prescriber or pharmacist knows the medication and the patient. Many ordinary medicines, including cold remedies, cause drowsiness.",
      },
    ],
  },

  {
    id: "adi-s1-testing",
    title: "Driving Test Procedure & Documentation",
    blurb: "Test structure, fault marking, forms, reports",
    questions: [
      {
        q: "Under RSA marking guidelines, a candidate fails the driving test if they receive:",
        options: ["One or more Grade 3 faults", "Any Grade 1 fault", "Four or more Grade 1 faults for a single aspect", "Five or more Grade 2 faults overall"],
        correct: 0,
        explain: "A single Grade 3 fails the test. The other routes are four of the same Grade 2 fault on one aspect, or nine or more Grade 2 faults in total. Grade 1 faults do not affect the result.",
      },
      {
        q: "Grade 1 faults on a test report are best described to a pupil as:",
        options: ["Faults that fail the test if repeated three times", "Minor technique slips that do not affect the result", "Dangerous actions requiring intervention", "Faults recorded only in the pre-drive checks"],
        correct: 1,
        explain: "Minor slips, noted but not counted. A report showing only Grade 1 marks is a pass — worth telling nervous pupils, who often assume every mark is fatal.",
      },
      {
        q: "A Grade 3 fault is defined as:",
        options: ["Imperfect but safe driving", "Any fault repeated more than twice", "An action causing or risking danger, or total disregard of a traffic control", "A fault during a manoeuvre only"],
        correct: 2,
        explain: "Danger or potential danger, or ignoring a traffic control — forcing another road user to brake or swerve, moving into a gap that was not there, disregarding a light or Garda signal.",
      },
      {
        q: "A candidate who fails the driving test receives from the tester:",
        options: ["A verbal explanation only", "A copy of the test report with the faults graded", "A referral to a specified instructor", "A guaranteed re-test date"],
        correct: 1,
        explain: "A copy of the report with faults graded. That report is the most useful lesson-planning document an instructor can be handed.",
      },
      {
        q: "A pupil persistently driving too close to the kerb would be marked under:",
        options: ["Control — steering", "Junctions — turning left", "Position — normal driving", "Observation"],
        correct: 2,
        explain: "Road positioning during normal driving. Knowing the heading matters, because the accumulation rules count faults per aspect as well as in total.",
      },
      {
        q: "A candidate who coasts around corners would be marked under:",
        options: ["Control — gears", "Control — clutch", "Progress", "Position"],
        correct: 1,
        explain: "Coasting is a clutch control fault. It reduces control at exactly the point where the engine should be driving the car through the bend.",
      },
      {
        q: "A candidate presenting for a driving test must be able to:",
        options: ["Speak fluent English", "Produce a certificate from an ADI", "Show a first aid qualification", "Produce identification and a current learner permit"],
        correct: 3,
        explain: "Identity and a valid learner permit. A test will not proceed without them, however well prepared the candidate is.",
      },
      {
        q: "During the test a candidate gently touches the kerb with the nearside rear tyre while reversing. They should:",
        options: ["Stop and abandon the exercise", "Continue reversing and steer away", "Pull forward a short distance to straighten, then complete the exercise", "Stop, as the test is already failed"],
        correct: 2,
        explain: "Recovering calmly is correct and is what an examiner wants to see. A light kerb touch is not automatically a failure — mounting the kerb or a dangerous recovery is another matter.",
      },
      {
        q: "Testing a disabled driver, the tester:",
        options: ["Will never ask for hand or arm signals", "Will ask only where the candidate is physically able to give them", "Will always ask for them", "Will conduct the test in a car park"],
        correct: 1,
        explain: "The requirement adapts to the candidate's physical capability. The test assesses safe control of the vehicle as adapted, not a manoeuvre the adaptation makes impossible.",
      },
      {
        q: "A driver who passes in an adapted vehicle receives:",
        options: ["A full unrestricted licence", "A licence restricted to daylight", "A certificate of competence annotated with the adaptations, noted on the licence", "A temporary certificate valid one year"],
        correct: 2,
        explain: "The licence carries codes recording the restrictions and adaptations. Driving outside those terms would be driving otherwise than in accordance with the licence.",
      },
    ],
  },

  {
    id: "adi-s1-pedagogy",
    title: "Instructional Technique & Pedagogy",
    blurb: "Communication, lesson structure, learning theory, fault correction",
    questions: [
      {
        q: "Rapport between instructor and pupil is best described as:",
        options: ["The instructor's authority over the lesson", "A two-way professional relationship of mutual co-operation", "The pupil's confidence in their own ability", "One-way transmission of information"],
        correct: 1,
        explain: "A two-way relationship, and establishing it is the instructor's responsibility. Without it learning slows markedly, because the pupil stops telling you what they don't understand.",
      },
      {
        q: "Barriers to communication described as 'intrinsic' would include:",
        options: ["Traffic noise and a poorly adjusted mirror", "Rain on the windscreen", "The pupil's own anxiety or preoccupation", "An uncomfortable seating position"],
        correct: 2,
        explain: "Intrinsic barriers are internal — worry, distraction, fatigue, attitude toward the instructor. Extrinsic barriers are external, such as noise or weather. They need different remedies.",
      },
      {
        q: "A pupil who has been enthusiastic for several lessons appears to have stopped improving. The likely explanation is:",
        options: ["A learning plateau", "Lost interest", "Readiness for the test", "The limit of their ability"],
        correct: 0,
        explain: "A plateau is a normal stage in skill acquisition, not a ceiling. Varying the approach, changing the route, or consolidating before advancing usually moves a pupil past it.",
      },
      {
        q: "A pupil is not progressing despite well-tried techniques that work for others. You should:",
        options: ["Vary your teaching method", "Persist until transfer of learning occurs", "Advise them to find another instructor", "Suggest they discontinue"],
        correct: 0,
        explain: "The method has to fit the learner. Repeating an approach that has already failed for this pupil tests their patience rather than their ability.",
      },
      {
        q: "The accepted order for teaching cockpit drill is:",
        options: ["Doors, seat, seatbelt, mirrors, fuel", "Doors, seat, steering, seatbelt, mirrors", "Fuel, doors, seat, seatbelt, mirrors", "Seat, doors, mirrors, seatbelt, steering"],
        correct: 1,
        explain: "Doors, seat, steering, seatbelt, mirrors. The order is not arbitrary: the seat must be set before the mirrors, or the mirror settings are wrong the moment the seat moves.",
      },
      {
        q: "A brief question-and-answer session at the start of a lesson mainly serves to:",
        options: ["Reduce driving time", "Recap previous material and gauge retention", "Establish the instructor as more knowledgeable", "Remove the need for lesson objectives"],
        correct: 1,
        explain: "It checks what was retained and tells you where to pitch the lesson. It also involves the pupil actively from the first minute rather than opening with a monologue.",
      },
      {
        q: "The level of verbal instruction given to a pupil should:",
        options: ["Be greatest with a beginner and reduce as proficiency increases", "Stay constant throughout the course", "Be least with a beginner and increase later", "Vary only with traffic conditions"],
        correct: 0,
        explain: "Full talk-through for a beginner, reducing to prompted and then independent practice. The test of readiness is whether they can perform the task unaided.",
      },
      {
        q: "Learning that occurs when a pupil suddenly grasps how several separate elements fit together is:",
        options: ["Signal learning", "Stimulus-response learning", "Trial and error learning", "Insight learning"],
        correct: 3,
        explain: "Insight learning — the moment a pupil stops thinking about clutch, gas and handbrake separately and just moves off. Chaining those elements into one action is the goal of much early instruction.",
      },
      {
        q: "When correcting a driving fault, an instructor should normally:",
        options: ["Correct it immediately in all circumstances", "Identify the fault, analyse the cause, and give remedial action at a suitable moment", "Wait until the end of the lesson for all faults", "Note it without discussion"],
        correct: 1,
        explain: "Identification, analysis, remedy. Timing matters — correcting mid-junction adds pressure at the worst moment, while saving everything to the end loses the context.",
      },
      {
        q: "Open questions are most useful when you want to:",
        options: ["Confirm a specific fact quickly", "Move the lesson along when time is short", "Avoid distracting the pupil", "Check the pupil's understanding and reasoning"],
        correct: 3,
        explain: "Open questions reveal reasoning; closed questions confirm facts. 'Why did you slow there?' tells you far more than 'did you see the sign?', which can be answered by guessing.",
      },
      {
        q: "A pupil asks whether a signal is needed in a particular situation. The best response is to:",
        options: ["Tell them to signal every time", "Help them reason it out — is there anyone to inform, and would it help?", "Tell them signals are optional", "Defer to the end of the lesson"],
        correct: 1,
        explain: "Giving the rule produces compliance; guiding the reasoning produces judgement. Judgement is what they need on test day and afterwards.",
      },
      {
        q: "A demonstration is most effective when the instructor:",
        options: ["Performs the task at normal speed without commentary", "Describes it verbally and leaves the pupil to try", "Explains what will be shown, performs it with commentary, then has the pupil attempt it", "Shows their own style rather than test standard"],
        correct: 2,
        explain: "Brief, demonstrate with commentary, then practise. A demonstration without explanation leaves the pupil watching a skilled driver without knowing which part to attend to.",
      },
      {
        q: "Setting an objective at the start of a lesson primarily:",
        options: ["Satisfies an administrative requirement", "Replaces the lesson recap", "Gives both parties a shared, measurable goal", "Determines the route"],
        correct: 2,
        explain: "A stated objective lets both parties judge at the end whether the lesson achieved anything. Without one, 'how did I do?' has no answer beyond impressions.",
      },
      {
        q: "Praise and encouragement during a lesson should be:",
        options: ["Given constantly to maintain confidence", "Withheld until test standard is reached", "Given in writing at the end", "Specific and genuine, tied to what the pupil actually did well"],
        correct: 3,
        explain: "Non-specific praise stops meaning anything quickly, and pupils notice. Naming what was done well tells them what to repeat, which is the point of feedback.",
      },
    ],
  },
];

export default ADI_STAGE_ONE_CATEGORIES;
