const Subscribe = () => {
  return (
    <div className="mx-3 lg:mx-28 my-14">
      <div className="card w-full bg-[#2a323c] text-neutral-content">
        <div className="card-body items-center">
          <h2 className="text-3xl font-medium text-gray-400 uppercase text-center mb-10">
            Subscribe to the newsletter FOR <br /> DISCOUNT
            <span className="text-[#1775fa]"> ALL COSTS</span>
          </h2>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-md py-6  w-[400px]"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-md py-6  w-[400px]"
            />
            <button className="btn uppercase btn-wide bg-[#1775fa]  hover:bg-gray-700 duration">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
