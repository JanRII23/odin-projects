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
        box.style.backgroundColor = 'red';
        board.appendChild(box);
    }
}

function sizeIndicator(userInput){
    createGrid(userInput);
}

sizeIndicator(16); //by having this as a constant it is the default box before getting resized

