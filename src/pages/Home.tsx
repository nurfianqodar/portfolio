import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaDiscord, FaExternalLinkAlt } from "react-icons/fa";
import {
  FiFacebook,
  FiGithub,
  FiGitlab,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import myImg from "/myImg.jpeg";

const socialLinks = [
  {
    to: "https://www.facebook.com/nurfian.qodar/",
    icon: <FiFacebook className='text-[#0866FF]' />,
    name: "Facebook",
  },
  {
    to: "https://www.youtube.com/@Code_Fyn/",
    icon: <FiYoutube className='text-[#FF0000]' />,
    name: "YouTube",
  },
  {
    to: "https://www.instagram.com/imfyn77/",
    icon: <FiInstagram className='text-[#E4405F]' />,
    name: "Instagram",
  },
  {
    to: "https://linkedin.com/in/nurfian-qodar-36b448302/",
    icon: <FiLinkedin className='text-[#0A66C2]' />,
    name: "LinkedIn",
  },
  {
    to: "https://github.com/nurfianqodar/",
    icon: <FiGithub className='text-[#181717]' />,
    name: "GitHub",
  },
  {
    to: "http://gitlab.com/nurfianqodar/",
    icon: <FiGitlab className='text-[#FC6D26]' />,
    name: "GitLab",
  },
  {
    to: "https://discord.com/users/imfynn77_",
    icon: <FaDiscord className='text-[#5865F2]' />,
    name: "Discord",
  },
];

const SocialLinks: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? `flex text-5xl gap-10 flex-wrap items-center justify-center`
          : `flex text-3xl gap-5 flex-wrap items-center justify-center`
      }
    >
      {socialLinks.map((link, index) => (
        <Link
          target='_blank'
          key={index}
          to={link.to}
          className='hover:scale-125 transition duration-200'
        >
          <div className='flex flex-col items-center gap-y-2'>
            <span>{link.icon}</span>
            {isOpen && <span className='text-xl'>{link.name}</span>}
          </div>
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
        <h2 className='text-xl'>
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
        <h1 className='text-2xl mb-10 font-semibold'>Follow My Social Media</h1>
        <SocialLinks isOpen={openSocmed} />
      </section>
      <section className='flex flex-col items-center'>
        <h1 className='font-bold text-2xl mb-5'>Hello There 😃</h1>
        <div className='flex items-center justify-evenly gap-10 flex-wrap'>
          <img
            src={myImg}
            alt='myImg.jpeg'
            className='flex max-w-[250px] rounded-lg w-full'
          />
          <p className='text-xl max-w-sm'>
            I'm <span className='font-semibold'>Nurfian Qodar</span> - Hailing
            from the charming town of Ciamis. By day I'am a passionate
            agriculture student nurturing seeds of knowledge. By night, I
            transform into a web programming enthusiast, weaving digital
            landscapes. Join me on this dynamic journey of growth and code.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
