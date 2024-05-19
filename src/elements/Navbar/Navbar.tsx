import { BiHome, BiStar } from "react-icons/bi";
import { FiCode } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/", icon: <BiHome /> },
  { name: "Projects", to: "/project", icon: <FiCode /> },
  { name: "Skills", to: "/skill", icon: <BiStar /> },
];

const Navigation = () => {
  const location = useLocation();
  return (
    <nav className='flex gap-5 md:gap-10'>
      {navLinks.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          title={link.name}
          className={`flex flex-col gap-x-2 items-center group p-2 rounded-xl`}
        >
          <span
            className={`
          ${location.pathname == link.to ? "text-sky-600" : ""}
          group-hover:scale-150 transition duration-200 p-1 rounded-sm text-xl`}
          >
            {link.icon}
          </span>
          <span className='text-xs'>{link.name}</span>
        </Link>
      ))}
    </nav>
  );
};

const Navbar = () => {
  return (
    <header className='h-16 fixed left-0 right-0 bottom-0 flex items-center justify-center bg-white/50 backdrop-blur-lg shadow-sm z-[99999]'>
      <div className='container mx-auto my-auto flex items-center justify-between'>
        <div className='mx-auto w-full max-w-screen-lg flex justify-center items-center px-5 text-slate-800'>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
