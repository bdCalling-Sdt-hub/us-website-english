import { ReactNode } from "react";

interface ReactProps {
  children: ReactNode;
}

const HeaderText: React.FC<ReactProps> = ({ children }) => {
  return (
    <div className="my-12 text-center text-gray-400">
      <h1 className="text-3xl font-bold">{children}</h1>
    </div>
  );
};

export default HeaderText;
