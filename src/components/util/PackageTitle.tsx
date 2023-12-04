import React from "react";

type IPackageTitle = string;
type IPackageDescription = string;

const PackageTitle: React.FC<{
  title: IPackageTitle;
  description: IPackageDescription;
}> = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-2xl">{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default PackageTitle;
