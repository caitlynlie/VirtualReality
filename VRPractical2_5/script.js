/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/



/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/


    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
 
let maze = [
  "xxx---xxx------xxx---xxxxxx",
  "xxx---x-x------x-x-------xx",
  "xx-----x-x--------x-----xx",
  "xx-xx--xxx-xx-xx--xxx-xx-xx",
  "x-----x---x--x---x-----x-x",
  "x-xxx-xxx-x-xxx-xxx-xxx-x-x",
  "x-x-----x-x-----x-x-----x-x",
  "x-x-xxx-x-xxx-xxx-x-xxx-x-x",
  "x-x-x---x-x---x-x-x-x---x-x",
  "x-xxx-x-xxx-xxx-x-xxx-x-xxx",
  "x-----x-x-----x-x-----x---x",
  "xxx-xxx-x-xxx-xxx-xxx-xxx-x",
  "x--------x-----x--------x-x",
  "xxxxxxxxxxxxxxxxxxxxxx---x-x"  // exit at bottom-right
];


let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Wall(c,1,r)
      }
      
    }

  }

})
