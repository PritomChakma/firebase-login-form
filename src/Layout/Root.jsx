import { Outlet } from "react-router-dom";
import Footer from "./../Pages/Footer";
import Navbar from "./../Pages/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
