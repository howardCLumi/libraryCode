const myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read),
    (this.info = function () {
      return (
        this.title +
        " by " +
        this.author +
        ", " +
        this.pages +
        " pages, " +
        this.read
      );
    });
}

function addToLibrary(book) {
  myLibrary.push(book);
}

//populating card library
function displayLibrary(myLibrary) {
  const cardContainer = document.querySelector("#library-container");

  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }

  myLibrary.forEach(function (item, index) {
    const name = item.title;
    const author = item.author;
    const numberOfPages = item.pages;

    const card = document.createElement("div");

    card.classList.add("card");

    cardContainer.appendChild(card);

    const nameDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const pagesDiv = document.createElement("div");
    const remove = document.createElement("button");

    remove.setAttribute("id", "removeButton");

    remove.addEventListener("click", function () {
      removeCard(cardContainer, card, index);
    });

    nameDiv.classList.add("titleContent");
    authorDiv.classList.add("titleContent");
    pagesDiv.classList.add("titleContent");

    nameDiv.textContent = '"' + name + '"';
    authorDiv.textContent = author;
    pagesDiv.textContent = numberOfPages + " pages";
    remove.textContent = "Remove";

    card.appendChild(nameDiv);
    card.appendChild(authorDiv);
    card.appendChild(pagesDiv);
    card.appendChild(remove);
  });
}

//adding form details to book datastruct successfully
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("book_name").value;
  var author = document.getElementById("book_author").value;
  var numberOfPages = document.getElementById("book_pages").value;

  const newBook = new Book(name, author, numberOfPages);

  addToLibrary(newBook);
  document.getElementById("form").reset();

  displayLibrary(myLibrary);
});
//REMOVE CARD STUFF
function removeCard(cardContainer, card, index) {
  myLibrary.splice(index, 1);
  displayLibrary(myLibrary);
  //cardContainer.removeChild(card);
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("openButton").style.display = "none";
  document.getElementById("overlay").style.opacity = "1";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("openButton").style.display = "block";
  document.getElementById("overlay").style.opacity = "0";
}

const book1 = new Book("hunger games", "kellyn", 300, "have not read yet");
const book2 = new Book("pokemon", "lumi", 500, "have not read yet");
const book3 = new Book("digimon", "howard", 900, "have not read yet");
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

displayLibrary(myLibrary);
