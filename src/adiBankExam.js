/*
  ===========================================================================
  BANK 3 — TOPICS FROM THE REAL STAGE 1 PAPER

  Subjects a candidate reported meeting on the Stage 1 exam in October 2026,
  written up as original questions and filed under the section they belong to:

    · EDT lesson order, full and reduced          → Test Procedure
    · Driving through flood water                 → Road Safety
    · Trailer and combination lengths, BE test
      trailer requirements                         → Category B & BE

  ACCURACY — checked October 2026
  · EDT (S.I. 173/2011, S.I. 9/2019): 12 one-hour lessons. Lessons 1 to 8 are
    taken in sequence; 9 to 12 come after lesson 8, in any order. Reduced EDT
    is lessons 1, 5, 6, 7, 9 and 10 (1, 5, 6, 7 in order, then 9 and 10 in
    either order), for a holder of a full car licence from a country without
    an exchange agreement, held for at least 2 years.
  · Flood water: RSA advice is not to drive through flooded roads; the water
    may be deeper than it looks and hide debris. Through shallow water: first
    gear, slowly, engine speed kept up; afterwards drive slowly with light
    pressure on the brake to dry the brakes, and test them.
  · Lengths: a combination of vehicles must not exceed 18.75 m overall
    (S.I. 5/2003, as quoted by the RSA); over 13 m it must carry rear
    markings or a LONG VEHICLE sign; no more than 4.5 m between the vehicle
    and the trailer.
  · BE test vehicle (RSA): car at least 4.25 m long or four-wheel-drive;
    trailer MAM at least 1,400 kg and not over 3,500 kg, capable of 100 km/h;
    closed box body at least 2.4 m long, as wide and as high as the car;
    presented with a real total mass of at least 800 kg — the RSA's way is 30
    solid concrete blocks (100 × 220 × 450 mm).
  ===========================================================================
*/

