const Subscribe = () => {
  return (
    <div className="mx-3 lg:mx-28 mt-14">
      <div className="card w-full bg-[#2a323c] text-neutral-content py-8">
        <div className="card-body">
          <div className="lg:flex items-center justify-between">
            <div className="space-y-3">
              <h2 className="text-4xl font-bold text-gray-400">
                Subscribe to the newsletter
              </h2>
              <p className="text-xl">
                FOR{" "}
                <span className="text-primary font-bold">FRESH DISCOUNTS</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered input-md py-6  w-[400px] "
              />
              <button className="btn  btn-primary text-white">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
