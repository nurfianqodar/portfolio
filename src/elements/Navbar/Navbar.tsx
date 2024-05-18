import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='h-16 fixed left-0 right-0 top-0 flex items-center justify-center'>
      <div className='container mx-auto my-auto flex items-center justify-between'>
        <div className='mx-5'>
          <div className='mx-auto w-full max-w-screen-lg'>
            <Link to={"/"}>Fynn</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
