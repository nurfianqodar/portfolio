import { SiAxios, SiReact, SiTailwindcss, SiVite } from "react-icons/si";

const Footer = () => {
  return (
    <div className=' w-full px-5 pt-5 pb-20 flex flex-col text-xs justify-between bg-slate-800/10 text-slate-400'>
      <div className='w-full flex justify-between mb-3'>
        Created by Nurfian Qodar<span> &copy;2024</span>
      </div>
      <div className='flex items-center gap-5 text-xl opacity-50'>
        <span>Tech:</span> <SiReact /> <SiVite /> <SiTailwindcss /> <SiAxios />
      </div>
    </div>
  );
};

export default Footer;
