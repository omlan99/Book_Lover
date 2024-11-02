import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./booksData.json")
    .then(res => res.json())
    .then(data => setBooks(data))
  }, []);
  return (
    <div>
      <h2 className="font-bold text-center pb-9 text-4xl">Books</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {books.map(singleBook => <Book key={singleBook.bookId} book={singleBook}></Book>
        )}
      
      </div>
    </div>
  );
};

export default Books;
