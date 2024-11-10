const Library = [];

const main = document.querySelector(".main");

class Book {
    constructor(title, author, read) {
        this.title = title,
        this.author = author,
        this.read = read
        this.id = Library.length;
    }
    
    toggleRead = function() {
        if (this.read == "Read") {
            this.read = "Not read";
        }
        else {
            this.read = "Read";
        }
    }
}

function addBookToLibrary(title, author, read) {
    let book = new Book(title, author, read);
    Library.push(book);
}

function displayBook(book) {
    const card = generateCard(book);
    main.appendChild(card);
}

function generateCard(book) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", `${book.id}`);

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("buttons");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = book.title;

    const author = document.createElement("div");
    author.classList.add("author");
    author.textContent = `by ${book.author}`;

    const readBtn = document.createElement("button");
    readBtn.textContent = book.read;
    readBtn.classList.add("read");
    readBtn.addEventListener('click', () => {
        book.toggleRead();
        readBtn.textContent = book.read;
        updateProgress(book.read, progress);
    });

    const dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete";
    dltBtn.classList.add("dlt");
    dltBtn.addEventListener('click', () => {
        let search;
        for (let [index, item] of Library.entries()) {
            if (item.id === book.id) {
                search = index;
                break;
            }
        }
        Library.splice(search, 1);
        const toRemove = document.getElementById(`${book.id}`);
        main.removeChild(toRemove);
    })

    const progress = document.createElement("div");
    updateProgress(book.read, progress);
    progress.classList.add("progress");
    
    contentDiv.appendChild(title);
    contentDiv.appendChild(author);
    buttonDiv.appendChild(readBtn);
    buttonDiv.appendChild(dltBtn);
    card.appendChild(contentDiv);
    card.appendChild(buttonDiv);
    card.appendChild(progress);

    return card;
}

function displayLibrary() {
    Library.forEach(displayBook);
}

function toggleRead(readStatus) {
    if (readStatus == "Read") {
        return "Not read";
    }
    else {
        return "Read";
    }
}

function updateProgress(readStatus, progress) {
    if (readStatus === "Read") {
        progress.textContent = "Completed";
    }
    else {
        progress.textContent = "In progress";
    }
}

const form = document.querySelector("form");
const dialogBtn = document.querySelector(".add");
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector(".close");
const addBookBtn = document.querySelector("input[type='submit']");
const titleInput = document.querySelector(".titleInput");
const authorInput = document.querySelector(".authorInput");
const readInput = document.querySelector(".read-box");

dialogBtn.addEventListener('click', () => {
    dialog.show();
})

addBookBtn.addEventListener('click', () => {
    const title = titleInput.value;
    const author = authorInput.value;
    const read = handleRead(readInput.checked);
    addBookToLibrary(title, author, read);
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    displayLibrary();
    form.reset();
})

closeBtn.addEventListener('click', () => {
    form.reset();
    dialog.close();
})

function handleRead(value) {
    if (value) {
        return "Read";
    }
    else {
        return "Not read";
    }
} 


