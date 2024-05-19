import { BiHome, BiStar } from "react-icons/bi";
import { FiCode } from "react-icons/fi";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/", icon: <BiHome /> },
  { name: "Projects", to: "/project", icon: <FiCode /> },
  { name: "Skills", to: "/skill", icon: <BiStar /> },
];

const Navigation = () => {
  return (
    <nav className='flex gap-10 text-xl'>
      {navLinks.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          title={link.name}
          className='flex flex-col items-center group'
        >
          <span className='group-hover:scale-150 transition duration-200 '>
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
    <header className='h-16 fixed left-0 right-0 top-0 flex items-center justify-center backdrop-blur-lg shadow-sm'>
      <div className='container mx-auto my-auto flex items-center justify-between'>
        <div className='mx-auto w-full max-w-screen-lg flex justify-between items-center px-5'>
          <Link to={"/"} className='font-bold text-xl'>
            Fynn
          </Link>

          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
