let color = "black"; 
let click = false;
const buttonBlack = document.querySelector('.black');
const buttonInvert = document.querySelector('.invert');
const buttonErase = document.querySelector('.erase');
let buttonRandom = document.querySelector('.random');
const buttonReset = document.querySelector('.reset');
const buttonFullRandom = document.querySelector('.fullRandom');

function createGrid(size){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let val = size * size;
    for (let i = 0; i < val; i++){
        let box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('mouseover', colorSquare); 
        box.style.backgroundColor = 'white';
        board.appendChild(box);
    }

}   

function sizeIndicator(userInput){
    if (userInput >= 2 && userInput <= 100){
        createGrid(userInput);
        
    }
    else{
        console.log("Size too large");
    }
  


   
}

function colorSquare(){

    if (click == true){

    if (color === "fullRandom"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } 
    else{
        this.style.backgroundColor = color;
    }

    }

    buttonReset.addEventListener('click', () =>{
        this.style.backgroundColor = "white";
    }) 

}

function buttonClick(){

    buttonBlack.addEventListener('click', ()=>{
        color = "black";
    })

    buttonErase.addEventListener('click', () => {
        color = "white";
    })

    buttonRandom.addEventListener('click', () =>{
        color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    })

    buttonInvert.addEventListener('click', () => {
        invertBoard();
    })

    
    buttonFullRandom.addEventListener('click', () => {
        color = "fullRandom";
    })

    // this.style.backgroundColor = "green"; //figured out how to make sure it reamins green after clciking option
    // buttonOpacity; //needs to be a slider
    
    
}

function invertBoard(){
    let board = document.querySelector(".board");
    const elements = board.querySelectorAll('.box');
    elements.forEach(x => x.classList.toggle('active'));
    
}

function startDraw(){
    click = true;
}

function main(){
    sizeIndicator(16); //by having this as a constant it is the default box before getting resized
    buttonClick();

    document.querySelector("body").addEventListener('click', ()=>{
        click = !click;
    })
}

main();



// main takeaways
//  1. Do not forget about the usefulness of global variables. Using let allows you to mutate variables (reassign them)
//  2. Practice doing the function main() to keep code organized and cacheing the DOM
//  3. the invertBoard() function is an important example of selecting javascripted DIVS
//  4. Future change drawing such that when they start clicking and hold they can mousever, whenthey stop holding then stop mouseover to stop drawing
            // I didn't think you could even do that in the main function doing click = !click CRAZY
// 5. reset.css should be a staple whenever creating website in that it standardizes to all web browsers
//    6. whenever you click the features it should turn green and whenever clicking again it turns off
//   7. practice the commas and separating into new lines


//Improvements later add colors in each button, add error when setting such a big size, mode to see if currently drawing, adding a opacity slider, instead of drawing in squares i could change the shape to circle etc.


