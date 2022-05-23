const board_div = document.querySelector(".flex-container");

function makeGrid(){
    for (let i = 0; i < 20; i++){
      let row = board_div.appendChild(document.createElement('div'));

        for (let j = 0; j < 20; j++){
            let col = document.createElement('div');
            col.className = 'box';
            row.appendChild(col);
        }
     
    }
    const boxes_div = document.querySelectorAll(".box");

}

function changeColor(){
    boxes_div.classList.toggle('active')

}

boxes_div.addEventListener('click', () =>{
    changeColor();
})


function main(){
    makeGrid();
   
}

main();


