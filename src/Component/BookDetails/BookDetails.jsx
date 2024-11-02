import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  console.log(data);
  const foundBook = data.find((book) => book.bookId === id);
//   const {image, bookName} = foundBook
  console.log(foundBook);
  const allTag = foundBook.tags
  return (
    <div className="hero bg-base-200 min-h-screen pb-40">
      <div className="hero-content p-20 flex-col lg:flex-row">
        <img
          src={foundBook.image}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="pl-12">
          <h1 className="text-5xl font-bold pb-4">{foundBook.bookName}</h1>
          <p className="text-xl font-medium pb-6">By : {foundBook.author}</p>
          <p className=" text-xl font-medium border-y py-4">
            {foundBook.category}
          </p>
          <p className="py-6" >
            <span className="font-bold ">Review :</span> {foundBook.review} 
          </p>
          <p className="pb-6 border-b"><span className="font-bold mr-4">Tag </span>{allTag.map(tag => <span className="mr-3">{tag}</span>)}</p>
          <div className="flex justify-between w-1/2 py-3">
            <p className="text-opacity-70">Number of Pages</p>
            <p className="font-semibold">{foundBook.totalPages}</p>
          </div>
          <div className="flex justify-between w-1/2 py-3">
            <p className="text-opacity-70">Publisher</p>
            <p className="font-semibold">{foundBook.publisher}</p>
          </div>
          <div className="flex justify-between w-1/2 py-3">
            <p className="text-opacity-70">Year of Publishing</p>
            <p className="font-semibold">{foundBook.yearOfPublishing}</p>
          </div>
          <div className="flex justify-between w-1/2 py-3">
            <p className="text-opacity-70">Rating</p>
            <p className="font-semibold">{foundBook.rating}</p>
          </div>
          <div className="flex gap-4 mt-8">
          <button className="btn btn-primary py-5 px-7 h-full">Read</button>
          <button className="btn btn-primary py-5 px-7 h-full">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
