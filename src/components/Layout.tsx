import Header from "./Header";

const Layout = () => {
  return (
    <div className="text-white flex flex-col justify-between min-h-screen bg-black bg-opacity-20">
      <Header />
      <div className="flex-1">Content</div>
      <div className="bg-green-400">Footer</div>
    </div>
  );
};

export default Layout;
