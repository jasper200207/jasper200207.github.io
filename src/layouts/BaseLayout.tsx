import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

type Props = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: Props) => {
  return (
    <div className="w-screen flex flex-row bg-lightBackWhite">
      <LeftSidebar />
      <div className="w-full min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </div>
      <RightSidebar />
    </div>
  );
};

export default BaseLayout;
