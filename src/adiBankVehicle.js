/*
  ===========================================================================
  BANK 2 — VEHICLE MAINTENANCE & CATEGORY-SPECIFIC KNOWLEDGE

  Mechanics and Category B & BE towing.

  ORIGIN: original questions. The resource books were used to establish what
  the exam covers — unit lists, topic headings, subject matter — never as a
  source of questions. Nothing here is copied or reworded from them.

  ACCURACY — checked September 2026
  · Minimum car tyre tread depth is 1.6 mm across the central three quarters
    of the tread, around the entire circumference.
  · Irish speed limits: 120 motorway, 100 national, 80 regional, 60 local,
    50 built-up. The local road limit fell from 80 to 60 in February 2025.
  · Anything towing a trailer is limited to 80 km/h on every road, motorway
    included, and may not use the outermost lane of a three-lane motorway.
  · Category B covers a trailer up to 750 kg MAM, or a heavier trailer where
    the combined MAM stays within 3,500 kg. BE covers a combination with a
    MAM over 3,500 kg and up to 7,000 kg.
  · A category B learner permit holder may not tow any trailer.
  Verify against rsa.ie and ndls.ie before each release.
  ===========================================================================
*/

const ADI_BANK_VEHICLE = [
  {
    id: "adi-b2-mechanics",
    title: "Basic Mechanics & Vehicle Maintenance",
    questions: [
      /* ---- Engine ---- */
      {
        q: "In a four-stroke petrol engine, the correct order of the strokes is:",
        options: ["Induction, compression, power, exhaust", "Compression, induction, exhaust, then power", "Power, exhaust, induction, compression", "Induction, power, compression, exhaust"],
        correct: 0,
        explain: "Draw in, squeeze, burn, push out. Each stroke is one movement of the piston, so a full cycle takes two crankshaft revolutions.",
      },
      {
        q: "A four-stroke engine completes one full cycle in how many crankshaft revolutions?",
        options: ["One", "Two", "Three", "Four"],
        correct: 1,
        explain: "Four piston strokes, two up and two down, means two complete turns of the crankshaft per cycle.",
      },
      {
        q: "The main difference between a petrol and a diesel engine is that a diesel:",
        options: ["Uses a spark plug to ignite the fuel", "Draws in a fuel-air mixture and ignites it with a spark plug", "Ignites fuel by the heat of compression rather than a spark", "Runs without engine oil"],
        correct: 2,
        explain: "Compression ignition. Diesel engines compress air hard enough that injected fuel ignites on contact, which is why they have no spark plugs.",
      },
      {
        q: "The purpose of engine oil is to:",
        options: ["Cool the engine only", "Cool the engine, seal the combustion chamber and quieten the valve train at idle", "Increase fuel economy only", "Lubricate moving parts, reduce wear, assist cooling and carry away contaminants"],
        correct: 3,
        explain: "Lubrication is the headline job, but oil also carries heat away and holds combustion by-products in suspension until the next oil change removes them.",
      },
      {
        q: "Checking engine oil level is best done with the vehicle:",
        options: ["On level ground with the engine cold or stopped for several minutes", "Immediately after a long drive", "On a slope with the engine running so that the oil circulates fully around the engine", "With the engine running"],
        correct: 0,
        explain: "Oil needs time to drain back to the sump and the car must be level, or the reading is meaningless.",
      },
      {
        q: "Running an engine with the oil level below minimum is likely to cause:",
        options: ["Improved fuel economy", "Accelerated wear and possible engine seizure", "Reduced emissions", "No measurable effect until the oil level falls below the sump pickup"],
        correct: 1,
        explain: "Below minimum the pump can draw air, which interrupts the oil film. Metal then runs on metal, and seizure follows.",
      },
      {
        q: "The engine cooling system's thermostat:",
        options: ["Measures the outside temperature", "Controls the cabin heater only", "Restricts coolant flow to the radiator until the engine reaches operating temperature", "Prevents the coolant from freezing during cold weather and from boiling in heavy traffic"],
        correct: 2,
        explain: "It lets the engine warm up quickly by holding coolant in the block, then opens to the radiator. A stuck-open thermostat leaves an engine permanently cold and inefficient.",
      },
      {
        q: "Antifreeze in the cooling system:",
        options: ["Only prevents freezing in winter", "Should be drained out and replaced with plain water throughout the summer months", "Is needed only in diesel engines", "Lowers the freezing point, raises the boiling point and inhibits corrosion"],
        correct: 3,
        explain: "It does three jobs year-round, which is why draining it for summer would leave the system open to internal corrosion.",
      },
      {
        q: "A temperature gauge reading consistently high most likely indicates:",
        options: ["A cooling system fault such as low coolant, a failed thermostat or a faulty fan", "The engine is running efficiently and has settled at its ideal operating temperature", "The oil needs changing", "Normal operation in warm weather"],
        correct: 0,
        explain: "Any of those will do it. Continuing to drive risks a warped head or worse, so the right response is to stop and investigate rather than press on.",
      },
      {
        q: "Removing a radiator cap from a hot engine is dangerous because:",
        options: ["The cap may be seized", "The system is pressurised and coolant can erupt as scalding steam", "It will drain the coolant", "It allows air into the cooling system and causes an airlock in the heater matrix"],
        correct: 1,
        explain: "Pressurising the system raises the coolant's boiling point well above 100°C. Releasing that pressure lets it flash to steam instantly.",
      },
      {
        q: "The purpose of the air filter is to:",
        options: ["Filter exhaust gases", "Reduce engine noise", "Prevent airborne dust and grit from entering the engine", "Cool the incoming air before it reaches the cylinders and mixes with fuel"],
        correct: 2,
        explain: "Grit drawn into the cylinders acts as a grinding paste. A blocked filter also restricts airflow, costing power and economy.",
      },
      {
        q: "A catalytic converter:",
        options: ["Increases engine power by improving the flow of exhaust gas out of the cylinders", "Silences the exhaust", "Filters the engine oil", "Converts harmful exhaust gases into less harmful ones"],
        correct: 3,
        explain: "It converts carbon monoxide, unburnt hydrocarbons and oxides of nitrogen into carbon dioxide, water and nitrogen.",
      },
      {
        q: "A diesel particulate filter (DPF) can become blocked if the vehicle is:",
        options: ["Used mainly for short, low-speed journeys where it cannot reach regeneration temperature", "Driven mainly on long motorway journeys at sustained high engine speeds and heavy loads", "Serviced too frequently", "Filled with premium diesel"],
        correct: 0,
        explain: "The filter burns off trapped soot only when hot enough. A diesel used for short urban trips never gets there, and the filter eventually clogs.",
      },
      {
        q: "The timing belt or chain:",
        options: ["Drives the alternator only", "Keeps the crankshaft and camshaft rotating in the correct relationship", "Operates the power steering", "Connects the gearbox output to the driven wheels through the differential"],
        correct: 1,
        explain: "It holds valve opening in step with piston position. On many engines a snapped belt lets pistons meet valves, which is catastrophic.",
      },

      /* ---- Transmission ---- */
      {
        q: "The clutch allows the driver to:",
        options: ["Change the engine's speed independently of the road speed", "Increase braking force", "Disconnect the engine from the gearbox temporarily", "Lock the differential"],
        correct: 2,
        explain: "Breaking the drive briefly is what makes gear changes and a controlled start from rest possible.",
      },
      {
        q: "Riding the clutch means:",
        options: ["Changing gear too quickly", "Starting in second gear", "Using the clutch rather than the brake to control the vehicle's speed on a descent", "Resting a foot on the clutch pedal so it is partly disengaged while driving"],
        correct: 3,
        explain: "Partial engagement makes the friction plate slip continuously, which wears it out and generates heat.",
      },
      {
        q: "A clutch that slips will typically show:",
        options: ["Engine speed rising without a matching increase in road speed", "A grinding noise each time an upward gear change is attempted under load", "Vibration only at idle", "The engine stalling at every stop"],
        correct: 0,
        explain: "A slipping clutch cannot transmit full torque, so the engine revs climb while the car does not accelerate in proportion. It is most obvious in a high gear under load.",
      },
      {
        q: "The purpose of the differential is to:",
        options: ["Increase engine power", "Allow the driven wheels to rotate at different speeds when cornering", "Lock both driven wheels together so they always turn at the same rate", "Change gear automatically"],
        correct: 1,
        explain: "The outer wheel travels further through a bend. Without a differential one wheel would have to scrub or hop.",
      },
      {
        q: "Selecting a lower gear when descending a long hill:",
        options: ["Increases fuel consumption without any compensating safety benefit", "Damages the gearbox", "Uses engine braking to help control speed and reduces brake fade", "Has no effect on braking"],
        correct: 2,
        explain: "Continuous braking down a long descent overheats the brakes until they lose effectiveness. Engine braking shares the work.",
      },
      {
        q: "Brake fade is best described as:",
        options: ["Brake fluid leaking slowly from a corroded pipe or union", "Uneven tyre wear", "The brake pedal becoming stiff", "A loss of braking effectiveness caused by overheating"],
        correct: 3,
        explain: "Overheated friction material stops gripping as well, so the same pedal pressure produces less retardation. It builds gradually, which is what makes it dangerous.",
      },

      /* ---- Brakes ---- */
      {
        q: "A hydraulic braking system works on the principle that:",
        options: ["Pressure applied to a fluid is transmitted equally throughout the system", "Liquids compress under pressure", "Fluid expands when heated", "Air pressure generated by the engine operates the braking system at each wheel"],
        correct: 0,
        explain: "Brake fluid is effectively incompressible, so pedal effort reaches all four wheels. Air in the system compresses instead, which is why a bled system feels firm and a contaminated one feels spongy.",
      },
      {
        q: "A brake pedal that feels spongy most likely indicates:",
        options: ["New brake pads", "Air in the hydraulic system or a fluid leak", "Over-inflated tyres", "A worn clutch"],
        correct: 1,
        explain: "Air compresses where fluid does not, so part of the pedal travel is spent squeezing the bubble rather than applying the brakes.",
      },
      {
        q: "Brake fluid absorbs moisture over time, which is a problem because:",
        options: ["It causes the fluid to freeze and expand in cold weather, which can split a brake pipe", "It makes the pedal too stiff", "Water lowers the boiling point, so the fluid can vaporise under heavy braking", "It discolours the fluid"],
        correct: 2,
        explain: "Vaporised fluid is a gas, and gas compresses. Heavy braking on old fluid can produce a pedal that goes to the floor.",
      },
      {
        q: "The anti-lock braking system (ABS) works by:",
        options: ["Increasing braking force automatically", "Reducing the stopping distance on every road surface and in all weather conditions", "Applying the handbrake in an emergency", "Releasing and reapplying brake pressure rapidly to prevent wheel lock"],
        correct: 3,
        explain: "It keeps the wheels rotating so the tyres retain steering grip. On loose surfaces it can lengthen the stopping distance, which is worth knowing.",
      },
      {
        q: "The main benefit of ABS in an emergency is that it:",
        options: ["Allows the driver to retain steering control while braking hard", "Always shortens the stopping distance whatever the road surface or the conditions", "Removes the need to brake early", "Prevents skidding in all conditions"],
        correct: 0,
        explain: "A locked wheel cannot steer. The benefit is directional control, which is why 'brake hard and steer around it' only works with ABS.",
      },
      {
        q: "When braking in a vehicle with ABS in an emergency, the driver should:",
        options: ["Pump the brake pedal rapidly", "Apply firm continuous pressure and steer as required", "Brake gently so the system is not triggered unnecessarily", "Apply the handbrake at the same time"],
        correct: 1,
        explain: "The system does the pumping far faster than any driver. Pumping the pedal interrupts it and makes things worse.",
      },
      {
        q: "A brake warning light that stays on after the handbrake is released may indicate:",
        options: ["The engine is cold", "A flat tyre", "Low brake fluid or a fault in the braking system", "A blown headlight or brake light bulb somewhere in the circuit"],
        correct: 2,
        explain: "Low fluid usually means either a leak or worn pads. Either way it is a reason to stop and check rather than carry on.",
      },
      {
        q: "Disc brakes are generally preferred to drum brakes at the front because they:",
        options: ["Are cheaper to manufacture", "Work better in wet conditions but offer no advantage on a dry road", "Require no maintenance", "Dissipate heat better and resist fade under repeated braking"],
        correct: 3,
        explain: "An exposed disc sheds heat far better than an enclosed drum, and most braking effort goes to the front as weight transfers forward.",
      },
      {
        q: "The handbrake, or parking brake, normally acts on:",
        options: ["The rear wheels", "All four wheels", "The front wheels", "The transmission only"],
        correct: 0,
        explain: "Rear wheels on most cars, through a separate mechanical or electronic path so it still works if the hydraulic system fails.",
      },
      {
        q: "Increased stopping distance in wet conditions is mainly because:",
        options: ["The brake friction material works considerably less efficiently once it is wet", "Reduced tyre grip on a wet surface lengthens the braking distance", "Drivers react more slowly in rain", "Tyre pressure drops in the rain"],
        correct: 1,
        explain: "The tyre-road interface is where the grip is lost. Stopping distances roughly double in the wet, and can be ten times as long on ice.",
      },

      /* ---- Tyres ---- */
      {
        q: "The minimum legal tread depth for a car tyre in Ireland is:",
        options: ["1.0 mm", "1.6 mm", "2.0 mm", "3.0 mm"],
        correct: 1,
        explain: "1.6 mm, measured across the central three quarters of the tread and around the whole circumference.",
      },
      {
        q: "The minimum tread depth must be present:",
        options: ["At one point on the tyre, measured at the deepest groove anywhere across the tread", "On the outer edges only", "Across the central three quarters of the tread, around the entire circumference", "On at least two tyres"],
        correct: 2,
        explain: "A tyre legal in one place and bald on the shoulder still fails. The requirement is a continuous one.",
      },
      {
        q: "The main purpose of tyre tread is to:",
        options: ["Improve fuel economy by lowering the drag created by the trailer", "Make the tyre last longer by spreading wear across the width", "Reduce tyre noise", "Disperse water from between the tyre and the road"],
        correct: 3,
        explain: "Tread is a drainage system. Without it the tyre floats on the water film instead of contacting the road.",
      },
      {
        q: "Aquaplaning occurs when:",
        options: ["A layer of water lifts the tyre off the road surface", "Tyres are over-inflated", "The brakes overheat in the rain", "The windscreen wipers cannot clear water fast enough to see ahead"],
        correct: 0,
        explain: "Steering and braking both become ineffective because the tyre is no longer touching the road. Easing off the accelerator without braking or steering sharply is the recovery.",
      },
      {
        q: "Under-inflated tyres typically cause:",
        options: ["Wear concentrated in the centre of the tread, a harsher ride and reduced grip in the wet", "Wear on both outer edges, increased fuel consumption and a risk of overheating", "No noticeable effect", "Reduced braking distance"],
        correct: 1,
        explain: "The tyre rolls on its shoulders, flexes more, and builds heat — which is how under-inflation leads to blowouts.",
      },
      {
        q: "Over-inflated tyres typically cause:",
        options: ["Wear on both outer edges", "Even wear across the full width of the tread and a softer ride", "Wear concentrated in the centre of the tread and reduced grip", "Improved ride comfort"],
        correct: 2,
        explain: "The tyre bulges in the middle, so the centre carries the load and wears first while the contact patch shrinks.",
      },
      {
        q: "Wear on one edge of a tyre only usually indicates:",
        options: ["Incorrect tyre pressure on that wheel only", "Normal wear", "Excessive braking", "A wheel alignment or suspension fault"],
        correct: 3,
        explain: "Pressure problems produce symmetrical wear. Wear on one edge alone points at geometry — tracking or a worn suspension component.",
      },
      {
        q: "Tyre pressures should be checked:",
        options: ["When the tyres are cold, before driving any distance", "When the tyres are hot, immediately after a long motorway drive", "Immediately after braking heavily", "Only at a service"],
        correct: 0,
        explain: "Driving heats the air and raises the reading. A cold check is the one the placard figures refer to.",
      },
      {
        q: "Mixing radial and cross-ply tyres on the same axle is:",
        options: ["Recommended for better grip", "Prohibited, because the different constructions handle differently", "Permitted provided the tread depths, pressures and speed ratings all match", "Only an issue at high speed"],
        correct: 1,
        explain: "The two constructions deform differently under load, so the axle behaves unpredictably under cornering and braking.",
      },
      {
        q: "A tyre's speed rating indicates:",
        options: ["How quickly the tyre wears", "The recommended cruising speed", "The maximum speed the tyre is designed to sustain safely", "The minimum road speed at which the tyre generates its full designed grip"],
        correct: 2,
        explain: "Fitting a tyre rated below the vehicle's capability creates a failure risk at speed, and may invalidate insurance.",
      },
      {
        q: "A tyre with a bulge in the sidewall should be:",
        options: ["Re-inflated to the correct pressure and monitored for a week", "Rotated to the rear axle", "Monitored for a few weeks", "Replaced immediately, as the internal structure has failed"],
        correct: 3,
        explain: "A bulge means the casing cords have broken, usually from a kerb impact. It is a blowout waiting for a load.",
      },
      {
        q: "Tyre valve caps serve to:",
        options: ["Keep dirt and moisture out of the valve", "Hold the air in the tyre", "Indicate the correct tyre pressure for that wheel", "Balance the wheel"],
        correct: 0,
        explain: "The valve itself seals the air. The cap keeps grit out of the valve so it can go on doing that.",
      },

      /* ---- Steering and suspension ---- */
      {
        q: "Worn shock absorbers are likely to cause:",
        options: ["Heavier steering at low speed, increased tyre wear and a tendency to wander on the straight", "The vehicle to continue bouncing after a bump and reduced tyre contact with the road", "The engine to overheat", "Increased fuel economy"],
        correct: 1,
        explain: "Their job is damping the spring. A tyre bouncing clear of the road is not braking, steering or gripping while it is in the air.",
      },
      {
        q: "Excessive play in the steering wheel may indicate:",
        options: ["Correct power steering operation on a car at rest", "Over-inflated tyres", "Wear in the steering linkage or joints", "A low battery"],
        correct: 2,
        explain: "Free movement at the rim that produces none at the wheels means the wear is somewhere in between, and it will only grow.",
      },
      {
        q: "Steering that pulls consistently to one side is most likely caused by:",
        options: ["A blocked air filter", "A worn clutch", "Low engine oil", "Uneven tyre pressures, wheel alignment or a braking fault"],
        correct: 3,
        explain: "Any asymmetry between the two sides will do it. Tyre pressures are the cheapest thing to eliminate first.",
      },
      {
        q: "The purpose of vehicle suspension is to:",
        options: ["Maintain tyre contact with the road and absorb surface irregularities", "Increase ground clearance and protect the underbody from damage on rough surfaces", "Reduce fuel consumption", "Support the engine"],
        correct: 0,
        explain: "Comfort is a side effect. The safety function is keeping the contact patch loaded over an uneven surface.",
      },
      {
        q: "Power-assisted steering that suddenly becomes heavy may indicate:",
        options: ["Correct operation at low speed when assistance is reduced", "A failure of the power assistance system", "Over-inflated front tyres", "A faulty handbrake"],
        correct: 1,
        explain: "The steering still works but needs far more effort, which matters most in a low-speed manoeuvre or a sudden avoidance.",
      },

      /* ---- Electrics ---- */
      {
        q: "The alternator's function is to:",
        options: ["Start the engine", "Store electrical energy", "Generate electrical power and recharge the battery while the engine runs", "Control the ignition timing and the fuel injection system under load"],
        correct: 2,
        explain: "The battery starts the engine; the alternator then supplies everything and replaces what starting used.",
      },
      {
        q: "A battery warning light illuminating while driving usually means:",
        options: ["The battery is fully charged and no longer accepting current", "The engine is cold", "The headlights are on", "The charging system is not working correctly"],
        correct: 3,
        explain: "The car is running off the battery alone, and will keep going only until it is flat — which may be a matter of minutes at night.",
      },
      {
        q: "When jump-starting a vehicle, the final connection should be made to:",
        options: ["An unpainted metal earthing point on the stalled vehicle, away from the battery", "The negative terminal of the flat battery itself, which completes the starting circuit", "The positive terminal of the flat battery", "The bodywork of the donor vehicle"],
        correct: 0,
        explain: "Batteries give off hydrogen. Making the last connection away from the battery keeps the inevitable spark away from the gas.",
      },
      {
        q: "A blown fuse should be replaced with:",
        options: ["A fuse of a higher rating to prevent it blowing again", "A fuse of the same rating", "Any fuse that fits", "A piece of wire"],
        correct: 1,
        explain: "The fuse is sized to protect the wiring. A higher rating means the cable becomes the fuse, and cables catch fire.",
      },
      {
        q: "A fuse that blows repeatedly indicates:",
        options: ["The fuse rating is too high for the circuit it protects", "Normal wear", "An underlying electrical fault that needs diagnosis", "A flat battery"],
        correct: 2,
        explain: "The fuse is doing its job. Replacing it over and over treats the symptom while whatever is drawing the current stays there.",
      },
      {
        q: "Headlight alignment matters because badly aimed lights:",
        options: ["Use more fuel", "Shorten bulb life", "Drain the battery faster and noticeably shorten the working life of the bulbs", "Dazzle oncoming drivers or fail to illuminate the road properly"],
        correct: 3,
        explain: "Aimed too high they dazzle, too low they leave you with no useful range. Both are a safety problem, and it is an NCT item.",
      },
      {
        q: "A vehicle's daytime running lights:",
        options: ["Make the vehicle more visible to others in daylight but do not illuminate the road", "Replace the need for dipped headlights in rain, fog or other poor daytime visibility", "Are only fitted to commercial vehicles", "Operate only in fog"],
        correct: 0,
        explain: "They exist to be seen, not to see by — and because they often leave the rear lights off, drivers can find themselves unlit at dusk.",
      },

      /* ---- Warning lights and safety systems ---- */
      {
        q: "A red warning light on the instrument panel generally indicates:",
        options: ["A minor fault that can safely be left until the vehicle's next routine service visit", "A serious problem requiring the vehicle to be stopped as soon as it is safe", "A system operating normally", "A reminder to refuel"],
        correct: 1,
        explain: "Red means stop; amber means investigate soon. Driving on with a red oil pressure or temperature light can end an engine in minutes.",
      },
      {
        q: "The oil pressure warning light indicates:",
        options: ["The oil needs changing", "The oil level is slightly low", "Oil pressure has dropped dangerously low and the engine should be stopped immediately", "Normal operation while the engine is cold and the oil is still too thick to circulate"],
        correct: 2,
        explain: "It is a pressure warning, not a level one. Without pressure the bearings are unlubricated and will fail very quickly.",
      },
      {
        q: "Electronic Stability Control (ESC) works by:",
        options: ["Increasing engine power to pull the vehicle straight during a skid", "Stiffening the suspension", "Locking the differential", "Braking individual wheels to help correct a skid"],
        correct: 3,
        explain: "It compares where the driver is steering with where the car is going, and brakes one wheel to bring the two back into line.",
      },
      {
        q: "An airbag is designed to work:",
        options: ["In combination with a correctly worn seat belt", "Instead of a seat belt", "Only in rear-end collisions above a set impact speed", "At all impact speeds"],
        correct: 0,
        explain: "It is a supplementary restraint. Unbelted, an occupant can meet a deploying airbag at the wrong moment and be injured by it.",
      },
      {
        q: "A rear-facing child seat must never be fitted in a front seat with:",
        options: ["An adjustable headrest", "An active frontal airbag", "A three-point seat belt but no top tether point", "Heated seat controls"],
        correct: 1,
        explain: "A deploying airbag strikes the back of the seat, where the child's head is, with enormous force. The airbag must be deactivated or the seat moved.",
      },
      {
        q: "A tyre pressure monitoring system (TPMS) warning suggests the driver should:",
        options: ["Ignore it if the car drives normally", "Stop immediately on the hard shoulder and call a recovery service", "Check the tyre pressures at the earliest opportunity", "Reset the system and continue"],
        correct: 2,
        explain: "The car often feels normal well past the point at which a tyre is running dangerously soft. That is exactly why the system exists.",
      },
      {
        q: "The engine management light illuminating steadily means:",
        options: ["The engine is due a service", "The fuel is low", "The vehicle must be stopped immediately and not driven further", "A fault has been detected that should be diagnosed"],
        correct: 3,
        explain: "Steady means get it read soon. A flashing engine management light is more urgent, as it usually indicates a misfire that can destroy the catalytic converter.",
      },

      /* ---- Maintenance and checks ---- */
      {
        q: "The POWDER check is a memory aid covering:",
        options: ["Petrol, oil, water, damage, electrics, rubber", "Pressure, oil, wipers, doors, exhaust, radio", "Parking, observation, warning, distance, exit, road", "Power, output, wheels, drive, engine, rear"],
        correct: 0,
        explain: "A quick walk-round covering the things a driver can check without tools, and it is the basis of the daily checks a learner should build into a habit.",
      },
      {
        q: "Screenwash should be topped up with:",
        options: ["Plain water in all seasons, topped up whenever the reservoir runs low", "A proprietary screenwash solution diluted as directed", "Engine coolant", "Brake fluid"],
        correct: 1,
        explain: "Plain water freezes in the reservoir and lines, and smears rather than cleans.",
      },
      {
        q: "Worn wiper blades are a safety concern because they:",
        options: ["Increase fuel consumption noticeably through the additional wind resistance created", "Scratch the paintwork", "Smear rather than clear the screen, reducing visibility in rain", "Drain the battery"],
        correct: 2,
        explain: "Reduced visibility in the conditions where it matters most. It is also an NCT item.",
      },
      {
        q: "A vehicle's service schedule is based on:",
        options: ["The driver's judgement of how the vehicle is performing", "Mileage only", "Time only", "Mileage or time elapsed, whichever comes first"],
        correct: 3,
        explain: "Whichever arrives first. A low-mileage car still needs oil changes, because oil degrades with time as well as use.",
      },
      {
        q: "The purpose of the NCT is to:",
        options: ["Confirm the vehicle met minimum roadworthiness and environmental standards at the time of testing", "Value the vehicle for insurance", "Guarantee that the vehicle will remain roadworthy and mechanically sound throughout the next two years", "Check the driver's licence"],
        correct: 0,
        explain: "It certifies a moment in time. The driver remains responsible for roadworthiness every day between tests.",
      },
      {
        q: "An exhaust system with a hole in it is dangerous mainly because:",
        options: ["It increases fuel consumption and reduces available engine power", "Exhaust gases including carbon monoxide can enter the cabin", "It reduces engine power", "It is noisy"],
        correct: 1,
        explain: "Carbon monoxide is odourless and causes drowsiness and unconsciousness before the driver realises anything is wrong.",
      },
      {
        q: "Before a long journey, the most useful checks include:",
        options: ["The radio, air conditioning, interior lighting and the condition of the upholstery", "Only the fuel level", "Fuel, oil, coolant, tyres including the spare, lights and washer fluid", "The vehicle's service history"],
        correct: 2,
        explain: "Five minutes on the driveway against a breakdown on a motorway hard shoulder is an obvious trade, and the spare is the one people forget until they need it.",
      },
      {
        q: "A fuel filler cap that is not properly closed may:",
        options: ["Affect the brakes", "Cause the engine to overheat on a long journey", "Drain the battery", "Trigger an emissions-related warning light"],
        correct: 3,
        explain: "The evaporative emissions system detects the leak. It is worth knowing, because it saves an unnecessary diagnostic bill.",
      },
      {
        q: "Using the wrong grade of engine oil can:",
        options: ["Reduce lubrication effectiveness and increase wear", "Improve performance", "Have no effect at all provided the oil level is kept correct", "Only affect the warranty"],
        correct: 0,
        explain: "Viscosity determines whether the oil film survives at operating temperature, and modern engines have tight tolerances built around a specific grade.",
      },
      {
        q: "Excessive blue smoke from the exhaust usually indicates:",
        options: ["Water in the fuel", "Engine oil being burnt in the combustion chamber", "An over-rich fuel mixture caused by a faulty sensor", "A blocked air filter"],
        correct: 1,
        explain: "Blue is oil, generally past worn valve stem seals or piston rings.",
      },
      {
        q: "Black smoke from a diesel exhaust usually indicates:",
        options: ["Coolant entering the cylinders through a failed head gasket or cracked head", "Normal operation", "Incomplete combustion, often from an over-fuelling or air supply fault", "Excess oil in the sump"],
        correct: 2,
        explain: "Too much fuel or too little air. A blocked air filter or a faulty injector are common causes.",
      },
      {
        q: "White smoke that persists after the engine is warm may indicate:",
        options: ["Normal condensation clearing from a cold exhaust system on a damp morning start", "A rich fuel mixture", "Oil burning", "Coolant entering the combustion chamber, such as through a failed head gasket"],
        correct: 3,
        explain: "Brief white vapour on a cold start is condensation. Persistent white smoke once warm, especially with coolant loss, points at the head gasket.",
      },
      {
        q: "A hybrid vehicle differs from a conventional one in that it:",
        options: ["Combines an internal combustion engine with an electric motor and battery", "Has no internal combustion engine at all and runs on stored battery power alone", "Cannot be refuelled with petrol", "Requires no servicing"],
        correct: 0,
        explain: "Both power sources, with regenerative braking recovering energy that a conventional car turns into heat.",
      },
      {
        q: "Regenerative braking:",
        options: ["Applies the friction brakes automatically whenever an obstacle ahead is detected", "Uses the electric motor as a generator to recover energy while slowing", "Increases brake pad wear", "Only operates above 100 km/h"],
        correct: 1,
        explain: "Energy that would otherwise be wasted as heat goes back into the battery. It also means the friction brakes are used less, which brings its own maintenance quirks.",
      },
      {
        q: "An instructor teaching vehicle checks to a learner should emphasise that the checks are:",
        options: ["Only needed in the weeks immediately before the driving test itself", "The responsibility of the garage", "A routine the driver carries out regularly for as long as they drive", "Only relevant to older vehicles"],
        correct: 2,
        explain: "Taught as a test requirement, they stop the day the test is passed. Taught as a habit, they go on preventing breakdowns and failures.",
      },

      /* ---- Further mechanics ---- */
      {
        q: "A driver notices the steering wheel vibrating noticeably at motorway speed but not at low speed. The most likely cause is:",
        options: [
          "Brake pads that have worn down close to their minimum permitted thickness",
          "Engine oil that has passed its recommended service interval by some margin",
          "A fuel filter beginning to restrict the flow of fuel to the injectors",
          "A wheel out of balance, most often on the front axle of the vehicle",
        ],
        correct: 3,
        explain: "Imbalance only produces enough force to be felt once the wheel is turning quickly, which is why it appears at speed and disappears when you slow down.",
      },
      {
        q: "Why should a driver avoid resting a hand on the gear lever while driving?",
        options: [
          "It places load on the selector mechanism and accelerates wear inside the gearbox",
          "It reduces the amount of steering control available in a sudden emergency",
          "It prevents the gearbox from engaging the higher ratios correctly",
          "It causes the clutch to slip whenever the vehicle is under acceleration",
        ],
        correct: 0,
        explain: "The lever rests against internal selector components. Constant light pressure wears them over time, and it is a habit worth correcting early in a learner.",
      },
      {
        q: "A vehicle's battery is flat every morning despite the alternator charging correctly. This most likely indicates:",
        options: [
          "A fault in the starter motor drawing current while the engine is running",
          "A parasitic drain — something continuing to draw current with the ignition off",
          "An air filter restricting the engine's air supply during cold starts",
          "Engine oil of the wrong viscosity grade for the prevailing temperature",
        ],
        correct: 1,
        explain: "If the alternator charges properly, something is discharging the battery overnight. A boot light or an aftermarket accessory wired to a permanent live are the usual culprits.",
      },
      {
        q: "The purpose of a crumple zone in modern vehicle construction is to:",
        options: [
          "Reduce the overall weight of the vehicle's bodyshell and improve economy",
          "Make accident repairs cheaper by concentrating damage in one replaceable area",
          "Absorb impact energy by deforming, so less of it reaches the occupants",
          "Improve the vehicle's aerodynamic performance at sustained motorway speeds",
        ],
        correct: 2,
        explain: "The car is designed to be damaged so the people inside are not. A rigid body would transmit the whole deceleration straight through to the occupants.",
      },
      {
        q: "A driver hears a rhythmic knocking from the front of the car that speeds up as the vehicle goes faster. The most useful first step is to:",
        options: [
          "Switch off the radio and the ventilation fan so the noise can be heard clearly",
          "Increase speed briefly to establish whether the noise disappears at higher revs",
          "Continue the journey and mention it at the vehicle's next routine service",
          "Stop somewhere safe and inspect the wheels, tyres and wheel nuts before continuing",
        ],
        correct: 3,
        explain: "A noise that tracks road speed rather than engine speed comes from something rotating with the wheels. Loose wheel nuts are the cheapest thing to eliminate and the most serious to ignore.",
      },
      {
        q: "Coolant that appears oily, or engine oil that looks pale and creamy, suggests:",
        options: [
          "That the two systems are mixing, typically through a failed head gasket",
          "That the coolant has simply reached the end of its normal service life",
          "That the wrong grade of antifreeze was used at the last top-up",
          "That the engine has been running at a lower temperature than intended",
        ],
        correct: 0,
        explain: "Oil and coolant run in separate circuits. Finding either in the other means the barrier between them has failed, and continuing to drive risks destroying the engine.",
      },
      {
        q: "The main reason a driver should let a turbocharged engine idle briefly before switching off after a hard run is that:",
        options: [
          "The engine management system needs time to record its diagnostic data",
          "It allows oil to keep circulating and cool a turbo that is still very hot",
          "The fuel pump requires time to depressurise the fuel rail safely",
          "The battery needs the additional charging time after a demanding journey",
        ],
        correct: 1,
        explain: "A turbo spins at enormous speed and gets extremely hot. Cutting the engine stops the oil flow instantly, and the oil left sitting in a glowing bearing housing can cook and coke up.",
      },
      {
        q: "Uneven or juddering braking felt through the pedal usually indicates:",
        options: [
          "Air trapped somewhere within the hydraulic brake circuit",
          "Brake fluid that has absorbed moisture over several years of use",
          "Warped or unevenly worn brake discs on one or both axles",
          "Tyre pressures that differ between the two sides of the axle",
        ],
        correct: 2,
        explain: "A disc that is not perfectly flat presents a varying thickness to the pads each rotation, which pulses back through the pedal. Air in the system feels spongy rather than juddery.",
      },
      {
        q: "Why is it poor practice to top up a cooling system with plain water on a regular basis?",
        options: [
          "It makes the temperature gauge read lower than the true coolant temperature",
          "It causes the water pump to cavitate and lose its pumping efficiency",
          "It raises the coolant's boiling point beyond the system's design limit",
          "It progressively dilutes the antifreeze, losing frost and corrosion protection",
        ],
        correct: 3,
        explain: "Each top-up weakens the mixture. Eventually there is not enough antifreeze left to prevent freezing in winter or to inhibit corrosion inside the block year-round.",
      },
      {
        q: "An instructor teaching a pupil about tyres should explain that the sidewall markings show:",
        options: [
          "The tyre's size, load index, speed rating and date of manufacture",
          "The recommended inflation pressure for that particular vehicle and axle",
          "The remaining tread depth measured at the tyre's last inspection",
          "The maximum distance the tyre is expected to cover before replacement",
        ],
        correct: 0,
        explain: "The pressure comes from the vehicle, not the tyre, which is a common misunderstanding. The date code matters for trailers and spares, which age out long before they wear out.",
      },
      {
        q: "A vehicle fails to start and the starter motor turns over very slowly with the headlights dimming heavily. The most likely cause is:",
        options: [
          "A blocked fuel filter preventing fuel from reaching the engine correctly",
          "A discharged battery or badly corroded battery terminal connections",
          "An ignition timing fault developing gradually over recent journeys",
          "A faulty thermostat holding the engine below its operating temperature",
        ],
        correct: 1,
        explain: "Lights dimming under cranking load points squarely at the supply rather than the fuel or ignition. Terminals are worth cleaning before a battery is condemned.",
      },
      {
        q: "The advantage of checking tyre pressures at least monthly rather than only at a service is that:",
        options: [
          "Garage equipment is generally less accurate than a personal pressure gauge",
          "Tyre pressures are only correct immediately after the tyres have been fitted",
          "Tyres lose pressure gradually, and under-inflation affects grip and wear long before it is visible",
          "Servicing intervals are set by mileage and take no account of tyre condition",
        ],
        correct: 2,
        explain: "A tyre can be several psi down without looking any different. By the time under-inflation is visible the tyre has been running hot and wearing unevenly for some time.",
      },
    ],
  },
  {
    id: "adi-b2-categoryb",
    title: "Category B & BE Towing",
    questions: [
      /* ---- Licence categories and weights ---- */
      {
        q: "Category B entitles the holder to drive a vehicle with a maximum authorised mass (MAM) not exceeding:",
        options: ["2,500 kg including any trailer", "3,500 kg", "5,000 kg", "7,000 kg"],
        correct: 1,
        explain: "3,500 kg, carrying no more than eight passengers in addition to the driver.",
      },
      {
        q: "MAM stands for:",
        options: ["Maximum allowable motion", "Minimum axle measurement", "Manufacturer's approved mass", "Maximum authorised mass"],
        correct: 3,
        explain: "The maximum weight of the vehicle including its load, as specified by the manufacturer. It is not the same as the vehicle's actual weight on the day.",
      },
      {
        q: "A category B licence holder may tow a trailer with a MAM of:",
        options: ["Up to 750 kg, or heavier provided the combined MAM stays within 3,500 kg", "Up to 750 kg, in all circumstances", "A trailer of any weight at all, provided that it is fitted with its own braking system", "Up to 1,500 kg in all circumstances"],
        correct: 0,
        explain: "A small trailer is always allowed; a heavier one only while the combination stays inside 3,500 kg. Beyond that it is BE.",
      },
      {
        q: "Category BE covers a combination with a MAM:",
        options: ["Up to 3,500 kg for the towing vehicle and trailer combined", "Over 3,500 kg and up to 7,000 kg", "Over 7,000 kg", "Of any weight"],
        correct: 1,
        explain: "Over 3,500 kg and up to 7,000 kg. Above 7,000 kg a different category is needed entirely.",
      },
      {
        q: "A category B learner permit holder may tow:",
        options: ["A trailer up to 750 kg", "Any trailer if accompanied", "No trailer of any size", "A trailer only on local roads"],
        correct: 2,
        explain: "No trailer at all, of any size, in any circumstances. It sits alongside the motorway prohibition as an absolute restriction.",
      },
      {
        q: "To apply for a BE test, a candidate must first:",
        options: ["Complete an IBT course", "Hold a category B learner permit", "Have towed for at least two years", "Hold a full category B licence"],
        correct: 3,
        explain: "BE is an addition to a full B entitlement, so the B test has to be passed first.",
      },
      {
        q: "An ADI wishing to give instruction in category BE must:",
        options: ["Hold a full BE licence for at least two years and be registered as an ADI for BE", "Hold a category B ADI permit only", "Have passed the category BE driving test at any point in the past and hold a current permit", "Simply notify the RSA"],
        correct: 0,
        explain: "Registration is per category and rests on two years of personally holding that full entitlement.",
      },
      {
        q: "The unladen weight of a vehicle is:",
        options: ["Its weight including a full load, the driver and all passengers carried", "Its weight without load, driver or passengers", "The same as its MAM", "The weight of the trailer only"],
        correct: 1,
        explain: "The bare vehicle. The difference between unladen weight and MAM is the payload available.",
      },

      /* ---- Coupling and equipment ---- */
      {
        q: "The breakaway cable on a braked trailer is designed to:",
        options: ["Secure the trailer to the towing vehicle as a second attachment", "Carry the trailer's electrical supply", "Apply the trailer's brakes if it becomes detached", "Prevent the coupling from rusting"],
        correct: 2,
        explain: "If the coupling fails, the cable pulls the trailer's brakes on and brings it to a stop rather than letting it run free.",
      },
      {
        q: "A breakaway cable should be attached to:",
        options: ["The towball itself, with the cable looped over it and clipped back on itself", "The towing vehicle's bumper", "The trailer's own frame", "A dedicated attachment point on the towing vehicle"],
        correct: 3,
        explain: "A designated point. Looped over the towball, it comes off with the coupling and does nothing.",
      },
      {
        q: "Noseweight refers to:",
        options: ["The downward force the trailer's coupling exerts on the towball", "The total weight of the trailer", "The total weight carried by the towing vehicle's front axle when loaded", "The maximum weight of the load"],
        correct: 0,
        explain: "Too little makes the trailer unstable; too much overloads the rear of the towing vehicle and lightens its steering.",
      },
      {
        q: "A trailer load should be positioned:",
        options: ["As far back as possible", "Mainly over or slightly ahead of the trailer's axle, secured against movement", "As far forward as possible", "Spread evenly along the trailer's full length from the coupling to the tailgate"],
        correct: 1,
        explain: "That distribution gives correct noseweight and keeps the trailer stable. Loading heavy at the back is the classic cause of snaking.",
      },
      {
        q: "Before towing, the driver should check that the coupling is:",
        options: ["Greased and resting on the towball, but not necessarily locked into position", "Hand-tight only", "Fully engaged and locked onto the towball, with the indicator showing secure", "Resting on the towball"],
        correct: 2,
        explain: "A coupling that appears seated but is not locked will lift off at the first bump. The visual indicator exists for exactly that reason.",
      },
      {
        q: "Trailer lights must be checked before every journey because:",
        options: ["It is an NCT requirement", "The trailer's overrun braking system cannot operate correctly unless they are all working", "They drain the battery if faulty", "The trailer obscures the towing vehicle's own lights, so following drivers rely on the trailer's"],
        correct: 3,
        explain: "Once a trailer is on, its lights are the only ones traffic behind can see. A failed connection leaves you effectively unlit.",
      },
      {
        q: "A trailer with a MAM over 750 kg must generally be fitted with:",
        options: ["Its own braking system", "A spare wheel", "A jockey wheel and a set of corner steadies", "Mudguards only"],
        correct: 0,
        explain: "Beyond 750 kg the towing vehicle's brakes alone are not enough, so the trailer must brake itself.",
      },
      {
        q: "Overrun brakes on a trailer operate by:",
        options: ["An electrical signal sent from the towing vehicle's brake pedal down to the trailer's brakes", "The trailer pushing against the coupling as the towing vehicle slows, which applies the brakes", "A cable operated by the driver", "Air pressure from the towing vehicle"],
        correct: 1,
        explain: "The mechanism is purely mechanical and automatic, which is also why a trailer's brakes engage briefly when reversing unless the system allows for it.",
      },
      {
        q: "A jockey wheel is used to:",
        options: ["Steer the trailer when reversing into a confined space", "Provide a spare wheel", "Support and manoeuvre the trailer when uncoupled", "Brake the trailer"],
        correct: 2,
        explain: "It carries the noseweight when detached, and must be fully raised and secured before moving off.",
      },
      {
        q: "Extended towing mirrors are required when:",
        options: ["Towing at night only", "The trailer's maximum authorised mass exceeds 750 kg once it has been fully loaded", "Towing on motorways only", "The trailer or caravan is wider than the towing vehicle and restricts the view behind"],
        correct: 3,
        explain: "The driver must have an adequate view behind. A wide caravan without extended mirrors leaves a blind area exactly where overtaking traffic sits.",
      },
      {
        q: "The number plate displayed on a trailer must:",
        options: ["Match the registration of the towing vehicle", "Be the trailer's own separate registration, issued when it was first plated", "Not be required for light trailers", "Be handwritten if necessary"],
        correct: 0,
        explain: "The trailer carries the towing vehicle's registration so the combination can be identified from behind.",
      },

      /* ---- Driving with a trailer ---- */
      {
        q: "The maximum speed for a car towing a trailer on an Irish motorway is:",
        options: ["80 km/h", "100 km/h", "110 km/h", "120 km/h"],
        correct: 0,
        explain: "80 km/h on every road type, motorway included. The posted limit does not apply to a combination.",
      },
      {
        /* Replaced a near-duplicate of a question already in the expansion
           bank — the motorway lane restriction is covered there. */
        q: "A driver towing a trailer approaches roadworks with a contraflow and narrowed lanes. The main additional concern is:",
        options: [
          "The reduced fuel economy caused by frequent speed changes through the works",
          "The combination's extra length and width in lanes narrower than the standard",
          "That trailers are prohibited from passing through any contraflow system",
          "That the trailer's lights will be obscured by the temporary barriers alongside",
        ],
        correct: 1,
        explain: "Narrowed lanes leave little margin either side, and a trailer cuts in on any curve. Slowing early and keeping central matters far more here than it does on an open lane.",
      },
      {
        q: "Stopping distances when towing are:",
        options: ["The same as without a trailer", "Shorter than without a trailer, because the trailer's own brakes add stopping power", "Longer, because of the additional mass being braked", "Unaffected if the trailer is braked"],
        correct: 2,
        explain: "Even with trailer brakes, the whole combination weighs far more. Following distances have to grow to match.",
      },
      {
        q: "Snaking, where a trailer begins to weave from side to side, is best dealt with by:",
        options: ["Braking hard immediately", "Steering sharply against the movement", "Accelerating firmly to pull the combination straight again behind the towing vehicle", "Easing off the accelerator and holding the steering steady until it settles"],
        correct: 3,
        explain: "Braking or steering into it usually amplifies the oscillation. Gently losing speed lets it damp out.",
      },
      {
        q: "The most common cause of trailer snaking is:",
        options: ["Excessive speed combined with poor load distribution or insufficient noseweight", "Under-inflated tyres on the towing vehicle alone, independent of speed or loading", "A trailer that is too light", "Using a braked trailer"],
        correct: 0,
        explain: "Speed provides the energy and poor loading provides the instability. Getting the load forward and slowing down addresses both.",
      },
      {
        q: "When reversing with a trailer, turning the steering wheel to the right will initially move the trailer:",
        options: ["To the right", "To the left", "Straight back", "In an unpredictable direction"],
        correct: 1,
        explain: "The trailer pivots the opposite way to the steering input at first. This reversal is what makes trailer reversing a skill rather than an instinct.",
      },
      {
        q: "When manoeuvring a trailer in a confined space, the safest approach is to:",
        options: ["Reverse quickly to maintain momentum and keep the trailer tracking straight", "Rely entirely on the mirrors", "Move slowly, make small steering inputs and use a helper or get out and look", "Ask a passenger to steer the trailer"],
        correct: 2,
        explain: "Small inputs at low speed are correctable; large ones at speed produce a jack-knife. Getting out to look costs nothing.",
      },
      {
        q: "Jack-knifing occurs when:",
        options: ["The trailer's brakes fail", "The towing vehicle's engine stalls while the combination is still moving backwards", "The trailer becomes detached", "The angle between towing vehicle and trailer becomes so acute that control is lost"],
        correct: 3,
        explain: "Usually from reversing too fast with too much lock on. Once it starts it is very hard to recover without pulling forward.",
      },
      {
        q: "Cornering with a trailer requires the driver to:",
        options: ["Take a wider line, because the trailer cuts the corner", "Take a tighter line than usual so the trailer stays within the lane markings", "Corner at normal speed", "Brake through the bend"],
        correct: 0,
        explain: "The trailer's wheels follow inside the towing vehicle's path. Not allowing for that is how kerbs and bollards get clipped.",
      },
      {
        q: "Overtaking while towing requires:",
        options: ["No special consideration", "A considerably longer gap, because of reduced acceleration and the combination's length", "A higher speed than usual so the manoeuvre is completed as quickly as possible", "Use of the outermost motorway lane"],
        correct: 1,
        explain: "Less acceleration and more length to clear. The gap needed is much larger than the same driver would use solo.",
      },
      {
        q: "On a long downhill gradient while towing, the driver should:",
        options: ["Rely on the trailer's own overrun brakes alone to hold the combination back", "Coast in neutral to save fuel", "Select a lower gear and use engine braking to control speed", "Brake continuously to stay below the limit"],
        correct: 2,
        explain: "Continuous braking with the extra mass overheats the brakes quickly. Engine braking shares the load.",
      },
      {
        q: "Before uncoupling a trailer, the driver should first:",
        options: ["Disconnect the electrical plug and stow the cable safely", "Lower the jockey wheel", "Remove the breakaway cable", "Apply the trailer's parking brake and chock the wheels if needed"],
        correct: 3,
        explain: "Securing the trailer against rolling comes before anything else. A trailer that moves during uncoupling is dangerous at close quarters.",
      },
      {
        q: "A trailer left uncoupled on a slope should be:",
        options: ["Left with its parking brake applied and wheels chocked", "Left in gear", "Left with the jockey wheel raised", "Left attached to the electrical socket so the marker lights remain lit"],
        correct: 0,
        explain: "Brake plus chocks. A parking brake alone can be defeated by a slope and a bit of rain.",
      },
      {
        q: "Tyres fitted to a trailer should be:",
        options: ["Identical in size and specification to the tyres fitted to the towing vehicle", "Of a suitable load rating for the trailer's MAM and in good condition", "Any tyres that fit the rim", "Part-worn tyres to save cost"],
        correct: 1,
        explain: "Trailer tyres often carry high loads at low mileage and age out before they wear out, so condition and rating both matter.",
      },
      {
        q: "A load projecting beyond the rear of a trailer must be:",
        options: ["Covered with a tarpaulin", "Reduced in length", "Clearly marked so other road users can see it", "Carried only during daylight hours and in good visibility"],
        correct: 2,
        explain: "An unmarked projection is effectively invisible, particularly at night or to a vehicle pulling alongside.",
      },
      {
        q: "An insecure load on a trailer is dangerous primarily because:",
        options: ["It may affect fuel consumption", "It will damage the trailer floor and the securing points over time", "It may exceed the speed limit", "It can shift in transit, destabilising the trailer or falling onto the road"],
        correct: 3,
        explain: "A load that shifts moves the centre of gravity mid-corner. A load that falls off becomes an obstacle for everyone behind.",
      },
      {
        q: "The driver of a car and trailer combination is responsible for:",
        options: ["The condition, loading and legality of the entire combination", "Only the towing vehicle's own condition, tax and insurance status", "Only the trailer's brakes", "Nothing, if the trailer is borrowed"],
        correct: 0,
        explain: "Borrowed or owned makes no difference. The driver is responsible for the whole combination as it goes onto the road.",
      },
      {
        q: "A caravan or trailer being towed in high crosswinds is most at risk when:",
        options: ["Travelling uphill", "Emerging from shelter, such as passing a large vehicle or leaving a cutting", "Travelling at low speed along an exposed and unsheltered stretch of open road", "Cornering"],
        correct: 1,
        explain: "The sudden change from shelter to full wind load is what produces the abrupt push. Anticipating it and easing off beforehand is the defence.",
      },
      {
        q: "The BE driving test includes:",
        options: ["A theory element only, taken beforehand at an approved test centre", "Only an on-road drive", "Coupling and uncoupling, a reversing exercise and an on-road drive", "A written examination"],
        correct: 2,
        explain: "The off-road elements test the skills that cause the most trouble, and the road drive tests the combination in traffic.",
      },
      {
        q: "An instructor teaching towing should emphasise that the greatest single cause of incidents is:",
        options: ["Mechanical failure of the trailer's brakes, coupling or suspension components", "Inadequate mirrors", "Poor weather", "Incorrect loading and excessive speed"],
        correct: 3,
        explain: "Almost every towing incident traces back to how the trailer was loaded or how fast it was going. Both are entirely within the driver's control.",
      },
      {
        q: "Before towing for the first time, a driver should:",
        options: ["Practise in a quiet area to get used to the combination's length and reversing behaviour", "Begin on a motorway to get used to the speed", "Tow at night to avoid traffic", "Tow the heaviest load the vehicle permits, so as to learn where the limits actually are"],
        correct: 0,
        explain: "Length, swing and the reversed steering all need learning somewhere with room for mistakes.",
      },
      {
        q: "A car with a MAM of 2,000 kg is towing a trailer with a MAM of 1,600 kg. The driver requires:",
        options: ["Category B only", "Category BE", "Category C1", "No additional entitlement"],
        correct: 1,
        explain: "The combined MAM is 3,600 kg, which is over the 3,500 kg limit for category B. The trailer's own weight being over 750 kg is what forces the calculation.",
      },
      {
        q: "A car with a MAM of 2,000 kg is towing a trailer with a MAM of 700 kg. The driver requires:",
        options: ["Category C1", "Category BE", "Category B only", "A special permit"],
        correct: 2,
        explain: "The trailer is at or below 750 kg, so category B covers it regardless of the combined figure.",
      },
      {
        q: "When checking whether a combination is within a licence entitlement, the figures used are:",
        options: ["The actual weights on the day", "The manufacturer's published kerb weights for both vehicle and trailer", "The unladen weights", "The maximum authorised masses, not the actual loaded weights"],
        correct: 3,
        explain: "Entitlement is assessed on MAM. A lightly loaded trailer with a high MAM still counts at its MAM.",
      },
      {
        q: "A trailer's MAM is found:",
        options: ["On the trailer's manufacturer plate", "By weighing the trailer when empty", "By adding the load to the unladen weight", "On the towing vehicle's registration document"],
        correct: 0,
        explain: "The plate is the authoritative figure, which is why a trailer without a legible plate causes problems.",
      },
      {
        q: "Insurance for towing:",
        options: ["Is automatically included in every comprehensive motor policy as standard", "Must be checked, as cover for the trailer and its load varies", "Is only required for trailers over 750 kg", "Is provided by the trailer manufacturer"],
        correct: 1,
        explain: "Third party liability while towing is usually covered, but damage to the trailer and its contents frequently is not.",
      },

      /* ---- Further category-specific knowledge ---- */
      {
        q: "Category B also permits the holder to drive:",
        options: ["A minibus with up to 20 passenger seats operating on a local route", "A lorry up to 7,500 kg", "A vehicle carrying up to eight passengers in addition to the driver", "A bus on a local route"],
        correct: 2,
        explain: "Eight passengers plus the driver, within the 3,500 kg MAM limit. A larger minibus needs category D1 or D.",
      },
      {
        q: "A driver who passed the category B test in a vehicle with automatic transmission:",
        options: ["May drive manual vehicles after two years", "Must retake the driver theory test before being permitted to drive a manual", "May drive manuals on private land only", "Holds an entitlement restricted to automatic vehicles"],
        correct: 3,
        explain: "The restriction is on the licence itself. Driving a manual requires passing another test in one.",
      },
      {
        q: "Category W on an Irish licence covers:",
        options: ["Work vehicles and land tractors", "Motorcycles over 125cc and light quadricycles", "Minibuses", "Articulated lorries"],
        correct: 0,
        explain: "Tractors and land machinery. It is a separate entitlement from category B and is not implied by it.",
      },
      {
        q: "The minimum age to hold a category B licence in Ireland is:",
        options: ["16 years", "17", "18", "21"],
        correct: 1,
        explain: "Seventeen for category B, and sixteen for the lightest motorcycle and work vehicle categories.",
      },
      {
        q: "A category B licence holder wishing to drive a vehicle with a MAM between 3,500 kg and 7,500 kg needs:",
        options: ["Category BE", "Category C1", "Category C", "No additional entitlement"],
        correct: 1,
        explain: "C1 covers the 3,500 to 7,500 kg range for a rigid vehicle. BE is for a combination, which is a different matter.",
      },
      {
        q: "The difference between BE and C1 is that BE covers:",
        options: ["A heavier rigid vehicle", "A vehicle with more than eight passenger seats", "A category B vehicle towing a heavier trailer", "A vehicle over 7,500 kg"],
        correct: 2,
        explain: "BE is about the combination — a B vehicle plus a trailer. C1 is about a single heavier vehicle.",
      },
      {
        q: "When calculating whether a combination needs BE, the driver must consider:",
        options: ["The towing vehicle's maximum authorised mass only, as plated", "The actual weight of the load", "The trailer's MAM only", "Both the towing vehicle's MAM and the trailer's MAM"],
        correct: 3,
        explain: "Both, added together, and compared against 3,500 kg — unless the trailer is 750 kg or under, in which case category B covers it regardless.",
      },
      {
        q: "A driver towing a trailer at 100 km/h on a motorway is:",
        options: ["Exceeding the 80 km/h limit that applies when towing", "Driving entirely legally, since the posted motorway limit of 120 km/h applies", "Driving legally if the trailer is braked", "Driving legally if the trailer is under 750 kg"],
        correct: 0,
        explain: "80 km/h applies to any combination, regardless of the trailer's weight, its brakes or the posted limit.",
      },
      {
        q: "The purpose of a trailer's stabiliser or anti-snake device is to:",
        options: ["Increase the maximum trailer weight the vehicle is permitted to tow", "Damp out lateral movement of the trailer to resist snaking", "Reduce the noseweight", "Improve the trailer's braking"],
        correct: 1,
        explain: "It adds friction at the coupling to resist the oscillation. It reduces the risk rather than removing it, so correct loading and speed still matter.",
      },
      {
        q: "A trailer's electrical socket connection should be:",
        options: ["Left slightly loose so it can move freely as the combination turns", "Taped to the towbar", "Fully connected and routed so it cannot drag or be pulled tight on turns", "Connected only when towing at night"],
        correct: 2,
        explain: "A dragging cable wears through and a short one disconnects on a tight turn, and either way the trailer's lights go out.",
      },
      {
        q: "Before setting off with a trailer, the driver should confirm:",
        options: ["Only that the coupling is attached and that the electrical plug has been connected", "Only that the load is covered", "Only that the lights work", "Coupling locked, breakaway cable fitted, lights working, jockey wheel raised, load secure"],
        correct: 3,
        explain: "The whole list, every time. Each item on it has caused a serious incident through being skipped once.",
      },
      {
        q: "Towing with a noseweight below the recommended minimum is likely to:",
        options: ["Make the trailer unstable and more prone to snaking", "Improve fuel economy by lowering the drag created by the trailer", "Reduce tyre wear", "Have no effect"],
        correct: 0,
        explain: "Too little weight on the coupling lets the trailer pivot freely. Correct noseweight is what keeps it tracking behind rather than wandering.",
      },
      {
        q: "Exceeding the towing vehicle's maximum towing capacity is dangerous because:",
        options: ["It voids the vehicle's manufacturer warranty and its annual roadworthiness certificate", "Braking, steering and structural loads exceed what the vehicle was designed for", "It only affects fuel consumption", "The trailer will be too slow"],
        correct: 1,
        explain: "The figure is a design limit covering brakes, transmission and towbar mounting. It is also an offence and would affect an insurance claim.",
      },
      {
        q: "The towing capacity of a vehicle is found:",
        options: ["On the insurance certificate and the vehicle registration document", "On the driving licence", "On the vehicle's manufacturer plate or in the handbook", "By weighing the trailer"],
        correct: 2,
        explain: "The plate gives the maximum towable mass, often with separate figures for braked and unbraked trailers.",
      },
      {
        q: "An unbraked trailer's MAM must not normally exceed:",
        options: ["750 kg", "1,000 kg", "1,500 kg", "3,500 kg"],
        correct: 0,
        explain: "750 kg, and the towing vehicle's own limit for an unbraked trailer may be lower still.",
      },
      {
        q: "When a trailer is fitted with overrun brakes, reversing can be difficult because:",
        options: ["The coupling disconnects", "The trailer's wheels lock permanently until the combination moves forward again", "The handbrake engages automatically", "The brakes apply as the trailer pushes against the coupling"],
        correct: 3,
        explain: "The mechanism cannot tell reversing from braking. Most systems have an automatic reverse facility, but the driver should know why the resistance is there.",
      },
      {
        q: "A driver towing for the first time on a motorway should be particularly aware of:",
        options: ["The lane restriction and the lower speed limit", "The need to use hazard lights", "A requirement to travel in convoy with other towing vehicles", "The need to stop every hour"],
        correct: 0,
        explain: "80 km/h and no outermost lane. Both catch out drivers used to travelling solo on the same road.",
      },
      {
        q: "Passing a large goods vehicle while towing is more hazardous because:",
        options: ["The trailer becomes heavier", "Air turbulence around the larger vehicle can destabilise the trailer", "The speed limit changes", "The trailer's overrun brakes may fail under the additional load"],
        correct: 1,
        explain: "The bow wave and the sudden loss of shelter both act on a large flat side. Easing off rather than pressing on is the safer response.",
      },
      {
        q: "The correct action if a trailer's tyre deflates while driving is to:",
        options: ["Brake hard immediately", "Accelerate briefly to stabilise the trailer before slowing down again", "Ease off gradually, keep the combination straight and stop somewhere safe", "Steer sharply onto the verge"],
        correct: 2,
        explain: "Hard braking or sharp steering with an unstable trailer invites a jack-knife. Gradual deceleration in a straight line keeps it behind you.",
      },
      {
        q: "Trailer tyres often need replacing before the tread wears out because:",
        options: ["They are manufactured from a softer rubber compound than car tyres", "Trailers are heavier than cars", "They are always under-inflated", "Low annual mileage means they degrade with age before they wear"],
        correct: 3,
        explain: "A trailer used a few weekends a year accumulates almost no mileage, but the rubber still ages and cracks. Age, not tread, is usually the limiting factor.",
      },
      {
        q: "When loading a trailer, the driver should ensure that the:",
        options: ["Centre of gravity is kept low and the load is secured against movement", "The load is stacked as high as possible, which improves the trailer's stability", "Heaviest items are at the rear", "Load is spread evenly front to back"],
        correct: 0,
        explain: "A low centre of gravity resists roll, and securing prevents the load shifting mid-corner and taking the balance with it.",
      },
      {
        q: "A trailer being used to carry a vehicle should have that vehicle:",
        options: ["Left in neutral with the handbrake off", "Secured with straps at multiple points and its handbrake applied", "Held only by its own weight", "Positioned as far to the rear of the trailer bed as the securing points allow"],
        correct: 1,
        explain: "Multiple restraint points stop it moving in any direction. A vehicle held by its own weight alone will move under braking.",
      },
      {
        q: "The rear of a long trailer on a tight turn will:",
        options: ["Follow exactly the same path as the towing vehicle", "Swing wider than the towing vehicle", "Cut inside the towing vehicle's path", "Move independently of the towing vehicle"],
        correct: 2,
        explain: "It cuts in, which is why you take a wider entry. Failing to allow for it is how trailer wheels find kerbs and cyclists.",
      },
      {
        q: "A driver who regularly tows should check the towbar and its mountings for:",
        options: ["Paint condition only", "Matching colour and finish to the towing vehicle's bodywork", "The manufacturer's logo", "Corrosion, cracks and secure fixing"],
        correct: 3,
        explain: "The towbar carries the entire load through a handful of bolts into the vehicle's structure. Corrosion at those points is a failure waiting for a hill.",
      },
      {
        q: "The safest way to check a trailer's lights before a journey alone is to:",
        options: ["Use a reflective surface, a helper, or a trailer light tester", "Assume they are working if they were working on the previous journey", "Check them while driving", "Check only the brake lights"],
        correct: 0,
        explain: "Any of those give a real answer. Assuming, on a connection that spends its life exposed to road salt, does not.",
      },
      {
        q: "When descending a steep hill with a heavy trailer, the greatest risk is:",
        options: ["The engine overheating", "Brake fade from continuous braking", "The trailer becoming progressively lighter as the descent continues", "Excessive fuel consumption"],
        correct: 1,
        explain: "The combined mass generates far more heat in the brakes than the car alone. A low gear from the top of the hill is the answer, not partway down.",
      },
      {
        q: "A combination that exceeds 3,500 kg MAM being driven on a category B licence is:",
        options: ["Legal provided the driver has sufficient previous towing experience", "Legal on non-motorway roads", "An offence, and would likely invalidate insurance", "Legal if the trailer is braked"],
        correct: 2,
        explain: "Driving outside your entitlement is an offence in itself, and an insurer is entitled to decline a claim where the driver was not licensed for the combination.",
      },
      {
        q: "An instructor should teach a towing pupil to plan routes with particular attention to:",
        options: ["Fuel stations only", "Roads carrying the highest speed limits, so the journey is completed sooner", "The shortest distance", "Width restrictions, low bridges, tight turns and unsuitable parking"],
        correct: 3,
        explain: "A route that works solo can be impassable with a trailer. Getting into somewhere you cannot reverse out of is a common and avoidable problem.",
      },
      {
        q: "The first thing to check if a trailer begins to snake is:",
        options: ["Speed — reduce it gently without braking sharply", "Whether the exterior mirrors are correctly adjusted for the trailer's width", "The trailer's tyre pressures while moving", "The electrical connection"],
        correct: 0,
        explain: "Speed is the one factor you can change immediately. The loading that caused it can only be fixed once stopped.",
      },
      {
        q: "A caravan's habitation door and windows should be:",
        options: ["Left slightly open for ventilation while towing", "Closed and secured before moving off", "Opened at the first stop only", "Removed for towing"],
        correct: 1,
        explain: "An unsecured door can open at speed, catching wind and anything alongside.",
      },
      {
        q: "Gas cylinders carried in a caravan should be:",
        options: ["Left connected and turned on", "Carried in the towing vehicle's boot rather than in the caravan", "Turned off and secured before travelling", "Vented while in transit"],
        correct: 2,
        explain: "Turned off at the cylinder and secured so they cannot move. A leak in a sealed caravan behind you is a serious hazard.",
      },
      {
        q: "A driver whose trailer has no visible manufacturer's plate should:",
        options: ["Assume a MAM of 750 kg", "Weigh the trailer when fully loaded and use that figure as its authorised mass", "Tow it only on local roads", "Establish the correct MAM before towing, as entitlement depends on it"],
        correct: 3,
        explain: "Entitlement is assessed on MAM, and guessing it is not a defence. The actual loaded weight is not the figure the licence rules use.",
      },
      {
        q: "The advantage of a braked trailer over an unbraked one is:",
        options: ["It allows a higher permitted trailer weight and shortens stopping distances", "It can be towed faster", "It needs no breakaway cable", "It is exempt from the motorway lane restriction that applies to other combinations"],
        correct: 0,
        explain: "The brakes are what make a heavier trailer safe to tow, which is why the unbraked limit sits at 750 kg.",
      },
      {
        q: "An instructor delivering BE training should give most attention to:",
        options: ["The theory of trailer construction, braking systems and coupling design", "Reversing, coupling procedure, load distribution and speed discipline", "Motorway driving only", "Trailer maintenance schedules"],
        correct: 1,
        explain: "Those four are what the test assesses and what causes real-world incidents. The theory matters far less than the habits.",
      },
      {
        q: "A driver towing must ensure their view to the rear is adequate. This means:",
        options: ["Using the interior mirror only", "Relying on a reversing camera", "Using exterior mirrors, extended if necessary, since the interior mirror will be blocked", "Asking a passenger to watch behind and report whatever is approaching from the rear"],
        correct: 2,
        explain: "A trailer or caravan usually blocks the interior mirror entirely, so the exterior mirrors become the only view — and they need to reach past the trailer's width.",
      },

      /* ---- Further category-specific knowledge ---- */
      {
        q: "A driver plans to tow a horsebox with a MAM of 2,600 kg behind a vehicle with a MAM of 3,000 kg. This driver requires:",
        options: [
          "No additional entitlement, provided the horsebox has its own braking system",
          "Category B only, since the towing vehicle is itself within 3,500 kg",
          "Category C1, because the trailer exceeds 2,000 kg when it is fully laden",
          "Category BE, because the combined MAM of 5,600 kg exceeds the B limit",
        ],
        correct: 3,
        explain: "3,000 plus 2,600 is 5,600 kg. That is well past the 3,500 kg ceiling for category B, and inside the 7,000 kg that BE covers.",
      },
      {
        q: "When loading a trailer, the practical way to judge whether the noseweight is roughly correct is to:",
        options: [
          "Use a noseweight gauge under the coupling and compare it against the limits",
          "Lift the coupling by hand and judge whether it feels comfortably heavy",
          "Check whether the trailer sits perfectly level when it is fully loaded",
          "Confirm that the towing vehicle's rear suspension has not visibly compressed",
        ],
        correct: 0,
        explain: "Guessing by hand is how people end up well outside the range. A gauge costs little and settles both the vehicle's limit and the coupling's in one measurement.",
      },
      {
        q: "A trailer's breakaway cable is found to be frayed during a pre-journey check. The driver should:",
        options: [
          "Double it back on itself so the worn section carries no load",
          "Replace it before towing, as it is the only thing that stops a detached trailer",
          "Tape the damaged section and have it replaced after the journey",
          "Continue, provided the coupling itself is in sound condition and locks correctly",
        ],
        correct: 1,
        explain: "It has one job and it only happens once. A cable that snaps in the moment it is needed leaves a loaded trailer running free down the road.",
      },
      {
        q: "Why must a driver take particular care when towing past the entrance to a motorway service area or a filling station?",
        options: [
          "Trailers are prohibited from using motorway service areas in most cases",
          "The combination's speed limit is reduced further near junctions and entrances",
          "The combination needs a much longer gap to slow, turn and clear the carriageway",
          "Trailer brakes are less effective on the gradients found at such entrances",
        ],
        correct: 2,
        explain: "Extra mass means a longer stopping distance and extra length means longer to clear the lane. Both work against a late decision to turn in.",
      },
      {
        q: "A caravan is being towed with its water tank full. The main consideration is that:",
        options: [
          "Water in the tank interferes with the operation of the overrun braking system",
          "Water inside the tank freezes more readily while the caravan is in motion",
          "The tank must be emptied before the caravan can legally be moved on a public road",
          "The added weight counts toward the combined MAM and may affect the entitlement needed",
        ],
        correct: 3,
        explain: "Water weighs a kilogram a litre and it is easy to forget. A full tank can be the thing that pushes a combination over the limit for the licence held.",
      },
      {
        q: "The correct sequence when coupling a trailer to a towing vehicle is to:",
        options: [
          "Lower the coupling and lock it, fit the breakaway cable, then connect the electrics",
          "Connect the electrics, lower the coupling, then fit the breakaway cable",
          "Fit the breakaway cable first, then lower and lock the coupling onto the towball",
          "Raise the jockey wheel, lower the coupling, then connect the electrics and cable",
        ],
        correct: 0,
        explain: "Secure the mechanical connection before anything else, then the safety device, then the electrics. Doing it in a fixed order is what stops a step being skipped.",
      },
      {
        q: "A driver towing on a single carriageway notices a queue of traffic building behind. Best practice is to:",
        options: [
          "Maintain speed and position, since following drivers should allow for the trailer",
          "Pull in where it is safe and legal to do so, and let the queue clear",
          "Increase speed up to the road's posted limit to reduce the delay to others",
          "Move closer to the nearside so faster traffic can pass within the same lane",
        ],
        correct: 1,
        explain: "A long queue behind a slow combination produces risky overtakes. Letting it clear is both courteous and the safer option for you.",
      },
      {
        q: "What is the main risk of fitting a towbar that is not type-approved for the vehicle?",
        options: [
          "The towbar may not match the vehicle's paint finish or bumper contours",
          "It will prevent the trailer's electrical socket from functioning correctly",
          "It may fail to spread the towing loads into the structural points designed for them",
          "It usually adds more weight to the rear axle than an approved towbar would",
        ],
        correct: 2,
        explain: "An approved towbar is engineered around specific mounting points on that bodyshell. One that is not can tear its mountings out under load, which is a failure at the worst possible moment.",
      },
      {
        q: "A trailer has been standing unused for eighteen months. Before towing it, the most important checks are:",
        options: [
          "Only the coupling, since it is the one component that carries the towing load",
          "The paintwork, the floor covering and the security of the number plate",
          "The jockey wheel and the corner steadies for smooth and free operation",
          "Tyres for age cracking and pressure, brakes for seizure, and lights for corrosion",
        ],
        correct: 3,
        explain: "Standing is harder on a trailer than using it. Tyres perish, brake shoes seize to drums, and earth connections corrode — and all three fail without warning.",
      },
      {
        q: "When a combination is being reversed into a driveway on the left, the driver should ideally:",
        options: [
          "Position so the trailer swings toward the driver's side, keeping it visible",
          "Reverse briskly so the trailer has less opportunity to move off line",
          "Approach from the nearside so the driveway stays within the mirror's view",
          "Rely on the nearside mirror alone, since the offside view is not required",
        ],
        correct: 0,
        explain: "Reversing toward your own side keeps the trailer in view through the driver's window rather than in a mirror, which is far easier to judge.",
      },
      {
        q: "The maximum width permitted for a trailer towed by a category B vehicle in Ireland is:",
        options: [
          "2.00 metres", "2.55 metres", "3.00 metres", "3.50 metres",
        ],
        correct: 1,
        explain: "2.55 metres, the same as most goods vehicles. Anything wider needs the towing vehicle to be correspondingly capable and brings additional requirements.",
      },
      {
        q: "A driver is unsure whether a combination falls within category B. The safest course of action is to:",
        options: [
          "Tow it and arrange a licence upgrade should the combination prove too heavy",
          "Check both plated MAM figures and add them before the journey begins",
          "Estimate the weights and allow a reasonable margin for error either way",
          "Assume category B applies while the towing vehicle stays within 3,500 kg",
        ],
        correct: 1,
        explain: "The figures are stamped on both vehicles and take a minute to add. Driving outside your entitlement is an offence and an insurer may decline a claim on it.",
      },
      {
        q: "Why is it important that a trailer's tyres are inflated to the pressure specified for the trailer rather than for the towing vehicle?",
        options: [
          "The trailer's braking system depends on a specific tyre pressure to function",
          "Trailer tyres are manufactured from a softer compound than car tyres",
          "Trailer tyres frequently carry heavier loads and require higher pressures",
          "Matching the towing vehicle's pressures would overload its own rear axle",
        ],
        correct: 2,
        explain: "A small trailer wheel can carry a surprising load, and the correct pressure is often well above a car's. Running it at car pressures overheats the tyre.",
      },
      {
        q: "An instructor demonstrating uncoupling should emphasise that the jockey wheel must be:",
        options: [
          "Left raised until the coupling has been released from the towball",
          "Positioned at its lowest setting regardless of the ground conditions",
          "Removed entirely once the trailer has been positioned as required",
          "Lowered and taking the trailer's weight before the coupling is released",
        ],
        correct: 3,
        explain: "Release the coupling with nothing supporting the nose and the trailer drops, which damages the coupling and is dangerous to anyone standing at the front.",
      },
      {
        q: "A category B licence holder may drive a vehicle and trailer combination with a MAM of exactly 3,500 kg:",
        options: [
          "Yes — 3,500 kg is within category B, which covers up to that figure",
          "Only if the trailer is fitted with an overrun braking system",
          "Only when the trailer itself has a MAM of 750 kg or less",
          "No — any combination requires category BE regardless of its total weight",
        ],
        correct: 0,
        explain: "The limit is up to and including 3,500 kg. It is the figure above it that requires BE.",
      },
      {
        q: "Which is the best indication that a load on a flatbed trailer has been adequately secured?",
        options: [
          "It does not move when pushed firmly by hand from each side in turn",
          "It is restrained against movement forwards, backwards and sideways, and cannot lift",
          "It sits entirely within the trailer's sides and does not project beyond them",
          "It is covered by a tarpaulin that has been tied down at every corner",
        ],
        correct: 1,
        explain: "Braking throws a load forward, acceleration backward, cornering sideways, and a bump upward. A load only held in one direction will find the others.",
      },
      {
        q: "A driver towing in heavy rain should be particularly aware that:",
        options: [
          "The additional weight of the trailer improves grip on a wet road surface",
          "Overrun brakes become substantially less effective once the drums are wet",
          "The trailer's tyres may aquaplane before the towing vehicle's tyres do",
          "Spray from the towing vehicle keeps the trailer's tyres clear of standing water",
        ],
        correct: 2,
        explain: "Trailer tyres are often narrower and less heavily loaded than the car's, so they can lose contact with the road first — and you feel it as the trailer starting to wander.",
      },
      {
        q: "The first thing a driver should do on discovering that a trailer's lights are not working is to:",
        options: [
          "Complete the journey in daylight only and repair the fault afterwards",
          "Drive with hazard warning lights on so the trailer remains visible to traffic",
          "Replace all of the trailer's bulbs, since one failure often indicates others",
          "Check the plug, socket and earth connection before assuming a bulb has failed",
        ],
        correct: 3,
        explain: "A trailer's electrical connection lives in road spray and salt, so a corroded pin or a poor earth is far more common than a blown bulb — and it is the quicker thing to check.",
      },
    ],
  },
  {
    id: "adi-b2-safety",
    title: "Road Safety Precepts & Practices",
    questions: [
      {
        q: "The speed limit on a local road in Ireland, unless otherwise signed, is:",
        options: ["50 km/h", "60 km/h", "80 km/h", "100 km/h"],
        correct: 1,
        explain: "60 km/h. It was reduced from 80 in February 2025, so older material and older habits both have it wrong.",
      },
      {
        q: "The default speed limit on a regional road is:",
        options: ["60 km/h", "80 km/h", "100 km/h", "120 km/h"],
        correct: 1,
        explain: "80 km/h on regional roads, against 100 on national roads and 60 on local roads.",
      },
      {
        q: "A speed limit is best understood as:",
        options: ["An absolute maximum, which may still be too fast for the conditions", "A general guideline which may reasonably be exceeded while completing an overtake", "The minimum safe speed", "A target speed to maintain"],
        correct: 0,
        explain: "Driving at the posted limit in fog or ice is legal and dangerous at the same time. The limit is a ceiling, not an instruction.",
      },
      {
        q: "The two-second rule is used to judge:",
        options: ["How long to wait at a junction before emerging into traffic", "A minimum following distance in good conditions", "The time needed to overtake", "Reaction time"],
        correct: 1,
        explain: "Two seconds in dry conditions, doubled in the wet, and far more on ice. It scales with speed automatically, which a fixed distance does not.",
      },
      {
        q: "Overall stopping distance is made up of:",
        options: ["Braking distance only", "Reaction time plus tyre wear", "Thinking distance plus braking distance", "The distance travelled at the speed limit"],
        correct: 2,
        explain: "Thinking distance grows in direct proportion to speed; braking distance grows with its square. That is why small speed increases lengthen stopping distances so sharply.",
      },
      {
        q: "A driver approaching a zebra crossing with a pedestrian waiting must:",
        options: ["Sound the horn", "Continue if the pedestrian has not stepped out", "Flash headlights to signal them across", "Yield and stop to allow them to cross"],
        correct: 3,
        explain: "The obligation is to yield. Flashing headlights is not a recognised signal and can wave someone into the path of a vehicle in the other lane.",
      },
      {
        q: "When passing a cyclist, a driver should:",
        options: ["Leave adequate clearance, allowing more space at higher speeds", "Sound the horn before passing", "Pass only on a straight road", "Pass as closely as is safely possible in order to save time and road space"],
        correct: 0,
        explain: "A cyclist can be pushed off line by wind, a pothole or a drain, and the faster you pass the more the air disturbance affects them.",
      },
      {
        q: "The greatest risk when a driver uses a mobile phone, even hands-free, is:",
        options: ["Legal penalties", "Cognitive distraction — attention is on the conversation rather than the road", "Poor call quality", "The physical distraction of holding the phone in one hand while steering"],
        correct: 1,
        explain: "Hands-free removes the physical element but not the attentional one. Drivers in conversation look at hazards without registering them.",
      },
      {
        q: "Driver fatigue is particularly dangerous because:",
        options: ["It causes physical pain", "It only affects long-distance drivers", "It impairs judgement and reaction time, and the driver often underestimates it", "It can usually be overcome by opening a window and turning the radio up loud"],
        correct: 2,
        explain: "Someone becoming drowsy is poorly placed to assess how drowsy they are. Fresh air and loud music do nothing; stopping to rest does.",
      },
      {
        q: "The safest response to the onset of drowsiness while driving is to:",
        options: ["Open the window and turn up the radio", "Increase speed in order to finish the remainder of the journey sooner", "Drink a cold soft drink and continue", "Stop somewhere safe and rest, ideally with a short sleep"],
        correct: 3,
        explain: "Only sleep addresses sleepiness. The other measures buy minutes at most and mask the symptom while the impairment continues.",
      },
      {
        q: "Alcohol affects driving by:",
        options: ["Slowing reaction times, impairing judgement and increasing risk-taking", "Impairing vision only", "Reducing the ability to steer only", "Affecting only inexperienced drivers who have not built up a tolerance"],
        correct: 0,
        explain: "The combination is what makes it so dangerous — reactions slow while confidence rises, so the driver takes more risk with less capacity to handle it.",
      },
      {
        q: "A driver taking prescription medication should:",
        options: ["Drive only short distances", "Check whether it may impair driving and follow the advice given", "Stop taking it before driving", "Assume the medication is safe to drive on because a doctor prescribed it"],
        correct: 1,
        explain: "Plenty of prescribed medicines carry driving warnings, and driving while impaired by them is an offence regardless of the prescription.",
      },
      {
        q: "In fog, a driver should:",
        options: ["Use full-beam headlights to see further", "Follow the vehicle ahead closely enough to use its rear lights as a guide", "Use dipped headlights and fog lights where visibility requires, and slow down", "Use hazard warning lights while moving"],
        correct: 2,
        explain: "Full beam reflects off the fog and reduces visibility further. Following closely for guidance removes the space needed to stop.",
      },
      {
        q: "Rear fog lights should be switched off when visibility improves because they:",
        options: ["Drain the battery", "Are illegal in daylight", "Reduce the effectiveness of the vehicle's own dipped headlights", "Dazzle following drivers and can mask brake lights"],
        correct: 3,
        explain: "They are deliberately bright. In clear conditions they hide the brake lights beside them, which is the opposite of what is wanted.",
      },
      {
        q: "When driving on ice, a driver should:",
        options: ["Drive slowly in the highest suitable gear with gentle inputs", "Use a low gear and high engine speed", "Follow closely behind another vehicle to use the tracks it has cleared", "Brake firmly to test grip"],
        correct: 0,
        explain: "A higher gear reduces the torque reaching the wheels, making wheelspin less likely. Every input — steering, braking, accelerating — needs to be gradual.",
      },
      {
        q: "The main hazard of driving through standing water at speed is:",
        options: ["Reduced fuel economy", "Aquaplaning and possible loss of braking and steering control", "Damage to the paintwork and underbody from grit in the water", "Splashing pedestrians"],
        correct: 1,
        explain: "The tyres lift off the surface and the car is briefly a passenger. Water can also be drawn into the engine, which destroys it.",
      },
      {
        q: "After driving through deep water, a driver should:",
        options: ["Accelerate hard and then brake sharply to dry the brakes out", "Stop immediately and wait", "Test the brakes gently at low speed to dry them out", "Apply the handbrake while moving"],
        correct: 2,
        explain: "Wet brakes are badly reduced until dried. Light pressure while moving slowly restores them before they are needed for real.",
      },
      {
        q: "A driver who feels angry or provoked by another road user should:",
        options: ["Signal their disapproval clearly", "Follow the other vehicle to make the point", "Flash headlights repeatedly", "Let it go and maintain a safe distance"],
        correct: 3,
        explain: "Anger degrades judgement exactly like any other impairment, and responding escalates a situation that would otherwise end in seconds.",
      },
      {
        q: "The safest position for a driver to place their hands on the steering wheel is:",
        options: ["In a position giving good control and clear of the airbag's deployment path", "At the bottom of the wheel", "One hand only on the wheel, with the other resting on the gear lever", "At the top of the wheel"],
        correct: 0,
        explain: "Control comes first, but a hand in front of a deploying airbag can be driven into the driver's own face.",
      },
      {
        q: "Head restraints reduce injury in a collision when they are positioned:",
        options: ["Removed from the seat altogether in order to improve rearward visibility", "With the top of the restraint level with the top of the occupant's head", "As high as possible", "As low as possible"],
        correct: 1,
        explain: "Too low and the head pivots over the top of it, which is precisely the movement causing whiplash.",
      },
    ],
  },
];

export default ADI_BANK_VEHICLE;
