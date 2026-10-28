/* ===========================================================================
   content.js — everything Jack studies lives in this one file.

   TO ADD A NEW PACKET: copy one TOPIC block, change the id/title/sections,
   then add matching cards to FLASHCARDS and questions to QUESTIONS using the
   same `topic` id. Nothing else needs to change. See README.md.
   =========================================================================== */

const TOPICS = [
  /* ---------------------------------------------------------------- */
  {
    id: "inertia",
    title: "Inertia & Newton's First Law",
    blurb: "Why things keep doing what they're already doing.",
    sections: [
      {
        heading: "What inertia is",
        body: [
          "Inertia is the tendency of an object to resist changes in its state of motion. An object that is sitting still resists being moved. An object that is moving resists being stopped, sped up, slowed down, or turned.",
          "Newton's idea was the opposite of what people had believed for about 2000 years before him. The older thinking said that rest was the natural state of things: a moving object would eventually stop on its own, and a force was necessary to keep an object moving. Newton said objects have no natural tendency to come to rest at all."
        ],
        terms: [
          { term: "Inertia", def: "The tendency of an object to resist changes in its state of motion." },
          { term: "State of motion", def: "Whether an object is at rest or moving, how fast, and in which direction." }
        ]
      },
      {
        heading: "Newton's first law of motion",
        body: [
          "An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.",
          "This one sentence has two clauses and one condition. Learn it in those three pieces and the whole law gets easy."
        ],
        law: true,
        list: {
          label: "The two clauses and the one condition",
          items: [
            "Clause 1 — objects at rest: velocity is 0 m/s, and it stays 0 m/s.",
            "Clause 2 — objects in motion: an object moving 5 m/s East keeps moving 5 m/s East.",
            "The condition — \"unless acted upon by an unbalanced force.\" As long as the forces are balanced, the first law applies."
          ]
        },
        callout: "Short version: objects tend to keep on doing what they're doing."
      },
      {
        heading: "The bucket of water on the track",
        body: [
          "Imagine carrying a baking dish filled with water around an oval track, trying to do a lap as fast as you can. The water spills whenever the state of motion of the container is changed — the water resists the change and keeps on doing what it was doing.",
          "There are exactly three ways to change the container's state of motion, and all three make it spill."
        ],
        list: {
          label: "The water spills when",
          items: [
            "The container was at rest and you attempted to move it.",
            "The container was in motion and you attempted to stop it.",
            "The container was moving in one direction and you attempted to change its direction."
          ]
        }
      },
      {
        heading: "Coffee in a car",
        body: [
          "Coffee sits at rest in a cup in a car. When you accelerate from rest, the road provides an unbalanced force on the spinning wheels that pushes the car forward. The coffee stays at rest in the same position, so it spills out of the back of the cup and into your lap.",
          "Braking is the mirror image. Friction on the locked wheels provides the unbalanced force that changes the car's state of motion. Nothing acts on the coffee, so the coffee continues with the same speed in the same direction — forward, into the windshield or the dash.",
          "The same thing happens to you. In a sudden stop you keep moving forward, sliding along the seat, until something provides an unbalanced force. That something is the seat belt."
        ],
        callout: "A seat belt supplies the unbalanced force that brings you from a state of motion to a state of rest."
      },
      {
        heading: "Everyday applications",
        body: [
          "Every one of these is the first law doing its job. Being able to explain why is usually worth more points than naming the law."
        ],
        list: {
          label: "Inertia in real life",
          items: [
            "Blood rushes from your head to your feet when a descending elevator stops quickly.",
            "A hammer head is tightened onto its wooden handle by banging the bottom of the handle against a hard surface — the handle stops, the head keeps going down onto it.",
            "Ketchup leaves the bottle when the bottle is thrust downward and then abruptly halted — the ketchup keeps moving.",
            "Headrests are in cars to prevent whiplash during rear-end collisions.",
            "A skateboard rider flies forward off the board when the board hits a curb or rock and abruptly stops."
          ]
        }
      },
      {
        heading: "Mass as a measure of inertia",
        body: [
          "All objects have inertia, but some objects have more than others. The tendency of an object to resist changes in its state of motion varies with mass. Mass is the quantity that is solely dependent upon the inertia of an object — the more inertia an object has, the more mass it has.",
          "A more massive object has a greater tendency to resist changes in its state of motion than a less massive object.",
          "Picture two identical-looking bricks on a table. One is mortar, one is Styrofoam. Without lifting them, give each an identical push. The brick that offers the least resistance to the change is the one with the least inertia, and therefore the least mass — the Styrofoam one."
        ],
        callout: "Inertia depends on mass and nothing else. Not speed. Not direction. Mass."
      },
      {
        heading: "The one that trips everyone up: speed is not inertia",
        body: [
          "A fast-moving object feels harder to stop than a slow one, so it seems obvious that going faster should mean more inertia. It doesn't. Speed and inertia are two different things.",
          "Inertia is how strongly an object resists a change in its state of motion, and that resistance is set by mass alone. Throw a tennis ball slowly or hurl it as hard as you can — it is the same ball, with the same mass, and the same inertia both times. What changed is how much motion you have to take away to stop it, not how stubborn the ball is.",
          "So when Mac says flinging the Jell-O faster gives it greater inertia, he is wrong, and Tosh is right — fully right, not half right. Inertia depends upon mass, not upon speed. The only way to give the Jell-O more inertia is to use more Jell-O."
        ],
        callout: "If the question asks what changes an object's inertia, the answer is always mass."
      },
      {
        heading: "The practice sheet, worked through",
        body: [
          "These are the six questions from the inertia practice exercises, with the reasoning behind each answer. Check these against what you wrote."
        ],
        numbered: {
          label: "Answers and why",
          items: [
            {
              head: "Throw a rock far from all gravity and friction → B, it keeps going.",
              text: "It continues in motion in the same direction at constant speed. With no unbalanced force acting on it, nothing can change its state of motion, so it never slows down."
            },
            {
              head: "Force needed to keep a 2-kg object moving at 4 m/s → B, 0 Newtons.",
              text: "None at all. Force is only needed to change a state of motion, never to maintain one. Thinking a force is required to keep something moving is exactly the pre-Newton idea the first law overturned."
            },
            {
              head: "Mac and Tosh on the Jell-O → Tosh is right.",
              text: "Not partly right, and not both right. Inertia does not depend upon speed, only upon mass. Mac's claim that greater speed means greater inertia is simply wrong. This is the single most commonly missed idea in the unit."
            },
            {
              head: "Does it take a force to set an object moving in a weightless environment? → Yes.",
              text: "Weightlessness means gravity is not pulling on the object. It does not mean the object has no mass. It still has mass, so it still has inertia, so a force is still required to change its state of motion."
            },
            {
              head: "Fred eating on the sofa every Sunday → his inertia increases.",
              text: "Eating increases his mass. Because mass is the measure of inertia, more mass means more inertia. Say both halves: the mass goes up, and therefore so does the inertia. Stopping at \"he gains mass\" leaves out the part the question is actually asking about."
            },
            {
              head: "Benny zigzagging away from the moose → the moose can't change direction quickly.",
              text: "The moose's enormous mass gives it enormous inertia, so it strongly resists any change in its state of motion — including a change in direction. Benny has far less mass and far less inertia, so he can cut left and right easily while the moose carries on in the direction it was already going. Changing direction is a change in state of motion, which is the link back to the first law."
            }
          ]
        },
        callout: "Two answers to say in full: Fred gains mass AND therefore inertia; the moose resists changing direction because its mass gives it inertia."
      }
    ]
  },

  /* ---------------------------------------------------------------- */
  {
    id: "mass",
    title: "Mass",
    blurb: "The amount of matter in an object — and why it never changes.",
    sections: [
      {
        heading: "What mass is",
        body: [
          "Which is heavier, a ton of feathers or a ton of iron? Neither — a ton is a ton. You can compress something, change its volume, or carry it up a mountain, and the quantity of matter stays the same.",
          "Mass is the measure of the quantity of matter an object contains, and it is a fundamental unit of measurement."
        ],
        terms: [
          { term: "Mass", def: "The measure of the quantity of matter an object contains." }
        ]
      },
      {
        heading: "The four properties of mass",
        body: [
          "The test will almost certainly ask about these four. They are the backbone of the whole packet."
        ],
        numbered: {
          label: "Mass has four properties",
          items: [
            {
              head: "Mass is constant — it does not change.",
              text: "Wherever the object goes, the amount of matter in it is the same."
            },
            {
              head: "Mass is the measure of inertia.",
              text: "Matter is lazy. An object of a certain mass cannot move itself. It doesn't have the ability to start or stop moving, or speed up or slow down, by itself. For these changes to occur, a force is required, such as a push or a pull. This inactive property of matter is called inertia. If a large force is needed to speed up or slow down an object, it has a large mass. If a small force is needed, the mass is small."
            },
            {
              head: "Mass is conserved.",
              text: "It can never be created or destroyed. It can be changed into energy, but the total mass remains the same. No new mass or energy is created — one is simply changed into another."
            },
            {
              head: "Mass has weight.",
              text: "Weight is the only property here that does change. Drop a pen and it falls to the floor, attracted by the pull of gravity. The weight of an object is the measure of the earth's attraction for that object. The further away an object is from the earth, the smaller the gravitational pull — so an object has less weight on top of a mountain than it does in a valley."
            }
          ]
        }
      },
      {
        heading: "Mass versus weight",
        body: [
          "This is the single most common place to lose points. Mass is how much matter is in the object. Weight is how hard gravity is pulling on it. Move the object somewhere else and the mass is identical, but the weight can change."
        ],
        compare: {
          left: { label: "Mass", points: ["The amount of matter in an object", "Constant everywhere", "Measured in grams, kilograms, or slugs", "Is the measure of inertia"] },
          right: { label: "Weight", points: ["The measure of earth's attraction for the object", "Changes with location", "Smaller the further you get from earth", "Is a force, measured in Newtons"] }
        },
        callout: "The mass of an object stays the same no matter where it is in the universe."
      },
      {
        heading: "Units of mass",
        body: [
          "The English system measures mass in slugs. The metric system measures mass in grams or kilograms. One slug is equal to 14.59 kilograms."
        ],
        terms: [
          { term: "Slug", def: "The English-system unit of mass. 1 slug = 14.59 kilograms." }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------------- */
  {
    id: "forces",
    title: "Forces",
    blurb: "Pushes, pulls, and what happens when they don't cancel out.",
    sections: [
      {
        heading: "What a force is",
        body: [
          "A force is a push or pull upon an object resulting from the object's interaction with another object. Wherever there is an interaction between two objects, there is a force upon each of the objects.",
          "When the interaction ceases, the two objects no longer experience the force. Forces only exist as a result of an interaction."
        ],
        terms: [
          { term: "Force", def: "A push or pull upon an object resulting from its interaction with another object." },
          { term: "Unbalanced force", def: "Another way of saying net force — a force left over after everything else cancels out." }
        ]
      },
      {
        heading: "Balanced forces",
        body: [
          "Consider a physics book at rest on a tabletop. Two forces act upon it. The Earth's gravitational pull exerts a downward force. The table pushes upward on the book — this is sometimes called the normal force.",
          "Since these two forces are of equal magnitude and in opposite directions, they balance each other. The book is said to be at equilibrium. There is no unbalanced force acting on the book, so the book maintains its state of motion.",
          "A person standing on the floor is the same situation. Gravity exerts a downward force, the floor exerts an upward force, they balance, and the person maintains their state of motion.",
          "When all the forces acting on an object are balanced, the object is at equilibrium and will not accelerate. Diagrams drawn this way — the object as a box with labeled arrows for each force — are known as free-body diagrams."
        ],
        terms: [
          { term: "Equilibrium", def: "The state when all forces on an object are balanced, so it does not accelerate." },
          { term: "Free-body diagram", def: "A diagram showing every force acting on an object as a labeled arrow." }
        ]
      },
      {
        heading: "Unbalanced forces",
        body: [
          "Now the same book slides from left to right across the tabletop. Maybe it was shoved, maybe it slid down an incline. Either way it is in motion and at this moment nobody is pushing it.",
          "Gravity still pulls down 20 N and the table still pushes up 20 N, and those two balance. But there is no force present to balance the force of friction, which pushes leftward with 5 N. As the book moves to the right, friction acts to the left to slow the book down. There is an unbalanced force, so the book is not at equilibrium and it accelerates — in this case, it slows down.",
          "To decide whether the forces on an object are balanced, list every force acting on it. If two individual forces are of equal magnitude and opposite direction, they balance each other. An object is acted upon by an unbalanced force only when there is an individual force that is not being balanced by a force of equal magnitude in the opposite direction."
        ],
        callout: "Unbalanced forces cause accelerations. Balanced forces never do.",
        diagram: "friction"
      },
      {
        heading: "Contact and non-contact forces",
        body: [
          "Every force between objects falls into one of two broad categories."
        ],
        numbered: {
          label: "Two categories of force",
          items: [
            {
              head: "Contact forces",
              text: "Forces that result when the two interacting objects physically contact each other. Examples include frictional, tensional, normal, air resistance, applied, and spring forces."
            },
            {
              head: "Non-contact forces",
              text: "Pushing or pulling forces that result even when the two interacting objects are not in physical contact with each other, yet are able to exert a push or pull despite their physical separation. These action-at-a-distance forces include gravitational, magnetic, and electric forces."
            }
          ]
        }
      },
      {
        heading: "The Newton",
        body: [
          "Force is measured using the standard metric unit known as the Newton, abbreviated \"N.\" Saying \"10.0 N\" means 10.0 Newton of force.",
          "One Newton is the amount of force required to give a 1-kg mass an acceleration of 1 m/s². That gives the equivalency 1 Newton = 1 kg · m/s²."
        ],
        terms: [
          { term: "Newton (N)", def: "The metric unit of force. 1 N = 1 kg · m/s²." }
        ]
      },
      {
        heading: "Force is a vector quantity",
        body: [
          "A vector quantity is a quantity that has both magnitude and direction. To fully describe a force acting on an object, you must give both the magnitude — the size or numerical value — and the direction.",
          "So \"10 Newton\" is not a full description of a force. \"10 Newton downward\" is a complete description, because it gives both the magnitude (10 Newton) and the direction (downward).",
          "Because a force is a vector, forces are drawn as arrows. The size of the arrow reflects the magnitude of the force, and the direction of the arrow shows the direction the force is acting.",
          "A 20-Newton upward force on a book is canceled by a 20-Newton downward force on the same book. The two individual forces balance each other, and there is no unbalanced force acting on the book."
        ],
        terms: [
          { term: "Vector quantity", def: "A quantity with both magnitude and direction." },
          { term: "Magnitude", def: "The size or numerical value of a quantity." }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------------- */
  {
    id: "second-law",
    title: "Newton's Second Law",
    blurb: "F = ma — what a net force actually does to an object.",
    sections: [
      {
        heading: "From the first law to the second",
        body: [
          "The first law told you that the motion of an object will not change unless a net force acts on it — the brakes on a car, or a fast-moving hockey stick. It tells you when motion changes, but not by how much.",
          "That is the gap the second law fills. Mass, force and acceleration are all related, and the second law is the rule that connects them."
        ]
      },
      {
        heading: "The second law in words",
        body: [
          "A net force acting on an object causes the object to accelerate in the direction of the force.",
          "The acceleration of the object is affected by two factors: the size of the force, and the mass of the object. The larger the force acting on an object, the greater the acceleration of the object. The larger an object's mass, the greater the force needed to give it the same acceleration."
        ],
        law: true,
        callout: "Direction matters: the object accelerates in the direction of the force."
      },
      {
        heading: "The second law as an equation",
        body: [
          "Force = mass × acceleration, written F = ma. Mass is expressed in kilograms and acceleration in m/s².",
          "This is also where the newton comes from. The newton is the amount of force needed to give an object having a mass of 1 kg an acceleration of 1 m/s². In other words, 1 N = 1 kg · 1 m/s².",
          "Think back to the car stalled on the train tracks. To get the greatest acceleration across the tracks, you want to push the smallest mass while exerting the greatest force. So you will want to push the compact car, and you will want the weightlifter to help you exert the strongest force."
        ],
        callout: "F = ma. Rearranged: a = F ÷ m, and m = F ÷ a."
      },
      {
        heading: "How to work an F = ma problem",
        body: [
          "Every one of these problems is the same four steps. Write them out every time — most lost points come from skipping straight to the arithmetic.",
          "Watch for the trick in these problems: when a problem gives you two masses, such as a rider and a motorcycle, add them together first. The force has to accelerate everything that is moving."
        ],
        numbered: {
          label: "The four steps",
          items: [
            { head: "List what you are given.", text: "Write the mass in kilograms and the acceleration in m/s². If there is more than one mass, add them." },
            { head: "Write what you are looking for.", text: "Force, mass, or acceleration — mark the one the question is asking for." },
            { head: "Write the formula.", text: "F = m · a, then rearrange it if you are solving for mass or acceleration." },
            { head: "Substitute and solve.", text: "Put the numbers in, do the arithmetic, and label the answer with its unit: N for force, kg for mass, m/s² for acceleration." }
          ]
        }
      },
      {
        heading: "The worked example from the packet",
        body: [
          "How much force is needed to accelerate a 70 kg rider on a 200 kg motorcycle at a rate of 4 m/s²?",
          "Mass: 70 kg + 200 kg = 270 kg. Acceleration: 4 m/s². Force: unknown.",
          "F = m · a → F = 270 kg · 4 m/s² → F = 1080 N.",
          "Notice the two masses were added before anything else happened. The force has to move the rider and the motorcycle together."
        ],
        callout: "Add the masses first, then multiply."
      },
      {
        heading: "The two practice problems, worked through",
        body: [
          "These are the practice problems at the bottom of the packet. Try them on paper first, then check against the steps here."
        ],
        numbered: {
          label: "Practice problems",
          items: [
            {
              head: "Problem 1 → 3480 N.",
              text: "It takes 3000 N to accelerate an empty 1000 kg car at 3 m/s². A 160 kg wrestler gets in; what force gives the same acceleration? New mass = 1000 + 160 = 1160 kg. Acceleration is still 3 m/s². F = 1160 · 3 = 3480 N. The check that it holds together: the empty car needed 1000 · 3 = 3000 N, which is exactly the number the problem gave you."
            },
            {
              head: "Problem 2 → about 4.76 m/s².",
              text: "A 63 kg skater pushes off a wall with a force of 300 N. This one asks for acceleration, so rearrange: a = F ÷ m = 300 N ÷ 63 kg = 4.76 m/s². Dividing instead of multiplying is the whole point of the question — if you multiply you get 18,900, which is far too large for a person pushing off a wall."
            }
          ]
        },
        callout: "Asked for acceleration? Divide. a = F ÷ m."
      },
      {
        heading: "Falling objects",
        body: [
          "Drop a bowling ball and a marble from a bridge at the same time and they both splash into the water at exactly the same moment. People often expect the bowling ball to land sooner because it is heavier. It doesn't.",
          "The bowling ball does have a greater force of gravity pulling on it, because its mass is larger. But its larger mass also gives it more inertia, so more force is needed to change its velocity. The marble, having a smaller mass, has less inertia and therefore requires less force to accelerate. The two effects cancel, and everything falls at the same rate.",
          "Near Earth's surface, gravity causes all falling objects to accelerate at a rate of 9.81 m/s². That means all falling objects experience an increase in velocity of 9.81 m/s every second that it is falling."
        ],
        terms: [
          { term: "Acceleration due to gravity (g)", def: "9.81 m/s², the same for all objects regardless of mass." }
        ],
        callout: "A heavy object and a light object hit the ground together. Gravity accelerates all matter at the same rate."
      },
      {
        heading: "Finding weight with the formula",
        body: [
          "Weight is a force, so you can substitute W for F in F = ma and rewrite the formula as W = ma. Since the acceleration is always gravity, 9.81 m/s², this becomes W = m · 9.81 m/s². This is why a 1 kg mass weighs 9.81 newtons here on Earth.",
          "To do this yourself on an ordinary bathroom scale: convert your mass from pounds to kilograms, then multiply by 9.81.",
          "The packet's example — a 100 pound person converts to about 45 kg. W = 45 kg · 9.81 m/s² = 441.45 N.",
          "Be careful with the words here. Pounds and kilograms are not the same kind of quantity: the kilogram figure is mass, and the newton figure is weight. The scale gives you one, the formula gives you the other."
        ],
        callout: "W = m · 9.81 m/s². Mass in kilograms goes in, weight in newtons comes out."
      }
    ]
  },

  /* ---------------------------------------------------------------- */
  {
    id: "resistance",
    title: "Resistance, Stress & Pressure",
    blurb: "What pushes back — and what a force does to the object it acts on.",
    sections: [
      {
        heading: "Resistance",
        body: [
          "Take two identical sheets of paper, crumple one into a ball, and drop them both from a balcony at the same time. The crumpled ball falls faster than the flat sheet. But gravity accelerates all samples of matter at the same rate — so how can both be true?",
          "The only explanation is that there is an additional force acting on these two objects resisting the force of gravity. That force is resistance.",
          "Resistance is a force that disrupts motion."
        ],
        terms: [
          { term: "Resistance", def: "A force that disrupts motion." }
        ]
      },
      {
        heading: "The four types of resistance",
        body: [
          "The packet names four. Expect to be asked to recognize an example and name which type it is."
        ],
        numbered: {
          label: "Four types",
          items: [
            {
              head: "Resistance of gases (air resistance)",
              text: "A force imposed on objects to disrupt their motion while in air. The amount of air resistance depends on the speed, size and shape of the object. The larger the object, the greater the amount of air resistance. If you hold your hand out the window of a moving car, the more you expose it to the oncoming air, the more it will exert motion against it."
            },
            {
              head: "Resistance of liquid (water)",
              text: "Water also disrupts motion. Because of this resistance it is hard to walk quickly in water. To eliminate some of this resistance, fish are shaped slim, flat and arched."
            },
            {
              head: "Heat and electricity",
              text: "Heat is conducted along a wall, along a pipe, or through the air. Electricity moves along a wire. Some materials resist heat better than others — a good resistor of heat is called an insulator, which is why insulation goes in the walls and roofs of homes. Electrical resistance is a force that disrupts the flow of electricity. Poor resistors are called conductors, and most metals are good conductors of electricity."
            },
            {
              head: "Solids (friction)",
              text: "Solid objects also share a resisting or disruptive motion. If you tried to pull a piece of heavy furniture across the floor, you would find that the floor disrupts the motion. In other words, friction is created. Friction can also be helpful — it is the friction between our shoes and the ground that makes it possible for us to walk."
            }
          ]
        },
        callout: "Four kinds: gases (air), liquid (water), heat and electricity, and solids (friction)."
      },
      {
        heading: "Measuring resistance",
        body: [
          "Since resistance is a force, the units of resistance are the same as the units of force.",
          "Suppose the wind is trying to disrupt an object being pushed along by a 5 kg force, but because of the resistance of the air, the object only moves as though 4 kg of force were pushing it. The resistance of air on this object must be 1 kg, or 9.81 N.",
          "Another example: if you pull a cart with a force of 2 kg and it doesn't move, then the friction force resisting the motion must be 2 kg, or 19.62 N.",
          "Both of those conversions are just W = m · 9.81 again. One kilogram of force is 9.81 newtons; two kilograms is 19.62 newtons."
        ],
        callout: "Resistance is a force, so it is measured in newtons."
      },
      {
        heading: "Terminal velocity",
        body: [
          "As an object falls, air resistance gradually increases until it equals the pull of gravity. When this happens, the two forces are balanced.",
          "According to the law of inertia, when the forces acting on an object are balanced, the motion of the object will not change. So the falling object will stop accelerating. It will continue to fall, but at a constant, final velocity.",
          "Terminal velocity is the highest velocity reached by a falling object."
        ],
        terms: [
          { term: "Terminal velocity", def: "The highest velocity reached by a falling object, once air resistance balances gravity." }
        ],
        callout: "At terminal velocity the object is still falling — it just stops speeding up."
      },
      {
        heading: "Stress",
        body: [
          "Most crafts involve pulling, pressing, stretching, deforming and breaking of different materials. If we were to compare these materials, we would find that clay is easy to compress as opposed to a piece of lead. A wooden stick is easy to break if we try to bend it, while a piece of wire bends into just about any shape we wish. A string breaks if we pull hard enough on it, but a rubber band will stretch before it breaks.",
          "Any time we try to deform an object, it resists a change to its form. If a force tries to deform an object instead of moving it, the body is said to be under stress.",
          "Stress is defined as an internal force that resists a change in the form of a body. So force is applied at a certain point outside the body; stress resists the force within the body.",
          "This matters well beyond crafts. If we were not calculating stress properly, buildings, bridges, and even the stools you are currently sitting on would collapse as a result of the tension and compression forces."
        ],
        terms: [
          { term: "Stress", def: "An internal force that resists a change in the form of a body." }
        ],
        callout: "Force comes from outside the body. Stress is the body resisting from within."
      },
      {
        heading: "The three varieties of stress",
        body: [
          "Stress is a distributed force over a unit area, and it comes in three varieties."
        ],
        numbered: {
          label: "Tension, compression, shear",
          items: [
            { head: "Tension is the result of a pulling force.", text: "A lamp hanging from a beam on the ceiling subjects the beam to tension because it is pulling on it. The chain supporting the lamp is also subjected to tension." },
            { head: "Compression results from a pushing force.", text: "The pillars supporting a roof of a building are in compression because the roof is pushing on them." },
            { head: "Shear is due to forces acting along the surface of a body.", text: "The surface of blackboard erasers are under shear stresses because the friction forces act along the surface as you rub." }
          ]
        },
        callout: "Pulling is tension. Pushing is compression. Rubbing along a surface is shear."
      },
      {
        heading: "Calculating stress",
        body: [
          "Since the whole area of a body resists deforming forces, the units of stress are expressed as force per unit area. When stress measurements are taken, they are expressed as grams or kilograms per square centimeter.",
          "The formula is stress = force ÷ area. All three of the packet's examples are that one division."
        ],
        numbered: {
          label: "The packet's three examples",
          items: [
            { head: "Tension → 2 grams per square centimeter.", text: "A hanging lamp weighs 50 grams and hangs from a beam with a cross section area of 25 square centimeters. 50 ÷ 25 = 2 g/cm²." },
            { head: "Compression → 1000 kilograms per square meter.", text: "A pillar with a one square meter area supports a portion of roof compressing it with a force of 1000 kilograms. 1000 ÷ 1 = 1000 kg/m²." },
            { head: "Shear → one fiftieth of a kilogram per square centimeter.", text: "An eraser with a surface area of 50 square centimeters is pushed with a 1 kilogram force. 1 ÷ 50 = 1/50 kg/cm², or 0.02 kg/cm²." }
          ]
        },
        callout: "Stress = force ÷ area. The answer always carries a 'per unit area' label."
      },
      {
        heading: "Pressure",
        body: [
          "We use the word pressure often — we're always under pressure to do well in school, to act on a dare, or for any other reason. But is this really pressure?",
          "Picture a barrel full of water. If we put the cork on the bottom the water will flow out. Now let's poke a hole in the side of the barrel, and the water starts flowing out of this also. Water would start flowing no matter where we put the hole, except on top.",
          "Try a similar experiment with gases. No matter where we put a hole in a balloon the air or gas would force its way out. So, we can conclude that liquids and gases apply forces to their containers. These forces do not act at any one point but over the entire area. That is how we define the force of a liquid or gas on an area as pressure.",
          "Pressure acts in all directions. This is the reason the water and air coming through any opening is under pressure."
        ],
        terms: [
          { term: "Pressure", def: "The force of a liquid or gas distributed over an entire area rather than acting at one point." }
        ],
        callout: "Pressure acts in all directions, over an entire area — not at a single point."
      },
      {
        heading: "Atmospheric pressure",
        body: [
          "Earth's atmosphere extends a very long way beyond the planet. At high altitudes, atoms and molecules are very far apart. Closer to Earth, these atoms and molecules come closer together due to the pressure of the mass of air above them.",
          "As the atoms and molecules become more closely packed, they exert greater force. The mass of air presses down on Earth's surface where pressure is greatest, with a force of 10.1 newtons per square centimeter. This is known as atmospheric pressure.",
          "Atmospheric pressure is greatest at sea level and decreases outward from the Earth. That follows directly from the packing: the lower you go, the more air is stacked above you.",
          "Although liquids are practically incompressible, they do apply pressure. As we go below the surface of any body of water, the amount of water above us gets larger, thus increasing the pressure on us. Gases are different — we can pump them into containers that are empty or full of liquid. We use gases to pressurize cans, bottles, tires, balloons and fire extinguishers. The pressure of gases can also be reduced to create a vacuum."
        ],
        list: {
          label: "Instruments that measure pressure",
          items: [
            "A manometer",
            "A barometer",
            "An altimeter"
          ]
        },
        callout: "Greatest at sea level, decreasing with altitude — because pressure comes from the weight of air above you."
      }
    ]
  }
];

/* =========================================================================== */

const FLASHCARDS = [
  { topic: "inertia", front: "Inertia", back: "The tendency of an object to resist changes in its state of motion." },
  { topic: "inertia", front: "Newton's first law of motion", back: "An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force." },
  { topic: "inertia", front: "The condition in Newton's first law", back: "\"Unless acted upon by an unbalanced force.\" The law applies as long as the forces are balanced." },
  { topic: "inertia", front: "State of motion", back: "Whether an object is at rest or moving, how fast it is going, and in what direction." },
  { topic: "inertia", front: "What did people believe before Newton?", back: "That rest was the natural state — moving objects would eventually stop, and a force was necessary to keep an object moving." },
  { topic: "inertia", front: "What does inertia depend on?", back: "Mass only. Not speed, not direction. A more massive object has a greater tendency to resist changes in its state of motion." },
  { topic: "inertia", front: "Why does a seat belt matter, in physics terms?", back: "It provides the unbalanced force that brings you from a state of motion to a state of rest when the car stops." },
  { topic: "inertia", front: "Three ways to make the water spill", back: "The container was at rest and you moved it; it was in motion and you stopped it; it was moving one direction and you changed its direction." },

  { topic: "mass", front: "Mass", back: "The measure of the quantity of matter an object contains. A fundamental unit of measurement." },
  { topic: "mass", front: "The four properties of mass", back: "1. Mass is constant. 2. Mass is the measure of inertia. 3. Mass is conserved. 4. Mass has weight." },
  { topic: "mass", front: "Weight", back: "The measure of the earth's attraction for an object. It changes with location — less on a mountain than in a valley." },
  { topic: "mass", front: "\"Mass is conserved\"", back: "Mass can never be created or destroyed. It can be changed into energy, but the total remains the same." },
  { topic: "mass", front: "\"Matter is lazy\"", back: "An object cannot start moving, stop, speed up, or slow down by itself. A force — a push or a pull — is required." },
  { topic: "mass", front: "Large force needed to speed up or slow an object means…", back: "A large mass. If only a small force is needed, the mass is small." },
  { topic: "mass", front: "Units of mass", back: "Slugs in the English system; grams or kilograms in the metric system. 1 slug = 14.59 kilograms." },
  { topic: "mass", front: "Does mass change if you fly to the moon?", back: "No. The mass of an object stays the same no matter where it is in the universe. Only its weight changes." },

  { topic: "forces", front: "Force", back: "A push or pull upon an object resulting from the object's interaction with another object." },
  { topic: "forces", front: "When does a force stop existing?", back: "When the interaction ceases. Forces only exist as a result of an interaction between two objects." },
  { topic: "forces", front: "Balanced forces", back: "Forces of equal magnitude in opposite directions. They cancel, the object is at equilibrium, and it does not accelerate." },
  { topic: "forces", front: "Equilibrium", back: "The state when all forces acting on an object are balanced, so there is no unbalanced force and no acceleration." },
  { topic: "forces", front: "What do unbalanced forces cause?", back: "Accelerations. An object with an unbalanced force on it is not at equilibrium." },
  { topic: "forces", front: "Contact forces", back: "Forces that result when two interacting objects physically touch. Friction, tension, normal, air resistance, applied, and spring forces." },
  { topic: "forces", front: "Non-contact forces", back: "Action-at-a-distance forces that act despite physical separation: gravitational, magnetic, and electric." },
  { topic: "forces", front: "The Newton (N)", back: "The metric unit of force. One Newton gives a 1-kg mass an acceleration of 1 m/s². 1 N = 1 kg · m/s²." },
  { topic: "forces", front: "Vector quantity", back: "A quantity with both magnitude and direction. Force is a vector, so \"10 N downward\" is complete but \"10 N\" is not." },
  { topic: "forces", front: "Free-body diagram", back: "A diagram showing the object as a box with a labeled arrow for every force acting on it. Arrow size shows magnitude; arrow direction shows direction." },
  { topic: "forces", front: "Normal force", back: "The upward push a surface exerts on an object resting on it — the table pushing up on the book." },

  { topic: "second-law", front: "Newton's second law in words", back: "A net force acting on an object causes the object to accelerate in the direction of the force." },
  { topic: "second-law", front: "Newton's second law as an equation", back: "Force = mass × acceleration, or F = ma. Mass in kilograms, acceleration in m/s²." },
  { topic: "second-law", front: "The two factors that affect acceleration", back: "The size of the force and the mass of the object. More force means more acceleration; more mass means more force is needed for the same acceleration." },
  { topic: "second-law", front: "Solving for acceleration", back: "Rearrange F = ma to a = F ÷ m. Divide the force by the mass." },
  { topic: "second-law", front: "Solving for mass", back: "Rearrange F = ma to m = F ÷ a. Divide the force by the acceleration." },
  { topic: "second-law", front: "1 newton equals", back: "The force needed to give a 1 kg mass an acceleration of 1 m/s². 1 N = 1 kg · 1 m/s²." },
  { topic: "second-law", front: "A problem gives you two masses — what first?", back: "Add them. The force has to accelerate everything that is moving, like a rider plus the motorcycle." },
  { topic: "second-law", front: "Acceleration due to gravity", back: "9.81 m/s². All falling objects gain 9.81 m/s of velocity every second they fall, whatever their mass." },
  { topic: "second-law", front: "Why do a bowling ball and a marble land together?", back: "The bowling ball has more gravity pulling on it, but its greater mass also gives it more inertia. The two effects cancel out." },
  { topic: "second-law", front: "The weight formula", back: "W = m · 9.81 m/s². Mass in kilograms goes in; weight in newtons comes out." },
  { topic: "second-law", front: "What does a 1 kg mass weigh on Earth?", back: "9.81 newtons." },

  { topic: "resistance", front: "Resistance", back: "A force that disrupts motion." },
  { topic: "resistance", front: "The four types of resistance", back: "Gases (air), liquid (water), heat and electricity, and solids (friction)." },
  { topic: "resistance", front: "Why does crumpled paper fall faster than a flat sheet?", back: "Gravity pulls both the same, but the flat sheet meets more air resistance. The difference is resistance, not gravity." },
  { topic: "resistance", front: "What does air resistance depend on?", back: "The speed, size and shape of the object. Larger objects meet more air resistance." },
  { topic: "resistance", front: "Insulator vs conductor", back: "An insulator is a good resistor — it resists heat or electricity. A conductor is a poor resistor, so heat or electricity moves through it easily. Most metals are conductors." },
  { topic: "resistance", front: "Terminal velocity", back: "The highest velocity reached by a falling object, once air resistance has grown until it balances gravity." },
  { topic: "resistance", front: "Why does a falling object stop accelerating?", back: "Air resistance increases until it equals the pull of gravity. The forces become balanced, so by the law of inertia the motion stops changing." },
  { topic: "resistance", front: "Stress", back: "An internal force that resists a change in the form of a body." },
  { topic: "resistance", front: "The three varieties of stress", back: "Tension (pulling), compression (pushing), and shear (forces acting along a surface)." },
  { topic: "resistance", front: "Tension", back: "Stress from a pulling force — a lamp hanging from a beam puts the beam and chain under tension." },
  { topic: "resistance", front: "Compression", back: "Stress from a pushing force — pillars holding up a roof are in compression." },
  { topic: "resistance", front: "Shear", back: "Stress from forces acting along the surface of a body — a blackboard eraser being rubbed across the board." },
  { topic: "resistance", front: "How is stress calculated?", back: "Stress = force ÷ area. The units are force per unit area, such as grams or kilograms per square centimeter." },
  { topic: "resistance", front: "Pressure", back: "The force of a liquid or gas spread over an entire area rather than acting at one point. It acts in all directions." },
  { topic: "resistance", front: "Atmospheric pressure at sea level", back: "10.1 newtons per square centimeter — and it is greatest at sea level, decreasing with altitude." },
  { topic: "resistance", front: "Three instruments that measure pressure", back: "A manometer, a barometer, and an altimeter." }
];

/* ===========================================================================
   QUESTIONS — the quiz pulls a random 15 from this pool each time.
   `answer` is the index (starting at 0) of the correct choice.
   =========================================================================== */

const QUESTIONS = [
  /* ---------------- Inertia & Newton's First Law ---------------- */
  {
    topic: "inertia",
    q: "Which statement best defines inertia?",
    choices: [
      "The force that pulls objects toward the earth",
      "The tendency of an object to resist changes in its state of motion",
      "The speed at which an object is traveling",
      "The amount of space an object takes up"
    ],
    answer: 1,
    why: "Inertia is the tendency of an object to resist changes in its state of motion. It is not a force and it has nothing to do with volume."
  },
  {
    topic: "inertia",
    q: "Complete Newton's first law: an object in motion stays in motion with the same speed and in the same direction unless…",
    choices: [
      "it runs out of energy",
      "enough time passes",
      "it is acted upon by an unbalanced force",
      "it reaches its natural resting place"
    ],
    answer: 2,
    why: "\"Unless acted upon by an unbalanced force\" is the one condition in the law. As long as the forces are balanced, the object keeps doing what it's doing."
  },
  {
    topic: "inertia",
    q: "For about 2000 years before Newton, what did most people believe about motion?",
    choices: [
      "That a force is necessary to keep an object moving",
      "That objects in motion stay in motion forever",
      "That mass and weight are the same thing",
      "That gravity does not exist"
    ],
    answer: 0,
    why: "The dominant thought before Newton was that rest was the natural state: moving objects would eventually stop, and a force was necessary to keep an object moving. Newton's conception of inertia stood in direct opposition to that."
  },
  {
    topic: "inertia",
    q: "An object is moving East at 5 m/s. The forces acting on it are balanced. What happens next?",
    choices: [
      "It gradually slows down and stops",
      "It continues East at 5 m/s",
      "It speeds up",
      "It changes direction"
    ],
    answer: 1,
    why: "With balanced forces there is no unbalanced force, so the first law applies: it continues in the same state of motion — 5 m/s, East."
  },
  {
    topic: "inertia",
    q: "Mac says that if he flings the Jell-O with a greater speed it will have greater inertia. Tosh says inertia does not depend on speed, but on mass. Who is right?",
    choices: [
      "Mac — faster objects are harder to stop, so they have more inertia",
      "Tosh — inertia depends only upon mass",
      "Both are partly right — inertia depends on both speed and mass",
      "Neither — inertia depends on the direction of motion"
    ],
    answer: 1,
    why: "Tosh is right, and completely right. Inertia is determined by mass alone. Flinging the Jell-O faster changes its speed, not its inertia."
  },
  {
    topic: "inertia",
    q: "A 2-kg object is moving horizontally with a speed of 4 m/s. According to Newton's first law, how much net force is required to keep the object moving at this speed and in this direction?",
    choices: ["8 Newtons", "0 Newtons", "20 Newtons", "6 Newtons"],
    answer: 1,
    why: "None at all. A force is only needed to change an object's state of motion, never to maintain it. This is the single biggest break from pre-Newton thinking."
  },
  {
    topic: "inertia",
    q: "Imagine a place in the cosmos far from all gravitational and frictional influences. You throw a rock. What does the rock do?",
    choices: [
      "It gradually slows down and stops",
      "It continues in motion in the same direction at constant speed",
      "It curves downward",
      "It stops as soon as it leaves your hand"
    ],
    answer: 1,
    why: "With no gravity and no friction, there is no unbalanced force to change the rock's state of motion, so it keeps going in the same direction at the same speed."
  },
  {
    topic: "inertia",
    q: "In a weightless environment in space, would it require a force to set an object in motion?",
    choices: [
      "No — without weight, objects move on their own",
      "No — inertia only exists where there is gravity",
      "Yes — the object still has mass, so it still has inertia",
      "Only if the object is very large"
    ],
    answer: 2,
    why: "Weightlessness changes the pull of gravity, not the amount of matter. The object still has mass, so it still has inertia, and a force is still needed to change its state of motion."
  },
  {
    topic: "inertia",
    q: "Fred spends every Sunday at rest on the sofa watching football and eating large quantities of food. What effect does this have on his inertia?",
    choices: [
      "No effect — inertia depends on how much he moves",
      "It decreases his inertia because he is at rest",
      "It increases his mass, and therefore increases his inertia",
      "It increases his weight but not his inertia"
    ],
    answer: 2,
    why: "Eating increases his mass. Because mass is the measure of inertia, more mass means more inertia. Sitting still has nothing to do with it."
  },
  {
    topic: "inertia",
    q: "Benny is chased through the woods by a bull moose. Why does running in a zigzag help him?",
    choices: [
      "The moose gets dizzy and loses track of him",
      "The moose's large mass gives it large inertia, so it resists changing direction quickly",
      "Zigzagging makes Benny move faster than the moose",
      "The moose has less inertia than Benny, so it cannot keep up"
    ],
    answer: 1,
    why: "The moose's enormous mass means enormous inertia — a strong resistance to any change in its state of motion, including a change in direction. Benny has less mass, so he can change direction much more easily."
  },
  {
    topic: "inertia",
    q: "You carry a dish of water around an oval track. When does the water spill?",
    choices: [
      "Only when you are moving fastest",
      "Only when you first start moving",
      "Whenever the state of motion of the container is changed",
      "Only on the straight sections of the track"
    ],
    answer: 2,
    why: "The water resists any change in its own state of motion. It spills when the container starts, stops, or changes direction — all three are changes in state of motion."
  },
  {
    topic: "inertia",
    q: "A car accelerates forward from rest and the coffee spills. Which way does it go, and why?",
    choices: [
      "Toward the windshield, because the coffee is pushed forward",
      "Out of the back of the cup, because the coffee tends to stay at rest",
      "Straight up, because the car shakes",
      "It doesn't spill — the cup moves with the coffee"
    ],
    answer: 1,
    why: "The road provides an unbalanced force on the car's wheels, so the car accelerates forward. Nothing pushes the coffee, so it remains at rest in the same position — and the cup moves forward out from under it."
  },
  {
    topic: "inertia",
    q: "A car brakes hard to a stop. What does the coffee in the cup do?",
    choices: [
      "Stops at the same moment the car does",
      "Spills out the back of the cup",
      "Continues forward in the same direction, toward the windshield",
      "Stays perfectly level"
    ],
    answer: 2,
    why: "Friction on the locked wheels is the unbalanced force that stops the car. No unbalanced force acts on the coffee, so it continues in motion with the same speed and in the same direction."
  },
  {
    topic: "inertia",
    q: "In terms of Newton's first law, what does a seat belt do?",
    choices: [
      "It removes your inertia",
      "It provides the unbalanced force that brings you from motion to rest",
      "It reduces the mass of the passenger",
      "It balances the force of gravity"
    ],
    answer: 1,
    why: "Without it, you keep moving forward when the car stops. The belt supplies the unbalanced force that changes your state of motion from motion to rest."
  },
  {
    topic: "inertia",
    q: "You tighten a loose hammer head onto its wooden handle by banging the bottom of the handle against a hard surface. Why does this work?",
    choices: [
      "The impact heats the metal so it expands",
      "The handle stops abruptly but the head stays in motion and slides further down",
      "The vibration loosens the wood fibers",
      "Gravity pulls the head down"
    ],
    answer: 1,
    why: "When the handle hits the surface it stops, but nothing stops the hammer head. The head keeps on doing what it was doing — moving downward — and wedges itself tighter onto the handle."
  },
  {
    topic: "inertia",
    q: "Headrests are placed in cars to prevent whiplash injuries during which kind of collision?",
    choices: ["Head-on collisions", "Rear-end collisions", "Side-impact collisions", "Rollovers"],
    answer: 1,
    why: "In a rear-end collision the car and your body are suddenly pushed forward while your head, with nothing acting on it, tends to stay where it was. The headrest supplies the force that moves your head along with the rest of you."
  },
  {
    topic: "inertia",
    q: "A skateboard hits a curb and stops suddenly. What happens to the rider?",
    choices: [
      "The rider stops with the board",
      "The rider falls straight down",
      "The rider continues forward, off the front of the board",
      "The rider is pushed backward"
    ],
    answer: 2,
    why: "The curb provides an unbalanced force on the board, not on the rider. The rider keeps moving forward with the same speed in the same direction."
  },
  {
    topic: "inertia",
    q: "Two bricks look identical. One is mortar and one is Styrofoam. Without lifting them, you give each an identical push. How do you know which is which?",
    choices: [
      "The one that offers the least resistance has the least mass — that's the Styrofoam",
      "The one that offers the least resistance has the most mass",
      "They will resist exactly the same because they are the same size",
      "You cannot tell without lifting them"
    ],
    answer: 0,
    why: "Resistance to a change in state of motion is inertia, and inertia is measured by mass. The brick that barely resists has the least inertia and therefore the least mass."
  },
  {
    topic: "inertia",
    q: "A bowling ball rolls slowly down the lane. A ping-pong ball is fired across the room much faster. Which has more inertia?",
    choices: [
      "The ping-pong ball, because it is moving faster",
      "The bowling ball, because it has more mass",
      "They have the same inertia because both are moving",
      "Whichever one travels farther"
    ],
    answer: 1,
    why: "Speed has nothing to do with it. Inertia is set by mass alone, and the bowling ball has far more mass — so it has far more inertia even though it is moving slower."
  },
  {
    topic: "inertia",
    q: "You throw the same baseball twice: once gently, once as hard as you can. How does its inertia compare between the two throws?",
    choices: [
      "Greater on the hard throw",
      "Greater on the gentle throw",
      "Exactly the same both times",
      "It depends how far it travels"
    ],
    answer: 2,
    why: "It is the same ball with the same mass, so it has the same inertia both times. Throwing it harder changes its speed, not its resistance to a change in its state of motion."
  },
  {
    topic: "inertia",
    q: "Which of these would actually increase an object's inertia?",
    choices: [
      "Speeding it up",
      "Changing its direction",
      "Adding more mass to it",
      "Moving it to a place with less gravity"
    ],
    answer: 2,
    why: "Mass is the only thing inertia depends on, so the only way to increase it is to add mass. Speed and direction describe the object's motion, and gravity affects weight — none of those change inertia."
  },

  /* ---------------- Mass ---------------- */
  {
    topic: "mass",
    q: "Which is heavier: a ton of feathers or a ton of iron?",
    choices: [
      "The iron, because it is denser",
      "The feathers, because there are more of them",
      "Neither — a ton is a ton",
      "It depends on the temperature"
    ],
    answer: 2,
    why: "A ton is a ton whether it is made of feathers or iron. Mass measures the quantity of matter, not how much space it takes up."
  },
  {
    topic: "mass",
    q: "Mass is best defined as:",
    choices: [
      "The measure of the quantity of matter an object contains",
      "The pull of gravity on an object",
      "The amount of space an object occupies",
      "The force needed to lift an object"
    ],
    answer: 0,
    why: "Mass is the measure of the quantity of matter an object contains, and it is a fundamental unit of measurement. The pull of gravity on an object is its weight."
  },
  {
    topic: "mass",
    q: "You compress an object, change its volume, and carry it up a mountain. What happens to its mass?",
    choices: [
      "It increases", "It decreases", "It stays the same", "It becomes zero"
    ],
    answer: 2,
    why: "None of those changes the quantity of matter. The mass of an object stays the same no matter where it is in the universe."
  },
  {
    topic: "mass",
    q: "Which of these changes depending on where an object is located?",
    choices: ["Its mass", "Its weight", "Its inertia", "Its quantity of matter"],
    answer: 1,
    why: "Weight is the measure of earth's attraction for the object, and that attraction gets weaker the further away you are. Mass, inertia, and quantity of matter are all the same thing and none of them change."
  },
  {
    topic: "mass",
    q: "Why would an object weigh less on top of a mountain than in a valley?",
    choices: [
      "There is less matter in it at high altitude",
      "It is further from the earth, so the gravitational pull is smaller",
      "The air is thinner so it floats",
      "Cold temperatures reduce weight"
    ],
    answer: 1,
    why: "Weight is the measure of the earth's attraction for an object. The further away the object is from the earth, the smaller the gravitational pull — so the smaller the weight."
  },
  {
    topic: "mass",
    q: "\"Mass is conserved\" means that mass:",
    choices: [
      "Can be created but not destroyed",
      "Can be destroyed but not created",
      "Can never be created or destroyed",
      "Disappears when an object is burned"
    ],
    answer: 2,
    why: "Mass can never be created or destroyed. It can be changed into energy, but the total remains the same — nothing new is created, one is simply changed into another."
  },
  {
    topic: "mass",
    q: "Mass can be changed into:",
    choices: ["Volume", "Energy", "Weight", "Nothing at all"],
    answer: 1,
    why: "Mass can be changed into energy, but the total mass remains the same. No new mass or energy is created in the process."
  },
  {
    topic: "mass",
    q: "The packet says \"matter is lazy.\" What does that mean?",
    choices: [
      "Heavy objects fall more slowly",
      "An object cannot start, stop, speed up, or slow down by itself — a force is required",
      "Matter loses mass over time",
      "Objects always come to rest eventually"
    ],
    answer: 1,
    why: "An object of a certain mass cannot move itself. For it to start moving, stop, speed up, or slow down, a force is required — a push or a pull. This inactive property of matter is called inertia."
  },
  {
    topic: "mass",
    q: "A very large force is needed to speed up or slow down a certain object. What does that tell you?",
    choices: [
      "It has a large mass", "It has a small mass", "It has no weight", "It is moving very fast"
    ],
    answer: 0,
    why: "When a large force is needed to change an object's motion, it has a large mass. If only a small force is needed, the mass is small. That is what it means to say mass is the measure of inertia."
  },
  {
    topic: "mass",
    q: "Weight is best described as:",
    choices: [
      "The amount of matter in an object",
      "The measure of the earth's attraction for an object",
      "The speed at which an object falls",
      "The same thing as mass"
    ],
    answer: 1,
    why: "The weight of an object is the measure of the earth's attraction for that object. Since that attraction is called gravity, weight and the pull of gravity are the same thing."
  },
  {
    topic: "mass",
    q: "What unit does the English system use to measure mass?",
    choices: ["The pound", "The Newton", "The slug", "The kilogram"],
    answer: 2,
    why: "Mass is measured in slugs in the English system. The metric system uses grams or kilograms."
  },
  {
    topic: "mass",
    q: "One slug is equal to how many kilograms?",
    choices: ["1.459 kilograms", "14.59 kilograms", "145.9 kilograms", "0.1459 kilograms"],
    answer: 1,
    why: "One slug equals 14.59 kilograms."
  },
  {
    topic: "mass",
    q: "An astronaut travels to a planet where gravity is much weaker than on earth. What happens to the astronaut's mass?",
    choices: [
      "It decreases along with the weight",
      "It increases",
      "It stays exactly the same",
      "It becomes zero"
    ],
    answer: 2,
    why: "The mass of an object stays the same no matter where it is in the universe. Only the weight changes, because weight depends on the gravitational pull at that location."
  },
  {
    topic: "mass",
    q: "Which property is the measure of inertia?",
    choices: ["Weight", "Volume", "Mass", "Speed"],
    answer: 2,
    why: "Mass is the measure of inertia. Mass is the quantity that is solely dependent upon the inertia of an object — more inertia means more mass."
  },
  {
    topic: "mass",
    q: "A more massive object, compared with a less massive one:",
    choices: [
      "Has a greater tendency to resist changes in its state of motion",
      "Has a smaller tendency to resist changes in its state of motion",
      "Always moves faster",
      "Has the same inertia"
    ],
    answer: 0,
    why: "The tendency of an object to resist changes in its state of motion varies with mass. More mass means more inertia means more resistance."
  },

  /* ---------------- Forces ---------------- */
  {
    topic: "forces",
    q: "A force is:",
    choices: [
      "A push or pull resulting from the interaction of two objects",
      "The speed of a moving object",
      "The amount of matter in an object",
      "Something an object stores inside itself"
    ],
    answer: 0,
    why: "A force is a push or pull upon an object resulting from the object's interaction with another object. Wherever there is an interaction, there is a force upon each of the objects."
  },
  {
    topic: "forces",
    q: "What happens to the force between two objects when their interaction ceases?",
    choices: [
      "The force stays with the objects",
      "The objects no longer experience the force",
      "The force doubles",
      "The force turns into inertia"
    ],
    answer: 1,
    why: "Forces only exist as a result of an interaction. When the interaction ceases, the two objects no longer experience the force."
  },
  {
    topic: "forces",
    q: "A physics book rests on a tabletop. Which two forces act upon it?",
    choices: [
      "Friction and air resistance",
      "Gravity pulling down and the table pushing up",
      "Gravity pulling down and friction pushing up",
      "Only gravity"
    ],
    answer: 1,
    why: "The Earth's gravitational pull exerts a downward force, and the table pushes upward on the book — the normal force. They are equal in magnitude and opposite in direction, so they balance."
  },
  {
    topic: "forces",
    q: "Two forces are of equal magnitude and in opposite directions. The object they act on is:",
    choices: [
      "Accelerating", "At equilibrium", "Speeding up", "Changing direction"
    ],
    answer: 1,
    why: "Equal magnitude and opposite direction means the forces balance each other. The object is at equilibrium and maintains its state of motion."
  },
  {
    topic: "forces",
    q: "When all the forces acting on an object are balanced, the object:",
    choices: [
      "Will accelerate", "Will not accelerate", "Must be at rest", "Must be moving"
    ],
    answer: 1,
    why: "Balanced forces mean no unbalanced force, so the object will not accelerate. Note it does not have to be at rest — it could be moving at constant speed in a constant direction."
  },
  {
    topic: "forces",
    q: "What do unbalanced forces cause?",
    choices: ["Equilibrium", "Accelerations", "Inertia", "Mass"],
    answer: 1,
    why: "Unbalanced forces cause accelerations. An object acted on by an unbalanced force is not at equilibrium."
  },
  {
    topic: "forces",
    q: "A book slides to the right across a rough table and slows down. Why?",
    choices: [
      "The book ran out of force",
      "Gravity is pulling it backward",
      "Friction acts leftward and nothing balances it",
      "The table pushes it backward"
    ],
    answer: 2,
    why: "Gravity down and the table's push up balance each other. But there is no force present to balance friction, which acts opposite the book's motion. That unbalanced force causes the book to slow down."
  },
  {
    topic: "forces",
    q: "An object is said to be acted upon by an unbalanced force only when:",
    choices: [
      "More than two forces act on it",
      "There is an individual force not balanced by an equal force in the opposite direction",
      "It is moving",
      "It is at rest"
    ],
    answer: 1,
    why: "List every force acting on the object. If two individual forces are of equal magnitude and opposite direction, they balance. An unbalanced force exists only when some individual force is left over with nothing to cancel it."
  },
  {
    topic: "forces",
    q: "Which of these is a contact force?",
    choices: ["Gravitational force", "Magnetic force", "Frictional force", "Electric force"],
    answer: 2,
    why: "Contact forces result when the two interacting objects physically contact each other — friction, tension, normal, air resistance, applied, and spring forces. Gravitational, magnetic, and electric forces are non-contact."
  },
  {
    topic: "forces",
    q: "Which list contains only non-contact forces?",
    choices: [
      "Gravitational, magnetic, electric",
      "Friction, tension, normal",
      "Applied, spring, air resistance",
      "Normal, gravitational, friction"
    ],
    answer: 0,
    why: "Non-contact forces act even when the two objects are not touching. These action-at-a-distance forces are gravitational, magnetic, and electric."
  },
  {
    topic: "forces",
    q: "What makes a force a non-contact force?",
    choices: [
      "It is always very weak",
      "It acts even though the two objects are not physically touching",
      "It only works in space",
      "It cannot cause acceleration"
    ],
    answer: 1,
    why: "Non-contact forces are pushing or pulling forces that result even when the two interacting objects are not in physical contact, yet are able to exert a push or pull despite their physical separation."
  },
  {
    topic: "forces",
    q: "What is the standard metric unit of force?",
    choices: ["The kilogram", "The slug", "The Newton", "The meter per second"],
    answer: 2,
    why: "Force is measured using the standard metric unit known as the Newton, abbreviated \"N.\""
  },
  {
    topic: "forces",
    q: "One Newton is the amount of force required to:",
    choices: [
      "Lift a 1-kg mass off the ground",
      "Give a 1-kg mass an acceleration of 1 m/s²",
      "Move a 1-slug mass one meter",
      "Stop a moving object"
    ],
    answer: 1,
    why: "One Newton is the force required to give a 1-kg mass an acceleration of 1 m/s². That gives the equivalency 1 N = 1 kg · m/s²."
  },
  {
    topic: "forces",
    q: "1 Newton is equivalent to:",
    choices: ["1 kg · m/s²", "1 kg / m·s", "1 kg · m", "1 m/s²"],
    answer: 0,
    why: "Since one Newton gives a 1-kg mass an acceleration of 1 m/s², the units work out to 1 N = 1 kg · m/s²."
  },
  {
    topic: "forces",
    q: "A vector quantity is one that has:",
    choices: [
      "Only a magnitude",
      "Only a direction",
      "Both magnitude and direction",
      "Neither magnitude nor direction"
    ],
    answer: 2,
    why: "A vector quantity has both magnitude and direction. Force is a vector quantity, which is why you must give both to describe it fully."
  },
  {
    topic: "forces",
    q: "Which is a complete description of a force?",
    choices: ["10 Newton", "Downward", "10 Newton downward", "A strong push"],
    answer: 2,
    why: "\"10 Newton\" gives only the magnitude. \"10 Newton downward\" is complete because it gives both the magnitude (10 Newton) and the direction (downward)."
  },
  {
    topic: "forces",
    q: "In a free-body diagram, what does the size of an arrow tell you?",
    choices: [
      "The magnitude of the force",
      "The mass of the object",
      "How long the force has acted",
      "The speed of the object"
    ],
    answer: 0,
    why: "The size of the arrow reflects the magnitude of the force, and the direction of the arrow reveals the direction in which the force is acting."
  },
  {
    topic: "forces",
    q: "A 20-Newton upward force and a 20-Newton downward force act on a book. What is the result?",
    choices: [
      "The book accelerates upward",
      "The book accelerates downward",
      "They balance each other and there is no unbalanced force",
      "The forces add up to 40 Newtons"
    ],
    answer: 2,
    why: "The effect of the 20-Newton upward force is canceled by the 20-Newton downward force. The two individual forces balance, so there is no unbalanced force acting upon the book."
  },
  {
    topic: "forces",
    q: "A book slides right across a table. Gravity pulls down with 20 N, the table pushes up with 20 N, and friction pushes left with 5 N. What happens?",
    choices: [
      "All forces balance and the book keeps a constant speed",
      "An unbalanced 5 N force acts leftward and the book slows down",
      "An unbalanced 20 N force acts downward and the book falls",
      "The book speeds up to the right"
    ],
    answer: 1,
    why: "The 20 N up and 20 N down cancel. Nothing cancels the 5 N of friction, so there is an unbalanced leftward force — opposite the book's motion — and the book slows down."
  },
  {
    topic: "forces",
    q: "\"Unbalanced force\" is another way of saying:",
    choices: ["Net force", "Gravity", "Inertia", "Normal force"],
    answer: 0,
    why: "The unbalanced force is the force left over after all the balanced pairs cancel out — the net force on the object."
  },
  {
    topic: "forces",
    q: "A person stands still on the floor. Which statement is true?",
    choices: [
      "Only gravity acts on the person",
      "Gravity pulls down and the floor pushes up with equal force, so the person is at equilibrium",
      "The person is accelerating downward",
      "There is an unbalanced force on the person"
    ],
    answer: 1,
    why: "The force of gravity exerts a downward force and the floor exerts an upward force. They are equal in magnitude and opposite in direction, so they balance and the person maintains their state of motion."
  },

  /* ---------------- Newton's Second Law ---------------- */
  {
    topic: "second-law",
    q: "Newton's second law of motion states that:",
    choices: [
      "An object at rest stays at rest unless acted on by a force",
      "A net force acting on an object causes it to accelerate in the direction of the force",
      "Every action has an equal and opposite reaction",
      "Mass can never be created or destroyed"
    ],
    answer: 1,
    why: "That is the second law in words. The first law tells you that motion changes only when a net force acts; the second law tells you how much it changes, and in which direction."
  },
  {
    topic: "second-law",
    q: "Newton's second law written as an equation is:",
    choices: ["F = ma", "F = m ÷ a", "a = mF", "m = Fa"],
    answer: 0,
    why: "Force = mass × acceleration. Mass is expressed in kilograms and acceleration in m/s², which gives force in newtons."
  },
  {
    topic: "second-law",
    q: "Which two factors affect the acceleration of an object?",
    choices: [
      "The size of the force and the mass of the object",
      "The weight of the object and how long the force acts",
      "The speed of the object and its direction",
      "The volume of the object and the surface it sits on"
    ],
    answer: 0,
    why: "The larger the force, the greater the acceleration. The larger the mass, the greater the force needed to produce that same acceleration."
  },
  {
    topic: "second-law",
    q: "In which direction does an object accelerate when a net force acts on it?",
    choices: [
      "Always downward",
      "In the direction of the force",
      "Opposite the direction of the force",
      "In whatever direction it was already moving"
    ],
    answer: 1,
    why: "The second law says the object accelerates in the direction of the force. Force is a vector, so its direction is part of the answer."
  },
  {
    topic: "second-law",
    q: "You need to push a stalled car across train tracks as quickly as possible. What gives you the greatest acceleration?",
    choices: [
      "The largest mass with the smallest force",
      "The smallest mass with the greatest force",
      "The largest mass with the greatest force",
      "Mass makes no difference, only force"
    ],
    answer: 1,
    why: "Acceleration goes up when force goes up and down when mass goes up. So push the compact car rather than the SUV, and get the weightlifter to help."
  },
  {
    topic: "second-law",
    q: "What force is needed to accelerate a 50 kg object at 2 m/s²?",
    choices: ["25 N", "52 N", "100 N", "200 N"],
    answer: 2,
    why: "F = m · a = 50 kg · 2 m/s² = 100 N. Multiply the mass by the acceleration."
  },
  {
    topic: "second-law",
    q: "A 70 kg rider sits on a 200 kg motorcycle. What force is needed to accelerate them at 4 m/s²?",
    choices: ["280 N", "800 N", "1080 N", "270 N"],
    answer: 2,
    why: "Add the masses first: 70 + 200 = 270 kg. Then F = 270 · 4 = 1080 N. Forgetting to add the rider's mass is the usual mistake."
  },
  {
    topic: "second-law",
    q: "It takes 3000 N to accelerate an empty 1000 kg car at 3 m/s². A 160 kg wrestler gets in. What force now gives the same acceleration?",
    choices: ["3000 N", "3160 N", "3480 N", "480 N"],
    answer: 2,
    why: "The new mass is 1000 + 160 = 1160 kg, and the acceleration is still 3 m/s². F = 1160 · 3 = 3480 N. Adding 160 to the force instead of the mass gives 3160 N, which is the trap."
  },
  {
    topic: "second-law",
    q: "A 63 kg skater pushes off a wall with a force of 300 N. What is the skater's acceleration?",
    choices: ["18,900 m/s²", "4.76 m/s²", "363 m/s²", "0.21 m/s²"],
    answer: 1,
    why: "The question asks for acceleration, so rearrange: a = F ÷ m = 300 ÷ 63 = 4.76 m/s². Multiplying instead of dividing gives 18,900, which is nowhere near reasonable for a person pushing off a wall."
  },
  {
    topic: "second-law",
    q: "If you know the force and the mass, how do you find the acceleration?",
    choices: [
      "Multiply the force by the mass",
      "Divide the force by the mass",
      "Divide the mass by the force",
      "Subtract the mass from the force"
    ],
    answer: 1,
    why: "F = ma rearranges to a = F ÷ m. Whenever the unknown is on the right side of the formula, you divide."
  },
  {
    topic: "second-law",
    q: "One newton is defined as the force needed to:",
    choices: [
      "Lift a 1 kg mass off the ground",
      "Give a 1 kg mass an acceleration of 1 m/s²",
      "Move a 1 kg mass one meter",
      "Hold a 1 kg mass still"
    ],
    answer: 1,
    why: "1 N = 1 kg · 1 m/s². The newton comes straight out of F = ma with a mass of 1 kg and an acceleration of 1 m/s²."
  },
  {
    topic: "second-law",
    q: "A bowling ball and a marble are dropped from a bridge at the same moment. What happens?",
    choices: [
      "The bowling ball splashes down well before the marble",
      "The marble splashes down first because it is smaller",
      "They splash down at exactly the same time",
      "The bowling ball falls at 9.81 m/s² and the marble falls slower"
    ],
    answer: 2,
    why: "They land together. The bowling ball has more gravitational force on it, but its greater mass also gives it more inertia, so more force is needed to change its velocity. The two effects cancel."
  },
  {
    topic: "second-law",
    q: "At what rate does gravity accelerate falling objects near Earth's surface?",
    choices: ["9.81 m/s²", "9.81 m/s", "1 m/s²", "It depends on the object's mass"],
    answer: 0,
    why: "9.81 m/s², and it is the same for every object regardless of mass. The units are m/s² because it is an acceleration — the velocity increases by 9.81 m/s every second."
  },
  {
    topic: "second-law",
    q: "A falling object has been falling for one second. Its velocity has increased by:",
    choices: ["1 m/s", "9.81 m/s", "9.81 m/s²", "It depends on its mass"],
    answer: 1,
    why: "Accelerating at 9.81 m/s² means gaining 9.81 m/s of velocity every second. The acceleration carries the m/s² label; the velocity gained carries m/s."
  },
  {
    topic: "second-law",
    q: "What is the formula for finding weight?",
    choices: [
      "W = m ÷ 9.81 m/s²",
      "W = m · 9.81 m/s²",
      "W = m + 9.81 m/s²",
      "W = 9.81 m/s² ÷ m"
    ],
    answer: 1,
    why: "Weight is a force, so substitute W for F in F = ma. The acceleration is always gravity, so W = m · 9.81 m/s²."
  },
  {
    topic: "second-law",
    q: "A person has a mass of 45 kg. What is their weight?",
    choices: ["45 N", "4.59 N", "441.45 N", "54.81 N"],
    answer: 2,
    why: "W = m · 9.81 = 45 · 9.81 = 441.45 N. Mass in kilograms goes in, weight in newtons comes out — the two are different quantities with different units."
  },
  {
    topic: "second-law",
    q: "An object with a mass of 1 kg weighs how much on Earth?",
    choices: ["1 N", "9.81 N", "9.81 kg", "0.1 N"],
    answer: 1,
    why: "W = 1 kg · 9.81 m/s² = 9.81 N. This is the standard figure the packet uses to convert between kilograms of force and newtons."
  },
  {
    topic: "second-law",
    q: "Which of these is a mass, and which is a weight?",
    choices: [
      "Kilograms measure weight; newtons measure mass",
      "Kilograms measure mass; newtons measure weight",
      "Both measure the same thing",
      "Newtons measure acceleration"
    ],
    answer: 1,
    why: "Mass is in kilograms and is the quantity of matter. Weight is a force, measured in newtons, and you get it by multiplying mass by 9.81 m/s²."
  },

  /* ---------------- Resistance, Stress & Pressure ---------------- */
  {
    topic: "resistance",
    q: "Resistance is best defined as:",
    choices: [
      "A force that disrupts motion",
      "The mass of an object in motion",
      "The speed at which an object falls",
      "Another word for gravity"
    ],
    answer: 0,
    why: "Resistance is a force that disrupts motion. It is what explains why two objects of the same mass can fall at different rates."
  },
  {
    topic: "resistance",
    q: "A crumpled sheet of paper falls faster than an identical flat sheet. Why?",
    choices: [
      "The crumpled ball has more mass",
      "Gravity pulls harder on compact objects",
      "The flat sheet meets more air resistance",
      "The crumpled ball has more inertia"
    ],
    answer: 2,
    why: "Gravity accelerates all matter at the same rate, and both sheets have the same mass. The only difference is air resistance, which acts more on the spread-out flat sheet."
  },
  {
    topic: "resistance",
    q: "Which is NOT one of the four types of resistance in the packet?",
    choices: [
      "Resistance of gases",
      "Resistance of liquid",
      "Gravitational resistance",
      "Friction of solids"
    ],
    answer: 2,
    why: "The four are gases (air), liquid (water), heat and electricity, and solids (friction). Gravity is a force, but it is not one of the four types of resistance."
  },
  {
    topic: "resistance",
    q: "The amount of air resistance on an object depends on:",
    choices: [
      "Only its mass",
      "Its speed, size and shape",
      "Only how far it has fallen",
      "The temperature of the air"
    ],
    answer: 1,
    why: "Speed, size and shape. The larger the object, the greater the air resistance — which is why holding more of your hand out a car window makes you feel more force."
  },
  {
    topic: "resistance",
    q: "A material that is a good resistor of heat is called:",
    choices: ["A conductor", "An insulator", "A compressor", "A barometer"],
    answer: 1,
    why: "A good resistor of heat is an insulator, which is why insulation goes in walls and roofs. A poor resistor is a conductor — most metals conduct electricity well."
  },
  {
    topic: "resistance",
    q: "Why are fish shaped slim, flat and arched?",
    choices: [
      "To increase their mass",
      "To eliminate some of the resistance of water",
      "To reduce their weight",
      "To increase friction with the water"
    ],
    answer: 1,
    why: "Water resists motion, which is why walking quickly in water is hard. A fish's shape reduces that resistance."
  },
  {
    topic: "resistance",
    q: "Friction is an example of which type of resistance?",
    choices: ["Gases", "Liquid", "Electrical", "Solids"],
    answer: 3,
    why: "Friction is the resistance of solids. Dragging heavy furniture across a floor is the packet's example — and the same friction between shoes and ground is what lets us walk."
  },
  {
    topic: "resistance",
    q: "If a cart is pulled with a force of 2 kg and does not move, the friction resisting it must be:",
    choices: ["2 kg, or 19.62 N", "2 kg, or 9.81 N", "1 kg, or 9.81 N", "4 kg, or 39.24 N"],
    answer: 0,
    why: "If the cart does not move, the forces are balanced, so friction must equal the 2 kg pull. Converting to newtons: 2 · 9.81 = 19.62 N."
  },
  {
    topic: "resistance",
    q: "Terminal velocity is:",
    choices: [
      "The speed at which an object begins to fall",
      "The highest velocity reached by a falling object",
      "The acceleration of a falling object",
      "The point at which a falling object stops moving"
    ],
    answer: 1,
    why: "Terminal velocity is the highest velocity a falling object reaches. The object keeps falling at that speed — it just stops speeding up."
  },
  {
    topic: "resistance",
    q: "Why does a falling object stop accelerating once it reaches terminal velocity?",
    choices: [
      "Gravity stops acting on it",
      "It runs out of energy",
      "Air resistance has increased until it balances gravity",
      "It has reached the ground"
    ],
    answer: 2,
    why: "Air resistance increases as the object falls until it equals the pull of gravity. The forces are then balanced, and by the law of inertia balanced forces mean no change in motion."
  },
  {
    topic: "resistance",
    q: "An object falling at terminal velocity is:",
    choices: [
      "Speeding up at 9.81 m/s²",
      "Slowing down",
      "Falling at a constant velocity",
      "Momentarily stopped in mid-air"
    ],
    answer: 2,
    why: "It continues to fall, but at a constant, final velocity. Terminal velocity means no more acceleration, not no more motion."
  },
  {
    topic: "resistance",
    q: "Stress is defined as:",
    choices: [
      "An external force applied to an object",
      "An internal force that resists a change in the form of a body",
      "The weight of an object divided by its mass",
      "The pressure of a gas in a container"
    ],
    answer: 1,
    why: "Stress is internal. The force is applied from outside the body; the stress is the body resisting that change from within."
  },
  {
    topic: "resistance",
    q: "When does an object experience stress rather than simply moving?",
    choices: [
      "When the force tries to deform it instead of moving it",
      "When the force is very large",
      "Whenever it is at rest",
      "Only when it breaks"
    ],
    answer: 0,
    why: "If a force tries to deform a body rather than move it, the body is said to be under stress. Pulling, pressing and stretching all deform rather than displace."
  },
  {
    topic: "resistance",
    q: "A lamp hangs from a ceiling beam. The beam is under which kind of stress?",
    choices: ["Compression", "Tension", "Shear", "Pressure"],
    answer: 1,
    why: "Tension is the result of a pulling force, and the hanging lamp pulls down on the beam. The chain holding the lamp is under tension too."
  },
  {
    topic: "resistance",
    q: "Pillars supporting the roof of a building are under which kind of stress?",
    choices: ["Tension", "Shear", "Compression", "Terminal stress"],
    answer: 2,
    why: "Compression results from a pushing force, and the roof pushes down on the pillars."
  },
  {
    topic: "resistance",
    q: "Rubbing a blackboard eraser across a board puts its surface under which kind of stress?",
    choices: ["Shear", "Tension", "Compression", "Atmospheric stress"],
    answer: 0,
    why: "Shear is due to forces acting along the surface of a body. The friction force acts along the eraser's surface as you rub."
  },
  {
    topic: "resistance",
    q: "How is stress calculated?",
    choices: [
      "Force × area",
      "Force ÷ area",
      "Area ÷ force",
      "Force × mass"
    ],
    answer: 1,
    why: "Stress = force ÷ area, because the whole area of the body resists the deforming force. That is why the units are force per unit area."
  },
  {
    topic: "resistance",
    q: "A 50 gram lamp hangs from a beam with a cross section of 25 square centimeters. What is the tension stress on the beam?",
    choices: ["1250 g/cm²", "2 g/cm²", "0.5 g/cm²", "75 g/cm²"],
    answer: 1,
    why: "Stress = force ÷ area = 50 g ÷ 25 cm² = 2 grams per square centimeter."
  },
  {
    topic: "resistance",
    q: "An eraser with a surface area of 50 square centimeters is pushed with a 1 kilogram force. What is the shear stress?",
    choices: ["50 kg/cm²", "51 kg/cm²", "1/50 kg/cm²", "1 kg/cm²"],
    answer: 2,
    why: "Stress = force ÷ area = 1 kg ÷ 50 cm² = one fiftieth of a kilogram per square centimeter, or 0.02 kg/cm²."
  },
  {
    topic: "resistance",
    q: "Water flows out of a hole anywhere in a barrel except the top. What does this show?",
    choices: [
      "Water is heavier than air",
      "Liquids apply force over their entire container, not at one point",
      "Gravity only pulls downward",
      "The barrel is under tension"
    ],
    answer: 1,
    why: "The forces of a liquid or gas do not act at any one point but over the entire area. That distributed force is what we call pressure, and it acts in all directions."
  },
  {
    topic: "resistance",
    q: "Pressure is best described as:",
    choices: [
      "A force acting at a single point",
      "The force of a liquid or gas distributed over an entire area",
      "The internal force resisting deformation",
      "The weight of an object"
    ],
    answer: 1,
    why: "Pressure is the force of a liquid or gas on an area, spread over the whole area rather than concentrated at one point. A force resisting deformation is stress, not pressure."
  },
  {
    topic: "resistance",
    q: "Where is atmospheric pressure greatest?",
    choices: [
      "At the top of the atmosphere",
      "At sea level",
      "On a mountain peak",
      "It is the same everywhere"
    ],
    answer: 1,
    why: "Atmospheric pressure is greatest at sea level and decreases outward from Earth, because pressure comes from the mass of air stacked above you."
  },
  {
    topic: "resistance",
    q: "Why are air molecules more closely packed near Earth's surface?",
    choices: [
      "The air is warmer there",
      "Because of the pressure of the mass of air above them",
      "Because Earth spins",
      "They are not — they are farther apart near the surface"
    ],
    answer: 1,
    why: "At high altitudes atoms and molecules are very far apart. Closer to Earth they are pressed together by the weight of all the air above, and more closely packed molecules exert greater force."
  },
  {
    topic: "resistance",
    q: "What force does the atmosphere exert at Earth's surface?",
    choices: [
      "10.1 newtons per square centimeter",
      "9.81 newtons per square centimeter",
      "1 newton per square centimeter",
      "101 newtons per square centimeter"
    ],
    answer: 0,
    why: "10.1 newtons per square centimeter at the surface, where atmospheric pressure is greatest. Don't confuse this with 9.81 m/s², which is the acceleration due to gravity."
  },
  {
    topic: "resistance",
    q: "Why does pressure increase as you go deeper underwater?",
    choices: [
      "Water becomes denser with depth",
      "The amount of water above you gets larger",
      "Water is compressible",
      "Gravity is stronger at greater depths"
    ],
    answer: 1,
    why: "As you go below the surface the amount of water above you increases, which increases the pressure on you. It is the same reasoning as atmospheric pressure being greatest at sea level."
  },
  {
    topic: "resistance",
    q: "Which of these is used to measure pressure?",
    choices: ["A manometer", "A thermometer", "A spectrometer", "An odometer"],
    answer: 0,
    why: "The packet names three instruments: a manometer, a barometer, and an altimeter."
  }
];
