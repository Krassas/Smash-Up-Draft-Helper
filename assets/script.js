var sets = [
    ['Aliens','Dinosaurs','Ninjas','Pirates','Robots','Tricksters','Wizards','Zombies'],
    ['Bear Cavalry','Ghosts','Killer Plants','Steampunks'],
    ['Elder Things',' Innsmouth', 'Minions of Cthulhu','Miskatonic University'],
    ['Cyborg Apes','Shapeshifters','Super Spies','Time Travelers'],
    ['Giant Ants','Mad Scientists','Vampires','Werewolves'],
    ['Fairies','Kitty Cats','Mythic Horses','Princesses'],
    ['Geeks'],
    ['Clerics','Dwarves','Elves','Halflings','Mages','Orcs','Thieves','Warriors'],
    ['Dragons','Mythic Greeks','Sharks','Superheroes','Tornados'],
    ['Astroknights','Changerbots','Ignobles','Star Roamers'],
    ['Explorers','Grannies','Rock Stars','Teddy Bears'],
    ['Smash Up All Stars'],
    ['Itty Critters','Kaiju','Magical Girls','Mega Troopers'],
    ['Sheep'],
    ['Disco Dancers','Kung Fu Fighters','Truckers','Vigilantes'],
    ['Geeks','Smash Up All Stars'],
    ['Ancient Egyptians','Cowboys','Samurai','Vikings'],
    ['Luchadors','Mounties','Musketeers','Sumo Wrestlers'],
    ['Penguins'],
    ['Anansi Tales','Ancient Incas','Grimms Fairy Tales','Polynesian Voyagers','Russian Fairy Tales']
];
/*When a new set comes out: 
1.put it on the list on the html document
2.put it in sets array
3.put a new item in items array
4.go to getRandomFaction() and increase the number that multiplies mathfloor by 1
*/
// used with the sets array
var item = [
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item'
];

//stores the choices given to players, so that each player gets different choices
var empty = [];

//stores the factions players don't choose that will be passed on to the next player
var passOn = [];

//number of players and factions
var numPlayers = 0;
var numFactions = 0;

//used with choose function
var on = 0;

//factions are passed clockwise or counterclockwise
var clockwise = true;

//check number of players
function check(event) {
    if (document.getElementById('2-players').checked) {
        document.querySelector(".player3").classList.add('disable'); 
        document.querySelector(".player4").classList.add('disable'); 
        
    } else if (document.getElementById('3-players').checked) {
        document.querySelector(".player3").classList.remove("disable");
        document.querySelector(".player4").classList.add('disable'); 
       
    } else {
        document.querySelector(".player3").classList.remove("disable");
        document.querySelector(".player4").classList.remove("disable");
        
    }
}

//return number of players
function reNumPlayers() {
    if (document.getElementById('2-players').checked) {
        return numPlayers = 2;
    } else if (document.getElementById('3-players').checked) {
        return numPlayers = 3;
    } else {
        return numPlayers = 4;
    }
}

//check number of factions
function factionNumber(event){
    if (document.getElementById('2-decks').checked) {
        for(var i=1; i<5; i++){
            for(var y = 3; y<5; y++){
                document.querySelector('.p'+ i +'random' + y).classList.add('disable');
                document.querySelector('.p'+ i +'random' + y).classList.remove('required');
            }
        }
        
    } else if (document.getElementById('3-decks').checked) {
        for(var i=1; i<5; i++){
            document.querySelector('.p'+ i +'random3').classList.remove('disable');
            document.querySelector('.p'+ i +'random3').classList.add('required');
            document.querySelector('.p'+ i +'random4').classList.add('disable');
            document.querySelector('.p'+ i +'random4').classList.remove('required');
        }
       
    } else {
       for(var i=1; i<5; i++){
        for(var y = 3; y<5; y++){
            document.querySelector('.p'+ i +'random' + y).classList.remove('disable');
            document.querySelector('.p'+ i +'random' + y).classList.add('required');
        }
       }
      
    }
}

//return number of factions
function reNumFactions() {
    if (document.getElementById('2-decks').checked) {
        return numFactions = 2;
    } else if (document.getElementById('3-decks').checked) {
        return numFactions = 3;
    } else {
        return numFactions = 4;
    }
}

//event listener on sets button
document.querySelector(".factions").addEventListener('click', function() {
    document.querySelector(".sets").classList.toggle("disable");
    document.querySelector(".generate").classList.toggle("disable");
});

