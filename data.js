// Campaign content for the Pokemon x Daggerheart GM wiki.
// Edit this file to update the wiki; index.html is the presentation shell.
var data = {
  "world": {
    "name": "The Very Best",
    "region": "Mimic",
    "regionBlurb": "A large continent surrounded by ocean with scattered islands. The region sits inside what appears to be a vast, seamless world.",
    "tone": "Coming of age, self-discovery, bonds between trainer and Pokemon, wonder, mystery beneath the surface.",
    "conflict": "Eight Gyms stand between the trainers and whatever future they are building toward. The journey north and counter-clockwise across the continent will test who they are and who they want to become.",
    "lore": "Coming of Age Tradition: In Mimic, every young person undergoes a cherished rite \u2014 receiving their first Pokemon and setting out to conquer the region's 8 Gyms. The journey is less about raw victory and more about self-discovery. The age of departure differs by geography: northern half sets out at 16, southern half at 18 due to harsher terrain.",
    "vocations": "Master \u00b7 Researcher \u00b7 Breeder \u00b7 Specialist \u00b7 Entertainer \u00b7 Rebel",
    "zones": [
      { "n": 1, "quadrant": "Northeast", "towns": "Midori, Boosong", "professor": "Thaniel Sheng", "starters": "Rowlet, Torchic, Piplup", "desc": "A bamboo wetlands town on the northern bank of The Mizu. Lanterns set on the river at dawn \u2014 the ceremony is calm, communal, and riverine." },
      { "n": 2, "quadrant": "Northwest", "towns": "Corvikeep, Petalbend", "professor": "Felix Mewton", "starters": "Sprigatito, Litten, Popplio", "desc": "A grand castle town beneath cherry blossoms and Corviknight in the sky. The ceremony is formal and ceremonial \u2014 starters presented in the castle courtyard." },
      { "n": 3, "quadrant": "Southwest", "towns": "Sandbar, Twisselmon", "professor": "Evangeline Keely", "starters": "Bulbasaur, Cyndaquil, Froakie", "desc": "A tidal river-mouth town that partially submerges at high tide. The ceremony is timed to the tides \u2014 it can only happen in a specific low-tide window each year." },
      { "n": 4, "quadrant": "Southeast", "towns": "Bogen, Motley Wilds", "professor": "Jayne Willow", "starters": "Grookey, Charmander, Mudkip", "desc": "The jungle canopy town where the campaign begins. The ceremony coincides with the Motley Wilds coming alive at night \u2014 bioluminescent spores, lanterns, the jungle celebrating." }
    ],
    "secrets": ""
  },
  "npcs": [
    {
      "name": "Professor Jayne Willow",
      "town": "Bogen",
      "type": "NPC",
      "role": "Pokemon Professor \u2014 Bogen Lab",
      "location": "Bogen",
      "pokemon": "Weavile",
      "personality": "Young for her title but unmistakably brilliant. Only 22 \u2014 completed the Gym Challenge and used prize money to buy the Bogen lab a few months ago. Stopped before the Elite Four because she always knew she wanted the lab. Excitable and a little clumsy. Her lab has open habitat zones instead of Pokeballs.",
      "notes": "",
      "id": 1
    },
    {
      "name": "Zoe Willow",
      "town": "Bogen",
      "type": "Rival",
      "role": "Traveling trainer \u2014 Jayne's younger sister",
      "location": "Bogen (departing)",
      "pokemon": "Grookey",
      "personality": "Has lived in her brilliant sister's shadow her whole life. Fiercely independent. The journey is hers to define. Will cross paths with the party often \u2014 sometimes helping, sometimes competing. Not a party member.",
      "notes": "",
      "id": 2
    },
    {
      "name": "Maximus",
      "town": "Not yet met",
      "type": "NPC",
      "role": "Famous racing champion \u2014 Axel's idol",
      "location": "Unknown \u2014 racing circuit",
      "pokemon": "Unknown",
      "personality": "Red-haired, charismatic, usually wins. Wears a flame bandana. Drives a white sports car with red flames. Axel watches every race from his garage TV.",
      "notes": "",
      "id": 4
    },
    {
      "name": "Nurse Mabel",
      "town": "Bogen",
      "type": "NPC",
      "role": "Head Nurse — Council of Three",
      "location": "The Pokémon Center, Bogen",
      "pokemon": "Raichu",
      "personality": "Age 48. Brown-haired, acts like everyone's mother whether they want her to or not. Deeply caring about both people and Pokémon. Knows everyone's business — not through gossip, just because people tell her things. The practical center of Bogen.",
      "notes": "",
      "id": 5
    },
    {
      "name": "Captain Thaddeus",
      "town": "Bogen",
      "type": "NPC",
      "role": "MOSS Captain — Council of Three",
      "location": "Bogen",
      "pokemon": "Primeape",
      "personality": "Age 37. Short spiky blonde hair that mirrors his Primeape's energy. Buff, practical, and direct. Leads MOSS — has been doing canopy rescue long enough that the jungle holds no surprises for him.",
      "notes": "",
      "id": 6
    },
    {
      "name": "Yousef",
      "town": "Bogen",
      "type": "NPC",
      "role": "Merchant — Council of Three",
      "location": "Yousef's PokéMart & Vertical Garden, Bogen",
      "pokemon": "Vileplume",
      "personality": "Age 62. Older gentleman, kind-hearted. Runs the vertical garden farm and the local PokéMart — one of Bogen's most important practical assets for food and supplies. Old friends with Gran Gran Dorothy.",
      "notes": "",
      "id": 7
    },
    {
      "name": "Herb",
      "town": "Bogen",
      "type": "NPC",
      "role": "Assistant Nurse — Handyman",
      "location": "The Pokémon Center, Bogen",
      "pokemon": "Magneton",
      "personality": "Age 52. Mabel's husband — quiet, steady, completely devoted. Does whatever Mabel says and seems genuinely happy about it. Nobody notices Herb until something breaks — then he's exactly where he needs to be.",
      "notes": "",
      "id": 8
    },
    {
      "name": "Gran Gran Dorothy",
      "town": "Bogen",
      "type": "NPC",
      "role": "Town Elder",
      "location": "Near Axel's garage, Bogen",
      "pokemon": "Wigglytuff",
      "personality": "Age 79. Called Gran Gran by most everyone in town — real name Dorothy. Warm, sharp as a tack, bakes cookies. Has taken in Axel without making a big deal of it. Old friends with Yousef.",
      "notes": "",
      "id": 9
    },
    {
      "name": "Evander Null",
      "town": "Bogen",
      "type": "NPC",
      "role": "Paranormal Pokémon Specialist",
      "location": "Bogen",
      "pokemon": "TBD",
      "personality": "Long-haired, low-energy, quietly competent. Difficult to read — spends more time observing than speaking. Not easily alarmed by the supernatural, and approaches it with the same unhurried patience he applies to everything else. Specializes in ghost types, unusual bonds, and unexplained hauntings. The person Llewellyn's parents sought out when the Misdreavus followed their son home from Wickport.",
      "notes": "",
      "id": 10
    },
    {
      "name": "MOSS",
      "town": "Bogen",
      "type": "Faction",
      "role": "Canopy Rescue Team",
      "location": "Bogen (Motley Wilds)",
      "pokemon": "",
      "personality": "Motley Operations Search and Support — Bogen's canopy rescue specialists. A small but elite team trained for rope work, climbing, jungle extraction, and emergency response in the Motley Wilds. Led by Captain Thaddeus. Arrived at the Minior crash site alongside Professor Jayne on New Year's Eve.",
      "notes": "",
      "id": 11
    },
    {
      "name": "Sutton Holloway",
      "town": "Bogen",
      "type": "NPC",
      "role": "Nea's Uncle & Guardian",
      "location": "Bogen",
      "pokemon": "Raticate",
      "personality": "Wealthy art collector. Owns the biggest house in Bogen — fancy, modern, built into the trees. Nea's mother's brother; they coexist comfortably and at a distance.",
      "notes": "",
      "id": 12
    },
    {
      "name": "Earl",
      "town": "Route 101",
      "type": "NPC",
      "role": "Route Keeper",
      "location": "Camp Codi, Route 101",
      "pokemon": "Bewear, Bulbasaur",
      "personality": "Age 58. Quiet confidence, matter-of-fact bearing. Twenty years on this route — knows every loose board on the switchback stairs, every Mankey territory boundary, every Foongus bloom cycle. Doesn't waste words. Very good at his job.",
      "notes": "",
      "id": 13
    },
    {
      "name": "Krick",
      "town": "Route 101",
      "type": "NPC",
      "role": "Pokémon Trapper",
      "location": "Route 101 (recurring)",
      "pokemon": "Krokorok, Larvesta",
      "personality": "Mid-20s. Australian-looking hat, easy confidence, young Crocodile Dundee energy. Carries rope traps, lure bags, and scent markers. Matter-of-fact about his work — doesn't understand why people find it controversial. In Session 2, told the party a veiled stranger from Bellossom Hollow hired him to catch a Mankey.",
      "notes": "",
      "id": 14
    },
    {
      "name": "Petunia",
      "town": "Route 101",
      "type": "NPC",
      "role": "Wandering Merchant",
      "location": "Route 101 (wandering)",
      "pokemon": "Nidoking, Igglybuff, Snom",
      "personality": "40s. No fixed route, no schedule — she goes where she goes and the road tends to agree with her. Flowing layers despite the jungle heat, silver rings on most fingers. Her Nidoking hauls the cart. Trades rather than sells — always looking for something interesting in return. Has been everywhere and will tell you about it if the trade is right.",
      "notes": "",
      "id": 15
    },
    {
      "name": "Diana Willow I",
      "town": "Bogen",
      "type": "NPC",
      "role": "Retired Pokémon Champion — Jayne & Zoe's Grandmother",
      "location": "Bogen",
      "pokemon": "Eevee",
      "personality": "Age 91. Retired undefeated Champion — nobody beat her, she simply decided she was done. Quiet, sharp, unhurried. Probably the most formidable person in Bogen, and you'd never know it from looking at her.",
      "notes": "",
      "id": 16
    },
    {
      "name": "Diana Willow II",
      "town": "Bogen",
      "type": "NPC",
      "role": "Salon Owner — Kirlia Kurls",
      "location": "Kirlia Kurls, Bogen",
      "pokemon": "Kirlia",
      "personality": "Age 55. Named after her champion mother. Runs Kirlia Kurls, Bogen's salon — warm and community-minded. Not a battler. Supportive of both her daughters, Jayne and Zoe.",
      "notes": "",
      "id": 17
    },
    {
      "name": "Teddy Willow",
      "town": "Bogen",
      "type": "NPC",
      "role": "School Counselor",
      "location": "Bogen",
      "pokemon": "Whimsicott",
      "personality": "Age 54. Gentle, thoughtful, not a battler. His role is listening, supporting, being present. Deeply loved by his family.",
      "notes": "",
      "id": 18
    }
  ],
  "players": [
    {
      "player": "Eric",
      "char": "Axel (Clarence Otto)",
      "cls": "Entertainer",
      "specialty": "Training Pok\u00e9mon to perform \u2014 dreams of training Pok\u00e9mon to drive",
      "home": "Bogen",
      "age": "18",
      "summary": "Bogen's jungle-floor mail boy \u2014 lives in a garage, builds his own bike, watches every race, and picked Mudkip because he smiles. Dreams of teaching Pok\u00e9mon to drive.",
      "pokemon": "Mudkip",
      "backstory": "Goes by Axel \u2014 born name is Clarence Otto. Lives in an old garage on the jungle floor of Bogen, his bed on the car lift. Delivers mail around town for pocket money. Has been building his own bike (no motor yet). Watches every race on a tiny TV. Told everyone he graduated early \u2014 he did not graduate. Visits his grandma often and she bakes cookies every time. Picked Mudkip because he smiles. Idolizes Maximus, a famous red-haired racer with a white sports car with red flames and a flame bandana.",
      "notes": "",
      "id": 301,
      "image": "images/portrait-301.jpg"
    },
    {
      "player": "Zack",
      "char": "Nea Stone",
      "cls": "Researcher",
      "specialty": "Ruins, dig sites, fossil history \u2014 channels ancient energy to create TMs",
      "home": "Bogen",
      "age": "18",
      "summary": "Shaved head, amber eyes, sharp edges \u2014 and ferociously loyal underneath. Babies her Pok\u00e9mon. If it's ancient, buried, or sealed shut, she's already found a way inside.",
      "pokemon": "Charmander",
      "backstory": "Shaved head. Amber eyes \u2014 color of fossilized resin with something caught inside. Sharp-edged exterior, ferociously loyal underneath. Babies her Pokemon in a way that surprises people who misjudge her. Full name Nea Stone. Parents are Andrea and Gale Stone \u2014 archaeologists currently stationed in Lucent (Town 13), the northern crystal and fossil research town. They share an Alakazam as a working research assistant. Brilliant people, not especially present ones. Living with her uncle Sutton Holloway in Bogen \u2014 her mother's brother. His house is the biggest in Bogen: fancy, modern, built into the trees. They coexist comfortably and at a distance. First visited Bogen two years ago with her parents. Found the Motley Wilds ruins. Engineered a reason to stay. Tattoos on her forearms and right hand \u2014 passes them off as rebellious. Her passion is ruins, dig sites, anything from the past.",
      "notes": "",
      "id": 302,
      "image": "images/portrait-302.jpg"
    },
    {
      "player": "Lacey",
      "char": "Coral Kai",
      "cls": "Breeder",
      "specialty": "Pokemon medicine and care \u2014 the Pokemon doctor of a people doctor family",
      "home": "Northwest Mimic (Zone 2)",
      "age": "17",
      "summary": "The Pok\u00e9mon doctor of a big family of people doctors. Beach-lover and well-traveled, she dreams of opening an aquarium breeding center in the middle of the continent \u2014 far from any ocean.",
      "pokemon": "Popplio",
      "backstory": "Nearly 18. Blue hair, coral pink eyes. From Zone 2 (northwest Mimic, near Town 12). Comes from a large family of people doctors \u2014 she is the one who wants to work with Pokemon instead. Loves the beach and has traveled widely with her family. Parents are Sybil (48, Gardevoir) and Rich (47, Tangrowth) \u2014 both doctors, brought her south on a business trip so she could start her journey from Bogen. Uncle Diego (39, Mienfoo) is married to Professor Felix Mewton (36, Persian) \u2014 the Zone 2 professor who gifted Coral her Popplio. Older sister Delphine (26) is already a doctor. Dreams of opening an aquarium breeding center in the middle of the continent, far from any ocean.",
      "notes": "",
      "id": 303,
      "image": "images/portrait-303.jpg"
    },
    {
      "player": "Patrick",
      "char": "Llewellyn Morse",
      "cls": "Specialist",
      "specialty": "Ghost-type Specialist",
      "home": "Haywick",
      "age": "18",
      "summary": "From sleepy riverside Haywick, and happily haunted \u2014 a Misdreavus followed him home from The Boneyard and never left. Not quite sure whether he's been cleared for this journey or just temporarily unsupervised.",
      "pokemon": "Rowlet",
      "backstory": "Llewellyn Morse grew up in Haywick \u2014 a river town of worn cobblestones, sandstone buildings, and predictable quiet. He loved it and found it agonizingly boring. His only window into something stranger was his Aunt Elara in Wickport, a coastal town famous not for a Gym but for The Boneyard \u2014 a sprawling ancient graveyard that drew visitors from across Mimic. Elara kept a Litwick. Llewellyn was jealous of every second she got to live there.\n\nOn a rare family visit, he practically lived in The Boneyard for a week. A Misdreavus noticed. She followed him home to Haywick. His parents, unsettled and unsure what to make of it, sought out Evander Null \u2014 a paranormal Pok\u00e9mon specialist based in Bogen. Evander assessed the bond, concluded the Misdreavus posed no threat, and quietly encouraged Llewellyn's instinct to lean into it rather than away. Against his parents' wishes, he coordinated with Professor Jayne to include a Rowlet in the Day of First Bonds ceremony \u2014 so Llewellyn could begin his journey with the others. Llewellyn is 18, Ghost-type Specialist, and arrived in Bogen not quite sure whether he's been cleared or just temporarily unsupervised.",
      "notes": "",
      "id": 304,
      "image": "images/portrait-304.jpg",
      "bio": ""
    },
    {
      "player": "Hal",
      "char": "Briar Gacha",
      "cls": "Master",
      "specialty": "All-rounder trainer chasing the title \u2014 easygoing wanderer who locks in the moment something sparks their curiosity",
      "home": "Sandbar",
      "age": "17",
      "summary": "Easygoing wanderer from tidal Sandbar, out to be the very best. Drifts between hobbies \u2014 drawing, photography, sailing \u2014 until something sparks, then locks in completely.",
      "pokemon": "Cyndaquil",
      "backstory": "17, from Sandbar (Town 20), the tidal town at the mouth of the Viper's Tongue River. An easygoing wanderer who lights up the moment something catches their interest \u2014 drawing, photography, food tourism, weekend backpacking, swimming, and sailing. Dad, Aster, was an explorer who died about five years ago in a ruin trap; Mom, Lark, is a historian who works remotely and keeps a Rockruff at home; younger sister Robin (11) is sarcastic and glamping-only. Briar planned to set out alongside childhood friends Artemis and Yena, but on the very first day a frightened Ralts panic-teleported Briar far from home, dropping them onto Route 101 \u2014 where the party finds them. Carries a Wimpod-shell sigil necklace, a town-issued waterproof journal (tidal crest embossed), tide cakes, Mom's Star Piece (quietly pulled from Dad's things), and Robin's badly-drawn \u201cdon't die or whatever\u201d note.",
      "notes": "",
      "id": 305,
      "image": "images/portrait-305.jpg"
    }
  ],
  "arcs": [
    {
      "title": "The Day of First Bonds",
      "status": "Active",
      "summary": "The annual coming of age festival in Bogen. New trainers receive their first Pokemon and officially begin their journeys. This year's cohort sets out together on January 1st.",
      "beats": "January 1st: Professor Jayne Willow presides over the starter selection ceremony.\nStarters: Axel (Clarence Otto) \u2014 Mudkip. Nea Stone \u2014 Charmander. Llewellyn Morse \u2014 Rowlet. Zoe takes Grookey (not a party member).\nCoral arrives with her parents \u2014 Popplio presented on her behalf by Professor Jayne.\nThe festival is celebratory, warm, full of community energy.\nTrainers receive their Pokemon and prepare to depart north-east.",
      "npcs": "Professor Jayne Willow, Zoe Willow, Axel, Nea Stone, Coral, Llewellyn Morse",
      "notes": "",
      "id": 101
    },
    {
      "title": "The Shooting Star",
      "status": "Active",
      "summary": "On December 31st, a Minior breaks through the simulation dome and its shell fragments scatter across Mimic. The player party \u2014 at the ruins on New Year's Eve \u2014 are first to reach the crash site.",
      "beats": "December 31st: Players are at the ruins in the Motley Wilds \u2014 a known teenage hangout.\nParty: Axel (Clarence Otto), Nea Stone, Coral, Llewellyn Morse.\nA brilliant streak crosses the sky. Everyone in Bogen sees it.\nAdults begin moving. Jayne among them.\nPlayers are already closer. They go \u2014 not because they are sent, but because they are right there.\nPlayers reach the crash site first. Each finds one Star Piece \u2014 warm, smooth, faintly glowing.\nJayne arrives shortly after, already collecting her own samples.\nShe tells them about Minior \u2014 born in stratosphere, four-plate shell, falls when too heavy. Believes shell broke into four pieces scattering across Mimic. Core probably wandering somewhere eating dust.\nAsks players to come to the lab in the morning for her test results.\nPlayers return to Bogen. Best New Year's Eve story in town.",
      "npcs": "Professor Jayne Willow",
      "notes": "",
      "id": 102
    }
  ],
  "sessions": [
    {
      "num": "Session 0",
      "date": "12/31 \u2013 1/2",
      "title": "The Day of First Bonds",
      "recap": "On New Year's Eve, Axel was tasked with showing the two newcomers \u2014 Llewellyn and Coral \u2014 around Bogen. He gave them a proper tour of the canopy town before ending the night at the ruins on the jungle floor, the local teenage hangout spot, to watch the fireworks. Nea was already there, slipping out of the ruins just as the display began. The four of them stood together watching the sky \u2014 and then a streak of light tore through the canopy and something crashed hard into the Motley Wilds nearby.\n\nThey went to investigate. In a scorched clearing they found a crater, foliage still burning around the edges, with a broken rocky structure at the center. Axel and Nea braced a burning tree to keep it from toppling into the hole while Llewellyn and Coral climbed down and pulled a frightened Shroodle from the wreckage. The group gathered some of the rocky fragments before MOSS arrived on the scene alongside Professor Jayne, who asked them to come by the lab in the morning.\n\nThey found Jayne the next day asleep at her desk, her Weavile keeping watch. When she woke, she told them what she believed had fallen: a Minior, a Pok\u00e9mon born in the upper atmosphere, too heavy to stay aloft. She thought the shell had broken apart on impact and scattered pieces across Mimic \u2014 asked them to keep an eye out on their travels and report back anything they found.\n\nLater that day came the Challenge Day. Coral ran the Jungle Dash and took first place, earning a medallion engraved with a tree. Axel swept the next two events \u2014 the Berry Hunt and the Identification Quiz \u2014 winning a Gengar silhouette medallion and a Cheri Berry medallion, both arguably by luck. That evening the town gathered for the Torch Lighting Ceremony. Residents submitted written wishes for the departing trainers, sealed into biodegradable lanterns powered by bioluminescent mushrooms that gave off just enough heat to send them drifting up into the jungle canopy and out of sight.\n\nOn 1/2, the starter ceremony. Zoe stepped up first and chose Grookey. Axel grabbed Mudkip. Nea took Charmander. Coral was handed a Pok\u00e9 Ball from her home zone \u2014 her Popplio, a gift arranged from afar. Llewellyn received a Rowlet, a quiet gift from Evander. All five Pok\u00e9mon turned out to be male \u2014 and by some stroke of luck, Nea's, Llewellyn's, and Axel's each had colouring just a little different from what the books described. Jayne noticed, furrowed her brow, and said nothing. She would think about it later.\n\nThe morning of departure began with a long brunch. The town sent them off with gifts: 100 Pok\u00e9dollars from Yousef, a carved wooden Pok\u00e9 Ball on a cord whittled from Bogen redwood (a local tradition), a jar of Motley Gold honey from Bellossom Hollow, a hand-drawn map of Route 101 from a passing trainer, a tin of cookies from Gran Gran, and a sealed envelope \u2014 a letter of introduction addressed to the researchers at Clearwater Station, tucked alongside a Pok\u00e9dex.\n\nThen they were off.",
      "threads": "Professor Jayne is quietly investigating the crash. Other Minior shell fragments are scattered somewhere across Mimic \u2014 locations unknown. The shiny anomalies at the ceremony caught Jayne's attention.",
      "xp": "Each player received their starter Pok\u00e9mon. Challenge Day medallions: Coral (tree), Axel (Gengar, Cheri Berry). Town sendoff gifts including a Pok\u00e9dex and letter of introduction to Clearwater Station.",
      "id": 201
    },
    {
      "num": "Session 1",
      "date": "1/3 \u2013 1/4",
      "title": "Route 101, Pt. 1",
      "recap": "The party took their first steps onto Route 101, beginning the long journey through the Motley Wilds toward the next town. Not far from the trailhead, Axel tripped over a pair of legs sticking out of the roadside foliage \u2014 and a disoriented boy named Briar sat up from the bushes, a panicked Ralts spinning circles around him. After quick introductions and a little coaxing, Briar caught the Ralts and fell in step with the group. Five trainers now, they made their way to the first campsite on the route: Camp Looney.\n\nThat evening the group settled in and were visited by local Sewaddle and Swadloon foraging around camp. The night passed \u2014 mostly. Nea woke in the dark hours of the morning, shaken by a nightmare: her Charmander's flame guttering out, the room going black, and a deep voice calling her name from the dark before she jolted awake.\n\nOn the morning of 1/4, the party pressed on toward the next rest stop, each trainer keeping an eye out for Pok\u00e9mon to catch or log. Axel charmed a Swadloon into a Pok\u00e9 Ball with a casual offer to race someday. Coral spent time observing a Venipede that paid her no attention whatsoever. Nea searched the surrounding terrain for ruins \u2014 finding none this stretch of route. Briar stayed close to their new Ralts.\n\nLlewellyn locked eyes with a Mankey \u2014 and a troop of them descended on the party. The group broke into a run, a Primeape joining the chase before long. In the chaos, Briar managed to knock one Mankey out, and Lew seized the moment \u2014 threw a Pok\u00e9 Ball mid-sprint \u2014 and landed the catch. The troop eventually fell back as the party crashed through the jungle undergrowth and stumbled into a stretch of hand-built traps set among the trees. The Mankey scattered at the sight of them.\n\nCurious, the group followed a trail of tracks deeper into the jungle and crept up on a lone figure camped in a small clearing. A man, working quietly on assembling another trap \u2014 his Larvesta working alongside him \u2014 while a Krokorok stoked a small campfire nearby. The session ended there \u2014 crouched in the undergrowth, watching a stranger whose business in the Motley Wilds is entirely unknown.",
      "threads": "Who is the man in the clearing? What are the traps for? Nea's nightmare \u2014 the voice in the dark.",
      "xp": "Briar caught Ralts. Axel caught Swadloon. Llewellyn caught Mankey.",
      "id": 202
    },
    {
      "num": "Session 2",
      "date": "1/4 \u2013 1/5",
      "title": "Route 101, Pt. 2",
      "recap": "Session 1 had ended with the party sneaking toward Krick's campsite \u2014 that's where Session 2 picked up. Krick wasn't doing anything sinister, just minding his own business, when the group of teenagers wandered into his camp and started peppering him with questions. He was forthcoming enough: a veiled stranger, met in Bellossom Hollow, had commissioned him to catch a Mankey on their behalf, after hearing Krick was already hunting one for himself. Satisfied, the party went on their way.\n\nPushing on toward Camp Buckley, the party stumbled into a line of Venipede. Nea knocked one out and caught it in a Pok\u00e9 Ball; a second fled, and the third looked too weak to bother with, so they left it. That night, Lew strolled the perimeter of camp before turning in and found a full, unopened bag of Chip'd \u2014 seasalt and onion, a Farfetch'd in swim trunks grinning on the bag. Axel spent the evening drilling with Swadloon.\n\nThe next morning broke in a downpour. Coral, determined to catch a Shroodle before breakfast, found one in the middle of a little impromptu \u201clesson\u201d \u2014 a mother Grafaiai teaching her children \u2014 and fumbled the catch attempt badly, more than once, right in front of the whole family. She won the Shroodle over with food instead, sealing it in a Nest Ball.\n\nSoaked and muddy, the party reached a stretch of road swallowed by floodwater, roaring past in full spate. Axel tried to fling Swadloon's Vine Whip across to anchor a line \u2014 and missed, getting swept by the current into the trees of the flooded forest. Keyman, Lew's Mankey, fought through to reach him and helped pull him free, then helped establish the vine line the rest of the party used to cross.\n\nThat night the party reached Camp Foongi, where bioluminescent fungus lit the forest floor in clusters shaped uncannily like Pok\u00e9 Balls. Digging through the glowing growth carried a risk of poison \u2014 Lew and Briar both got stung and spent the night sleeping it off. But the dig paid off: Axel, on a critical success, found an actual Pok\u00e9 Ball buried in the fungus, and Lew found one too. Inside Axel's was a Leaf Stone. Inside Lew's \u2014 a Lure Ball \u2014 was an Awakening. The party made camp on a raised platform above the glow.",
      "threads": "The veiled stranger's interest in a Mankey, and what else they're after in Bellossom Hollow, is still unknown.",
      "xp": "Nea \u2014 Venipede. Coral \u2014 Shroodle. Axel \u2014 Leaf Stone. Llewellyn \u2014 Awakening, Lure Ball.",
      "id": 203
    }
  ],
  "encounters": [],
  "mechs": [
    {
      "name": "Healing Items \u2014 Potions & Remedies",
      "cat": "Item",
      "body": "Potion \u2014 heal 1 Stress\nSuper Potion \u2014 heal 2 Stress\nHyper Potion \u2014 heal 3 Stress\nMax Potion \u2014 heal all Stress\nFull Restore \u2014 heal all Stress + all conditions\nFull Heal \u2014 heal all conditions\nAntidote \u2014 heals Poison\nAwakening \u2014 heals Sleep\nBurn Heal \u2014 heals Burn\nIce Heal \u2014 heals Frozen\nParalyze Heal \u2014 heals Paralysis\n\nBreeder craft charge costs: condition remedies = 1 charge; Potion = 2, Super Potion = 3, Hyper Potion = 4; Full Heal = 4, Max Potion = 5, Full Restore = 6. Max charges: 6 at Mastery.",
      "notes": "",
      "id": 405
    },
    {
      "name": "Pok\u00e9Chow",
      "cat": "Item",
      "body": "Feeds up to 3 Pok\u00e9mon per long rest. Grants a Pok\u00e9Chow Die (d6 at Foundation, d8 at Mastery) that can be spent to add to an attack/damage roll or to clear that much Stress. Requires berries to craft.",
      "notes": "",
      "id": 406
    },
    {
      "name": "Evolution Stones & Items",
      "cat": "Item",
      "body": "Using the matching stone or item on a compatible Pok\u00e9mon triggers evolution on the spot \u2014 though evolution is always played as a scene, never just a stat swap.\n\nEVOLUTION STONES\nFire Stone \u2014 Growlithe, Vulpix, Eevee (Flareon)\nWater Stone \u2014 Staryu, Eevee (Vaporeon)\nThunder Stone \u2014 Pikachu, Charjabug, Eelektrik, Magneton, Eevee (Jolteon)\nLeaf Stone \u2014 Gloom (Vileplume), Eevee (Leafeon)\nMoon Stone \u2014 Nidorina, Nidorino, Jigglypuff\nSun Stone \u2014 Gloom (Bellossom), Cottonee\nIce Stone \u2014 Cetoddle, Eevee (Glaceon)\nShiny Stone \u2014 Togetic\nDusk Stone \u2014 Misdreavus, Lampent, Doublade\nDawn Stone \u2014 Kirlia \u2642 (Gallade), Snorunt \u2640 (Froslass)\n\nEVOLUTION ITEMS\nKing's Rock \u2014 Slowpoke (Slowking)\nMetal Coat \u2014 Onix (Steelix), Scyther (Scizor)\nDragon Scale \u2014 Seadra (Kingdra)\nRazor Claw \u2014 Sneasel (Weavile)\nPrism Scale \u2014 Feebas (Milotic)\nBond Cord \u2014 a woven cord that glows when trainer and Pok\u00e9mon grip it together. Evolves Pok\u00e9mon whose bond has outgrown their form: Machoke (Machamp), Kadabra (Alakazam), Haunter (Gengar).",
      "notes": "",
      "id": 407
    },
    {
      "name": "Fossils & Revival",
      "cat": "Item",
      "body": "Fossils are ancient Pok\u00e9mon preserved in stone \u2014 found in ruins, dig sites, cliff faces, and the deep places of Mimic. A fossil can be revived into a living Stage 0 Pok\u00e9mon at a proper research facility (Clearwater Station, or the fossil labs of Lucent). A revived Pok\u00e9mon joins its reviver as a caught companion.\n\nHelix Fossil \u2014 Omanyte \u00b7 Dome Fossil \u2014 Kabuto \u00b7 Old Amber \u2014 Aerodactyl\nSkull Fossil \u2014 Cranidos \u00b7 Armor Fossil \u2014 Shieldon \u00b7 Root Fossil \u2014 Lileep\nClaw Fossil \u2014 Anorith \u00b7 Cover Fossil \u2014 Tirtouga \u00b7 Plume Fossil \u2014 Archen\nJaw Fossil \u2014 Tyrunt \u00b7 Sail Fossil \u2014 Amaura\n\nFossils this old are fragile \u2014 transporting one safely can be an adventure of its own.",
      "notes": "",
      "id": 408
    }
  ],
  "domainCards": {},
  "caught": [
    {
      "trainer": "Axel",
      "species": "Mudkip",
      "nickname": "Axel Jr",
      "gender": "Male",
      "shiny": true,
      "ball": "Pok\u00e9 Ball",
      "session": "Session 0",
      "experience": "",
      "id": 501,
      "sprite": "images/sprite-501.png"
    },
    {
      "trainer": "Axel",
      "species": "Swadloon",
      "nickname": "Turbo",
      "gender": "Female",
      "shiny": false,
      "ball": "Luxury Ball",
      "session": "Session 1",
      "experience": "Full Send Confidence \u2014 asked, with total confidence, if it wanted to take the wheel; got a nod back and that was that. Useful for bluffing, claiming authority, projecting certainty it hasn't earned.",
      "id": 502,
      "sprite": "images/sprite-502.webp"
    },
    {
      "trainer": "Nea",
      "species": "Charmander",
      "nickname": "",
      "gender": "Male",
      "shiny": true,
      "ball": "Pok\u00e9 Ball",
      "session": "Session 0",
      "experience": "",
      "id": 503,
      "sprite": "images/sprite-503.png"
    },
    {
      "trainer": "Nea",
      "species": "Venipede",
      "nickname": "",
      "gender": "Female",
      "shiny": false,
      "ball": "Pok\u00e9 Ball",
      "session": "Session 2",
      "experience": "Holds the Line \u2014 came up swinging at Nea and her Charmander before it ever had a chance, caught mid-attack. Useful for standoffs, intimidation, refusing to be the one who blinks first.",
      "id": 504,
      "sprite": "images/sprite-504.png"
    },
    {
      "trainer": "Coral",
      "species": "Popplio",
      "nickname": "Spout",
      "gender": "Male",
      "shiny": false,
      "ball": "Pok\u00e9 Ball",
      "session": "Session 0",
      "experience": "",
      "id": 505,
      "sprite": "images/sprite-505.png"
    },
    {
      "trainer": "Coral",
      "species": "Shroodle",
      "nickname": "Doodle",
      "gender": "Female",
      "shiny": false,
      "ball": "Nest Ball",
      "session": "Session 2",
      "experience": "Quick Study \u2014 was deep in studying a patch of graffiti, copying the lines, before food won it over. Useful for mimicry, picking up a pattern after one look, faking familiarity with something it just learned.",
      "id": 506,
      "sprite": "images/sprite-506.png"
    },
    {
      "trainer": "Llewellyn",
      "species": "Rowlet",
      "nickname": "Boat",
      "gender": "Male",
      "shiny": true,
      "ball": "Pok\u00e9 Ball",
      "session": "Session 0",
      "experience": "",
      "id": 507,
      "sprite": "images/sprite-507.png"
    },
    {
      "trainer": "Llewellyn",
      "species": "Mankey",
      "nickname": "Keyman",
      "gender": "Male",
      "shiny": false,
      "ball": "Repeat Ball",
      "session": "Session 1",
      "experience": "In Your Corner \u2014 swung first, went down fighting, got knocked into the ball mid-attack, and has been unexpectedly steady and loyal ever since. Useful for vouching, escalating on someone else's behalf, making clear an ally isn't alone.",
      "id": 508,
      "sprite": "images/sprite-508.png"
    },
    {
      "trainer": "Briar",
      "species": "Cyndaquil",
      "nickname": "",
      "gender": "Male",
      "shiny": false,
      "ball": "Pok\u00e9 Ball",
      "session": "Session 0",
      "experience": "",
      "id": 510,
      "sprite": "images/sprite-510.png"
    },
    {
      "trainer": "Briar",
      "species": "Ralts",
      "nickname": "",
      "gender": "Male",
      "shiny": false,
      "ball": "Premier Ball",
      "session": "Session 1",
      "experience": "Eep! Wait, Did I Do That? \u2014 jumpy and easily spooked, with a startled half-realization underneath it when it actually holds its ground or lands a hit. Useful for masking nerves, staying composed under pressure, the quiet warning before things go bad.",
      "id": 509,
      "sprite": "images/sprite-509.png"
    }
  ]
};
