// take user input for title, author, pages, read or Not
// implement js for the button tomorrow
// each book gets added as a card or in a table
// 2 buttons on each card read/not read and remove

const button_div = document.querySelector(".addButton");
const popUp_div = document.querySelector(".popUp");

let myLibrary = [];

function Book(){

}

function addBookToLibrary(){

}

function openBook(){
   popUp_div.style.display = "block";
    
}

function closeBook(){
    popUp_div.style.display = "none";
}

function main(){
    button_div.addEventListener('click', () => {
        console.log("Hello");

        openBook();
        // Book();
        // addBookToLibrary();
    })
   
}

main();