// add or remove sets
function changeArray(event, x, y) {
    x.classList.toggle('greyout'); 
    
    if (x.classList.contains('greyout')){
        // remove items from sets array and save their position
        var deletedPosition = {set: sets.splice(y,1)[0], index:y};
        // put a string in that position to keep the array size
        sets.splice(deletedPosition.index,0,'item');
        // put that item in the same position at other array
        item.splice(deletedPosition.index,1,deletedPosition.set);
    
    } else {
        // remove item from item array and save their position
        var otherPosition = {other: item.splice(y,1)[0], index:y};
        // put back the original item
        item.splice(otherPosition.index,0,'item');
        // put back removed items in the same position at sets array
        sets.splice(otherPosition.index,1,otherPosition.other);
    }
}

//randomize factions
function getRandomFaction() {
    do{
    var x = Math.floor(Math.random() * 20);
    var y = Math.floor(Math.random() * 8);
    var z = sets[x][y];
    }
    while(z === 'item' || typeof z == 'undefined' || z.length == 1 || empty.includes(z));
    //stores factions chosen to make sure each player gets a different one
    empty.push(z);
    return z;
  }

// put event listener on radio buttons that check player number
window.addEventListener('load', function() {
    for (var i = 2; i < 5; i++) {
        document.getElementById(i + '-players').addEventListener('click', check.bind(null, event));
    }
});

// put event listener on radio buttons that check faction number
window.addEventListener('load', function() {
    for (var i = 2; i < 5; i++) {
        document.getElementById(i + '-decks').addEventListener('click', factionNumber.bind(null, event));
    }
});  

// put event listener on all the li elements
window.addEventListener('load', function() {
    var listElement = document.getElementsByTagName('li');
    for (var i = 0; i < listElement.length; i++) {
      listElement[i].addEventListener('click', changeArray.bind(null, event, listElement[i], i));
    }
});

// event listener to faction choice  
window.addEventListener('load', function() {  
    for(var i=1; i<5; i++){
        for(var y=1; y<5; y++){
            document.querySelector('.p'+i+'random'+y).addEventListener('click', choose.bind(null, event, i, y));          
        }
    }
});  

//highlight player choice
function choose(event, x, z){
    if(on==1){
        for(var i=2; i<5; i++){
            document.querySelector('.p'+x+'random'+i).classList.remove('secondchoice');
        }  
        if(z!=1){
            document.querySelector('.p'+x+'random'+z).classList.add('secondchoice');
        } 
    }else{
        for(var i=1; i<5; i++){
            document.querySelector('.p'+x+'random'+i).classList.remove('hightlight','low');
        }       
        document.querySelector('.p'+x+'random'+z).classList.add('hightlight','low');
    }
}

//Proceeds to next draft round
function nextDraftRound(){
    document.querySelector('.ready').textContent = 'Ready';
        empty = [];
        for(var i=1; i<=numPlayers; i++){      
            for(var y=1; y<=numFactions; y++){
                document.querySelector('.p'+i+'random'+y).classList.remove('low');
                document.querySelector('.p'+i+'random'+y).classList.remove('hightlight');
                document.querySelector('.p'+i+'random'+y).classList.remove('secondchoice');
                document.querySelector('.p'+i+'random'+y).classList.remove('disable');
            }
        }
        // gives players new factions
        giveFactionsNames();
        //to be used with choose function
        on = 0;
        clockwise = !clockwise;

}

//second choice made by players
function secondPick() {
    for(var i=1; i<=numPlayers; i++){      
        for(var y=2; y<=numFactions; y++){     
            if( document.querySelector('.p'+i+'random'+y).classList.contains('secondchoice')){
                var faction = document.querySelector('.p'+i+'random'+y).textContent;
                removeFaction(faction);            
            } else {
                document.querySelector('.p'+i+'random'+y).classList.add('disable');
            }       
        }
    } 
    document.querySelector('.ready').textContent = 'Next Round'; 
}

//first choice made by players
function firstPick(){
    for(var i=1; i<=numPlayers; i++){      
        for(var y=1; y<=numFactions; y++){     
            if( document.querySelector('.p'+i+'random'+y).classList.contains('hightlight')){
                var faction = document.querySelector('.p'+i+'random'+y).textContent;
                removeFaction(faction);            
            } else {   
                // Put the rest of the factions in an array so that you can cycle them to the other players
                var text = document.querySelector('.p'+i+'random'+y).textContent;
                passOn.push(text);         
            }
            document.querySelector('.p'+i+'random'+y).classList.remove('hightlight');
            document.querySelector('.p'+i+'random'+y).classList.remove('low');
        }           
        //Put first choice at the start
        document.querySelector('.p'+i+'random'+1).textContent = faction;
        document.querySelector('.p'+i+'random'+1).classList.add('hightlight');
        
    }
}

