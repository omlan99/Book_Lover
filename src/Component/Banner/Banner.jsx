import bannerImg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen mb-[100px]">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold pb-12">Books to freshen up your bookshelf</h1>
          
          <button className="btn bg-[#23BE0A] text-stone-100">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
