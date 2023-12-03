import RootLayout from "@/components/Layouts/RootLayout";
import { ReactElement } from "react";

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
