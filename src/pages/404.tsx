import Link from "next/link";

const NotFound = () => {
  return (
    <div className="  flex  justify-center  mt-28">
      <div>
        <img
          src="/images/404.png"
          alt=""
          className="mx-auto rounded-md object-cover"
        />
        <h1 className="text-8xl mt-5 font-extrabold  text-center text-red-500">
          404
        </h1>
        <h1 className="text-4xl mt-5 font-medium text-center text-light">
          Page not found
        </h1>
        <p className="text-center text-xl mt-2 text-white">
          Dear,how many days in one week? and just wait 5 seconds
        </p>
        <p className="text-center mt-5">
          {" "}
          <Link href="/">
            <button className="btn btn-black btn-wide">GO BACK</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
