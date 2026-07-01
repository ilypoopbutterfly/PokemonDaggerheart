// Campaign content for the Pokemon x Daggerheart GM wiki.
// Edit this file to update the wiki; index.html is the presentation shell.
var data = {
  "world": {
    "name": "The Very Best",
    "region": "Mimic \u2014 a large continent surrounded by ocean with scattered islands. The region sits inside what appears to be a vast, seamless world.",
    "tone": "Coming of age, self-discovery, bonds between trainer and Pokemon, wonder, mystery beneath the surface.",
    "conflict": "Eight Gyms stand between the trainers and whatever future they are building toward. The journey north and counter-clockwise across the continent will test who they are and who they want to become.",
    "lore": "Coming of Age Tradition: In Mimic, every young person undergoes a cherished rite \u2014 receiving their first Pokemon and setting out to conquer the region's 8 Gyms. The journey is less about raw victory and more about self-discovery. The age of departure differs by geography: northern half sets out at 16, southern half at 18 due to harsher terrain.\n\nTrainer Paths (six vocations):\n\u2022 Pokemon Master \u2014 seeks to be the very best. Pinnacle is Regional Champion.\n\u2022 Pokemon Researcher \u2014 scholars of Pokemon history, behavior, and environments.\n\u2022 Pokemon Breeder \u2014 specialists in care, raising, and wellbeing of Pokemon.\n\u2022 Pokemon Specialist \u2014 masters one type, opens their own Gym.\n\u2022 Pokemon Entertainer \u2014 entertainers who train Pokemon to dazzle in Showcases and Contests.\n\u2022 Pokemon Rebel \u2014 guardians of the wild, protectors of people and Pokemon in dangerous regions.\n\nSTARTER ZONES \u2014 The Day of First Bonds\n\nMimic is divided into four starter zones, each serving a geographic quadrant of the region. On the Day of First Bonds, new trainers gather at their zone's starter town to receive their first Pok\u00e9mon from the local professor. Each zone has its own traditions around the ceremony.\n\nZone 1 (Northeast) \u2014 Midori, Boosong\nProfessor Thaniel Sheng. Starters: Rowlet, Torchic, Piplup.\nA bamboo wetlands town on the northern bank of The Mizu. Lanterns set on the river at dawn \u2014 the ceremony is calm, communal, and riverine.\n\nZone 2 (Northwest) \u2014 Corvikeep, Petalbend\nProfessor Felix Mewton. Starters: Sprigatito, Litten, Popplio.\nA grand castle town beneath cherry blossoms and Corviknight in the sky. The ceremony is formal and ceremonial \u2014 starters presented in the castle courtyard.\n\nZone 3 (Southwest) \u2014 Sandbar, Twisselmon\nProfessor Evangeline Keely. Starters: Bulbasaur, Cyndaquil, Froakie.\nA tidal river-mouth town that partially submerges at high tide. The ceremony is timed to the tides \u2014 it can only happen in a specific low-tide window each year.\n\nZone 4 (Southeast) \u2014 Bogen, Motley Wilds\nProfessor Jayne Willow. Starters: Grookey, Charmander, Mudkip.\nThe jungle canopy town where the campaign begins. The ceremony coincides with the Motley Wilds coming alive at night \u2014 bioluminescent spores, lanterns, the jungle celebrating.",
    "vocations": "Master \u00b7 Researcher \u00b7 Breeder \u00b7 Specialist \u00b7 Entertainer \u00b7 Rebel",
    "locations": "Bogen \u2014 The starter town. A jungle settlement deep in the Motley Wilds at the southern base of the continent. Buildings are suspended among the trees \u2014 rope bridges, lanterns, bioluminescent spores at night. Zone 4 starter town \u2014 Professor Jayne Willow offers Grookey, Charmander, and Mudkip here on the Day of First Bonds. Has a ground floor accessible by off-road vehicles.\n\nThe Motley Wilds \u2014 Dense jungle surrounding Bogen. Dangerous enough to warrant caution but familiar to locals.\n\nThe Ruins \u2014 Hidden within the Motley Wilds. Ancient carvings nobody can read. Local kids use it as a hangout spot. True origin unknown.\n\nThe Titan Gate \u2014 A massive regional gate at the edge of Bogen. Overgrown and mysterious. Purpose forgotten.\n\nGym Route \u2014 Trainers head north-east from Bogen in a counter-clockwise direction, conquering all 8 Gyms.",
    "mechanics": "Pokeballs replace weapons. Pokemon fulfill the companion role. Type advantages, status conditions, and domain cards replace standard Daggerheart spell systems. Armor is replaced by Luck. Composure Thresholds replace armor thresholds. Stress is always 6. See Mechanics tab for full detail.",
    "secrets": "GM ONLY \u2014 THE SIMULATION:\nMimic is entirely enclosed within a dome \u2014 a controlled simulation being studied by unknown observers. Westworld meets The Truman Show. No NPC, trainer, or player should suspect this for a very long time. The ruins in the Motley Wilds are related to the simulation's original construction.\n\nGM ONLY \u2014 THE DOME CRACK:\nOn December 31st, a Minior broke through the barrier of the simulation dome, leaving a hairline crack near-invisible to anyone inside Mimic. The shell broke into four plates scattering across the continent. One plate landed in the Motley Wilds near the ruins. Three others landed elsewhere across Mimic \u2014 TBD. The Minior's core is now wandering Mimic, eating dust, disoriented but not in danger.\n\nGM ONLY \u2014 STAR PIECES:\nEach player collected one Star Piece from the crash site. Players may expend their Star Piece on any wild Pokemon encounter to make that Pokemon shiny."
  },
  "npcs": [
    {
      "name": "Professor Jayne Willow",
      "type": "NPC",
      "role": "Pokemon Professor \u2014 Bogen Lab",
      "location": "Bogen",
      "pokemon": "TBD",
      "personality": "Young for her title but unmistakably brilliant. Only 22 \u2014 completed the Gym Challenge and used prize money to buy the Bogen lab a few months ago. Stopped before the Elite Four because she always knew she wanted the lab. Excitable and a little clumsy. Her lab has open habitat zones instead of Pokeballs.",
      "notes": "GM ONLY: Does not yet know about the dome or simulation. Scientifically curious about the Minior event. Noticed the entry angle was unusual but has not connected it to anything yet. Pulled strings to get Zoe included in the Bogen cohort early \u2014 Zoe's actual birthday is January 6th.",
      "id": 1
    },
    {
      "name": "Zoe Willow",
      "type": "Rival",
      "role": "Traveling trainer \u2014 Jayne's younger sister",
      "location": "Bogen (departing)",
      "pokemon": "Grookey",
      "personality": "Has lived in her brilliant sister's shadow her whole life. Fiercely independent. The journey is hers to define. Will cross paths with the party often \u2014 sometimes helping, sometimes competing. Not a party member.",
      "notes": "GM ONLY: Technically turns 18 on January 6th. Jayne pulled strings to get her included early. Zoe may not know this \u2014 and would hate it if she did.",
      "id": 2
    },
    {
      "name": "Maximus",
      "type": "NPC",
      "role": "Famous racing champion \u2014 Axel's idol",
      "location": "Unknown \u2014 racing circuit",
      "pokemon": "Unknown",
      "personality": "Red-haired, charismatic, usually wins. Wears a flame bandana. Drives a white sports car with red flames. Axel watches every race from his garage TV.",
      "notes": "GM ONLY: Details TBD. Could become a meaningful NPC later in the campaign.",
      "id": 4
    }
  ],
  "players": [
    {
      "player": "TBD",
      "char": "Axel (Clarence Otto)",
      "cls": "Entertainer",
      "specialty": "Training Pok\u00e9mon to perform \u2014 dreams of training Pok\u00e9mon to drive",
      "pokemon": "Mudkip",
      "backstory": "Goes by Axel \u2014 born name is Clarence Otto. Lives in an old garage on the jungle floor of Bogen, his bed on the car lift. Delivers mail around town for pocket money. Has been building his own bike (no motor yet). Watches every race on a tiny TV. Told everyone he graduated early \u2014 he did not graduate. Visits his grandma often and she bakes cookies every time. Picked Mudkip because he smiles. Idolizes Maximus, a famous red-haired racer with a white sports car with red flames and a flame bandana.",
      "notes": "GM ONLY: Moved to Bogen from a big bustling city at age five. Does not know what happened to his parents or his uncle. His uncle is in jail. The elderly woman he calls grandma may not be blood related \u2014 she simply took him in.",
      "id": 301,
      "image": "images/portrait-301.jpg"
    },
    {
      "player": "TBD",
      "char": "Nea Stone",
      "cls": "Researcher",
      "specialty": "Ruins, dig sites, fossil history \u2014 channels ancient energy to create TMs",
      "pokemon": "Charmander",
      "backstory": "Shaved head. Amber eyes \u2014 color of fossilized resin with something caught inside. Sharp-edged exterior, ferociously loyal underneath. Babies her Pokemon in a way that surprises people who misjudge her. Full name Nea Stone. Parents are Andrea and Gale Stone \u2014 archaeologists currently stationed in Lucent (Town 13), the northern crystal and fossil research town. They share an Alakazam as a working research assistant. Brilliant people, not especially present ones. Living with her uncle Sutton Holloway in Bogen \u2014 her mother's brother. His house is the biggest in Bogen: fancy, modern, built into the trees. They coexist comfortably and at a distance. First visited Bogen two years ago with her parents. Found the Motley Wilds ruins. Engineered a reason to stay. Tattoos on her forearms and right hand \u2014 passes them off as rebellious. Her passion is ruins, dig sites, anything from the past.",
      "notes": "GM ONLY: Two years ago Nea fell through a weak section of the ruin floor into a sealed lower chamber \u2014 intact, walls covered in carvings in the simulation's native script. At the center: a stone plinth with a single deep rune. She touched it. It wrote on her. The rune is a binding glyph connected to Darkrai \u2014 a dormant impression of its presence, part of the simulation's original construction. The tattoos are Dark-type energy made visible. She has discovered she can imbue a device with a trace of this energy to teach a Pokemon a new move \u2014 essentially a TM. She understands the output but not the source. Her parents would exploit this discovery. She has not told them. Sutton Holloway has GM secrets \u2014 TBD.",
      "id": 302,
      "image": "images/portrait-302.jpg"
    },
    {
      "player": "TBD",
      "char": "Coral",
      "cls": "Breeder",
      "specialty": "Pokemon medicine and care \u2014 the Pokemon doctor of a people doctor family",
      "pokemon": "Popplio",
      "backstory": "Nearly 18. Blue hair, coral pink eyes. From Zone 2 (northwest Mimic, near Town 12). Comes from a large family of people doctors \u2014 she is the one who wants to work with Pokemon instead. Loves the beach and has traveled widely with her family. Parents are Sybil (48, Gardevoir) and Rich (47, Tangrowth) \u2014 both doctors, brought her south on a business trip so she could start her journey from Bogen. Uncle Diego (39, Mienfoo) is married to Professor Felix Mewton (36, Persian) \u2014 the Zone 2 professor who gifted Coral her Popplio. Older sister Delphine (26) is already a doctor. Dreams of opening an aquarium breeding center in the middle of the continent, far from any ocean.",
      "notes": "GM ONLY: Coral is new to everyone in Bogen \u2014 she does not know the other trainers before the festival. Her parents attend the starter ceremony and present Popplio on her behalf through Professor Jayne.",
      "id": 303,
      "image": "images/portrait-303.jpg"
    },
    {
      "player": "TBD",
      "char": "Llewellyn Morse",
      "cls": "Specialist",
      "specialty": "TBD \u2014 type specialty not yet chosen",
      "pokemon": "Rowlet",
      "backstory": "Llewellyn Morse grew up in Haywick \u2014 a river town of worn cobblestones, sandstone buildings, and predictable quiet. He loved it and found it agonizingly boring. His only window into something stranger was his Aunt Elara in Wickport, a coastal town famous not for a Gym but for The Boneyard \u2014 a sprawling ancient graveyard that drew visitors from across Mimic. Elara kept a Litwick. Llewellyn was jealous of every second she got to live there.\n\nOn a rare family visit, he practically lived in The Boneyard for a week. A Misdreavus noticed. She followed him home to Haywick. His parents, unsettled and unsure what to make of it, sought out Evander Null \u2014 a paranormal Pok\u00e9mon specialist based in Bogen. Evander assessed the bond, concluded the Misdreavus posed no threat, and quietly encouraged Llewellyn's instinct to lean into it rather than away. Against his parents' wishes, he coordinated with Professor Jayne to include a Rowlet in the Day of First Bonds ceremony \u2014 so Llewellyn could begin his journey with the others. Llewellyn is 18, Ghost-type Specialist, and arrived in Bogen not quite sure whether he's been cleared or just temporarily unsupervised.",
      "notes": "GM ONLY: The Misdreavus was never caught and has no Pok\u00e9ball. She is present but her mechanical status is a narrative thread to develop across the campaign. Evander Null diagnosed the bond as genuine and non-threatening \u2014 his parents know this and remain uneasy. Llewellyn does not know the full extent of what Evander told his parents.",
      "id": 304,
      "image": "images/portrait-304.jpg",
      "bio": ""
    },
    {
      "player": "TBD",
      "char": "Briar",
      "cls": "Master",
      "specialty": "All-rounder trainer chasing the title \u2014 easygoing wanderer who locks in the moment something sparks their curiosity",
      "pokemon": "Cyndaquil",
      "backstory": "17, from Sandbar (Town 20), the tidal town at the mouth of the Viper's Tongue River. An easygoing wanderer who lights up the moment something catches their interest \u2014 drawing, photography, food tourism, weekend backpacking, swimming, and sailing. Dad, Aster, was an explorer who died about five years ago in a ruin trap; Mom, Lark, is a historian who works remotely and keeps a Rockruff at home; younger sister Robin (11) is sarcastic and glamping-only. Briar planned to set out alongside childhood friends Artemis and Yena, but on the very first day a frightened Ralts panic-teleported Briar far from home, dropping them onto Route 101 \u2014 where the party finds them. Carries a Wimpod-shell sigil necklace, a town-issued waterproof journal (tidal crest embossed), tide cakes, Mom's Star Piece (quietly pulled from Dad's things), and Robin's badly-drawn \u201cdon't die or whatever\u201d note.",
      "notes": "GM ONLY: Aster's death in a ruin trap echoes the sealed-ruins thread under Bogen \u2014 a future hook if you want Briar's backstory to intersect Nea's. The panicked Ralts is unowned and bolted after the teleport; it can resurface later as a thread (or as a catchable encounter). Artemis & Yena left stranded back home can trail the party as recurring NPCs.",
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
      "notes": "GM ONLY: The festival is the narrative on-ramp. The real inciting incident happens the night before on December 31st.",
      "id": 101
    },
    {
      "title": "The Shooting Star",
      "status": "Active",
      "summary": "On December 31st, a Minior breaks through the simulation dome and its shell fragments scatter across Mimic. The player party \u2014 at the ruins on New Year's Eve \u2014 are first to reach the crash site.",
      "beats": "December 31st: Players are at the ruins in the Motley Wilds \u2014 a known teenage hangout.\nParty: Axel (Clarence Otto), Nea Stone, Coral, Llewellyn Morse.\nA brilliant streak crosses the sky. Everyone in Bogen sees it.\nAdults begin moving. Jayne among them.\nPlayers are already closer. They go \u2014 not because they are sent, but because they are right there.\nPlayers reach the crash site first. Each finds one Star Piece \u2014 warm, smooth, faintly glowing.\nJayne arrives shortly after, already collecting her own samples.\nShe tells them about Minior \u2014 born in stratosphere, four-plate shell, falls when too heavy. Believes shell broke into four pieces scattering across Mimic. Core probably wandering somewhere eating dust.\nAsks players to come to the lab in the morning for her test results.\nPlayers return to Bogen. Best New Year's Eve story in town.",
      "npcs": "Professor Jayne Willow",
      "notes": "GM ONLY: The Minior broke through the simulation dome leaving a hairline crack invisible to residents. Shell broke into four plates \u2014 one in Motley Wilds, three elsewhere TBD. Core is wandering Mimic, disoriented but not in danger. Jayne noticed unusual entry angle but has not connected it to anything.\n\nSTAR PIECE MECHANIC: Each player has one Star Piece. May be expended on any wild Pokemon encounter to make that Pokemon shiny.",
      "id": 102
    }
  ],
  "sessions": [
    {
      "num": "Session 0",
      "date": "12/31 \u2013 1/2",
      "title": "The Day of First Bonds",
      "recap": "On New Year's Eve, Axel was tasked with showing the two newcomers \u2014 Llewellyn and Coral \u2014 around Bogen. He gave them a proper tour of the canopy town before ending the night at the ruins on the jungle floor, the local teenage hangout spot, to watch the fireworks. Nea was already there, slipping out of the ruins just as the display began. The four of them stood together watching the sky \u2014 and then a streak of light tore through the canopy and something crashed hard into the Motley Wilds nearby.\n\nThey went to investigate. In a scorched clearing they found a crater, foliage still burning around the edges, with a broken rocky structure at the center. Axel and Nea braced a burning tree to keep it from toppling into the hole while Llewellyn and Coral climbed down and pulled a frightened Schroodle from the wreckage. The group gathered some of the rocky fragments before MOSS arrived on the scene alongside Professor Jayne, who asked them to come by the lab in the morning.\n\nThey found Jayne the next day asleep at her desk, her Weavile keeping watch. When she woke, she told them what she believed had fallen: a Minior, a Pok\u00e9mon born in the upper atmosphere, too heavy to stay aloft. She thought the shell had broken apart on impact and scattered pieces across Mimic \u2014 asked them to keep an eye out on their travels and report back anything they found.\n\nLater that day came the Challenge Day. Coral ran the Jungle Dash and took first place, earning a medallion engraved with a tree. Axel swept the next two events \u2014 the Berry Hunt and the Identification Quiz \u2014 winning a Gengar silhouette medallion and a Cheri Berry medallion, both arguably by luck. That evening the town gathered for the Torch Lighting Ceremony. Residents submitted written wishes for the departing trainers, sealed into biodegradable lanterns powered by bioluminescent mushrooms that gave off just enough heat to send them drifting up into the jungle canopy and out of sight.\n\nOn 1/2, the starter ceremony. Zoe stepped up first and chose Grookey. Axel grabbed Mudkip. Nea took Charmander. Coral was handed a Pok\u00e9 Ball from her home zone \u2014 her Popplio, a gift arranged from afar. Llewellyn received a Rowlet, a quiet gift from Evander. All five Pok\u00e9mon turned out to be male \u2014 and by some stroke of luck, Nea's, Llewellyn's, and Axel's each had colouring just a little different from what the books described. Jayne noticed, furrowed her brow, and said nothing. She would think about it later.\n\nThe morning of departure began with a long brunch. The town sent them off with gifts: 100 Pok\u00e9dollars from Yousef, a carved wooden Pok\u00e9 Ball on a cord whittled from Bogen redwood (a local tradition), a jar of Motley Gold honey from Bellossom Hollow, a hand-drawn map of Route 101 from a passing trainer, a tin of cookies from Gran Gran, and a sealed envelope \u2014 a letter of introduction addressed to the researchers at Clearwater Station, tucked alongside a Pok\u00e9dex.\n\nThen they were off.",
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
      "recap": "Session 1 had ended with the party sneaking toward Krick's campsite \u2014 that's where Session 2 picked up. Krick wasn't doing anything sinister, just minding his own business, when the group of teenagers wandered into his camp and started peppering him with questions. He was forthcoming enough: a veiled stranger, met in Bellossom Hollow, had commissioned him to catch a Mankey on their behalf, after hearing Krick was already hunting one for himself. Satisfied, the party went on their way.\n\nPushing on toward Camp Buckley, the party stumbled into a line of Venipede. Nea knocked one out and caught it in a Pok\u00e9 Ball; a second fled, and the third looked too weak to bother with, so they left it. That night, Lew strolled the perimeter of camp before turning in and found a full, unopened bag of Chip'd \u2014 seasalt and onion, a Farfetch'd in swim trunks grinning on the bag. Axel spent the evening drilling with Swadloon.\n\nThe next morning broke in a downpour. Coral, determined to catch a Schroodle before breakfast, found one in the middle of a little impromptu \u201clesson\u201d \u2014 a mother Grafaiai teaching her children \u2014 and fumbled the catch attempt badly, more than once, right in front of the whole family. She won the Schroodle over with food instead, sealing it in a Nest Ball.\n\nSoaked and muddy, the party reached a stretch of road swallowed by floodwater, roaring past in full spate. Axel tried to fling Swadloon's Vine Whip across to anchor a line \u2014 and missed, getting swept by the current into the trees of the flooded forest. Keyman, Lew's Mankey, fought through to reach him and helped pull him free, then helped establish the vine line the rest of the party used to cross.\n\nThat night the party reached Camp Foongi, where bioluminescent fungus lit the forest floor in clusters shaped uncannily like Pok\u00e9 Balls. Digging through the glowing growth carried a risk of poison \u2014 Lew and Briar both got stung and spent the night sleeping it off. But the dig paid off: Axel, on a critical success, found an actual Pok\u00e9 Ball buried in the fungus, and Lew found one too. Inside Axel's was a Leaf Stone. Inside Lew's \u2014 a Lure Ball \u2014 was an Awakening. The party made camp on a raised platform above the glow.",
      "threads": "The veiled stranger's interest in a Mankey, and what else they're after in Bellossom Hollow, is still unknown.",
      "xp": "Nea \u2014 Venipede. Coral \u2014 Schroodle. Axel \u2014 Leaf Stone. Llewellyn \u2014 Awakening, Lure Ball.",
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
    }
  ],
  "domainCards": {},
  "caught": [
    {
      "trainer": "Axel",
      "species": "Mudkip",
      "nickname": "",
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
      "nickname": "",
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
      "nickname": "",
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
      "species": "Schroodle",
      "nickname": "",
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
      "nickname": "",
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
