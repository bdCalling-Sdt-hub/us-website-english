import RootLayout from "@/components/Layouts/RootLayout";
import BannerDetail from "@/components/Phone/BannerDetail";
import BreadCrumb from "@/components/util/BreadCrumb";
import { ReactElement } from "react";

const Phone = () => {
  const items = [
    {
      title: "GrandStream HT502 Phone Adapter",
      description:
        "The Grandstream phone adapter is used to connect your home phone to your router. This adapter contains 1 port for the phone.",
      price: "$55",
    },
    {
      title: "GrandStream HT701 Phone Adapter",
      description:
        "The Grandstream phone adapter is used to connect your home phone to your router. This adapter contains 2 ports for the phone.",
      price: "$65",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="mx-3 lg:mx-28">
        <BreadCrumb title="Telephone" />
        <BannerDetail />
        <div className="card bg-gray-800 text-gray-400  mt-5 my-14">
          {items.map((item, index) => (
            <div
              key={index}
              className="card-body grid grid-cols-1 lg:grid-cols-2 border border-[#818181] rounded m-2"
            >
              <div>
                <h1 className="text-3xl font-medium">{item.title}</h1>
                <p className="text-lg">{item.description}</p>
              </div>
              <div className="place-self-end">
                <h1 className="text-3xl font-medium my-3 text-center">
                  {item.price}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="card bg-gray-800 text-gray-400  mt-5 my-14 p-5">
          <div>
            <h1 className="text-3xl font-medium">Offer details</h1>
            <p className="text-lg">
              *Phone service performance may vary depending on router activity
              level, device configuration, Internet traffic or random events.
              Usage is subject to Vodalink&#39;s fair use policy. Taxes are not
              included in the prices presented. Terms and Conditions apply.
              <br />
              <br />
              **Any discounts or promotions may vary depending on the geographic
              location where the services are ordered. The discount may be
              withheld if the customer moves outside the geographic area where
              the discounts apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;

Phone.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
