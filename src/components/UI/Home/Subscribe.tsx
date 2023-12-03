const Subscribe = () => {
  return (
    <div className="mx-28 mt-14">
      <div className="card w-full bg-neutral text-neutral-content py-8">
        <div className="card-body">
          <div className="flex items-center justify-between">
            <div className="space-y-3">
              <h2 className="text-4xl font-bold">
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
