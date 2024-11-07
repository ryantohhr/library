const Library = [];

function Book(title, author, read) {
    this.title = title,
    this.author = author,
    this.read = read
}

function addBookToLibrary(title, author, read) {
    let book = new Book(title, author, read);
    Library.push(book);
}

function displayBook(book) {
    const main = document.querySelector(".main");
    const card = document.createElement("div");
    card.classList.add("card");

    const hr = document.createElement("hr");

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

    const dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete";
    dltBtn.classList.add("dlt");
    
    contentDiv.appendChild(title);
    contentDiv.appendChild(author);
    buttonDiv.appendChild(readBtn);
    buttonDiv.appendChild(dltBtn);
    card.appendChild(contentDiv);
    card.appendChild(hr);
    card.appendChild(buttonDiv);
    main.appendChild(card);
}

function displayLibrary() {
    Library.forEach(displayBook);
}