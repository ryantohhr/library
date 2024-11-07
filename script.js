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
    const card = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("div");
    const main = document.querySelector(".main");
    console.log(book.title);
    title.textContent = book.title;
    author.textContent = book.author;
    card.appendChild(title);
    card.appendChild(author);
    main.appendChild(card);
}

function displayLibrary() {
    Library.forEach(displayBook);
}