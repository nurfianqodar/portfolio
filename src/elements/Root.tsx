import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootPage = () => {
  return (
    <>
      <Navbar />
      <main className='pt-16 left-0 right-0 top-0 flex items-center px-5 text-slate-800'>
        <div className='container mx-auto my-10 flex items-center'>
          <div className='mx-auto w-full max-w-4xl min-h-[100vh]'>
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RootPage;
