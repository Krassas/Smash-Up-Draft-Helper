# Smash Up Draft Helper
An aid for the smash up board game that facilitates it being played in draft mode. It is developed using HTML, CSS and Javascript.

# Origin & Goals
Normaly the board game is played as follows: Each player randomly chooses two factions(each faction consists of a twenty card deck), combines them and then plays against the others. My friends and I like to play it differently, we draft it, meaning each player randomly chooses three factions, picks one, then passes the rest clockwise to the next player, who then picks one of the other two.I decided to make this website in order to facilitate this mode of play.

# Development
The main functionality of the site is achieved through Javascript. The development for this project included the use of DOM manipulation techniques, event listeners, loops/iteration and arrays. The JavaScript file has comments describing what is happening, but essentially this is what happens:

1.The user selects how many players they want in their game(min two and max four).<br/>
2.The computer then displays the appropriate number of input fields for users to write their names.<br/>
3.The user decides how many decks per player they want(min two, max four).<br/>
4.The user decides which expansions they want to disable by clicking the sets button and choosing the expansion they want to disable, if they change their mind, by clicking again they can enable it.<br/>
5.The user presses the start button.<br/>
6.The computer, according to the users choices that have been made, displays for each user the appropriate number of factions, excluding the ones from the expansions that have been disabled.<br/>
7.After each players chooses the factions they want, they press the ready button(if the button is pressed before every player has made a choice, then it displays a message saying each player must choose).<br/>
8.After the first round of choices has been made, then the unchoosed factions are rotated clockwise and the second round of choices is made.<br/>
9.Then there is the choice of next round or new game.<br/>
10.If they choose next round the factions each one had chosen is removed from the pool of possible choices and they are presented with new factions.Afterwards the steps 6 through 9 are repeated.<br/>
11.If they choose new game everything is reset.

# Design
![draft helper](https://user-images.githubusercontent.com/57803526/71412878-441dc280-2658-11ea-95f2-bd81a2129078.PNG)<br/>
If no player names are given it keeps the default values, player 1, player 2 ...<br/>
if the sets button is pressed it displays the expansions like this:<br/>
![sets](https://user-images.githubusercontent.com/57803526/71413095-46cce780-2659-11ea-92c1-a6f031ca9c32.PNG)<br/>
if one of them is pressed it's color turns grey and it's factions get removed from the choice pool.If it gets pressed again it goes back to its original color and it's availabe again as a choice.<br/>
The faction choice screen is as follows:<br/>
![player choice](https://user-images.githubusercontent.com/57803526/71413309-3a955a00-265a-11ea-8da4-289e96ec50f0.PNG)<br/>
The first choice is highlighted green, the second red.<br/>
After both choices have been made the text on the ready button turns to next round, and if pressed it gives players new choices and it turns to ready again.

# Improvements to be Made
There is no back-end functionality, there could be an option to store players names and preferences, as well as to keep score.<br/>
The UI was made with mobile devices in mind and doesn't scale well in larger screens.
