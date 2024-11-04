import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, category, rating, tags } = book;
  return (
    <Link to={`books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6 mx-auto md:mx-0">
        <figure className="bg-[#f3f3f3] py-8 rounded-2xl">
          <img src={image} alt="Book Cover Photo" className="h-[166px] " />
        </figure>
        <div className="card-body">
          <div>
            {tags.map((tag, idx) => {
              <div key={idx} className="badge badge-secondary bg-[#23BE0A] bg-opacity-5 text-[#23BE0A] border-none mr-3 py-2 px-4">
                {tag}
              </div>
})}
          </div>
          <div className="flex flex-grow">
            <h2 className="card-title py-4 text-2xl font-bold ">{bookName}</h2>
          </div>
          <p>By : {author}</p>
          <div className="border border-dashed my-5 "></div>

          <div className="card-actions flex justify-between">
            <div className="badge">{category}</div>
            <div className="badge">
              {rating}
              <div className="rating rating-lg">
                <input type="radio" name="rating-9" className="rating-hidden" />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 h-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
