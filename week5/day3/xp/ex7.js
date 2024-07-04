// Create an array called allBooks
const allBooks = [
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        image: 'https://via.placeholder.com/150',
        alreadyRead: true
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        image: 'https://via.placeholder.com/150',
        alreadyRead: false
    }
];

const listBooksSection = document.querySelector('.listBooks');

allBooks.forEach(book => {
    const bookDiv = document.createElement('div');
    const bookDetails = document.createElement('p');
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    bookDiv.appendChild(bookDetails);
    if (book.alreadyRead) {
        bookDetails.style.color = 'red';
    }
    const bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookImage.style.width = '100px';
    bookDiv.appendChild(bookImage);
    listBooksSection.appendChild(bookDiv);
});
