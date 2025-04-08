

const myLibrary = [];

function Book(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    event.preventDefault(); 

    const title = document.getElementById("title").value;
    const author  = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
     
    addBookToDisplay(newBook);

    document.getElementById("form-container").reset();
    document.getElementById("form-container").style.display = "none";
}
 

function addBookToDisplay(newBook){

    const bookContainer = document.getElementById("book-container");

    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-id", newBook.id);

    bookCard.innerHTML = `
        <p>Title: ${newBook.title}</p>
        <p>Author: ${newBook.author}</p>
        <p>Pages: ${newBook.pages}</p>
        <button class = "toggle-read">${newBook.read ? "read": "not read"}</button>
        <button class="delete-book">delete</button>
        `


        
    bookContainer.appendChild(bookCard);

    const toggleReadButton = bookCard.querySelector(".toggle-read");
    toggleReadButton.addEventListener("click", function(){
        newBook.read = !newBook.read;
        toggleReadButton.innerText = newBook.read ? "Read" : "Not Read";
    });

    const deleteButton = bookCard.querySelector(".delete-book");
    deleteButton.addEventListener("click", function(){
        bookContainer.removeChild(bookCard);
        myLibrary.splice(myLibrary.findIndex(b => b.id === newBook.id), 1); 
    });

    
}



document.getElementById("book-form").addEventListener("submit", addBookToLibrary);



// Function to make the button show the form and hide the form
const newBookButton = document.querySelector(".new-book");
const closeForm = document.querySelector(".close-form");
const formContainer = document.getElementById("book-form");

function showform(){
    formContainer.style.display = "block";
}

function hideform(){
    formContainer.style.display = "none";
}

newBookButton.addEventListener("click", showform);
closeForm.addEventListener("click", hideform);
