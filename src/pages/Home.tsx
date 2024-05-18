import { FaDiscord, FaExternalLinkAlt } from "react-icons/fa";
import {
  FiFacebook,
  FiGithub,
  FiGitlab,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className='flex flex-col gap-y-20 mt-5 mb-20'>
      <section className='flex flex-col gap-y-5'>
        <h1 className='flex flex-col text-3xl'>
          Hi Friend 👋 <span className='text-6xl'>I'm Nurfian Qodar</span>
        </h1>
        <h2>
          Agriculture Enthusiast and Coding Aficionao | Cultivating creativity
          in fields and code. Explore my portfolio, a fusion of love for farming
          and passion for programming.
        </h2>
        <div className='flex font-semibold gap-x-5 py-2'>
          <Link to={"/"} className='flex underline underline-offset-3'>
            My Resume
            <FaExternalLinkAlt className='text-xs font-light' />
          </Link>
          <Link to={"/contact"} className='flex underline underline-offset-3'>
            Let's Connect
            <FaExternalLinkAlt className='text-xs font-light' />
          </Link>
        </div>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl mb-5 font-semibold'>Follow My Social Media</h1>
        <div className='flex text-3xl gap-5 flex-wrap'>
          <Link
            to={"http:"}
            className='hover:scale-125 transition duration-200'
          >
            <FiFacebook />
          </Link>
          <Link
            to={"http:"}
            className='hover:scale-125 transition duration-200'
          >
            <FiInstagram />
          </Link>
          <Link
            to={"http:"}
            className='hover:scale-125 transition duration-200'
          >
            <FiLinkedin />
          </Link>
          <Link
            to={"http:"}
            className='hover:scale-125 transition duration-200'
          >
            <FiGithub />
          </Link>
          <Link
            to={"http:"}
            className='hover:scale-125 transition duration-200'
          >
            <FiGitlab />
          </Link>
          <Link
            to={"http:"}
            className='hover:scale-125 transition duration-200'
          >
            <FaDiscord />
          </Link>
        </div>
      </section>
      <section>
        <h1 className='font-bold text-xl mb-5'>Hello There 😃</h1>
        I'm <span className='font-semibold'>Nurfian Qodar</span> - Hailing from
        the charming town of Ciamis. By day I'am a passionate agriculture
        student nurturing seeds of knowledge. By night, I transform into a web
        programming enthusiast, weaving digital landscapes. Join me on this
        dynamic journey of growth and code.
      </section>
    </div>
  );
};

export default HomePage;
