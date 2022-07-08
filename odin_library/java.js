// take user input for title, author, pages, read or Not
// implement js for the button tomorrow
// each book gets added as a card or in a table
// 2 buttons on each card read/not read and remove

//just need to work on action validation when sumbitting form to reflect on html

const button_div = document.querySelector(".addButton");
const popUp_div = document.querySelector(".popUp");
const newBook_btn = document.querySelector(".btn");

let myLibrary = [];
let newBook;

//Book Constructor
class Book{
    constructor(title, author, pages, read) { //make sure the naming convention are the same in order for shorthand getting form values
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value + ' pgs';
        this.read = form.read.value;
    }
}

function addBookToLibrary(){

    function setAction(form){
        form.action = "index.html";
        alert(form.action);
        return false;
    }

    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    // setData();
    render();
    form.reset();
}

function render(){
    const show = document.querySelector(".newBooks");
    const books = document.querySelectorAll(".book");
    books.forEach(book => show.removeChild(book));

    for (let i = 0; i < myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

function createBook(item){
    const shelf = document.querySelector(".newBooks");
    const bookDiv = document.createElement('div');
    
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pageDiv = document.createElement('div');

    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    bookDiv.classList.add('book');;
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('readBtn');
    bookDiv.appendChild(readBtn);

    if(item.read === false){
        readBtn.textContent = "Not Read";
        readBtn.style.backgroundColor = "red";
    }else{
        readBtn.textContent = "Read";
        readBtn.style.backgroundColor = "green";
    }

    shelf.appendChild(bookDiv);

}

//setting up Library to be stored locally 

//pulls books from local storage when page is refreshed



function openBook(){
   popUp_div.style.display = "block";

   newBook_btn.addEventListener('click', () =>{
    addBookToLibrary();
    })

    
}

function closeBook(){
    popUp_div.style.display = "none";
}

function main(){
    button_div.addEventListener('click', () => {
        openBook();
    
    })
    // event.preventDefault();
   
}

main();

