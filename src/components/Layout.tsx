import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTopButton from "./ScrollToTop";

const Layout = () => {
  return (
    // <div className="text-white flex flex-col justify-between min-h-screen bg-black bg-opacity-20 overflow-hidden">
    <div className="min-h-screen flex flex-col bg-black bg-opacity-50 text-white">
      <Header />
      <Content />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
