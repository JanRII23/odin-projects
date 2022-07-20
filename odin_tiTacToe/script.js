//need one of something use a module
//need multiple of something use a factory

//Cache the DOM

//pay attention to how the divs are being appended to each other after being created
const gameBoardModule = (function(){
    'use strict';
    const gameBoard_div = document.querySelector(".gameBoard");
    const board = document.createElement('div');
    gameBoard_div.appendChild(board).className = "board";
    const gameBoardArray = [];

    function makePrivateGrid(rows, cols){
        for (let i = 0; i < (rows * cols); i++){
            let cell = document.createElement("div");
            // cell.innerText = (i+1);
            board.appendChild(cell).className = "box";
            cell.addEventListener('click', boxClicked);
            //notice how I've query a cell after being created
        };
    };

    return{
        publicMethod: function(){
            makePrivateGrid(3,3);
        }
    };

}) ();

//carefully read what is going on in here and the logic to figure out how the array deduction is solved
const boxClicked = (e) =>{
    'use strict';
    const spaces = [];
    const tick_circle = 'O';
    const tick_x = 'X';
    let player = tick_circle;
    const text = document.querySelector('#heading');

    const id = e.target.id;
    if(!spaces[id]){
        spaces[id] = player;
        e.target.innerText = player;
        
        if(playerWon()){
            text.innerText = `${player} has won!`;
            restart();
            return;
        }

        if(playerDraw()){
            return;
        }

        player = player === tick_circle ? tick_x : tick_circle;
    }
}


function main(){

    gameBoardModule.publicMethod();

}

main();