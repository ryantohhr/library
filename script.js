const Library = [];

function Book(title, author, read) {
    this.title = title,
    this.author = author,
    this.read = read
    this.toggleRead = function() {
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
    const main = document.querySelector(".main");
    const card = generateCard(book);
    main.appendChild(card);
}

function generateCard(book) {
    const card = document.createElement("div");
    card.classList.add("card");

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
    });

    const dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete";
    dltBtn.classList.add("dlt");

    const progress = document.createElement("div");
    progress.textContent = "In progress";
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