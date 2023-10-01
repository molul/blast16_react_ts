import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="text-white flex flex-col justify-between min-h-screen bg-black bg-opacity-20 overflow-hidden">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