function rearrangeArray(){
    //Monkey Patching
    Array.prototype.move = function (from, to) {
        this.splice(to, 0, this.splice(from, 1)[0]);
    };

    // rearrange the array so that the factions are cycled clockwise or counterclockwise
    if(clockwise){
        if(numPlayers==3){
            if(numFactions==2){
                passOn.move(1,0);
            }
            else if(numFactions==3){
                passOn.move(2,0);
                passOn.move(3,1);
            }else{
                passOn.move(3,0);
                passOn.move(4,1);
                passOn.move(5,2)
            }
        } else if(numPlayers==4){
            if(numFactions==2){
                passOn.move(2,0);
                passOn.move(2,1);
            }else if(numFactions==3){
                passOn.move(4,0);
                passOn.move(5,0);
                passOn.move(4,2);
                passOn.move(5,2);
            }else {
                passOn.move(6,0);
                passOn.move(7,0);
                passOn.move(8,0);
                passOn.move(6,3);
                passOn.move(7,3);
                passOn.move(8,3);
            
            }
        }
    } else {
        if(numPlayers == 3){
            if(numFactions==2){
                passOn.move(2,1);
            }
            else if(numFactions==3){
                passOn.move(4,2);
                passOn.move(5,3);
            }else{
                passOn.move(6,3);
                passOn.move(7,4);
                passOn.move(8,5)
            }
  
        } else if(numPlayers == 4){
            if(numFactions==2){
                passOn.move(3,1);
                passOn.move(3,2);
            }else if(numFactions==3){
                passOn.move(6,2);
                passOn.move(7,3);
                passOn.move(6,4);
                passOn.move(7,5);
            }else {
                passOn.move(9,3);
                passOn.move(10,4);
                passOn.move(11,5);
                passOn.move(9,6);
                passOn.move(10,7);
                passOn.move(11,8);
            
            }

        }

    }

}

//pressed when all players have chosen
document.querySelector('.ready').addEventListener('click', function(){
    
    //proceeds to next draft round
    if(document.querySelector('.ready').textContent == 'Next Round'){
        nextDraftRound();
    //second round of choices    
    }else if(numPlayers==document.querySelectorAll('.secondchoice').length){
        secondPick();
    } 
    //first round of choices          
    else if(numPlayers==document.querySelectorAll('.low').length){
        firstPick();
        rearrangeArray();
    
        //Rotate the unused factions 
        for(i=1; i<=numPlayers; i++){
            for(y=2; y<=numFactions; y++){ 
               document.querySelector('.p'+i+'random'+y).textContent = passOn.pop(); 
            }
        }
        //to be used with choose function
        on = 1;
} 
 else {
    alert('All players must choose a faction');
}
});

//Find where the faction is on the array and remove it
function removeFaction(param){
    for(var i=0; i<sets.length; i++){
        var index = sets[i].indexOf(param);
        if(index > -1){
            //array[row].splice(column, x);
            sets[i].splice(index,1);
        }
    }
}

//give players factions and pass names
function giveFactionsNames(){
    for (i=1; i<5; i++){
        var text = document.querySelector('.player'+ i).value;
        document.querySelector('.p' + i).textContent = text;
        if(document.querySelector('.player' + i).classList.contains('disable')){
            document.querySelector('.p' + i).classList.add('disable');
            document.querySelector('.pf' + i).classList.add('disable');
            document.querySelector('.pf' + i).classList.remove('required');
        }
        //Give players factions
        if(document.querySelector('.pf' + i).classList.contains('required')){            
            for(var y=1; y<5; y++){
                if(document.querySelector('.p'+ i +'random' + y).classList.contains('required')){             
                var assign = getRandomFaction();
                document.querySelector('.p'+ i +'random' + y).textContent = assign;  
                }      
            }
        }
    } 
}

// event listener on start button
document.querySelector(".generate").addEventListener('click', function() {

    reNumPlayers();
    reNumFactions();

    var myRows = document.querySelectorAll(".row");
    for (var i = 0; i < myRows.length; i++) {
        myRows[i].classList.toggle('disable');
      }
    //Put player names and give them factions
    giveFactionsNames();
    
});

//not the best way to start new game
document.querySelector('.play-again').addEventListener('click', function(){
    window.location.reload();
});


