import { FiCode, FiHome, FiMail } from "react-icons/fi";
import { LiaListUlSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='h-16 fixed left-0 right-0 top-0 flex items-center justify-center backdrop-blur-lg'>
      <div className='container mx-auto my-auto flex items-center justify-between'>
        <div className='mx-auto w-full max-w-screen-lg flex justify-between items-center px-5'>
          <Link to={"/"} className='font-light text-xl'>
            Fynn
          </Link>
          <nav className='flex gap-5 text-2xl'>
            <Link to={"/"}>
              <FiHome />
            </Link>
            <Link to={"/project"}>
              <LiaListUlSolid />
            </Link>

            <Link to={"/skill"}>
              <FiCode />
            </Link>
            <Link to={"/contact"}>
              <FiMail />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
