import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaDiscord, FaExternalLinkAlt } from "react-icons/fa";
import {
  FiFacebook,
  FiGithub,
  FiGitlab,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { Link } from "react-router-dom";
const socialLinks = [
  { to: "http://facebook.com", icon: <FiFacebook /> },
  { to: "http://instagram.com", icon: <FiInstagram /> },
  { to: "http://linkedin.com", icon: <FiLinkedin /> },
  { to: "http://github.com", icon: <FiGithub /> },
  { to: "http://gitlab.com", icon: <FiGitlab /> },
  { to: "http://discord.com", icon: <FaDiscord /> },
];

const SocialLinks: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? `flex text-5xl gap-8 flex-wrap items-center justify-center`
          : `flex text-3xl gap-5 flex-wrap items-center justify-center`
      }
    >
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className='hover:scale-125 transition duration-200'
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

const HomePage = () => {
  const [openSocmed, setOpenSocmed] = useState(false);

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
          <Link
            to={
              "https://www.linkedin.com/ambry/?x-li-ambry-ep=AQKABR2HWCkt6QAAAY-RE2VJNGogKPP7m3Pmw7S7NU8KzvsFPrfzSMTVnxqy9ycuFcAbM-SAYeQ9kGut4c8BCyZbecnhL0DvF2yoNodMNtH7tjcyVMbLfnFxkX7Wuat9vYU57evHPpEGOB5oZrSyqxUyWqnM2fQwhmIIjNmENrXzj7fciHlyOall2q-g3ZtvCqzkO0ow9bTjkOYEG3XdMbnxC91xAFedTKnHUH2Bn9gW28xji4yvYQiX-b0-fqEKj_uJBu8-Z9mqiDiBVckkN05E6JP-QCueFjt9tieHHFv4ZaDcT_Iq8p5leA5bnq0FgSFAeLQk91k2E-gFFISxpR5qdnTcxya69vscv76aPP1k1IGRSrWx7oLC0YQJNQZhP2f7yW6xdkKdkvyAwFkGkkFIlIfTo8HCz3qkdnipdMsJgM2z4kFtLBr-96q1F4e_SkH2o0UdmhzzN7eJYffd5e1CFLAYsE1ToTE4tkFL9lP4EG2Qj1TZ2baY6vOlLInnYOgEkVHqC8m3_gVDiRchgOxn53Zwmxpxao4L018I7eSgDZFrWOj_-OqdetD0kHHQM8NI0NE&x-ambry-um-filename=Profile.pdf"
            }
            className='flex underline underline-offset-3'
          >
            My Resume
            <FaExternalLinkAlt className='text-xs font-light' />
          </Link>
          <button
            onClick={() => {
              setOpenSocmed(!openSocmed);
            }}
            className='flex underline underline-offset-3'
          >
            Let's Connect
            <FaExternalLinkAlt className='text-xs font-light' />
          </button>
        </div>
      </section>
      <section
        className={
          openSocmed
            ? "fixed h-full w-full bg-white/20 backdrop-blur-xl flex flex-col top-0 items-center justify-center left-0 right-0 px-5"
            : `flex flex-col justify-center items-center`
        }
      >
        {openSocmed && (
          <button
            className='text-3xl text-red-600 absolute top-10 left-10'
            onClick={() => setOpenSocmed(false)}
          >
            <AiFillCloseCircle />{" "}
          </button>
        )}
        <h1 className='text-2xl mb-5 font-semibold'>Follow My Social Media</h1>
        <SocialLinks isOpen={openSocmed} />
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
