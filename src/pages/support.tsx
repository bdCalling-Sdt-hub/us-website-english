import RootLayout from "@/components/Layouts/RootLayout";
import { ReactElement } from "react";

const SupportPage = () => {
  return (
    <div>
      <h1>Support Page</h1>
    </div>
  );
};

export default SupportPage;

SupportPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
