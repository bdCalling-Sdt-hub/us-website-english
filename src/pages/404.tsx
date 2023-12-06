import Image from "next/image";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 6000);
  return (
    <div className="  flex items-center justify-center h-screen">
      <div>
        <Image src="/images/4041.png" width={600} height={600} alt="" />
        <h1 className="text-3xl font-medium text-center">Page not found</h1>
        <p className="text-center text-xl mt-2">
          Dear, how many eggs here have? Could you count?
        </p>
      </div>
    </div>
  );
};

export default NotFound;
