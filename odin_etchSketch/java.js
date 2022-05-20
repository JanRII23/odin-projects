const board = document.querySelector(".flex-container");

function makeGrid(){
    for (let i = 0; i < 16; i++){
      const row = board.appendChild(document.createElement('div'));

        for (let j = 0; j < 16; j++){
            const square = document.createElement('div');
            square.className = 'box';
            row.appendChild(square);
        }
     
    }
}



function main(){
    board.addEventListener('click', () => {
        makeGrid();
    });
  
}

main();