const ADI_BANK_EXAM = [
  {
    id: "adi-b3-procedure",
    title: "Driving Test Procedure — EDT",
    questions: [
      {
        q: "Which EDT lesson must a category B learner always take first?",
        options: ["Lesson 1 — car controls and safety checks", "Any lesson the instructor chooses", "Lesson 5", "Lesson 12"],
        correct: 0,
        explain: "Lesson 1 always comes first, in full and reduced EDT alike.",
      },
      {
        q: "Which statement about the order of the 12 EDT lessons is correct?",
        options: [
          "All 12 lessons may be taken in any order",
          "Lesson 1 first, then lessons 2 to 12 in any order",
          "Lessons 1 to 8 are taken in sequence; lessons 9 to 12 follow lesson 8 in any order",
          "Lessons 9 to 12 come first, then lessons 1 to 8 in sequence",
        ],
        correct: 2,
        explain: "1 to 8 in sequence, each only once the instructor is satisfied with the one before. 9 to 12 come after lesson 8 and can be taken in any order.",
      },
      {
        q: "A learner has completed EDT lessons 1 to 6. Which lesson must come next?",
        options: ["Lesson 9", "Any of lessons 7 to 12", "Lesson 7", "Lesson 12"],
        correct: 2,
        explain: "Lessons 1 to 8 run in sequence, so after 6 comes 7, then 8.",
      },
      {
        q: "A learner has completed EDT lessons 1 to 8. Which may they take next?",
        options: ["Lesson 9 only", "Any of lessons 9, 10, 11 or 12", "Lesson 12 only", "None — EDT finishes at lesson 8"],
        correct: 1,
        explain: "Once lesson 8 is done, lessons 9 to 12 can be taken in any order.",
      },
      {
        q: "Which six lessons make up reduced EDT?",
        options: ["1, 2, 3, 4, 5 and 6", "7, 8, 9, 10, 11 and 12", "1, 3, 5, 7, 9 and 11", "1, 5, 6, 7, 9 and 10"],
        correct: 3,
        explain: "Reduced EDT is lessons 1, 5, 6, 7, 9 and 10. Lessons 2, 3, 4, 8, 11 and 12 are excused.",
      },
      {
        q: "In reduced EDT, in what order are the lessons taken?",
        options: [
          "1, 5, 6 and 7 in that order, then 9 and 10 in either order",
          "In any order the learner prefers",
          "9 and 10 first, then 1, 5, 6 and 7",
          "Lesson 1 first, then the other five in any order",
        ],
        correct: 0,
        explain: "The same rule as full EDT: the lessons numbered up to 8 in sequence, then those from 9 to 12 in any order.",
      },
      {
        q: "Who can do reduced (six-lesson) EDT instead of the full 12 lessons?",
        options: [
          "Any learner aged over 25",
          "A learner with a full car licence from a country without a licence exchange agreement with Ireland, held for at least 2 years",
          "A learner who has failed the driving test once",
          "A learner whose sponsor is an Approved Driving Instructor",
        ],
        correct: 1,
        explain: "Reduced EDT is for holders of a non-exchangeable foreign car licence held for at least 2 years.",
      },
    ],
  },
  {
    id: "adi-b3-safety",
    title: "Road Safety — Flood Water",
    questions: [
      {
        q: "You reach a flooded road and can't tell how deep the water is. What is the safest thing to do?",
        options: [
          "Drive through quickly so the engine doesn't stall",
          "Follow closely behind the vehicle in front",
          "Don't drive through it — turn back and find another route",
          "Drive through in a high gear at a steady 30 km/h",
        ],
        correct: 2,
        explain: "The RSA's advice is not to drive through flooded roads: the water may be deeper than it looks and can hide debris or missing covers.",
      },
      {
        q: "If you must drive through shallow flood water, how should you do it?",
        options: [
          "Slowly in first gear, keeping the engine speed up, without making a bow wave",
          "Quickly in third gear, so you don't lose momentum",
          "In neutral, coasting through",
          "At normal speed, braking in the middle to check the depth",
        ],
        correct: 0,
        explain: "Low gear and high revs keep water out of the exhaust; going slowly avoids a bow wave that can swamp the engine or other road users.",
      },
      {
        q: "You have just driven through flood water. What should you do next?",
        options: [
          "Accelerate hard to dry out the engine",
          "Check your mirrors, then test your brakes and drive slowly with light pressure on the brake pedal to dry them",
          "Stop and switch off the engine for ten minutes",
          "Brake hard at normal speed to clear the water",
        ],
        correct: 1,
        explain: "Wet brakes are weak. Light pressure while moving slowly dries them; test them before returning to normal speed.",
      },
      {
        q: "Why is flood water more dangerous than it looks?",
        options: [
          "It only affects older cars",
          "It is only a danger at night",
          "It always drains away within a few minutes",
          "It can be deeper than it appears, hide debris or missing covers, and moving water can sweep a car away",
        ],
        correct: 3,
        explain: "Depth is hard to judge, the surface underneath may be damaged, and moving water exerts far more force than drivers expect.",
      },
      {
        q: "Your engine cuts out while you are driving through deep water. What should you do?",
        options: [
          "Keep trying to restart it until it fires",
          "Don't try to restart it — get yourself to safety and call for help",
          "Push the car through with the engine in gear",
          "Rev the engine hard once it restarts",
        ],
        correct: 1,
        explain: "Restarting can draw water into the engine and wreck it. Safety first, then recovery.",
      },
      {
        q: "Driving through a large puddle beside the footpath, you should:",
        options: [
          "Slow down so you don't soak pedestrians or cyclists, and to avoid aquaplaning",
          "Speed up to get through it quickly",
          "Sound the horn to warn pedestrians to move",
          "Keep your speed — water is no hazard on a tarred road",
        ],
        correct: 0,
        explain: "Splashing pedestrians is careless driving, and standing water can make the tyres lose contact with the road.",
      },
    ],
  },
  {
    id: "adi-b3-categoryb",
    title: "Category B & BE — Trailer Lengths",
    questions: [
      {
        q: "What is the maximum overall length of a vehicle-and-trailer combination?",
        options: ["12 metres", "15 metres", "18.75 metres", "25.25 metres"],
        correct: 2,
        explain: "A combination of vehicles must not exceed 18.75 m overall.",
      },
      {
        q: "A vehicle-and-trailer combination longer than what must carry rear markings or a LONG VEHICLE sign?",
        options: ["7 metres", "10 metres", "13 metres", "18.75 metres"],
        correct: 2,
        explain: "Over 13 m overall, a combination must display rear markings or a LONG VEHICLE sign.",
      },
      {
        q: "What is the maximum distance allowed between a towing vehicle and its trailer?",
        options: ["1.5 metres", "2.5 metres", "4.5 metres", "6 metres"],
        correct: 2,
        explain: "No more than 4.5 m between the vehicle and the trailer.",
      },
      {
        q: "For a BE driving test, the trailer's Maximum Authorised Mass must be:",
        options: [
          "At least 750 kg and not over 2,000 kg",
          "At least 1,400 kg and not over 3,500 kg",
          "At least 3,500 kg",
          "Any weight, as long as it has brakes",
        ],
        correct: 1,
        explain: "The RSA's BE test trailer: MAM at least 1,400 kg and not over 3,500 kg, capable of at least 100 km/h.",
      },
      {
        q: "How is the BE test trailer usually loaded to reach its required real total mass of at least 800 kg?",
        options: [
          "With 30 solid concrete blocks (100 × 220 × 450 mm)",
          "With 10 bags of sand",
          "With water tanks",
          "It is presented empty",
        ],
        correct: 0,
        explain: "The RSA's stated way of reaching the 800 kg is 30 solid concrete building blocks.",
      },
      {
        q: "The trailer for a BE test must be capable of at least what speed?",
        options: ["60 km/h", "80 km/h", "100 km/h", "120 km/h"],
        correct: 2,
        explain: "It must be capable of at least 100 km/h — although once towing, the limit on every road is 80 km/h.",
      },
      {
        q: "Why must the BE test trailer's closed box be at least as wide and as high as the towing car?",
        options: [
          "So it can carry more load",
          "So the candidate can't see through it and must rely on the mirrors, as when towing for real",
          "To reduce wind resistance",
          "So the tester can see the load",
        ],
        correct: 1,
        explain: "With no view through the rear window, the test checks proper use of the mirrors while reversing and manoeuvring.",
      },
    ],
  },
];

export default ADI_BANK_EXAM;
