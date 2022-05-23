let color = "black"; //Im dumb by making this a global variable it can be changed WTF   
const buttonBlack = document.querySelector('.black');
const buttonInvert = document.querySelector('.invert');
const buttonErase = document.querySelector('.erase');
const buttonOpacity = document.querySelector('.opacity'); //needs to be a slider
let buttonRandom = document.querySelector('.random');
const buttonReset = document.querySelector('.reset');



//reveiw the whole script!!
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
        box.addEventListener('mouseover', colorSquare); //change this such that when they start clicking and hold they can mousever, whenthey stop holding then stop mouseover
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

sizeIndicator(16); //by having this as a constant it is the default box before getting resized

function colorSquare(){

    this.style.backgroundColor = color;

    // buttonReset.addEventListener('click', () =>{
    //     this.style.backgroundColor = "white";
    // }) //this one actually resets

    // buttonClick();
}

function buttonClick(){

    buttonBlack.addEventListener('click', ()=>{
        color = "black";
    })

    buttonErase.addEventListener('click', () => {
        color = "white";
    })


    // this.style.backgroundColor = "green"; //figured out how to make sure it reamins green after clciking option
    // buttonInvert;
    // buttonOpacity;
    // buttonRandom;
    
}

buttonClick();



