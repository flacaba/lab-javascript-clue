// Characters

var mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
}


var drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:       "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist"
}


var rofPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
}


var missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
}

var mrsPeacock ={
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
}


var mrMustard ={
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"   
}


/*
// Weapons

name: rope , weight: 10
name: knife , weight: 8
name: candlestick , weight: 2
name: dumbbell , weight: 30
name: poison , weight: 2
name: axe , weight: 15
name: bat , weight: 13
name: trophy , weight: 25
name: pistol , weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

// Characters Collection
var charactersArray = [mrGreen,drOrchid,rofPlum,missScarlet,mrsPeacock,mrMustard];

// Rooms' Collection
var roomsArray = [{name: "Dinning Room"},{name: "Conservatory"},{name:"Kitchen"},{name: "Study"},{name: "Library"},
{name: "Billiard Room"},{name: "Lounge"},{name: "Ballroom"},{name: "Hall"},{name: "Spa"},
{name: "Living Room"},{name: "Observatory"},{name: "Theater"},{name: "Guest House"},{name: "Patio"}];

// Weapons Collection
var weaponsArray = [{name: "rope" , weight: 10},{name: "knife" , weight: 8},{name: "candlestick" , weight: 2},
{name: "dumbbell" , weight: 30},{name: "poison" , weight: 2},{name: "axe" , weight: 15},{name: "bat" , weight: 13},
{name: "trophy" , weight: 25},{name: "pistol" , weight: 20}];

function randomSelector (arr) {
  var long;
  if ( arr =="undefined" || !arr) {
  } else {
    long = arr.length;
    var randomPosition = Math.floor(Math.random()*long);
    return arr[randomPosition]; 
  }

}
 var misteryEnvelope=[];

 function pickMistery () {
   misteryEnvelope =[randomSelector(charactersArray),randomSelector(weaponsArray),randomSelector(roomsArray)];
   return misteryEnvelope 
 }

 function revealMistery (arr) {
   return arr[0].first_name + " " + arr[0].last_name + " killed Mr.Boddy using the " + arr[1].name + " in the " + arr[2].name + "!!!!"  
  }


/* function pickMistery(arr){
  if (arr === charactersArray) {
    misteryEnvelope.unshift(randomSelector(arr));
    
  } else {
    misteryEnvelope.push(randomSelector(arr));
    
  }
  return misteryEnvelope;
}
*/
