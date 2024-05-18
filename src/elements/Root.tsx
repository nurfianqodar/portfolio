import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootPage = () => {
  return (
    <>
      <Navbar />
      <main className='pt-16 left-0 right-0 top-0 flex'>
        <div className='container mx-auto my-auto flex'>
          <div className='mx-5'>
            <div className='mx-auto w-full max-w-md'>
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RootPage;
