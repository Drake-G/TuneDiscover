//recommendation = albums[Math.floor(Math.random() * albums.length)];
var vinylLink = document.getElementById("vinylLink");
var link = document.getElementById("link");
var spotify = document.getElementById("spotify");
var cover = document.getElementById("cover");
var year = document.getElementById("year");
document.getElementById("newTunes").addEventListener("click", function() {
    recommendation = albums[Math.floor(Math.random() * albums.length)];
    document.getElementById("recommendation").innerHTML = "Your new album - " + recommendation;
    if (recommendation === "Pink Floyd: Dark Side of the Moon") {
      var a = document.createElement('a');
      vinylLink.innerHTML = "Get the Dark Side of the Moon Vinyl on Amazon";
      a.appendChild(vinylLink);
      a.href = "https://www.amazon.com/Dark-Side-Moon-Pink-Floyd/dp/B01LTHN0DG/ref=sr_1_4?dchild=1&keywords=dark+side+of+the+moon&qid=1622933517&sr=8-4"
      a.title = "Dark Side Link";
      document.body.appendChild(a);
  
      spotify.innerHTML = '<iframe src="https://open.spotify.com/embed/album/4LH4d3cOWNNsVw41Gqt2kv" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

      year.innerHTML = "This album was released in 1973 and has a runtime of 42 minutes and 53 seconds.";
    }
    if (recommendation === "Led Zeppelin: Houses of the Holy") {
      vinylLink = "Get the Vinyl on Amazon"
    }
    
    /*|| recommendation === "Led Zeppelin: Houses of the Holy" || 
    recommendaton === "Greta Van Fleet: The Battle at Gardens Gate" || recommendation === "Dua Lipa: Future Nostalgia (Moonlight Edition)" 
    || recommendation === "Polyphia: New Levels, New Devils"  || recommendation === "ACDC: Back in Black"  || recommendation === "Adele: 21" 
    || recommendation === "AMFM: Syphonic Funk Box"  || recommendation ===  "Guns N Roses: Appetite for Destruction" 
    || recommendation === "Medusa's Disco: Orphic Grimore" || recommendation === "Miley Cyrus: Plastic Hearts" || recommendation === "Gustav Host: The Planets"
    || recommendation === "Olivia Rodrigo: Sour"  || recommendation === "Billie Eilish: WHEN WE FALL ASLEEP WHERE DO WE GO" || recommendation === "The Beatles: Revolver"
    || recommendation ===    || recommendation ===    || recommendation ===    || recommendation === 
    
    */
    
    

        
});


