import { FiCode, FiHome, FiMail } from "react-icons/fi";
import { LiaListUlSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/", icon: <FiHome /> },
  { name: "Projects", to: "/project", icon: <LiaListUlSolid /> },
  { name: "Skills", to: "/skill", icon: <FiCode /> },
  { name: "Contact", to: "/contact", icon: <FiMail /> },
];

const Navigation = () => {
  return (
    <nav className='flex gap-5 text-2xl'>
      {navLinks.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          title={link.name}
          className='hover:scale-125 transition duration-200'
        >
          {link.icon}
        </Link>
      ))}
    </nav>
  );
};

const Navbar = () => {
  return (
    <header className='h-16 fixed left-0 right-0 top-0 flex items-center justify-center backdrop-blur-lg'>
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
