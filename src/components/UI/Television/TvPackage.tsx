import packageList from "../.../../../../../public/db/tv.json";
import TvPackageCard from "./TvPackageCard";

const TvPackage = () => {
  const { tvPackageList } = packageList;
  return (
    <div className="grid grid-cols-1 gap-1 mb-14">
      {tvPackageList.map((item, index) => (
        <TvPackageCard key={index} data={item} />
      ))}
    </div>
  );
};

export default TvPackage;