var albums = ["Pink Floyd: Dark Side of the Moon", /*"Led Zeppelin: Houses of the Holy", "Greta Van Fleet: The Battle at Gardens Gate", "Dua Lipa: Future Nostalgia (Moonlight Edition)", "Miley Cyrus: Plastic Hearts",
"Polyphia: New Levels, New Devils", "ACDC: Back in Black", "Adele: 21", "AMFM: Syphonic Funk Box", "Guns N Roses: Appetite for Destruction", "Medusa's Disco: Orphic Grimore", "Gustav Host: The Planets", "Olivia Rodrigo: Sour",
"Billie Eilish: WHEN WE FALL ASLEEP WHERE DO WE GO", "The Beatles: Revolver", "Goose: Shenanigans Nite Club", "WILLOW: WILLOW", "Tame Impala: The Slow Rush", "Beabadoobee: Fake It Flowers", "Panic! At The Disco: Pretty. Odd.",
"Panic! At The Disco: Death of a Bachelor", "Twenty One Pilots: Trench", "Babe Rainbow: Changing Colours", "St. Vincent: Daddy's Home", "Audioslave: Audioslave", "Jack White: Boarding House Reach", "Ashe: Ashlyn",
"Dirty Honey: Dirty Honey", "FINNEAS: Blood Harmony(Deluxe)", "Plini: Impulse Voices", "The Cars: The Cars", "Covet: effloresce", "Too Many Zooz: Subway Gawdz", "Jessie Ware: What's Your Pleasure", "Khun Narin: II",
"Jain: Zanka(Deluxe)", "Tommy Emanuel: The Best of Tommysongs", "Peter Frampton: Frampton Comes Alive!", "Frankie and the Witch Fingers: Monsters Eating People Eating Monsters", "Parcels: Live Vol. 1", "Goose: Moon Cabin", 
"Nazareth: Hair Of The Dog", "Deep Purple: Machine Head", "Mike Oldfield: Tubular Bells", "Led Zeppelin: Coda(Deluxe Edition)", "King Gizzard & The Lizzard Wizard: I'm In Your Mind Fuzz", "King Gizzard & The Lizard Wizard: Infest The Rats' Nest",
"Greta Van Fleet: From The Fires", "Chon: Chon", "The Beatles: Let It Be", "The Beatles: Abbey Road", "Polyphia: The Most Hated", "Aerosmith: Aerosmith", "Aerosmith: Permanent Vacation", "Amy Winehouse: Back to Black", "Arctic Monkeys: Favourite Worst Nightmare", 
"Arctic Monkeys: Tranquility Base Hotel & Casino", "Ballyhoo!: Daydreams", "The Beach Boys: Pet Sounds", "Beastie Boys: Licensed to Ill", "The Beatles: Rubber Soul", "The Beatles: Sgt. Pepper's Lonely Hearts Club Band",
"Bilie Eilish: dont smile at me", "Billy Joel: The Stranger", "Billy Joel: 52nd Street", "Billy Joel: River of Dreams", "The Black Keys: 'Let's Rock'", "Black Sabbath: Black Sabbath", "Black Sabbath: Master of Reality", "Black Sabbath: Paranoid", "BORNS: Dopamine", 
"Cage the Elephant: Melophobia", "Cage the Elephant: Socail Cues", "Childish Gambino: 'Awaken, My Love!'", "The Claypool Lennon Delirium: South of Reality", "Coldplay: Everyday Life", "Cream: Disraeli Gears",
"The Cult: Sonic Temple", "The Cure: Kiss Me, Kiss Me, Kiss Me", "David Bowie: Blackstar", "David Bowie: The Rise and Fall of Ziggy Stardust", "Dispatch: Bang Bang", "The Struts: Everybody Wants", "Edward Sharpe & The Magnetic Zeroes: Up from Below",
"Electric Light Orchestra: Out of the Blue", "Fall Out Boy: American Beauty/American Psycho", "Fleetwood Mac: Rumours", "Foo Fighters: The Colour and the Shape", "Foo Fighters: Foo Fighters", "Frankie and the Witch Fingers: Brain Telephone", "Grace Potter: Daylight", 
"Green Day: American Idiot", "Harry Styles: Fine Line", "The Honeydrippers: The Honeydrippers", "I DONT KNOW HOW BUT THEY FOUND ME: RAZZMATAZZ", "I DONT KNOW HOW BUT THEY FOUND ME: 1981 Extended Play",
"INXS: Kick", "INXS: X", "Jack Johnson: In Between Dreams", "Jack White: Lazaretto", "Jacob Collier: Djesse Vol. 3", "Jet: Get Born", "The Jimi Hendrix Experience: Are You Experienced",
"King Gizzard & The Lizard Wizard: Flying Microtonal Banana", "Le Butcherettes: bi/MENTAL", "Led Zeppelin: In Through the Out Door", "Led Zeppelin: Led Zeppelin", "Led Zeppelin: Led Zeppelin II", 
"Led Zeppelin: Led Zeppelin III", "Led Zeppelin: Led Zeppelin IV", "Led Zeppelin: Physical Graffiti", "Led Zeppelin: Presence", "Lorde: Melodrama", "Lorde: Pure Heroine", "Maroon 5: Songs About Jane", 
"Men At Work: Business As Usual", "Metallica: Kill 'Em All", "Metallcia: Master of Puppets", "Metallica: Ride the Lightning", "The Stokes: The New Abnormal", "Nine Inch Nails: Pretty Hate Machine",
"Oliver Tree: Ugly is Beautiful", "The Paper Kites: Woodland - EP", "Pink Floyd: Wish You Were Here", "Pink Floyd: The Wall", "Queen: Sheer Heart Attack", "The Raconteurs: Broken Boy Solier",
"The Raconteurs: Consolers of the Lonely", "The Raconteurs: Help Us Stranger", "Rage Against the Machine: Rage Against the Machine", "Rage Against the Machine: Evil Empire", "Red Hot Chili Peppers: The Getaway", 
"Red Hot Chili Peppers: Californication", "The Rolling Stones: Hot Rocks 1964-1971", "Rush: Rush", "Rush: The Spirit of Radio", "Supertramp: Crime of the Century", "The Sweet: Desolation Boulevard", 
"Tame Impala: Currents", "Them Crooked Vultures: Them Crooked Vultures", "Van Halen: Van Halen", "The White Stripes: Elephant", "The White Stripes: Icky Thump", "The White Stripes: White Blood Cells", 
"The Who: Who's Next",*/];
//recommendation = albums, [Math.floor(Math.random() * albums.length)];
console.log(albums.length)