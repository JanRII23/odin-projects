// take user input for title, author, pages, read or Not
// implement js for the button tomorrow
// each book gets added as a card or in a table
// 2 buttons on each card read/not read and remove

//make notes about the library project simulator

const button_div = document.querySelector(".addButton");
const popUp_div = document.querySelector(".popUp");
const newBook_btn = document.querySelector(".btn");
// const closePopUp_div = document.querySelector(".btn.cancel");

//Book Constructor
class Book{
    constructor(title, author, pages, readCheck){
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value;
        this.read = form.readCheck.checked;
    }
}

let myLibrary = [];
let newBook;

// function Book(){

// }

function addBookToLibrary(){
    // closePopUp_div.style.display = 'none';
    closeBook();
    newBook = new Book(title, author, pages, readCheck);
    myLibrary.push(newBook); // works like a dynamic array?
    setData();
    render();
    form.reset();

}

function render(){
    const display = document.querySelector('newBooks');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChilde(book));
    
    for (let i = 0; i < myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

function createBook(item){
    const library = document.querySelector('.newBooks');
    const books_div = document.createElement('div');
    const title_div = document.createElement('div');
    const auth_div = document.createElement('div');
    const page_div = document.createElement('div');
    const remove_btn = document.createElement('button');
    const read_btn = document.createElement('button');
    
    books_div.classList.add('book');
    books_div.setAttribute('id', myLibrary.indexOf(item));

    title_div.textContent = item.title;
    title_div.classList.add('title');
    books_div.appendChild(title_div);

    auth_div.textContent = item.author;
    auth_div.classList.add('author');
    books_div.appendChild(auth_div);

    page_div.textContent = item.page_div;
    page_div.classList.add('pages');
    books_div.appendChild(page_div);

    read_btn.classList.add('readCheck');
    books_div.appendChild('readCheck');
    if (item.read === false){
        read_btn.textContent = 'Not Read';
    }else{
        read_btn.textContent = 'Read';
    }
}


//setting Library to be stored in local storage
function setData(){
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

//pulls books from local storage when page is refreshed
function restore(){
    if (!localStorage.myLibrary){
        render();
    }else{
        let objects = localStorage.getItem('myLibrary');
        objects = JSON.parse(objects);
        myLibrary = objects;
        render();
    }
}


function openBook(){
   popUp_div.style.display = "block";
    
}

function closeBook(){
    popUp_div.style.display = "none";
}

function main(){
    button_div.addEventListener('click', () => {
        openBook();
    
    })

    newBook_btn.addEventListener('click', () =>{
        addBookToLibrary();
        console.log("hello");
    })
   
    restore();
}

main();