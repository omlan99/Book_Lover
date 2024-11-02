import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const {bookId} = useParams()
    const id = parseInt(bookId)
    const data = useLoaderData()
    console.log(data)
    const foundBook = data.find(book => book.bookId === id)
    console.log(foundBook)
    return (
        <div>
            <h2>Boook derai</h2>

        </div>
    );
};

export default BookDetails;