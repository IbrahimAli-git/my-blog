// https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata?resource=download
const articles = [
    {
   name: 'Avatar',
   title: 'Avatar: Enter the world of Pandora',
   content: [
     `In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, 
           but becomes torn between following orders and protecting an alien civilization.`,
   ]
 }, {
   name: "Pirates of the Caribbean: At World's End",
   title: "Pirates of the Caribbean: At the end of the world, the adventure begins.",
   content: ['Captain Barbossa, long believed to be dead, has come back to life and is headed to the edge of the Earth with Will Turner and Elizabeth Swann. But nothing is quite as it seems.']
 },
 {
   name: "Spectre",
   title: "Spectre: A Plan No One Escapes",
   content: ["A cryptic message from Bondâ€™s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE."]
 },
 {
   name: "The Dark Knight Rises",
   title: "The Dark Knight Rises: The Legend Ends",
   content: ["Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy."]
 },
 {
   name: "John Carter",
   title: "John Carter: Lost in our world, found in another.",
   content: ["John Carter is a war-weary, former military captain who's inexplicably transported to the mysterious and exotic planet of Barsoom (Mars) and reluctantly becomes embroiled in an epic conflict. It's a world on the brink of collapse, and Carter rediscovers his humanity when he realizes the survival of Barsoom and its people rests in his hands."]
 },
 {
   name: "Spider-Man 3",
   title: "Spider-Man 3: The battle within.",
   content: ["The seemingly invincible Spider-Man goes up against an all-new crop of villain â€“ including the shape-shifting Sandman. While Spider-Manâ€™s superpowers are altered by an alien organism, his alter ego, Peter Parker, deals with nemesis Eddie Brock and also gets caught up in a love triangle."]
 },
 {
   name: "Tangled",
   title: "Tangled: They're taking adventure to new lengths.",
   content: ["When the kingdom's most wanted-and most charming-bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair. Flynn's curious captor, who's looking for her ticket out of the tower where she's been locked away for years, strikes a deal with the handsome thief and the unlikely duo sets off on an action-packed escapade, complete with a super-cop horse, an over-protective chameleon and a gruff gang of pub thugs."]
 },
 {
   name: "Avengers: Age of Ultron",
   title: "Avengers: Age of Ultron A New Age Has Come.",
   content: ["When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earthâ€™s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure."]
 },
 {
   name: "Harry Potter and the Half-Blood Prince",
   title: "Dark Secrets Revealed",
   content: ["As Harry begins his sixth year at Hogwarts, he discovers an old book marked as 'Property of the Half-Blood Prince', and begins to learn more about Lord Voldemort's dark past."]
 },
 {
   name: "Batman v Superman: Dawn of Justice",
   title: "Batman v Superman: Dawn of Justice Justice or revenge",
   content: ["Fearing the actions of a Super Hero left unchecked, Gotham Cityâ€™s own formidable, forceful vigilante takes on Metropolisâ€™s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than itâ€™s ever known before."]
 },
 {
   name: "Superman Returns",
   title: "Superman Returns",
   content: ["Superman returns to discover his 5-year absence has allowed Lex Luthor to walk free, and that those he was closest too felt abandoned and have moved on. Luthor plots his ultimate revenge that could see millions killed and change the face of the planet forever, as well as ridding himself of the Man of Steel."]
 },
 {
   name: "Quantum of Solace",
   title: "Quantum of Solace: For love, for hate, for justice, for revenge.",
   content: ["Quantum of Solace continues the adventures of James Bond after Casino Royale. Betrayed by Vesper, the woman he loved, 007 fights the urge to make his latest mission personal. Pursuing his determination to uncover the truth, Bond and M interrogate Mr. White, who reveals that the organization that blackmailed Vesper is far more complex and dangerous than anyone had imagined."]
 },
 {
   name: "Pirates of the Caribbean: Dead Man's Chest",
   title: "Pirates of the Caribbean: Dead Man's Chest Jack is back!",
   content: ["Captain Jack Sparrow works his way out of a blood debt with the ghostly Davey Jones, he also attempts to avoid eternal damnation."]
 },
 {
   name: "The Lone Ranger",
   title: "The Lone Ranger: Never Take Off the Mask",
   content: ["The Texas Rangers chase down a gang of outlaws led by Butch Cavendish, but the gang ambushes the Rangers, seemingly killing them all. One survivor is found, however, by an American Indian named Tonto, who nurses him back to health. The Ranger, donning a mask and riding a white stallion named Silver, teams up with Tonto to bring the unscrupulous gang and others of that ilk to justice."]
 },
 {
   name: "Man of Steel",
   title: "Man of Steel: You will believe that a man can fly.",
   content: ["A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind."]
 },
 {
   name: "The Chronicles of Narnia: Prince Caspian",
   title: "The Chronicles of Narnia: Prince Caspian Hope has a new face.",
   content: ["One year after their incredible adventures in the Lion, the Witch and the Wardrobe, Peter, Edmund, Lucy and Susan Pevensie return to Narnia to aid a young prince whose life has been threatened by the evil King Miraz. Now, with the help of a colorful cast of new characters, including Trufflehunter the badger and Nikabrik the dwarf, the Pevensie clan embarks on an incredible quest to ensure that Narnia is returned to its rightful heir."]
 },
 {
   name: "The Avengers",
   title: "The Avengers: Some assembly required.",
   content: ["When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!"]
 },
 {
   name: "Pirates of the Caribbean: On Stranger Tides",
   title: "Pirates of the Caribbean: On Stranger Tides Live Forever Or Die Trying.",
   content: ["Captain Jack Sparrow crosses paths with a woman from his past, and he's not sure if it's love -- or if she's a ruthless con artist who's using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Anne's Revenge, the ship of the formidable pirate Blackbeard, Jack finds himself on an unexpected adventure in which he doesn't know who to fear more: Blackbeard or the woman from his past."]
 },
 {
   name: "Men in Black 3",
   title: "Men in Black 3: They are back... in time.",
   content: ["Agents J (Will Smith) and K (Tommy Lee Jones) are back...in time. J has seen some inexplicable things in his 15 years with the Men in Black, but nothing, not even aliens, perplexes him as much as his wry, reticent partner. But when K's life and the fate of the planet are put at stake, Agent J will have to travel back in time to put things right. J discovers that there are secrets to the universe that K never told him - secrets that will reveal themselves as he teams up with the young Agent K (Josh Brolin) to save his partner, the agency, and the future of humankind."]
 },
 {
   name: "The Hobbit: The Battle of the Five Armies",
   title: "The Hobbit: The Battle of the Five Armies Witness the defining chapter of the Middle-Earth saga",
   content: ["Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands."]
 },
 {
   name: "The Amazing Spider-Man",
   title: "The Amazing Spider-Man: The untold story begins.",
   content: ["Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance â€“ leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero."]
 },
 {
   name: "Robin Hood",
   title: "Robin Hood: Rise and rise again, until lambs become lions.",
   content: ["When soldier Robin happens upon the dying Robert of Loxley, he promises to return the man's sword to his family in Nottingham. There, he assumes Robert's identity; romances his widow, Marion; and draws the ire of the town's sheriff and King John's henchman, Godfrey."]
 },
 {
   name: "The Hobbit: The Desolation of Smaug",
   title: "The Hobbit: The Desolation of Smaug Beyond darkness... beyond desolation... lies the greatest danger of all.",
   content: ["The Dwarves, Bilbo and Gandalf have successfully escaped the Misty Mountains, and Bilbo has gained the One Ring. They all continue their journey to get their gold back from the Dragon, Smaug."]
 },
 {
   name: "The Golden Compass",
   title: "The Golden Compass: There are worlds beyond our own - the compass will show the way.",
   content: ["After overhearing a shocking secret, precocious orphan Lyra Belacqua trades her carefree existence roaming the halls of Jordan College for an otherworldly adventure in the far North, unaware that it's part of her destiny."]
 },
 {
   name: "King Kong",
   title: "King Kong: The eighth wonder of the world.",
   content: ["In 1933 New York, an overly ambitious movie producer coerces his cast and hired ship crew to travel to mysterious Skull Island, where they encounter Kong, a giant ape who is immediately smitten with the leading lady."]
 },
 {
   name: "Titanic",
   title: "Titanic: Nothing on Earth could come between them.",
   content: ["84 years later, a 101-year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancÃ©, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning."]
 },
 {
   name: "Captain America: Civil War",
   title: "Captain America: Civil War Divided We Fall",
   content: ["Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies."]
 },
 {
   name: "Battleship",
   title: "Battleship: The Battle for Earth Begins at Sea",
   content: ["When mankind beams a radio signal into space, a reply comes from â€˜Planet Gâ€™, in the form of several alien crafts that splash down in the waters off Hawaii. Lieutenant Alex Hopper is a weapons officer assigned to the USS John Paul Jones, part of an international naval coalition which becomes the world's last hope for survival as they engage the hostile alien force of unimaginable strength. While taking on the invaders, Hopper must also try to live up to the potential his brother, and his fiancÃ©e's father, Admiral Shane, expect of him."]
 },
 {
   name: "Jurassic World",
   title: "Jurassic World: The park is open.",
   content: ["Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond."]
 },
 {
   name: "Skyfall",
   title: "Skyfall: Think on your sins.",
   content: ["When Bond's latest assignment goes gravely wrong and agents around the world are exposed, MI6 is attacked forcing M to relocate the agency. These events cause her authority and position to be challenged by Gareth Mallory, the new Chairman of the Intelligence and Security Committee. With MI6 now compromised from both inside and out, M is left with one ally she can trust: Bond. 007 takes to the shadows - aided only by field agent, Eve - following a trail to the mysterious Silva, whose lethal and hidden motives have yet to reveal themselves."]
 },
 {
   name: "Spider-Man 2",
   title: "There's a hero in all of us.",
   content: ["Peter Parker is going through a major identity crisis. Burned out from being Spider-Man, he decides to shelve his superhero alter ego, which leaves the city suffering in the wake of carnage left by the evil Doc Ock. In the meantime, Parker still can't act on his feelings for Mary Jane Watson, a girl he's loved since childhood."]
 },
 {
   name: "Iron Man 3",
   title: "Iron Man 3: Unleash the power behind the armor.",
   content: ["When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution."]
 },
 {
   name: "Alice in Wonderland",
   title: "Alice in Wonderland: You're invited to a very important date.",
   content: ["Alice, an unpretentious and individual 19-year-old, is betrothed to a dunce of an English nobleman. At her engagement party, she escapes the crowd to consider whether to go through with the marriage and falls down a hole in the garden after spotting an unusual rabbit. Arriving in a strange and surreal place called 'Underland,' she finds herself in a world that resembles the nightmares she had as a child, filled with talking animals, villainous queens and knights, and frumious bandersnatches. Alice realizes that she is there for a reason â€“ to conquer the horrific Jabberwocky and restore the rightful queen to her throne."]
 },
 {
   name: "X-Men: The Last Stand",
   title: "X-Men: The Last Stand: Take a Stand",
   content: ["When a cure is found to treat mutations, lines are drawn amongst the X-Men and The Brotherhood, a band of powerful mutants organized under Xavier's former ally, Magneto."]
 },
 {
   name: "Monsters University",
   title: "Monsters University: School never looked this scary.",
   content: ["A look at the relationship between Mike and Sulley during their days at Monsters University â€” when they weren't necessarily the best of friends."]
 },
 {
   name: "Transformers: Revenge of the Fallen",
   title: "Transformers: Revenge of the Fallen Revenge is coming.",
   content: ["Sam Witwicky leaves the Autobots behind for a normal life. But when his mind is filled with cryptic symbols, the Decepticons target him and he is dragged back into the Transformers' war."]
 },
 {
   name: "Transformers: Age of Extinction",
   title: "Transformers: Age of Extinction This is not war. It's extinction.",
   content: ["As humanity picks up the pieces, following the conclusion of \"Transformers: Dark of the Moon,\" Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs."]
 },
 {
   name: "Oz: The Great and Powerful",
   title: "Oz: The Great and Powerful In Oz, nothing is what it seems",
   content: ["Oscar Diggs, a small-time circus illusionist and con-artist, is whisked from Kansas to the Land of Oz where the inhabitants assume he's the great wizard of prophecy, there to save Oz from the clutches of evil."]
 },
 {
   name: "The Amazing Spider-Man 2",
   title: "The Amazing Spider-Man 2: No more secrets.",
   content: ["For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwenâ€™s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past."]
 },
 {
   name: "TRON: Legacy",
   title: "TRON: Legacy The Game Has Changed.",
   content: ["Sam Flynn, the tech-savvy and daring son of Kevin Flynn, investigates his father's disappearance and is pulled into The Grid. With the help of a mysterious program named Quorra, Sam quests to stop evil dictator Clu from crossing into the real world."]
 },
 {
   name: "Cars 2",
   title: "Cars 2: Ka-ciao!",
   content: ["Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix race. But the road to the championship becomes rocky as Mater gets caught up in an intriguing adventure of his own: international espionage."]
 },
 {
   name: "Green Lantern",
   title: "Green Lantern: In our darkest hour, there will be light.",
   content: ["For centuries, a small but powerful force of warriors called the Green Lantern Corps has sworn to keep intergalactic order. Each Green Lantern wears a ring that grants him superpowers. But when a new enemy called Parallax threatens to destroy the balance of power in the Universe, their fate and the fate of Earth lie in the hands of the first human ever recruited."]
 },
 {
   name: "Toy Story 3",
   title: "Toy Story 3: No toy gets left behind.",
   content: ["Woody, Buzz, and the rest of Andy's toys haven't been played with in years. With Andy about to go to college, the gang find themselves accidentally left at a nefarious day care center. The toys must band together to escape and return home to Andy."]
 },
 {
   name: "Terminator Salvation",
   title: "Terminator Salvation: The End Begins.",
   content: ["All grown up in post-apocalyptic 2018, John Connor must lead the resistance of humans against the increasingly dominating militaristic robots. But when Marcus Wright appears, his existence confuses the mission as Connor tries to determine whether Wright has come from the future or the past -- and whether he's friend or foe."]
 },
 {
   name: "Furious 7",
   title: "Furious 7: Vengeance Hits Home",
   content: ["Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother."]
 },
 {
   name: "World War Z",
   title: "World War Z: Remember Philly!",
   content: ["Life for former United Nations investigator Gerry Lane and his family seems content. Suddenly, the world is plagued by a mysterious infection turning whole human populations into rampaging mindless zombies. After barely escaping the chaos, Lane is persuaded to go on a mission to investigate this disease. What follows is a perilous trek around the world where Lane must brave horrific dangers and long odds to find answers before human civilization falls."]
 },
 {
   name: "X-Men: Days of Future Past",
   title: "X-Men: Days of Future Past To save the future, they must alter the past",
   content: ["The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past â€“ to save our future."]
 },
 {
   name: "Star Trek Into Darkness",
   title: "Star Trek Into Darkness Earth Will Fall",
   content: ["When the crew of the Enterprise is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for, leaving our world in a state of crisis.  With a personal score to settle, Captain Kirk leads a manhunt to a war-zone world to capture a one man weapon of mass destruction. As our heroes are propelled into an epic chess game of life and death, love will be challenged, friendships will be torn apart, and sacrifices must be made for the only family Kirk has left: his crew."]
 },
 {
   name: "Jack the Giant Slayer",
   title: "Jack the Giant Slayer: Prepare for a giant adventure",
   content: ["The story of an ancient war that is reignited when a young farmhand unwittingly opens a gateway between our world and a fearsome race of giants. Unleashed on the Earth for the first time in centuries, the giants strive to reclaim the land they once lost, forcing the young man, Jack into the battle of his life to stop them. Fighting for a kingdom, its people, and the love of a brave princess, he comes face to face with the unstoppable warriors he thought only existed in legendâ€“and gets the chance to become a legend himself."]
 },
 {
   name: "The Great Gatsby",
   title: "The Great Gatsby: Reserving judgments is a matter of infinite hope... I come to the admission that it has a limit.",
   content: ["An adaptation of F. Scott Fitzgerald's Long Island-set novel, where Midwesterner Nick Carraway is lured into the lavish world of his neighbor, Jay Gatsby. Soon enough, however, Carraway will see through the cracks of Gatsby's nouveau riche existence, where obsession, madness, and tragedy await."]
 },
 {
   name: "Prince of Persia: The Sands of Time",
   title: "Prince of Persia: The Sands of Time Defy the Future",
   content: ["A rogue prince reluctantly joins forces with a mysterious princess and together, they race against dark forces to safeguard an ancient dagger capable of releasing the Sands of Time â€“ gift from the gods that can reverse time and allow its possessor to rule the world."]
 },
 {
   name: "Pacific Rim",
   title: "Pacific Rim: To Fight Monsters, We Created Monsters",
   content: ["When legions of monstrous creatures, known as Kaiju, started rising from the sea, a war began that would take millions of lives and consume humanity's resources for years on end. To combat the giant Kaiju, a special type of weapon was devised: massive robots, called Jaegers, which are controlled simultaneously by two pilots whose minds are locked in a neural bridge. But even the Jaegers are proving nearly defenseless in the face of the relentless Kaiju. On the verge of defeat, the forces defending mankind have no choice but to turn to two unlikely heroesâ€”a washed-up former pilot (Charlie Hunnam) and an untested trainee (Rinko Kikuchi)â€”who are teamed to drive a legendary but seemingly obsolete Jaeger from the past. Together, they stand as mankind's last hope against the mounting apocalypse."]
 },
 {
   name: "Transformers: Dark of the Moon",
   title: "Transformers: Dark of the Moon The invasion we always feared. An enemy we never expected.",
   content: ["Sam Witwicky takes his first tenuous steps into adulthood while remaining a reluctant human ally of Autobot-leader Optimus Prime. The film centers around the space race between the USSR and the USA, suggesting there was a hidden Transformers role in it all that remains one of the planet's most dangerous secrets."]
 },
 {
   name: "Indiana Jones and the Kingdom of the Crystal Skull",
   title: "Indiana Jones and the Kingdom of the Crystal Skull The adventure continues . . .",
   content: ["Set during the Cold War, the Soviets â€“ led by sword-wielding Irina Spalko â€“ are in search of a crystal skull which has supernatural powers related to a mystical Lost City of Gold. After being captured and then escaping from them, Indy is coerced to head to Peru at the behest of a young man whose friend â€“ and Indy's colleague â€“ Professor Oxley has been captured for his knowledge of the skull's whereabouts."]
 },
 {
   name: "The Good Dinosaur",
   title: "The Good Dinosaur: Little Arms With Big Attitude",
   content: ["An epic journey into the world of dinosaurs where an Apatosaurus named Arlo makes an unlikely human friend."]
 },
 {
   name: "Brave",
   title: "Brave: Change your fate.",
   content: ["Brave is set in the mystical Scottish Highlands, where MÃ©rida is the princess of a kingdom ruled by King Fergus and Queen Elinor. An unruly daughter and an accomplished archer, MÃ©rida one day defies a sacred custom of the land and inadvertently brings turmoil to the kingdom. In an attempt to set things right, MÃ©rida seeks out an eccentric old Wise Woman and is granted an ill-fated wish. Also figuring into MÃ©ridaâ€™s quest â€” and serving as comic relief â€” are the kingdomâ€™s three lords: the enormous Lord MacGuffin, the surly Lord Macintosh, and the disagreeable Lord Dingwall."]
 },
 {
   name: "Star Trek Beyond",
   title: "Star Trek Beyond",
   content: ["The USS Enterprise crew explores the furthest reaches of uncharted space, where they encounter a mysterious new enemy who puts them and everything the Federation stands for to the test."]
 },
 {
   name: "WALLÂ·E",
   title: "WALLÂ·E: An adventure beyond the ordinar-E.",
   content: ["WALLÂ·E is the last robot left on an Earth that has been overrun with garbage and all humans have fled to outer space. For 700 years he has continued to try and clean up the mess, but has developed some rather interesting human-like qualities. When a ship arrives with a sleek new type of robot, WALLÂ·E thinks he's finally found a friend and stows away on the ship when it leaves."]
 },
 {
   name: "Rush Hour 3",
   title: "Rush Hour 3: The Rush Is On!",
   content: ["After an attempted assassination on Ambassador Han, Inspector Lee and Detective Carter are back in action as they head to Paris to protect a French woman with knowledge of the Triads' secret leaders. Lee also holds secret meetings with a United Nations authority, but his personal struggles with a Chinese criminal mastermind named Kenji, which reveals that it's Lee's long-lost...brother."]
 },
 {
   name: 2012,
   title: "2012: We Were Warned.",
   content: ["Dr. Adrian Helmsley, part of a worldwide geophysical team investigating the effect on the earth of radiation from unprecedented solar storms, learns that the earth's core is heating up. He warns U.S. President Thomas Wilson that the crust of the earth is becoming unstable and that without proper preparations for saving a fraction of the world's population, the entire race is doomed. Meanwhile, writer Jackson Curtis stumbles on the same information. While the world's leaders race to build \"arks\" to escape the impending cataclysm, Curtis struggles to find a way to save his family. Meanwhile, volcanic eruptions and earthquakes of unprecedented strength wreak havoc around the world."]
 },
 {
   name: "A Christmas Carol",
   title: "A Christmas Carol: Season's Greedings",
   content: ["Miser Ebenezer Scrooge is awakened on Christmas Eve by spirits who reveal to him his own miserable existence, what opportunities he wasted in his youth, his current cruelties, and the dire fate that awaits him if he does not change his ways. Scrooge is faced with his own story of growing bitterness and meanness, and must decide what his own future will hold: death or redemption."]
 },
 {
   name: "Jupiter Ascending",
   title: "Jupiter Ascending: Expand your universe.",
   content: ["In a universe where human genetic material is the most precious commodity, an impoverished young Earth woman becomes the key to strategic maneuvers and internal strife within a powerful dynastyâ€¦"]
 },
 {
   name: "The Legend of Tarzan",
   title: "The Legend of Tarzan: Human. Nature.",
   content: ["Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment."]
 },
 {
   name: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
   title: "The Chronicles of Narnia: Evil Has Reigned For 100 Years...",
   content: ["Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, the they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever."]
 },
 {
   name: "X-Men: Apocalypse",
   title: "X-Men: Apocalypse Only the strong will survive",
   content: ["After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan."]
 },
 {
   name: "The Dark Knight",
   title: "The Dark Knight: Why So Serious?",
   content: ["Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker."]
 },
 {
   name: "Up",
   title: "Up",
   content: ["Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life."]
 },
 {
   name: "Monsters vs Aliens",
   title: "Monsters vs Aliens: When aliens attack, monsters fight back.",
   content: ["When Susan Murphy is unwittingly clobbered by a meteor full of outer space gunk on her wedding day, she mysteriously grows to 49-feet-11-inches. The military jumps into action and captures Susan, secreting her away to a covert government compound. She is renamed Ginormica and placed in confinement with a ragtag group of Monsters..."]
 },
 {
   name: "Iron Man",
   title: "Iron Man: Heroes aren't born. They're built.",
   content: ["After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."]
 },
 {
   name: "Hugo",
   title: "Hugo: One of the most legendary directors of our time takes you on an extraordinary adventure.",
   content: ["Hugo is an orphan boy living in the walls of a train station in 1930s Paris. He learned to fix clocks and other gadgets from his father and uncle which he puts to use keeping the train station clocks running. The only thing that he has left that connects him to his dead father is an automaton (mechanical man) that doesn't work without a special key which Hugo needs to find to unlock the secret he believes it contains. On his adventures, he meets with a shopkeeper, George Melies, who works in the train station and his adventure-seeking god-daughter. Hugo finds that they have a surprising connection to his father and the automaton, and he discovers it unlocks some memories the old man has buried inside regarding his past."]
 },
 {
   name: "Wild Wild West",
   title: "Wild Wild West: It's a whole new west.",
   content: ["Legless Southern inventor Dr. Arliss Loveless plans to rekindle the Civil War by assassinating President U.S. Grant. Only two men can stop him: gunfighter James West and master-of-disguise and inventor Artemus Gordon. The two must team up to thwart Loveless' plans."]
 },
 {
   name: "The Mummy: Tomb of the Dragon Emperor",
   title: "The Mummy: A New Evil Awakens.",
   content: ["Archaeologist Rick O'Connell travels to China, pitting him against an emperor from the 2,000-year-old Han dynasty who's returned from the dead to pursue a quest for world domination. This time, O'Connell enlists the help of his wife and son to quash the so-called 'Dragon Emperor' and his abuse of supernatural power."]
 },
 {
   name: "Suicide Squad",
   title: "Suicide Squad: Worst Heroes Ever",
   content: ["From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences."]
 },
 {
   name: "Edge of Tomorrow",
   title: "Edge of Tomorrow: Live, Die, Repeat",
   content: ["Major Bill Cage is an officer who has never seen a day of combat when he is unceremoniously demoted and dropped into combat. Cage is killed within minutes, managing to take an alpha alien down with him. He awakens back at the beginning of the same day and is forced to fight and die again... and again - as physical contact with the alien has thrown him into a time loop."]
 },
 {
   name: "Waterworld",
   title: "Waterworld: Beyond the horizon lies the secret to a new beginning.",
   content: ["In a futuristic world where the polar ice caps have melted and made Earth a liquid planet, a beautiful barmaid rescues a mutant seafarer from a floating island prison. They escape, along with her young charge, Enola, and sail off aboard his ship. But the trio soon becomes the target of a menacing pirate who covets the map to 'Dryland' â€“ which is tattooed on Enola's back."]
 },
 {
   name: "G.I. Joe: The Rise of Cobra",
   title: "G.I. Joe: When all else fails, they don't.",
   content: ["From the Egyptian desert to deep below the polar ice caps, the elite G.I. JOE team uses the latest in next-generation spy and military equipment to fight the corrupt arms dealer Destro and the growing threat of the mysterious Cobra organization to prevent them from plunging the world into chaos."]
 },
 {
   name: "Inside Out",
   title: "Inside Out: Meet the little voices inside your head.",
   content: ["Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Like all of us, Riley is guided by her emotions - Joy, Fear, Anger, Disgust and Sadness. The emotions live in Headquarters, the control center inside Riley's mind, where they help advise her through everyday life. As Riley and her emotions struggle to adjust to a new life in San Francisco, turmoil ensues in Headquarters. Although Joy, Riley's main and most important emotion, tries to keep things positive, the emotions conflict on how best to navigate a new city, house and school."]
 },
 {
   name: "The Jungle Book",
   title: "The Jungle Book",
   content: ["After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named Mowgli embarks on a journey of self discovery with the help of panther, Bagheera, and free spirited bear, Baloo."]
 },
 {
   name: "Iron Man 2",
   title: "Iron Man 2: It's not the armor that makes the hero, but the man inside.",
   content: ["With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James 'Rhodey' Rhodes at his side, must forge new alliances â€“ and confront powerful enemies."]
 },
 {
   name: "Snow White and the Huntsman",
   title: "Snow White and the Huntsman: The Fairytale is Over",
   content: ["After the Evil Queen marries the King, she performs a violent coup in which the King is murdered and his daughter, Snow White, is taken captive. Almost a decade later, a grown Snow White is still in the clutches of the Queen. In order to obtain immortality, The Evil Queen needs the heart of Snow White. After Snow escapes the castle, the Queen sends the Huntsman to find her in the Dark Forest."]
 },
 {
   name: "Maleficent",
   title: "Maleficent: Don't believe the fairy tale.",
   content: ["The untold story of Disney's most iconic villain from the 1959 classic 'Sleeping Beauty'. A beautiful, pure-hearted young woman, Maleficent has an idyllic life growing up in a peaceable forest kingdom, until one day when an invading army threatens the harmony of the land.  Maleficent rises to be the land's fiercest protector, but she ultimately suffers a ruthless betrayal â€“ an act that begins to turn her heart into stone. Bent on revenge, Maleficent faces an epic battle with the invading King's successor and, as a result, places a curse upon his newborn infant Aurora. As the child grows, Maleficent realizes that Aurora holds the key to peace in the kingdom - and to Maleficent's true happiness as well."]
 },
 {
   name: "Dawn of the Planet of the Apes",
   title: "Dawn of the Planet of the Apes: One last chance for peace.",
   content: "A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes."
 },
 {
   name: "The Lovers",
   title: "The Lovers: Love is longer than life.",
   content: ["The Lovers is an epic romance time travel adventure film. Helmed by Roland JoffÃ© from a story by Ajey Jhankar, the film is a sweeping tale of an impossible love set against the backdrop of the first Anglo-Maratha war across two time periods and continents and centred around four characters â€” a British officer in 18th century colonial India, the Indian woman he falls deeply in love with, an American present-day marine biologist and his wife."]
 },
 {
   name: "47 Ronin",
   title: "47 Ronin: For courage. For loyalty. For honor.",
   content: ["Based on the original 1941 movie from Japan, and from ancient Japanâ€™s most enduring tale, the epic 3D fantasy-adventure 47 Ronin is born.  Keanu Reeves leads the cast as Kai, an outcast who joins Oishi (Hiroyuki Sanada), the leader of the 47 outcast samurai.  Together they seek vengeance upon the treacherous overlord who killed their master and banished their kind.  To restore honor to their homeland, the warriors embark upon a quest that challenges them with a series of trials that would destroy ordinary warriors."]
 },
 {
   name: "Captain America: The Winter Soldier",
   title: "Captain America: In heroes we trust.",
   content: ["After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemyâ€”the Winter Soldier."]
 },
 {
   name: "Shrek Forever After",
   title: "Shrek Forever After: It ain't Ogre... Til it's Ogre",
   content: ["A bored and domesticated Shrek pacts with deal-maker Rumpelstiltskin to get back to feeling like a real ogre again, but when he's duped and sent to a twisted version of Far Far Awayâ€”where Rumpelstiltskin is king, ogres are hunted, and he and Fiona have never metâ€”he sets out to restore his world and reclaim his true love."]
 },
 {
   name: "Tomorrowland",
   title: "Tomorrowland: Imagine a world where nothing is impossible.",
   content: ["Bound by a shared destiny, a bright, optimistic teen bursting with scientific curiosity and a former boy-genius inventor jaded by disillusionment embark on a danger-filled mission to unearth the secrets of an enigmatic place somewhere in time and space that exists in their collective memory as \"Tomorrowland."]
 },
 {
   name: "Big Hero 6",
   title: "Big Hero 6: From the creators of Wreck-it Ralph and Frozen",
   content: ["The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes."]
 },
 {
   name: "Wreck-It Ralph",
   title: "Wreck-It Ralph: The story of a regular guy just looking for a little wreck-ognition.",
   content: ["Wreck-It Ralph is the 9-foot-tall, 643-pound villain of an arcade video game named Fix-It Felix Jr., in which the game's titular hero fixes buildings that Ralph destroys. Wanting to prove he can be a good guy and not just a villain, Ralph escapes his game and lands in Hero's Duty, a first-person shooter where he helps the game's hero battle against alien invaders. He later enters Sugar Rush, a kart racing game set on tracks made of candies, cookies and other sweets. There, Ralph meets Vanellope von Schweetz who has learned that her game is faced with a dire threat that could affect the entire arcade, and one that Ralph may have inadvertently started."]
 },
 {
   name: "The Polar Express",
   title: "The Polar Express: This holiday season... believe.",
   content: ["When a doubting young boy takes an extraordinary train ride to the North Pole, he embarks on a journey of self-discovery that shows him that the wonder of life never fades for those who believe."]
 },
 {
   name: "Independence Day: Resurgence",
   title: "Independence Day: We had twenty years to prepare. So did they.",
   content: ["We always knew they were coming back. Using recovered alien technology, the nations of Earth have collaborated on an immense defense program to protect the planet. But nothing can prepare us for the aliensâ€™ advanced and unprecedented force. Only the ingenuity of a few brave men and women can bring our world back from the brink of extinction."]
 },
 {
   name: "How to Train Your Dragon",
   title: "How to Train Your Dragon: One adventure will change two worlds",
   content: ["As the son of a Viking leader on the cusp of manhood, shy Hiccup Horrendous Haddock III faces a rite of passage: he must kill a dragon to prove his warrior mettle. But after downing a feared dragon, he realizes that he no longer wants to destroy it, and instead befriends the beast â€“ which he names Toothless â€“ much to the chagrin of his warrior father"]
 },
 {
   name: "Terminator 3: Rise of the Machines",
   title: "Terminator 3: The Machines Will Rise.",
   content: ["It's been 10 years since John Connor saved Earth from Judgment Day, and he's now living under the radar, steering clear of using anything Skynet can trace. That is, until he encounters T-X, a robotic assassin ordered to finish what T-1000 started. Good thing Connor's former nemesis, the Terminator, is back to aid the now-adult Connor â€¦ just like he promised."]
 },
 {
   name: "Guardians of the Galaxy",
   title: "Guardians of the Galaxy: All heroes start somewhere.",
   content: ["Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser."]
 },
 {
   name: "Interstellar",
   title: "Interstellar: Mankind was born on Earth. It was never meant to die here.",
   content: ["Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage."]
 },
 {
   name: "Inception",
   title: "Inception: Your mind is the scene of the crime.",
   content: ["Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious."]
 },
 {
   name: "The Hobbit: An Unexpected Journey",
   title: "The Hobbit: From the smallest beginnings come the greatest legends.",
   content: ["Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest by Gandalf the Grey and thirteen dwarves who seek to reclaim their mountain home from Smaug, the dragon."]
 },
 {
   name: "The Fast and the Furious",
   title: "The Fast and the Furious: Live life 1/4 mile at a time.",
   content: ["Domenic Toretto is a Los Angeles street racer suspected of masterminding a series of big-rig hijackings. When undercover cop Brian O'Conner infiltrates Toretto's iconoclastic crew, he falls for Toretto's sister and must choose a side: the gang or the LAPD."]
 },
 {
   name: "The Curious Case of Benjamin Button",
   title: "The Curious Case of Benjamin Button: Life isn't measured in minutes, but in moments.",
   content: ["Tells the story of Benjamin Button, a man who starts aging backwards with bizarre consequences."]
 },
 {
   name: "X-Men: First Class",
   title: "X-Men: Witness the moment that will change our world.",
   content: ["Before Charles Xavier and Erik Lensherr took the names Professor X and Magneto, they were two young men discovering their powers for the first time. Before they were arch-enemies, they were closest of friends, working together with other mutants (some familiar, some new), to stop the greatest threat the world has ever known."]
 },
 {
   name: "The Hunger Games: Mockingjay - Part 2",
   title: "The Hunger Games: Mockingjay - Part 2 The fire will burn forever.",
   content: ["With the nation of Panem in a full scale war, Katniss confronts President Snow in the final showdown. Teamed with a group of her closest friends â€“ including Gale, Finnick, and Peeta â€“ Katniss goes off on a mission with the unit from District 13 as they risk their lives to stage an assassination attempt on President Snow who has become increasingly obsessed with destroying her. The mortal traps, enemies, and moral choices that await Katniss will challenge her more than any arena she faced in The Hunger Games."]
 },
 {
   name: "The Sorcerer's Apprentice",
   title: "The Sorcerer's Apprentice: It's The Coolest Job Ever.",
   content: ["Balthazar Blake is a master sorcerer in modern-day Manhattan trying to defend the city from his arch-nemesis, Maxim Horvath. Balthazar can't do it alone, so he recruits Dave Stutler, a seemingly average guy who demonstrates hidden potential, as his reluctant protÃ©gÃ©. The sorcerer gives his unwilling accomplice a crash course in the art and science of magic, and together, these unlikely partners work to stop the forces of darkness."]
 },
 {
   name: "Alice Through the Looking Glass",
   title: "Alice Through the Looking Glass: It's time for a little madness.",
   content: ["In the sequel to Tim Burton's \"Alice in Wonderland\", Alice Kingsleigh returns to Underland and faces a new adventure in saving the Mad Hatter."]
 },
 {
   name: "Shrek the Third",
   title: "Shrek the Third: Who's ready for Thirds?",
   content: ["The King of Far Far Away has died and Shrek and Fiona are to become King &amp; Queen. However, Shrek wants to return to his cozy swamp and live in peace and quiet, so when he finds out there is another heir to the throne, they set off to bring him back to rule the kingdom."]
 },
 {
   name: "Warcraft",
   title: "Warcraft: Two worlds. One home.",
   content: ["The peaceful realm of Azeroth stands on the brink of war as its civilization faces a fearsome race of invaders: orc warriors fleeing their dying home to colonize another. As a portal opens to connect the two worlds, one army faces destruction and the other faces extinction. From opposing sides, two heroes are set on a collision course that will decide the fate of their family, their people, and their home."]
 },
 {
   name: "Terminator Genisys",
   title: "Terminator Genisys: Reset the future",
   content: ["The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever."]
 },
 {
   name: "Pearl Harbor",
   title: "Pearl Harbor: It takes a moment to change history. It takes love to change lives.",
   content: ["The lifelong friendship between Rafe McCawley and Danny Walker is put to the ultimate test when the two ace fighter pilots become entangled in a love triangle with beautiful Naval nurse Evelyn Johnson. But the rivalry between the friends-turned-foes is immediately put on hold when they find themselves at the center of Japan's devastating attack on Pearl Harbor on Dec. 7, 1941."]
 },
 {
   name: "Transformers",
   title: "Transformers: Their war. Our world.",
   content: ["Young teenager, Sam Witwicky becomes involved in the ancient struggle between two extraterrestrial factions of transforming robots â€“ the heroic Autobots and the evil Decepticons. Sam holds the clue to unimaginable power and the Decepticons will stop at nothing to retrieve it."]
 },
 {
   name: "Alexander",
   title: "Alexander: The greatest legend of all was real.",
   content: ["Alexander, the King of Macedonia, leads his legions against the giant Persian Empire. After defeating the Persians, he leads his army across the then known world, venturing farther than any westerner had ever gone, all the way to India."]
 },
 {
   name: "Harry Potter and the Order of the Phoenix",
   title: "Harry Potter and the Order of the Phoenix: Evil Must Be Confronted.",
   content: ["Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students â€“ dubbed 'Dumbledore's Army' â€“ to defend themselves against the dark arts."]
 },
 {
   name: "Harry Potter and the Goblet of Fire",
   title: "Harry Potter and the Goblet of Fire: Dark And Difficult Times Lie Ahead.",
   content: ["Harry starts his fourth year at Hogwarts, competes in the treacherous Triwizard Tournament and faces the evil Lord Voldemort. Ron and Hermione help Harry manage the pressure â€“ but Voldemort lurks, awaiting his chance to destroy Harry and all that he stands for."]
 },
 {
   name: "Hancock",
   title: "Hancock: Bad Behavior. Bad Attitude. Real Hero.",
   content: ["Hancock is a down-and-out superhero who's forced to employ a PR expert to help repair his image when the public grows weary of all the damage he's inflicted during his lifesaving heroics. The agent's idea of imprisoning the antihero to make the world miss him proves successful, but will Hancock stick to his new sense of purpose or slip back into old habits?"]
 },
 {
   name: "I Am Legend",
   title: "I Am Legend: The last man on Earth is not alone",
   content: ["Robert Neville is a scientist who was unable to stop the spread of the terrible virus that was incurable and man-made. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world. For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone."]
 },
 {
   name: "Charlie and the Chocolate Factory",
   title: "Charlie and the Chocolate Factory: Willy Wonka is semi-sweet and nuts.",
   content: ["A young boy wins a tour through the most magnificent chocolate factory in the world, led by the world's most unusual candy maker."]
 },
 {
   name: "Ratatouille",
   title: "Ratatouille: He's dying to become a chef.",
   content: ["A rat named Remy dreams of becoming a great French chef despite his family's wishes and the obvious problem of being a rat in a decidedly rodent-phobic profession. When fate places Remy in the sewers of Paris, he finds himself ideally situated beneath a restaurant made famous by his culinary hero, Auguste Gusteau. Despite the apparent dangers of being an unlikely - and certainly unwanted - visitor in the kitchen of a fine French restaurant, Remy's passion for cooking soon sets into motion a hilarious and exciting rat race that turns the culinary world of Paris upside down."]
 },
 {
   name: "Batman Begins",
   title: "Batman Begins: Evil fears the knight.",
   content: ["Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman."]
 },
 {
   name: "Madagascar: Escape 2 Africa",
   title: "Madagascar: Escape 2 Africa Still together. Still lost!",
   content: ["Alex, Marty, Melman, Gloria, King Julien, Maurice, the penguins and the chimps are back and still marooned on Madagascar. In the face of this obstacle, the New Yorkers have hatched a plan so crazy it just might work. With military precision, the penguins have repaired an old crashed plane... sort of."]
 },
 {
   name: "Night at the Museum: Battle of the Smithsonian",
   title: "Night at the Museum: Battle of the Smithsonian When the lights go off the battle is on.",
   content: ["Hapless museum night watchman Larry Daley must help his living, breathing exhibit friends out of a pickle now that they've been transferred to the archives at the Smithsonian Institution. Larry's (mis)adventures this time include close encounters with Amelia Earhart, Abe Lincoln and Ivan the Terrible."]
 },
 {
   name: "X-Men Origins: Wolverine",
   title: "X-Men Origins: Wolverine Witness the Origin.",
   content: ["After seeking to live a normal life, Logan sets out to avenge the death of his girlfriend by undergoing the mutant Weapon X program and becoming Wolverine."]
 },
 {
   name: "The Matrix Revolutions",
   title: "The Matrix Revolutions: Everything that has a beginning has an end.",
   content: ["The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith."]
 },
 {
   name: "Frozen",
   title: "Frozen: Only the act of true love will thaw a frozen heart.",
   content: ["Young princess Anna of Arendelle dreams about finding true love at her sister Elsaâ€™s coronation. Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom. She's accompanied by ice delivery man Kristoff, his reindeer Sven, and snowman Olaf. On an adventure where she will find out what friendship, courage, family, and true love really means."]
 },
 {
   name: "The Matrix Reloaded",
   title: "The Matrix Reloaded: Free your mind.",
   content: ["Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance.  Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition. But a nasty piece of news hits the human resistance: 250,000 machine sentinels are digging to Zion and would reach them in 72 hours. As Zion prepares for the ultimate war, Neo, Morpheus and Trinity are advised by the Oracle to find the Keymaker who would help them reach the Source.  Meanwhile Neo's recurrent dreams depicting Trinity's death have got him worried and as if it was not enough, Agent Smith has somehow escaped deletion, has become more powerful than before and has fixed Neo as his next target."]
 },
 {
   name: "Thor: The Dark World",
   title: "Thor: The Dark World Delve into the darkness",
   content: ["Thor fights to restore order across the cosmosâ€¦ but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all."]
 },
 {
   name: "Mad Max: Fury Road",
   title: "Mad Max: Fury Road What a Lovely Day.",
   content: ["An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland."]
 },
 {
   name: "Angels & Demons",
   title: "Angels & Demons",
   content: ["Harvard symbologist Robert Langdon investigates a mysterious symbol seared into the chest of a murdered physicist. He discovers evidence of the unimaginable, the rebirth of an ancient secret brotherhood known as the Illuminati, the most powerful underground organization ever to walk the earth."]
 },
 {
   name: "Thor",
   title: "Thor: Two worlds. One hero.",
   content: ["Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth."]
 },
 {
   name: "Bolt",
   title: "Bolt: Fully Awesome. Ridonculous. Let It Begin.",
   content: ["Bolt is the star of the biggest show in Hollywood. The only problem is, he thinks it's real. After he's accidentally shipped to New York City and separated from Penny, his beloved co-star and owner, Bolt must harness all his \"super powers\" to find a way home."]
 },
 {
   name: "G-Force",
   title: "G-Force: The world needs bigger heroes",
   content: ["A team of trained secret agent animals, guinea pigs Darwin, Juarez, Blaster, mole Speckles, and fly Mooch takes on a mission for the US government to stop evil Leonard Saber, who plans to destroy the world with household appliances. But the government shuts them down and they are sentenced to a pet shop. Can they escape to defeat the villain and save the world?"]
 },
 {
   name: "Wrath of the Titans",
   title: "Wrath of the Titans: Feel the Wrath",
   content: ["A decade after his heroic defeat of the monstrous Kraken, Perseus-the demigod son of Zeus-is attempting to live a quieter life as a village fisherman and the sole parent to his 10-year old son, Helius. Meanwhile, a struggle for supremacy rages between the gods and the Titans. Dangerously weakened by humanity's lack of devotion, the gods are losing control of the imprisoned Titans and their ferocious leader, Kronos, father of the long-ruling brothers Zeus, Hades and Poseidon."]
 },
 {
   name: "Dark Shadows",
   title: "Dark Shadows: Every Family Has Its Demons",
   content: ["Vampire Barnabas Collins is inadvertently freed from his tomb and emerges into the very changed world of 1972. He returns to Collinwood Manor to find that his once-grand estate and family have fallen into ruin."]
 },
 {
   name: "Mission: Impossible - Rogue Nation",
   title: "Mission: Impossible - Rogue Nation Desperate Times. Desperate Measures.",
   content: ["Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF."]
 },
 {
   name: "The Wolfman",
   title: "The Wolfman: When the moon is full the legend comes to life",
   content: ["Lawrence Talbot, an American man on a visit to Victorian London to make amends with his estranged father, gets bitten by a werewolf and, after a moonlight transformation, leaves him with a savage hunger for flesh."]
 },
 {
   name: "Bee Movie",
   title: "Bee Movie: Born to bee wild.",
   content: ["Barry B. Benson, a bee who has just graduated from college, is disillusioned at his lone career choice: making honey. On a special trip outside the hive, Barry's life is saved by Vanessa, a florist in New York City. As their relationship blossoms, he discovers humans actually eat honey, and subsequently decides to sue us."]
 },
 {
   name: "Kung Fu Panda 2",
   title: "Kung Fu Panda 2: Prepare for the Year of Awesomeness!",
   content: ["Po is now living his dream as The Dragon Warrior, protecting the Valley of Peace alongside his friends and fellow kung fu masters, The Furious Five - Tigress, Crane, Mantis, Viper and Monkey. But Poâ€™s new life of awesomeness is threatened by the emergence of a formidable villain, who plans to use a secret, unstoppable weapon to conquer China and destroy kung fu. It is up to Po and The Furious Five to journey across China to face this threat and vanquish it. But how can Po stop a weapon that can stop kung fu? He must look to his past and uncover the secrets of his mysterious origins; only then will he be able to unlock the strength he needs to succeed."]
 },
 {
   name: "The Last Airbender",
   title: "The Last Airbender: Four nations, one destiny",
   content: ["The story follows the adventures of Aang, a young successor to a long line of Avatars, who must put his childhood ways aside and stop the Fire Nation from enslaving the Water, Earth and Air nations."]
 },
 {
   name: "Mission: Impossible III",
   title: "Mission: Impossible III The Mission Begins 05:05:06.",
   content: ["Retired from active duty to train new IMF agents, Ethan Hunt is called back into action to confront sadistic arms dealer, Owen Davian. Hunt must try to protect his girlfriend while working with his new team to complete the mission."]
 },
 {
   name: "White House Down",
   title: "White House Down It will start like any other day.",
   content: ["Capitol Policeman John Cale has just been denied his dream job with the Secret Service of protecting President James Sawyer. Not wanting to let down his little girl with the news, he takes her on a tour of the White House, when the complex is overtaken by a heavily armed paramilitary group. Now, with the nation's government falling into chaos and time running out, it's up to Cale to save the president, his daughter, and the country."]
 },
 {
   name: "Mars Needs Moms",
   title: "Mars Needs Moms: Mom needs a little space.",
   content: ["When Martians suddenly abduct his mom, mischievous Milo rushes to the rescue and discovers why all moms are so special."]
 },
 {
   name: "Flushed Away",
   title: "Flushed Away: Someone's Going Down",
   content: ["London high-society mouse, Roddy is flushed down the toilet by Sid, a common sewer rat. Hang on for a madcap adventure deep in the sewer bowels of Ratropolis, where Roddy meets the resourceful Rita, the rodent-hating Toad and his faithful thugs, Spike and Whitey."]
 },
 {
   name: "Pan",
   title: "Pan: Every legend has a beginning.",
   content: ["Living a bleak existence at a London orphanage, 12-year-old Peter finds himself whisked away to the fantastical world of Neverland. Adventure awaits as he meets new friend James Hook and the warrior Tiger Lily. They must band together to save Neverland from the ruthless pirate Blackbeard. Along the way, the rebellious and mischievous boy discovers his true destiny, becoming the hero forever known as Peter Pan."]
 },
 {
   name: "Mr. Peabody & Sherman",
   title: "Mr. Peabody & Sherman: He's Leaving His Mark On History",
   content: ["A young boy and his dog, who happens to have a genius-level IQ, spring into action when their time-travel machine is stolen and moments in history begin to be changed."]
 },
 {
   name: "Troy",
   title: "Troy: For passion. For honor. For destiny. For victory. For love.",
   content: "In year 1250 B.C. during the late Bronze age, two emerging nations begin to clash. Paris, the Trojan prince, convinces Helen, Queen of Sparta, to leave her husband Menelaus, and sail with him back to Troy. After Menelaus finds out that his wife was taken by the Trojans, he asks his brother Agamemnom to help him get her back. Agamemnon sees this as an opportunity for power. So they set off with 1,000 ships holding 50,000 Greeks to Troy. With the help of Achilles, the Greeks are able to fight the never before defeated Trojans."
 },
 {
   name: "Madagascar 3: Europe's Most Wanted",
   title: "Madagascar 3: Europe's Most Wanted Six years ago, they disappeared without a trace. Next summer, they finally resurface.",
   content: ["Alex, Marty, Gloria and Melman are still trying to get back to the Big Apple and their beloved Central Park zoo, but first they need to find the penguins. When they travel to Monte Carlo, they attract the attention of Animal Control after gate crashing a party and are joined by the penguins, King Julian and Co., and the monkeys. How do a lion, zebra, hippo, giraffe, four penguins, two monkeys, three lemurs travel through Europe without attracting attention and get back to New York? They join a traveling circus. Their attempts to get back to New York are consistently hampered by the Captain of Animal Control who wants to make Alex part of her collection. Once they make it back to New York Marty, Alex, Gloria and Melman realize that they want to be part of the traveling circus."]
 },
 {
   name: "Die Another Day",
   title: "Die Another Day: Heâ€™s never been cooler.",
   content: ["Bond takes on a North Korean leader who undergoes DNA replacement procedures that allow him to assume different identities. American agent, Jinx Johnson assists Bond in his attempt to thwart the villain's plans to exploit a satellite that is powered by solar energy."]
 },
 {
   name: "Ghostbusters",
   title: "Ghostbusters: Who You Gonna Call?",
   content: ["Following a ghost invasion of Manhattan, paranormal enthusiasts Erin Gilbert and Abby Yates, nuclear engineer Jillian Holtzmann, and subway worker Patty Tolan band together to stop the otherworldly threat."]
 },
 {
   name: "Armageddon",
   title: "Armageddon: The Earth's Darkest Day Will Be Man's Finest Hour",
   content: ["When an asteroid threatens to collide with Earth, NASA honcho Dan Truman determines the only way to stop it is to drill into its surface and detonate a nuclear bomb. This leads him to renowned driller Harry Stamper, who agrees to helm the dangerous space mission provided he can bring along his own hotshot crew. Among them is the cocksure A.J. who Harry thinks isn't good enough for his daughter, until the mission proves otherwise."]
 },
 {
   name: "Men in Black II",
   title: "Men in Black II: Same Planet. New Scum.",
   content: ["Kay and Jay reunite to provide our best, last and only line of defense against a sinister seductress who levels the toughest challenge yet to the MIB's untarnished mission statement â€“ protecting Earth from the scum of the universe. It's been four years since the alien-seeking agents averted an intergalactic disaster of epic proportions. Now it's a race against the clock as Jay must convince Kay â€“ who not only has absolutely no memory of his time spent with the MIB, but is also the only living person left with the expertise to save the galaxy â€“ to reunite with the MIB before the earth submits to ultimate destruction."]
 },
 {
   name: "Beowulf",
   title: "Beowulf: Evil breeds pain.",
   content: ["6th-century Scandinavian warrior, Beowulf embarks on a mission to slay the manlike ogre Grendel, a descendant of Cain."]
 },
 {
   name: "Kung Fu Panda 3",
   title: "Kung Fu Panda 3: Grab destiny by the rice dumplings.",
   content: ["Continuing his \"legendary adventures of awesomeness\", Po must face two hugely epic, but different threats: one supernatural and the other a little closer to his home."]
 },
 {
   name: "Mission: Impossible - Ghost Protocol",
   title: "Mission: Impossible - Ghost Protocol No Plan. No Backup. No Choice.",
   content: ["In the 4th installment of the Mission Impossible series, Ethan Hunt (Cruise) and his team are racing against time to track down a dangerous terrorist named Hendricks (Nyqvist), who has gained access to Russian nuclear launch codes and is planning a strike on the United States. An attempt to stop him ends in an explosion causing severe destruction to the Kremlin and the IMF to be implicated in the bombing, forcing the President to disavow them. No longer being aided by the government, Ethan and his team chase Hendricks around the globe, although they might still be too late to stop a disaster."]
 },
 {
   name: "Rise of the Guardians",
   title: "Rise of the Guardians: You better believe.",
   content: ["When an evil spirit known as Pitch lays down the gauntlet to take over the world, the immortal Guardians must join forces for the first time to protect the hopes, beliefs and imagination of children all over the world."]
 },
 {
   name: "Fun with Dick and Jane",
   title: "Fun with Dick and Jane: Giving big businesses a run for their money!",
   content: ["After Dick Harper loses his job at Globodyne in an Enron-esque collapse, he and his wife, Jane, turn to crime in order to handle the massive debt they now face. Two intelligent people, Dick and Jane actually get pretty good at robbing people and even enjoy it -- but they have second thoughts when they're reminded that crime can hurt innocent people. When the couple hears that Globodyne boss Jack McCallister actually swindled the company, they plot revenge."]
 },
 {
   name: "The Last Samurai",
   title: "The Last Samurai: In the face of an enemy, in the heart of one man, lies the soul of a warrior.",
   content: ["Nathan Algren is an American hired to instruct the Japanese army in the ways of modern warfare, which finds him learning to respect the samurai and the honorable principles that rule them. Pressed to destroy the samurai's way of life in the name of modernization and open trade, Algren decides to become an ultimate warrior himself and to fight for their right to exist."]
 },
 {
   name: "Exodus: Gods and Kings",
   title: "Exodus: Gods and Kings Once brothers, now enemies.",
   content: ["The defiant leader Moses rises up against the Egyptian Pharaoh Ramses, setting 400,000 slaves on a monumental journey of escape from Egypt and its terrifying cycle of deadly plagues."]
 },
 {
   name: "Star Trek",
   title: "Star Trek: The future begins.",
   content: ["The fate of the galaxy rests in the hands of bitter rivals. One, James Kirk, is a delinquent, thrill-seeking Iowa farm boy. The other, Spock, a Vulcan, was raised in a logic-based society that rejects all emotion. As fiery instinct clashes with calm reason, their unlikely but powerful partnership is the only thing capable of leading their crew through unimaginable danger, boldly going where no one has gone before. The human adventure has begun again."]
 },
 {
   name: "Spider-Man",
   title: "Spider-Man With great power comes great responsibility.",
   content: ["After being bitten by a genetically altered spider, nerdy high school student Peter Parker is endowed with amazing powers."]
 },
 {
   name: "How to Train Your Dragon 2",
   title: "How to Train Your Dragon 2: The training is over.",
   content: ["The thrilling second chapter of the epic How To Train Your Dragon trilogy brings back the fantastical world of Hiccup and Toothless five years later. While Astrid, Snotlout and the rest of the gang are challenging each other to dragon races (the island's new favorite contact sport), the now inseparable pair journey through the skies, charting unmapped territories and exploring new worlds. When one of their adventures leads to the discovery of a secret ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace."]
 },
 {
   name: "Stealth",
   title: "Stealth: Fear The Sky",
   content: ["Deeply ensconced in a top-secret military program, three pilots struggle to bring an artificial intelligence program under control ... before it initiates the next world war."]
 },
 {
   name: "Watchmen",
   title: "Watchmen: Justice is coming to all of us.  No matter what we do.",
   content: ["In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered an investigation into the killer is initiated. The reunited heroes set out to prevent their own destruction, but in doing so uncover a sinister plot that puts all of humanity in grave danger."]
 },
 {
   name: "Lethal Weapon 4",
   title: "Lethal Weapon 4: The faces you love. The action you expect.",
   content: ["In the combustible action franchise's final installment, maverick detectives Martin Riggs and Roger Murtaugh square off against Asian mobster Wah Sing Ku, who's up to his neck in slave trading and counterfeit currency. With help from gumshoe Leo Getz and smart-aleck rookie cop Lee Butters, Riggs and Murtaugh aim to take down Ku and his gang."]
 },
 {
   name: "Hulk",
   title: "Hulk: Unleash the hero within",
   content: ["Bruce Banner, a genetics researcher with a tragic past, suffers massive radiation exposure in his laboratory that causes him to transform into a raging green monster when he gets angry."]
 },
 {
   name: "G.I. Joe: Retaliation",
   title: "G.I. Joe: Retaliation",
   content: ["Framed for crimes against the country, the G.I. Joe team is terminated by Presidential order. This forces the G.I. Joes into not only fighting their mortal enemy Cobra; they are forced to contend with threats from within the government that jeopardize their very existence."]
 },
 {
   name: "Sahara",
   title: "Sahara: Dirk Pitt. Adventure has a new name.",
   content: ["Scouring the ocean depths for treasure-laden shipwrecks is business as usual for a thrill-seeking underwater adventurer and his wisecracking buddy. But when these two cross paths with a beautiful doctor, they find themselves on the ultimate treasure hunt."]
 },
 {
   name: "Final Fantasy: The Spirits Within",
   title: "Final Fantasy: The Spirits Within Unleash a new reality",
   content: ["Led by a strange dream, scientist Aki Ross struggles to collect the eight spirits in the hope of creating a force powerful enough to protect the planet. With the aid of the Deep Eyes Squadron and her mentor, Dr. Sid, Aki must save the Earth from its darkest hate and unleash the spirits within."]
 },
 {
   name: "Captain America: The First Avenger",
   title: "Captain America: When patriots become heroes",
   content: ["Predominantly set during World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull â€“ Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination."]
 },
 {
   name: "The World Is Not Enough",
   title: "The World Is Not Enough: As the countdown begins for the new millennium there is still one number you can always count on.",
   content: ["Greed, revenge, world dominance and high-tech terrorism â€“ it's all in a day's work for Bond, who's on a mission to a protect beautiful oil heiress from a notorious terrorist. In a race against time that culminates in a dramatic submarine showdown, Bond works to defuse the international power struggle that has the world's oil supply hanging in the balance."]
 },
 {
   name: "Master and Commander: The Far Side of the World",
   title: "Master and Commander: The courage to do the impossible lies in the hearts of men.",
   content: ["After an abrupt and violent encounter with a French warship inflicts severe damage upon his ship, a captain of the British Royal Navy begins a chase over two oceans to capture or destroy the enemy, though he must weigh his commitment to duty and ferocious pursuit of glory against the safety of his devoted crew, including the ship's thoughtful surgeon, his best friend."]
 },
 {
   name: "The Twilight Saga: Breaking Dawn - Part 2",
   title: "The Twilight Saga: Breaking Dawn - Part 2 The epic finale that will live forever",
   content: ["After the birth of Renesmee, the Cullens gather other vampire clans in order to protect the child from a false allegation that puts the family in front of the Volturi."]
 },
 {
   name: "Happy Feet Two",
   title: "Happy Feet Two: Every step counts.",
   content: ["Mumble the penguin has a problem: his son Erik, who is reluctant to dance, encounters The Mighty Sven, a penguin who can fly! Things get worse for Mumble when the world is shaken by powerful forces, causing him to brings together the penguin nations and their allies to set things right."]
 },
 {
   name: "The Incredible Hulk",
   title: "The Incredible Hulk: You'll like him when he's angry.",
   content: ["Scientist Bruce Banner scours the planet for an antidote to the unbridled force of rage within him: the Hulk. But when the military masterminds who dream of exploiting his powers force him back to civilization, he finds himself coming face to face with a new, deadly foe."]
 },
 {
   name: "The BFG",
   title: "The BFG: The world is more giant than you can imagine.",
   content: ["The BFG is no ordinary bone-crunching giant. He is far too nice and jumbly. It's lucky for Sophie that he is. Had she been carried off in the middle of the night by the Bloodbottler, or any of the other giantsâ€”rather than the BFGâ€”she would have soon become breakfast. When Sophie hears that the giants are flush-bunking off to England to swollomp a few nice little chiddlers, she decides she must stop them once and for all. And the BFG is going to help her!"]
 },
 {
   name: "The Revenant",
   title: "The Revenant: (n. One who has returned, as if from the dead.)",
   content: ["In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling."]
 },
 {
   name: "Turbo",
   title: "Turbo: SLO NO MO",
   content: ["The tale of an ordinary garden snail who dreams of winning the Indy 500."]
 },
 {
   name: "Rango",
   title: "Rango: Heroes come in all different colors.",
   content: ["When Rango, a lost family pet, accidentally winds up in the gritty, gun-slinging town of Dirt, the less-than-courageous lizard suddenly finds he stands out. Welcomed as the last hope the town has been waiting for, new Sheriff Rango is forced to play his new role to the hilt."]
 },
 {
   name: "Penguins of Madagascar",
   title: "Penguins of Madagascar: The Movie Event That Will Blow Their Cover",
   content: ["Skipper, Kowalski, Rico and Private join forces with undercover organization The North Wind to stop the villainous Dr. Octavius Brine from destroying the world as we know it."]
 },
 {
   name: "The Bourne Ultimatum",
   title: "The Bourne Ultimatum: Remember everything. Forgive nothing.",
   content: ["Bourne is brought out of hiding once again by reporter Simon Ross who is trying to unveil Operation Blackbriar, an upgrade to Project Treadstone, in a series of newspaper columns. Information from the reporter stirs a new set of memories, and Bourne must finally uncover his dark past while dodging The Company's best efforts to eradicate him."]
 },
 {
   name: "Kung Fu Panda",
   title: "Kung Fu Panda: Prepare for awesomeness.",
   content: ["When the Valley of Peace is threatened, lazy Po the panda discovers his destiny as the \"chosen one\" and trains to become a kung fu hero, but transforming the unsleek slacker into a brave warrior won't be easy. It's up to Master Shifu and the Furious Five -- Tigress, Crane, Mantis, Viper and Monkey -- to give it a try."]
 },
 {
   name: "Ant-Man",
   title: "Ant-Man: Heroes don't get any bigger.",
   content: ["Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world."]
 },
 {
   name: "The Hunger Games: Catching Fire",
   title: "The Hunger Games: Catching Fire Every revolution begins with a spark.",
   content: ["Katniss Everdeen has returned home safe after winning the 74th Annual Hunger Games along with fellow tribute Peeta Mellark. Winning means that they must turn around and leave their family and close friends, embarking on a \"Victor's Tour\" of the districts. Along the way Katniss senses that a rebellion is simmering, but the Capitol is still very much in control as President Snow prepares the 75th Annual Hunger Games (The Quarter Quell) - a competition that could change Panem forever."]
 },
 {
   name: "Home",
   title: "Home: Worlds Collide",
   content: ["When Earth is taken over by the overly-confident Boov, an alien race in search of a new place to call home, all humans are promptly relocated, while all Boov get busy reorganizing the planet. But when one resourceful girl, Tip, manages to avoid capture, she finds herself the accidental accomplice of a banished Boov named Oh. The two fugitives realize thereâ€™s a lot more at stake than intergalactic relations as they embark on the road trip of a lifetime."]
 },
 {
   name: "War of the Worlds",
   title: "War of the Worlds: They're already here.",
   content: ["Ray Ferrier is a divorced dockworker and less-than-perfect father. Soon after his ex-wife and her new husband drop of his teenage son and young daughter for a rare weekend visit, a strange and powerful lightning storm touches down."]
 },
 {
   name: "Bad Boys II",
   title: "Bad Boys II: If you can't stand the heat, get out of Miami.",
   content: ["Out-of-control, trash-talking buddy cops Marcus Burnett and Mike Lowrey of the Miami Narcotics Task Force reunite, and bullets fly, cars crash and laughs explode as they pursue a whacked-out drug lord from the streets of Miami to the barrios of Cuba. But the real fireworks result when Marcus discovers that playboy Mike is secretly romancing Marcusâ€™ sexy sister."]
 },
 {
   name: "Puss in Boots",
   title: "Puss in Boots: Live for danger. Fight for justice. Pray for mercy.",
   content: ["Long before he even met Shrek, the notorious fighter, lover and outlaw Puss in Boots becomes a hero when he sets off on an adventure with the tough and street smart Kitty Softpaws and the mastermind Humpty Dumpty to save his town. This is the true story of The Cat, The Myth, The Legend... The Boots."]
 },
 {
   name: "Salt",
   title: "Salt: Who is Salt?",
   content: ["As a CIA officer, Evelyn Salt swore an oath to duty, honor and country. Her loyalty will be tested when a defector accuses her of being a Russian spy. Salt goes on the run, using all her skills and years of experience as a covert operative to elude capture. Salt's efforts to prove her innocence only serve to cast doubt on her motives, as the hunt to uncover the truth behind her identity continues and the question remains: \"Who is Salt?"]
 },
 {
   name: "Noah",
   title: "Noah: The end of the world is just the beginning.",
   content: ["A man who suffers visions of an apocalyptic deluge takes measures to protect his family from the coming flood."]
 },
 {
   name: "The Adventures of Tintin",
   title: "The Adventures of Tintin: This year, discover how far adventure will take you.",
   content: ["Intrepid young reporter, Tintin and his loyal dog, Snowy are thrust into a world of high adventure when they discover a ship carrying an explosive secret. As Tintin is drawn into a centuries-old mystery, Ivan Ivanovitch Sakharine suspects him of stealing a priceless treasure. Tintin and Snowy, with the help of salty, cantankerous Captain Haddock and bumbling detectives, Thompson &amp; Thomson, travel half the world, one step ahead of their enemies as Tintin endeavors to find The Unicorn, a sunken ship that may hold a vast fortune, but also an ancient curse."]
 },
 {
   name: "Harry Potter and the Prisoner of Azkaban",
   title: "Harry Potter and the Prisoner of Azkaban: Something wicked this way comes.",
   content: ["Harry, Ron and Hermione return to Hogwarts for another magic-filled year. Harry comes face to face with danger yet again, this time in the form of escaped convict, Sirius Black â€“ and turns to sympathetic Professor Lupin for help."]
 },
 {
   name: "Australia",
   title: "Australia: Welcome to Australia!",
   content: ["Set in northern Australia before World War II, an English aristocrat who inherits a sprawling ranch reluctantly pacts with a stock-man in order to protect her new property from a takeover plot. As the pair drive 2,000 head of cattle over unforgiving landscape, they experience the bombing of Darwin, Australia, by Japanese forces firsthand."]
 },
 {
   name: "After Earth",
   title: "After Earth: Danger is real, fear is a choice",
   content: ["One thousand years after cataclysmic events forced humanity's escape from Earth, Nova Prime has become mankind's new home. Legendary General Cypher Raige returns from an extended tour of duty to his estranged family, ready to be a father to his 13-year-old son, Kitai. When an asteroid storm damages Cypher and Kitai's craft, they crash-land on a now unfamiliar and dangerous Earth. As his father lies dying in the cockpit, Kitai must trek across the hostile terrain to recover their rescue beacon. His whole life, Kitai has wanted nothing more than to be a soldier like his father. Today, he gets his chance."]
 },
 {
   name: "Dinosaur",
   title: "Dinosaur: You have never seen anything like this.",
   content: ["An orphaned dinosaur raised by lemurs joins an arduous trek to a sancturary after a meteorite shower destroys his family home."]
 },
 {
   name: "Night at the Museum: Secret of the Tomb",
   title: "Night at the Museum: One Final Night to Save the Day.",
   content: ["When the magic powers of The Tablet of Ahkmenrah begin to die out, Larry Daley (Ben Stiller) spans the globe, uniting favorite and new characters while embarking on an epic quest to save the magic before it is gone forever."]
 },
 {
   name: "Megamind",
   title: "Megamind: His brain is off the chain.",
   content: ["Bumbling supervillain Megamind finally defeats his nemesis, the superhero Metro Man. But without a hero, he loses all purpose and must find new meaning to his life."]
 },
 {
   name: "R.I.P.D.",
   title: "R.I.P.D.: To protect and serve the living",
   content: ["A recently slain cop joins a team of undead police officers working for the Rest in Peace Department and tries to find the man who murdered him. Based on the comic by Peter M. Lenkov."]
 },
 {
   name: "Pirates of the Caribbean: The Curse of the Black Pearl",
   title: "Pirates of the Caribbean: Prepare to be blown out of the water.",
   content: "Jack Sparrow, a freewheeling 17th-century pirate who roams the Caribbean Sea, butts heads with a rival pirate bent on pillaging the village of Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her. But their seafaring mission is hardly simple."
 },
 {
   name: "The Hunger Games: Mockingjay - Part 1",
   title: "The Hunger Games: Mockingjay - Part 1 Fire burns brighter in the darkness",
   content: ["Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol."]
 },
 {
   name: "The Da Vinci Code",
   title: "The Da Vinci Code: Seek the truth.",
   content: ["When the curator of the Louvre is found murdered in the famed museum's hallowed halls, Harvard professor, Robert Langdon and cryptographer, Sophie Neve must untangle a deadly web of deceit involving the works of Leonardo da Vinci."]
 },
 {
   name: "Rio 2",
   title: "Rio 2: He's villainous, she's venomous.",
   content: ["It's a jungle out there for Blu, Jewel and their three kids after they're hurtled from Rio de Janeiro to the wilds of the Amazon. As Blu tries to fit in, he goes beak-to-beak with the vengeful Nigel, and meets the most fearsome adversary of all: his father-in-law."]
 },
 {
   name: "X2",
   title: "X2: The time has come for those who are different to stand united.",
   content: ["Professor Charles Xavier and his team of genetically gifted superheroes face a rising tide of anti-mutant sentiment led by Col. William Stryker. Storm, Wolverine and Jean Grey must join their usual nemeses â€“  Magneto and Mystique â€“ to unhinge Stryker's scheme to exterminate all mutants."]
 },
 {
   name: "Fast Five",
   title: "Fast Five: Get the Fifth Gear.",
   content: ["Former cop Brian O'Conner partners with ex-con Dom Toretto on the opposite side of the law. Since Brian and Mia Toretto broke Dom out of custody, they've blown across many borders to elude authorities. Now backed into a corner in Rio de Janeiro, they must pull one last job in order to gain their freedom."]
 },
 {
   name: "Sherlock Holmes: A Game of Shadows",
   title: "Sherlock Holmes: A Game of Shadows The game is afoot.",
   content: ["There is a new criminal mastermind at large (Professor Moriarty) and not only is he Holmesâ€™ intellectual equal, but his capacity for evil and lack of conscience may give him an advantage over the  detective."]
 },
 {
   name: "Total Recall",
   title: "Total Recall: They stole his mind, now he wants it back.",
   content: ["Construction worker Douglas Quaid discovers a memory chip in his brain during a virtual-reality trip. He also finds that his past has been invented to conceal a plot of planetary domination. Soon, he's off to Mars to find out who he is and who planted the chip."]
 },
 {
   name: "The 13th Warrior",
   title: "The 13th Warrior: Prey for the living.",
   content: ["In AD 922, Arab courtier, Ahmad Ibn Fadlan accompanies a party of Vikings to the barbaric North to combat a terror that slaughters Vikings and devours their flesh."]
 },
 {
   name: "The Bourne Legacy",
   title: "The Bourne Legacy: There Was Never Just One",
   content: ["New CIA operative, Aaron Cross experiences life-or-death stakes that have been triggered by the previous actions of Jason Bourne."]
 },
 {
   name: "Batman & Robin",
   title: "Batman & Robin: Strength. Courage. Honor. And loyalty.",
   content: ["Along with crime-fighting partner Robin and new recruit Batgirl, Batman battles the dual threat of frosty genius Mr. Freeze and homicidal horticulturalist Poison Ivy. Freeze plans to put Gotham City on ice, while Ivy tries to drive a wedge between the dynamic duo."]
 },
 {
   name: "How the Grinch Stole Christmas",
   title: "How the Grinch Stole Christmas: He puts the mean in green.",
   content: ["Inside a snowflake exists the magical land of Whoville. In Whoville, live the Whos, an almost mutated sort of Munchkin-like people. All the Whos love Christmas, yet just outside of their beloved Whoville lives the Grinch. The Grinch is a nasty creature that hates Christmas, and plots to steal it away from the Whos, whom he equally abhors. Yet a small child, Cindy Lou Who, decides to try befriending the Grinch."]
 },
 {
   name: "The Day After Tomorrow",
   title: "The Day After Tomorrow: Where will you be?",
   content: ["After years of increases in the greenhouse effect,  havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."]
 },
 {
   name: "Mission: Impossible II",
   title: "Mission: Impossible II Expect the impossible again.",
   content: ["With computer genius Luther Stickell at his side and a beautiful thief on his mind, agent Ethan Hunt races across Australia and Spain to stop a former IMF agent from unleashing a genetically engineered biological weapon called Chimera. This mission, should Hunt choose to accept it, plunges him into the center of an international crisis of terrifying magnitude."]
 },
 {
   name: "The Perfect Storm",
   title: "The Perfect Storm: The storm is coming.",
   content: ["In October 1991, a confluence of weather conditions combined to form a killer storm in the North Atlantic. Caught in the storm was the sword-fishing boat Andrea Gail. Magnificent foreshadowing and anticipation fill this true-life drama while minute details of the fishing boats, their gear and the weather are juxtaposed with the sea adventure."]
 },
 {
   name: "4: Rise of the Silver Surfer",
   title: "Rise of the Silver SurferDiscover the secret of the Surfer.",
   content: ["The Fantastic Four return to the big screen as a new and all powerful enemy threatens the Earth. The seemingly unstoppable 'Silver Surfer', but all is not what it seems and there are old and new enemies that pose a greater threat than the intrepid superheroes realize."]
 },
 {
   name: "Life of Pi",
   title: "Life of Pi: Believe The Unbelievable",
   content: ["The story of an Indian boy named Pi, a zookeeper's son who finds himself in the company of a hyena, zebra, orangutan, and a Bengal tiger after a shipwreck sets them adrift in the Pacific Ocean."]
 },
 {
   name: "Ghost Rider",
   title: "Ghost Rider: Hell Is About To Be Unleashed",
   content: ["In order to save his dying father, young stunt cyclist, Johnny Blaze sells his soul to Mephistopheles and sadly parts from the pure-hearted, Roxanne Simpson, the love of his life. Years later, Johnny's path crosses again with Roxanne, now a go-getting reporter, and also with Mephistopheles, who offers to release Johnny's soul if Johnny becomes the fabled, fiery 'Ghost Rider'."]
 },
 {
   name: "Jason Bourne",
   title: "Jason Bourne: You know his name",
   content: ["The most dangerous former operative of the CIA is drawn out of hiding to uncover hidden truths about his past."]
 },
 {
   name: "Charlie's Angels: Full Throttle",
   title: "Charlie's Angels: Full Throttle This summer the Angels are back.",
   content: ["The Angels are charged with finding a pair of missing rings that are encoded with the personal information of members of the Witness Protection Program. As informants are killed, the ladies target a rogue agent who might be responsible."]
 },
 {
   name: "Prometheus",
   title: "Prometheus: The Search for Our Beginning Could Lead to Our End.",
   content: ["A team of explorers discover a clue to the origins of mankind on Earth, leading them on a journey to the darkest corners of the universe. There, they must fight a terrifying battle to save the future of the human race."]
 },
 {
   name: "Stuart Little 2",
   title: "Stuart Little 2: A Little Goes A Long Way",
   content: ["Stuart, an adorable white mouse, still lives happily with his adoptive family, the Littles, on the east side of Manhattan's Central Park. More crazy mouse adventures are in store as Stuart, his human brother, George, and their mischievous cat, Snowbell, set out to rescue a friend."]
 },
 {
   name: "Elysium",
   title: "Elysium: He can save us all.",
   content: ["In the year 2159, two classes of people exist: the very wealthy who live on a pristine man-made space station called Elysium, and the rest, who live on an overpopulated, ruined Earth. Secretary Rhodes (Jodie Foster), a hard line government ofï¬cial, will stop at nothing to enforce anti-immigration laws and preserve the luxurious lifestyle of the citizens of Elysium. That doesnâ€™t stop the people of Earth from trying to get in, by any means they can. When unlucky Max (Matt Damon) is backed into a corner, he agrees to take on a daunting mission that, if successful, will not only save his life, but could bring equality to these polarized worlds."]
 },
 {
   name: "The Chronicles of Riddick",
   title: "The Chronicles of Riddick: All the power in the universe can't change destiny",
   content: ["After years of outrunning ruthless bounty hunters, escaped convict Riddick suddenly finds himself caught between opposing forces in a fight for the future of the human race. Now, waging incredible battles on fantastic and deadly worlds, this lone, reluctant hero will emerge as humanity's champion - and the last hope for a universe on the edge of annihilation."]
 },
 {
   name: "RoboCop",
   title: "RoboCop: We've got the future under control.",
   content: ["In RoboCop, the year is 2028 and multinational conglomerate OmniCorp is at the center of robot technology.  Overseas, their drones have been used by the military for years, but have been forbidden for law enforcement in America.  Now OmniCorp wants to bring their controversial technology to the home front, and they see a golden opportunity to do it.  When Alex Murphy â€“ a loving husband, father and good cop doing his best to stem the tide of crime and corruption in Detroit â€“ is critically injured, OmniCorp sees their chance to build a part-man, part-robot police officer.  OmniCorp envisions a RoboCop in every city and even more billions for their shareholders, but they never counted on one thing: there is still a man inside the machine."]
 },
 {
   name: "Speed Racer",
   title: "Speed Racer: Go!",
   content: ["Speed Racer is the tale of a young and brilliant racing driver. When corruption in the racing leagues costs his brother his life, he must team up with the police and the mysterious Racer X to bring an end to the corruption and criminal activities. Inspired by the cartoon series."]
 },
 {
   name: "How Do You Know",
   title: "How do you know it's love?",
   content: ["After being cut from the USA softball team and feeling a bit past her prime, Lisa finds herself evaluating her life and in the middle of a love triangle, as a corporate guy in crisis competes with her current, baseball-playing beau."]
 },
 {
   name: "Knight and Day",
   title: "Knight and Day: Every Hit Man Deserves a Second Shot!",
   content: ["A fugitive couple goes on a glamorous and sometimes deadly adventure where nothing and no one â€“ even themselves â€“ are what they seem. Amid shifting alliances and unexpected betrayals, they race across the globe, with their survival ultimately hinging on the battle of truth vs. trust."]
 },
 {
   name: "Oblivion",
   title: "Oblivion: Earth is a memory worth fighting for",
   content: ["Jack Harper is one of the last few drone repairmen stationed on Earth.  Part of a massive operation to extract vital resources after decades of war with a terrifying threat known as the Scavs, Jackâ€™s mission is nearly complete.  His existence is brought crashing down when he rescues a beautiful  stranger from a downed spacecraft.  Her arrival triggers a chain of events that  forces him to question everything he knows and puts the fate of humanity in his hands."]
 },
 {
   name: "Star Wars: Episode III - Revenge of the Sith",
   title: "Star Wars: Episode III - Revenge of the Sith The saga is complete.",
   content: ["Years after the onset of the Clone Wars, the noble Jedi Knights lead a massive clone army into a galaxy-wide battle against the Separatists. When the sinister Sith unveil a thousand-year-old plot to rule the galaxy, the Republic crumbles and from its ashes rises the evil Galactic Empire. Jedi hero Anakin Skywalker is seduced by the dark side of the Force to become the Emperor's new apprentice â€“ Darth Vader. The Jedi are decimated, as Obi-Wan Kenobi and Jedi Master Yoda are forced into hiding. The only hope for the galaxy are Anakin's own offspring â€“ the twin children born in secrecy who will grow up to become heroes."]
 },
 {
   name: "Star Wars: Episode II - Attack of the Clones",
   title: "Star Wars: Episode II - Attack of the Clones A Jedi Shall Not Know Anger. Nor Hatred. Nor Love.",
   content: ["Ten years after the invasion of Naboo, the galaxy is on the brink of civil war. Under the leadership of a renegade Jedi named Count Dooku, thousands of solar systems threaten to break away from the Galactic Republic. When an assassination attempt is made on Senator PadmÃ© Amidala, the former Queen of Naboo, twenty-year-old Jedi apprentice Anakin Skywalker is assigned to protect her. In the course of his mission, Anakin discovers his love for PadmÃ© as well as his own darker side. Soon, Anakin, PadmÃ©, and Obi-Wan Kenobi are drawn into the heart of the Separatist movement and the beginning of the Clone Wars."]
 },
 {
   name: "Monsters, Inc.",
   title: "Monsters, Inc. We Scare Because We Care.",
   content: ["James Sullivan and Mike Wazowski are monsters, they earn their living scaring children and are the best in the business... even though they're more afraid of the children than they are of them. When a child accidentally enters their world, James and Mike suddenly find that kids are not to be afraid of and they uncover a conspiracy that could threaten all children across the world."]
 },
 {
   name: "The Wolverine",
   title: "The Wolverine: When he's most vulnerable, he's most dangerous.",
   content: ["Wolverine faces his ultimate nemesis - and tests of his physical, emotional, and mortal limits - in a life-changing voyage to modern-day Japan."]
 },
 {
   name: "Star Wars: Episode I - The Phantom Menace",
   title: "Every generation has a legend. Every journey has a first step. Every saga has a beginning.",
   content: ["Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi."]
 },
 {
   name: "The Croods",
   title: "Meet the first modern family.",
   content: ["The Croods is a prehistoric comedy adventure that follows the world's first family as they embark on a journey of a lifetime when the cave that has always shielded them from danger is destroyed. Traveling across a spectacular landscape, the Croods discover an incredible new world filled with fantastic creatures -- and their outlook is changed forever."]
 },
 {
   name: "AstÃ©rix aux Jeux Olympiques",
   title: "AstÃ©rix aux Jeux Olympiques",
   content: ["AstÃ©rix and ObÃ©lix have to win the Olympic Games in order to help their friend Alafolix marry Princess Irina (portrayed by supermodel Vanessa Hessler). Brutus (BenoÃ®t Poelvoorde) uses every trick in the book to have his own team win the game, and get rid of his father Julius Caesar (Alain Delon) in the process."]
 },
 {
   name: "Windtalkers",
   title: "Windtalkers: Honor Was Their Code.",
   content: ["Joe Enders is a gung-ho Marine assigned to protect a \"windtalker\" - one of several Navajo Indians who were used to relay messages during World War II because their spoken language was indecipherable to Japanese code breakers."]
 },
 {
   name: "The Huntsman: Winter's War",
   title: "The Huntsman: Winter's War The story before Snow White",
   content: ["As two evil sisters prepare to conquer the land, two renegadesâ€”Eric the Huntsman, who aided Snow White in defeating Ravenna in Snowwhite and the Huntsman, and his forbidden lover, Saraâ€”set out to stop them."]
 },
 {
   name: "Teenage Mutant Ninja Turtles",
   title: "Teenage Mutant Ninja Turtles Mysterious. Dangerous. Reptilious. You've never seen heroes like this.",
   content: ["The city needs heroes. Darkness has settled over New York City as Shredder and his evil Foot Clan have an iron grip on everything from the police to the politicians. The future is grim until four unlikely outcast brothers rise from the sewers and discover their destiny as Teenage Mutant Ninja Turtles. The Turtles must work with fearless reporter April and her wise-cracking cameraman Vern Fenwick to save the city and unravel Shredder's diabolical plan."]
 },
 {
   name: "Gravity",
   title: "Gravity: Don't Let Go",
   content: ["Dr. Ryan Stone, a brilliant medical engineer on her first Shuttle mission, with veteran astronaut Matt Kowalsky in command of his last flight before retiring. But on a seemingly routine spacewalk, disaster strikes. The Shuttle is destroyed, leaving Stone and Kowalsky completely alone-tethered to nothing but each other and spiraling out into the blackness of space. The deafening silence tells them they have lost any link to Earth and any chance for rescue. As fear turns to panic, every gulp of air eats away at what little oxygen is left. But the only way home may be to go further out into the terrifying expanse of space."]
 },
 {
   name: "Dante's Peak",
   title: "Dante's Peak The pressure is building...",
   content: ["Volcanologist Harry Dalton comes to the sleepy town of Dante's Peak to investigate the recent rumblings of the dormant volcano the burg is named for. Before long, his worst fears are realized when a massive eruption hits, and immediately, Harry, the mayor and the townspeople find themselves fighting for their lives amid a catastrophic nightmare."]
 },
 {
   name: "Teenage Mutant Ninja Turtles: Out of the Shadows",
   title: "Teenage Mutant Ninja Turtles: Out of the Shadows Raise some shell.",
   content: ["After supervillain Shredder escapes custody, he joins forces with mad scientist Baxter Stockman and two dimwitted henchmen, Bebop and Rocksteady, to unleash a diabolical plan to take over the world. As the Turtles prepare to take on Shredder and his new crew, they find themselves facing an even greater evil with similar intentions: the notorious Krang."]
 },
 {
   name: "Fantastic Four",
   title: "Fantastic Four: Change is coming.",
   content: ["Four young outsiders teleport to a dangerous universe, which alters their physical form in shocking ways. Their lives irrevocably upended, the team must learn to harness their daunting new abilities and work together to save Earth from a former friend turned enemy."]
 },
 {
   name: "Night at the Museum",
   title: "Night at the Museum: Where History Comes To Life",
   content: ["Chaos reigns at the natural history museum when night watchman Larry Daley accidentally stirs up an ancient curse, awakening Attila the Hun, an army of gladiators, a Tyrannosaurus rex and other exhibits. Larry tries desperately to keep the museum under control, but he's fighting a losing battle until President Teddy Roosevelt comes to the rescue."]
 },
 {
   name: "San Andreas",
   title: "San Andreas: A rescue pilot survived an earthquake, this is what happens next",
   content: ["In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey across the state in order to rescue his estranged daughter."]
 },
 {
   name: "Tomorrow Never Dies",
   title: "Tomorrow Never Dies: Yesterday is a memory. Today is history. Tomorrow is in the hands of one man.",
   content: ["A deranged media mogul is staging international incidents to pit the world's superpowers against each other. Now 007 must take on this evil mastermind in an adrenaline-charged battle to end his reign of terror and prevent global pandemonium."]
 },
 {
   name: "The Patriot",
   title: "The Patriot: Some things are worth fighting for.",
   content: ["After proving himself on the field of battle in the French and Indian War, Benjamin Martin wants nothing more to do with such things, preferring the simple life of a farmer. But when his son Gabriel enlists in the army to defend their new nation, America, against the British, Benjamin reluctantly returns to his old life to protect his son."]
 },
 {
   name: "Ocean's Twelve",
   title: "Ocean's Twelve: Twelve is the new eleven.",
   content: ["Danny Ocean reunites with his old flame and the rest of his merry band of thieves in carrying out three huge heists in Rome, Paris and Amsterdam â€“ but a Europol agent is hot on their heels."]
 },
 {
   name: "Mr. & Mrs. Smith",
   title: "Mr. & Mrs. Smith: Smart and sexy.",
   content: ["After five (or six) years of vanilla-wedded bliss, ordinary suburbanites John and Jane Smith are stuck in a huge rut. Unbeknownst to each other, they are both coolly lethal, highly-paid assassins working for rival organisations. When they discover they're each other's next target, their secret lives collide in a spicy, explosive mix of wicked comedy, pent-up passion, nonstop action and high-tech weaponry."]
 },
 {
   name: "Insurgent",
   title: "Insurgent: One Choice Can Destroy You",
   content: ["Beatrice Prior must confront her inner demons and continue her fight against a powerful alliance which threatens to tear her society apart."]
 },
 {
   name: "The Aviator",
   title: "The Aviator: For some men, the sky was the limit. For him, it was just the beginning.",
   content: ["A biopic depicting the life of filmmaker and aviation pioneer Howard Hughes from 1927 to 1947, during which time he became a successful film producer and an aviation magnate, while simultaneously growing more unstable due to severe obsessive-compulsive disorder."]
 },
 {
   name: "Gulliver's Travels",
   title: "Gulliver's Travels: Something big is going down.",
   content: ["Travel writer Lemuel Gulliver takes an assignment in Bermuda, but ends up on the island of Liliput, where he towers over its tiny citizens."]
 },
 {
   name: "The Green Hornet",
   title: "The Green Hornet: Breaking the Law to Protect It.",
   content: ["Britt Reid (Seth Rogen), the heir to the largest newspaper fortune in Los Angeles, is a spoiled playboy who has been, thus far, happy to lead an aimless life. After his father (Tom Wilkinson) dies, Britt meets Kato (Jay Chou), a resourceful company employee. Realizing that they have the talent and resources to make something of their lives, Britt and Kato join forces as costumed crime-fighters to bring down the city's most-powerful criminal, Chudnofsky (Christoph Waltz)."]
 },
 {
   name: "300: Rise of an Empire",
   title: "300: Rise of an Empire Seize your glory!",
   content: ["Based on Frank Miller's latest graphic novel Xerxes and told in the breathtaking visual style of the blockbuster \"300,\" this new chapter of the epic saga takes the action to a fresh battlefield--on the sea--as Greek general Themistokles attempts to unite all of Greece by leading the charge that will change the course of the war. \"300: Rise of an Empire\" pits Themistokles against the massive invading Persian forces led by Xerxes and Artemesia, the vengeful commander of the Persian navy."]
 },
 {
   name: "The Smurfs",
   title: "The Smurfs: Smurf Happens.",
   content: ["When the evil wizard Gargamel chases the tiny blue Smurfs out of their village, they tumble from their magical world and into ours -- in fact, smack dab in the middle of Central Park. Just three apples high and stuck in the Big Apple, the Smurfs must find a way to get back to their village before Gargamel tracks them down."]
 },
 {
   name: "Home on the Range",
   title: "Home on the Range: Bust a Moo",
   content: ["When a greedy outlaw schemes to take possession of the \"Patch Of Heaven\" dairy farm, three determined cows, a karate-kicking stallion and a colorful corral of critters join forces to save their home. The stakes are sky-high as this unlikely animal alliance risk their hides and match wits with a mysterious band of bad guys."]
 },
 {
   name: "Allegiant",
   title: "Allegiant: Break the boundaries of your world",
   content: ["Beatrice Prior and Tobias Eaton venture into the world outside of the fence and are taken into protective custody by a mysterious agency known as the Bureau of Genetic Welfare."]
 },
 {
   name: "Real Steel",
   title: "Real Steel: If you get one shot, make it real.",
   content: ["In the near-future, Charlie Kenton is a washed-up fighter who retired from the ring when robots took over the sport. After Charlie's robot is trashed, he reluctantly teams up with his estranged son Max to rebuild and train an unlikely contender."]
 },
 {
   name: "The Smurfs 2",
   title: "The Smurfs 2: Get ready to get naughty!",
   content: ["The evil wizard Gargamel creates a couple of mischievous Smurf-like creatures called the Naughties that he hopes will let him harness the all-powerful, magical Smurf-essence. But when he discovers that only a real Smurf can give him what he wants, and only a secret spell that Smurfette knows can turn the Naughties into real Smurfs, Gargamel kidnaps Smurfette and brings her to Paris, where he has been winning the adoration of millions as the worldÂ¹s greatest sorcerer. It's up to Papa, Clumsy, Grouchy, and Vanity to return to our world, reunite with their human friends Patrick and Grace Winslow, and rescue her! Will Smurfette, who has always felt different from the other Smurfs, find a new connection with the Naughties Vexy and Hackus or will the Smurfs convince her that their love for her is True Blue?"]
 },
 {
   name: "Speed 2: Cruise Control",
   title: "Speed 2: Cruise Control As the stakes get higher, the ride gets even faster.",
   content: ["Sandra Bullock and Jason Patric star as a young couple whose dream cruise turns to terror when a lunatic computer genius (Willem Dafoe) sets a new course for destruction."]
 },
 {
   name: "Ender's Game",
   title: "Ender's Game: This is not a game.",
   content: ["Based on the classic novel by Orson Scott Card, Ender's Game is the story of the Earth's most gifted children training to defend their homeplanet in the space wars of the future."]
 },
 {
   name: "Live Free or Die Hard",
   title: "Live Free or Die Hard: The old school cop is back!",
   content: ["John McClane is back and badder than ever, and this time he's working for Homeland Security. He calls on the services of a young hacker in his bid to stop a ring of Internet terrorists intent on taking control of America's computer infrastructure."]
 },
 {
   name: "The Lord of the Rings: The Fellowship of the Ring",
   title: "The Lord of the Rings: One ring to rule them all",
   content: ["Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed."]
 },
 {
   name: "Around the World in 80 Days",
   title: "Around the World in 80 Days: Let your imagination soar.",
   content: ["A bet pits a British inventor, a Chinese thief and a French artist on a worldwide adventure that they can circle the globe in 80 days."]
 },
 {
   name: "Ali",
   title: "Float like a butterfly and sting like a bee.",
   content: ["In 1964, a brash new pro boxer, fresh from his olympic gold medal victory, explodes on to the scene; Cassius Clay. Bold and outspoken, he cuts an entirely new image for African Americans in sport with his proud public self confidence and his unapologetic belief that he is the greatest boxer of all time. Yet at the top of his game, both Ali's personal and professional lives face the ultimate test."]
 },
 {
   name: "The Cat in the Hat",
   title: "Don't mess with the hat.",
   content: ["Conrad and Sally Walden are home alone with their pet fish. It is raining outside, and there is nothing to do. Until The Cat in the Hat walks in the front door. He introduces them to their imagination, and at first it's all fun and games, until things get out of hand, and The Cat must go, go, go, before their parents get back."]
 },
 {
   name: "I, Robot",
   title: "I, Robot: Laws are made to be broken.",
   content: ["In 2035, where robots are common-place and abide by the three laws of robotics, a techno-phobic cop investigates an apparent suicide. Suspecting that a robot may be responsible for the death, his investigation leads him to believe that humanity may be in danger."]
 },
 {
   name: "Kingdom of Heaven",
   title: "Kingdom of Heaven: Be without fear in the face of your enemies. Safeguard the helpless, and do no wrong",
   content: ["After his wife dies, a blacksmith named Balian is thrust into royalty, political intrigue and bloody holy wars during the Crusades."]
 },
 {
   name: "Stuart Little",
   title: "Stuart Little: The Little Family Just Got Bigger",
   content: ["The adventures of a heroic and debonair stalwart mouse named Stuart Little with human qualities, who faces some comic misadventures while searching for his lost bird friend and living with a human family as their child."]
 },
 {
   name: "The Princess and the Frog",
   title: "Every Love Story Begins With a Kiss...",
   content: ["A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to do face the same problem after she kisses him."]
 },
 {
   name: "The Martian",
   title: "The Martian: Bring Him Home",
   content: ["During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive."]
 },
 {
   name: "The Island",
   title: "The Island: Your time will come...",
   content: ["In 2019, Lincoln Six-Echo is a resident of a seemingly \"Utopian\" but contained facility. Like all of the inhabitants of this carefully-controlled environment, Lincoln hopes to be chosen to go to The Island â€” reportedly the last uncontaminated location on the planet. But Lincoln soon discovers that everything about his existence is a lie."]
 },
 {
   name: "Town & Country",
   title: "Town & Country: There's no such thing as a small affair.",
   content: ["Porter Stoddard is a well-known New York architect who is at a crossroads... a nexus where twists and turns lead to myriad missteps some with his wife Ellie, others with longtime friends Mona and her husband Griffin. Deciding which direction to take often leads to unexpected encounters with hilarious consequences."]
 },
 {
   name: "Gone in Sixty Seconds",
   title: "Gone in Sixty Seconds: Ice Cold, Hot Wired.",
   content: ["Upon learning that he has to come out of retirement to steal 50 cars in one night to save his brother Kip's life, former car thief Randall \"Memphis\" Raines enlists help from a few \"boost happy\" pals to accomplish a seemingly impossible feat. From countless car chases to relentless cops, the high-octane excitement builds as Randall swerves around more than a few roadblocks to keep Kip alive."]
 },
 {
   name: "Gladiator",
   title: "Gladiator: A Hero Will Rise.",
   content: ["In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor. As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed. He escapes, but is captured by slave traders. Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences. His battle skills serve him well, and he becomes one of the most famous and admired men to fight in the Colosseum. Determined to avenge himself against the man who took away his freedom and laid waste to his family, Maximus believes that he can use his fame and skill in the ring to avenge the loss of his family and former glory. As the gladiator begins to challenge his rule, Commodus decides to put his own fighting mettle to the test by squaring off with Maximus in a battle to the death."]
 },
 {
   name: "Minority Report",
   title: "Minority Report: The system is perfect until it comes after you.",
   content: ["John Anderton is a top 'Precrime' cop in the late-21st century, when technology can predict crimes before they're committed. But Anderton becomes the quarry when another investigator targets him for a murder charge."]
 },
 {
   name: "Terminator 2: Judgment Day",
   title: "Terminator 2: Judgment Day It's nothing personal.",
   content: ["Nearly 10 years have passed since Sarah Connor was targeted for termination by a cyborg from the future. Now her son, John, the future leader of the resistance, is the target for a newer, more deadly terminator. Once again, the resistance has managed to send a protector back to attempt to save John and his mother Sarah."]
 },
 {
   name: "Public Enemies",
   title: "Public Enemies: America's Most Wanted.",
   content: ["Depression-era bank robber John Dillinger's charm and audacity endear him to much of America's downtrodden public, but he's also a thorn in the side of J. Edgar Hoover and the fledgling FBI. Desperate to capture the elusive outlaw, Hoover makes Dillinger his first Public Enemy Number One and assigns his top agent, Melvin Purvis, the task of bringing him in dead or alive."]
 },
 {
   name: "American Gangster",
   title: "American Gangster: There are two sides to the American dream",
   content: ["Following the death of his employer and mentor, Bumpy Johnson, Frank Lucas establishes himself as the number one importer of heroin in the Harlem district of Manhattan. He does so by buying heroin directly from the source in South East Asia and he comes up with a unique way of importing the drugs into the United States. Based on a true story."]
 },
 {
   name: "True Lies",
   title: "True Lies: When he said I do, he never said what he did.",
   content: ["Harry Tasker is a secret agent for the United States Government. For years, he has kept his job from his wife, but is forced to reveal his identity and try to stop nuclear terrorists when he and his wife are kidnapped by them."]
 },
 {
   name: "The Taking of Pelham 1 2 3",
   title: "The Taking of Pelham 1 2 3: I can't get it out of my head. I'm gonna die today.",
   content: ["Armed men hijack a New York City subway train, holding the passengers hostage in return for a ransom, and turning an ordinary day's work for dispatcher Walter Garber into a face-off with the mastermind behind the crime."]
 },
 {
   name: "The Other Guys",
   title: "The Other Guys: When the cops are busy... Our only hope is...",
   content: ["NYPD detectives Christopher Danson (Johnson) and P.K. Highsmith (Jackson) are the baddest and most beloved cops in New York City. They don't get tattoos, other men get tattoos of them. Two desks over and one back, sit detectives Allen Gamble (Ferrell) and Terry Hoitz (Wahlberg). You've seen them in the background of photos of Danson and Highsmith, out of focus and eyes closed. They're not heroes, they're \"the other guys.\" But every cop has his or her day and soon Gamble and Hoitz stumble into a seemingly innocuous case no other detective wants to touch that could turn into NYC's biggest crime. It's the opportunity of their lives, but do these guys have the right stuff?"]
 },
 {
   name: "Eraser",
   title: "Eraser: He will erase your past to protect your future.",
   content: ["U.S. Marshall John Kruger erases the identities of people enrolled in the Witness Protection Program. His current assignment is to protect Lee Cullen, who's uncovered evidence that the weapons manufacturer she works for has been selling to terrorist groups. When Kruger discovers that there's a corrupt agent within the program, he must guard his own life while trying to protect Lee's."]
 },
 {
   name: "Django Unchained",
   title: "Django Unchained: Life, liberty and the pursuit of vengeance.",
   content: ["With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner."]
 },
 {
   name: "The Hunchback of Notre Dame",
   title: "The Hunchback of Notre Dame",
   content: ["When Quasi defies the evil Frollo and ventures out to the Festival of Fools, the cruel crowd jeers him. Rescued by fellow outcast the gypsy Esmeralda, Quasi soon finds himself battling to save the people and the city he loves."]
 },
 {
   name: "The Emperor's New Groove",
   title: "The Emperor's New Groove: It's All About.....ME!",
   content: ["Kuzco is a self-centered emperor who summons Pacha from a village and to tell him that his home will be destroyed to make room for Kuzco's new summer home. Kuzco's advisor, Yzma, tries to poison Kuzco and accidentally turns him into a llama, who accidentally ends up in Pacha's village. Pacha offers to help Kuzco if he doesn't destroy his house, and so they form an unlikely partnership."]
 },
 {
   name: "The Expendables 2",
   title: "The Expendables 2: Back for War.",
   content: ["Mr. Church reunites the Expendables for what should be an easy paycheck, but when one of their men is murdered on the job, their quest for revenge puts them deep in enemy territory and up against an unexpected threat."]
 },
 {
   name: "National Treasure",
   title: "National Treasure: The greatest adventure history has ever revealed.",
   content: ["Modern treasure hunters, led by archaeologist Ben Gates, search for a chest of riches rumored to have been stashed away by George Washington, Thomas Jefferson and Benjamin Franklin during the Revolutionary War. The chest's whereabouts may lie in secret clues embedded in the Constitution and the Declaration of Independence, and Gates is in a race to find the gold before his enemies do."]
 },
 {
   name: "Eragon",
   title: "Eragon: As darkness falls, the last dragon will choose its rider.",
   content: ["In his homeland of Alagaesia, a farm boy happens upon a dragon's egg -- a discovery that leads him on a predestined journey where he realized he's the one person who can defend his home against an evil king."]
 },
 {
   name: "Where the Wild Things Are",
   title: "Where the Wild Things Are: There's one in all of us.",
   content: ["Max imagines running away from his mom and sailing to a far-off land where large talking beasts -- Ira, Carol, Douglas, the Bull, Judith and Alexander -- crown him as their king, play rumpus, build forts and discover secret hideaways."]
 },
 {
   name: "Epic",
   title: "Epic: Discover a world beyond your imagination",
   content: ["A teenager finds herself transported to a deep forest setting where a battle between the forces of good and the forces of evil is taking place. She bands together with a rag-tag group characters in order to save their world -- and ours."]
 },
 {
   name: "The Tourist",
   title: "The Tourist: It all started when he met a woman",
   content: ["American tourist Frank (Johnny Depp) meets mysterious British woman Elsie (Angelina Jolie) on the train to Venice. Romance seems to bud, but there's more to her than meets the eye. Remake of the 2005 French film \"Anthony Zimmer\", written and directed by JÃ©rÃ´me Salle."]
 },
 {
   name: "End of Days",
   title: "End of Days: Prepare for the end.",
   content: ["On December 28th, 1999, the citizens of New York City are getting ready for the turn of the millennium. However, the Devil decides to crash the party by coming to the city, inhabiting a man's body, and searching for his chosen bride, a 20-year-old woman named Christine York. The world will end, and the only hope lies within an atheist called Jericho Cane."]
 },
 {
   name: "Blood Diamond",
   title: "Blood Diamond: It will cost you everything.",
   content: ["An ex-mercenary turned smuggler. A Mende fisherman. Amid the explosive civil war overtaking 1999 Sierra Leone, these men join for two desperate missions: recovering a rare pink diamond of immense value and rescuing the fisherman's son conscripted as a child soldier into the brutal rebel forces ripping a swath of torture and bloodshed countrywide."]
 },
 {
   name: "The Wolf of Wall Street",
   title: "The Wolf of Wall Street: EARN. SPEND. PARTY.",
   content: ["A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography."]
 },
 {
   name: "Batman Forever",
   title: "Batman Forever: Courage now, truth always...",
   content: ["The Dark Knight of Gotham City confronts a dastardly duo: Two-Face and the Riddler. Formerly District Attorney Harvey Dent, Two-Face believes Batman caused the courtroom accident which left him disfigured on one side. And Edward Nygma, computer-genius and former employee of millionaire Bruce Wayne, is out to get the philanthropist; as The Riddler. Former circus acrobat Dick Grayson, his family killed by Two-Face, becomes Wayne's ward and Batman's new partner Robin."]
 },
 {
   name: "Starship Troopers",
   title: "Starship Troopers: The only good bug is a dead bug.",
   content: ["Set in the future, the story follows a young soldier named Johnny Rico and his exploits in the Mobile Infantry. Rico's military career progresses from recruit to non-commissioned officer and finally to officer against the backdrop of an interstellar war between mankind and an arachnoid species known as \"the Bugs\"."]
 },
 {
   name: "Cloud Atlas",
   title: "Cloud Atlas: Everything is Connected",
   content: ["A set of six nested stories spanning time between the 19th century and a distant post-apocalyptic future. Cloud Atlas explores how the actions and consequences of individual lives impact one another throughout the past, the present and the future. Action, mystery and romance weave through the story as one soul is shaped from a killer into a hero and a single act of kindness ripples across centuries to inspire a revolution in the distant future.  Based on the award winning novel by David Mitchell. Directed by Tom Tykwer and the Wachowskis."]
 },
 {
   name: "Legend of the Guardians: The Owls of Ga'Hoole",
   title: "Legend of the Guardians:: On his way to finding a legend...he will become one.",
   content: ["Soren, a young barn owl, is kidnapped by owls of St. Aggie's, ostensibly an orphanage, where owlets are brainwashed into becoming soldiers. He and his new friends escape to the island of Ga'Hoole, to assist its noble, wise owls who fight the army being created by the wicked rulers of St. Aggie's. The film is based on the first three books in the series."]
 },
 {
   name: "Catwoman",
   title: "Catwoman: CATch her in IMAX",
   content: ["Liquidated after discovering a corporate conspiracy, mild-mannered graphic artist Patience Phillips washes up on an island, where she's resurrected and endowed with the prowess of a cat -- and she's eager to use her new skills ... as a vigilante. Before you can say \"cat and mouse,\" handsome gumshoe Tom Lone is on her tail."]
 },
 {
   name: "Treasure Planet",
   title: "Treasure Planet: Find your place in the universe.",
   content: ["When space galleon cabin boy Jim Hawkins discovers a map to an intergalactic \"loot of a thousand worlds,\" a cyborg cook named John Silver teaches him to battle supernovas and space storms. But, soon, Jim realizes Silver is a pirate intent on mutiny!"]
 },
 {
   name: "Land of the Lost",
   title: "Land of the Lost: Right place. Wrong time.",
   content: ["On his latest expedition, Dr. Rick Marshall is sucked into a space-time vortex alongside his research assistant and a redneck survivalist. In this alternate universe, the trio make friends with a primate named Chaka, their only ally in a world full of dinosaurs and other fantastic creatures."]
 },
 {
   name: "The Expendables 3",
   title: "The Expendables 3: New team. New attitude. New mission.",
   content: ["Barney, Christmas and the rest of the team comes face-to-face with Conrad Stonebanks, who years ago co-founded The Expendables with Barney. Stonebanks subsequently became a ruthless arms trader and someone who Barney was forced to killâ€¦ or so he thought. Stonebanks, who eluded death once before, now is making it his mission to end The Expendables -- but Barney has other plans. Barney decides that he has to fight old blood with new blood, and brings in a new era of Expendables team members, recruiting individuals who are younger, faster and more tech-savvy. The latest mission becomes a clash of classic old-school style versus high-tech expertise in the Expendablesâ€™ most personal battle yet."]
 },
 {
   name: "Point Break",
   title: "Point Break: The only law that matters is gravity",
   content: ["A young undercover FBI agent infiltrates a gang of thieves who share a common interest in extreme sports. A remake of the 1991 film, \"Point Break\"."]
 },
 {
   name: "Son of the Mask",
   title: "Son of the Mask: Who's next?",
   content: ["Tim Avery, an aspiring cartoonist, finds himself in a predicament when his dog stumbles upon the mask of Loki. Then after conceiving an infant son \"born of the mask\", he discovers just how looney child raising can be."]
 },
 {
   name: "In the Heart of the Sea",
   title: "In the Heart of the Sea: Based on the incredible true story that inspired Moby Dick",
   content: ["In the winter of 1820, the New England whaling ship Essex was assaulted by something no one could believe: a whale of mammoth size and will, and an almost human sense of vengeance.  The real-life maritime disaster would inspire Herman Melvilleâ€™s Moby Dick.Â  But that told only half the story.Â  â€œHeart of the Seaâ€ reveals the encounterâ€™s harrowing aftermath, as the shipâ€™s surviving crew is pushed to their limits and forced to do the unthinkable to stay alive.Â  Braving storms, starvation, panic and despair, the men will call into question their deepest beliefs, from the value of their lives to the morality of their trade, as their captain searches for direction on the open sea and his first mate still seeks to bring the great whale down."]
 },
 {
   name: "The Adventures of Pluto Nash",
   title: "The Adventures of Pluto Nash: Action's future has arrived...",
   content: ["The year is 2087, the setting is the moon. Pluto Nash, the high-flying successful owner of the hottest nightclub in the universe, finds himself in trouble when he refuses to sell his club to lunar gangster Mogan, who just happens to be helping the mysterious Rex Crater mastermind a plan to take over the entire moon."]
 },
 {
   name: "Green Zone",
   title: "Green Zone: Chief Warrant Officer Roy Miller is done following orders",
   content: ["During the U.S.-led occupation of Baghdad in 2003, Chief Warrant Officer Roy Miller and his team of Army inspectors were dispatched to find weapons of mass destruction believed to be stockpiled in the Iraqi desert. Rocketing from one booby-trapped and treacherous site to the next, the men search for deadly chemical agents but stumble instead upon an elaborate cover-up that threatens to invert the purpose of their mission."]
 },
 {
   name: "The Peanuts Movie",
   title: "The Peanuts Movie: The story of an underdog. And his dog.",
   content: ["Snoopy embarks upon his greatest mission as he and his team take to the skies to pursue their arch-nemesis, while his best pal Charlie Brown begins his own epic quest back home."]
 },
 {
   name: "The Spanish Prisoner",
   title: "The Spanish Prisoner: It's the oldest con in the book.",
   content: ["An employee of a corporation with a lucrative secret process is tempted to betray it. But there's more to it than that."]
 },
 {
   name: "The Mummy Returns",
   title: "The Mummy Returns: The most powerful force on earth is about to be unleashed by the two people who should know better.",
   content: ["Rick and Evelyn O'Connell, along with their 8 year old son Alex, discover the key to the legendary Scorpion King's might, the fabled Bracelet of Anubis. Unfortunately, a newly resurrected Imhotep has designs on the bracelet as well, and isn't above kidnapping its new bearer, Alex, to gain control of Anubis' otherworldly army."]
 }
];

export default articles;