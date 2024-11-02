const Book = ({ book }) => {
  const { image, bookName, author, category, rating, tags } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl p-6">
      <figure className="bg-[#f3f3f3] py-8 rounded-2xl">
        <img src={image} alt="Book Cover Photo" className="h-[166px] " />
      </figure>
      <div className="card-body">
        <div>
          {tags.map((tag) => (
            <div className="badge badge-secondary bg-[#23BE0A] bg-opacity-5 text-[#23BE0A] border-none mr-3 py-2 px-4">
              {tag}
            </div>
          ))}
        </div>
        <div className="flex flex-grow">
        <h2 className="card-title py-4 text-2xl font-bold ">{bookName}</h2>
        </div>

        <div className="card-actions flex justify-between">
          <div className="badge">{category}</div>
          <div className="badge">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
