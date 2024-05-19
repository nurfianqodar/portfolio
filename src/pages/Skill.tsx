import React, { useEffect, useState } from "react";
import {
  BiLinkExternal,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { SiExpress, SiHono, SiMysql, SiNestjs, SiRedux } from "react-icons/si";

const programmingLanguage: {
  name: string;
  logo: React.ReactElement;
  link: string;
}[] = [
  {
    name: "JavaSctipt",
    logo: <BiLogoJavascript className='text-[#F7DF1E]' />,
    link: "https://www.w3schools.com/js/",
  },
  {
    name: "TypeScript",
    logo: <BiLogoTypescript className='text-[#3178C6]' />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Python",
    logo: <BiLogoPython className='text-[#3776AB]' />,
    link: "https://www.python.org/",
  },
  {
    name: "React",
    logo: <BiLogoReact className='text-[#61DAFB]' />,
    link: "https://react.dev/",
  },
  {
    name: "Express JS/TS",
    logo: <SiExpress className='text-[#000000]' />,
    link: "https://expressjs.com/",
  },
  {
    name: "Redux",
    logo: <SiRedux className='text-[#764ABC]' />,
    link: "https://redux.js.org/",
  },
  {
    name: "Hono",
    logo: <SiHono className='text-[#E36002]' />,
    link: "https://hono.dev/",
  },
  {
    name: "Nest JS",
    logo: <SiNestjs className='text-[#E0234E]' />,
    link: "https://nestjs.com/",
  },
  {
    name: "MySQL",
    logo: <SiMysql className='text-[#4479A1]' />,
    link: "https://www.mysql.com/",
  },
];

const ProgLang = (): React.ReactNode => {
  return (
    <div className='flex items-center justify-center flex-wrap gap-8'>
      {programmingLanguage.map(({ link, logo, name }, index) => {
        return (
          <a
            key={index}
            href={link}
            target='_blank'
            className='flex flex-col items-center justify-center gap-y-3 group'
          >
            <span className='text-5xl lg:text-6xl group-hover:scale-150 transition duration-200'>
              {logo}
            </span>
            <span className='text-sm'>{name}</span>
          </a>
        );
      })}
    </div>
  );
};

//
const certificate: { name: string; url: string; thumbnail: string }[] = [
  {
    name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    url: "https://www.dicoding.com/certificates/GRX5O29EVP0M",
    thumbnail:
      "https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_membuat_aplikasi_back_end_untuk_pemula_logo_230421133303.jpg",
  },
  {
    name: "Belajar Dasar Pemrograman JavaScript",
    url: "https://www.dicoding.com/certificates/RVZKR1954PD5",
    thumbnail:
      "https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_dasar_pemrograman_javascript_logo_230421133231.jpg",
  },
  {
    name: "Belajar Machine Learning untuk Pemula",
    url: "https://www.dicoding.com/certificates/NVP77E484PR0",
    thumbnail:
      "https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_machine_learning_untuk_pemula_logo_230421141649.jpg",
  },
  {
    name: "Belajar Dasar Visualisasi Data",
    url: "https://www.dicoding.com/certificates/4EXGKG52GZRL",
    thumbnail:
      "https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_dasar_visualisasi_data_logo_230421131758.jpg",
  },
  {
    name: "Memulai Pemrograman dengan Python",
    url: "https://www.dicoding.com/certificates/JLX12EGLNZ72",
    thumbnail:
      "https://d17ivq9b7rppb3.cloudfront.net/original/academy/memulai_pemrograman_dengan_python_logo_230421132353.jpg",
  },
];

const Certifications = () => {
  const [open, setOpen] = useState(false);
  const [certificates, setCertificates] = useState(certificate);
  useEffect(() => {
    open
      ? setCertificates(certificate)
      : setCertificates(certificate.slice(0, 2));
  }, [open]);
  return (
    <div className='flex w-full justify-center gap-3 flex-wrap'>
      {certificates.map(({ name, url, thumbnail }, index) => {
        return (
          <a
            target='_blank'
            href={url}
            key={index}
            className='flex gap-3 items-center p-3 border w-full max-w-sm justify-between'
          >
            <div className='flex items-center gap-x-3'>
              <img
                src={thumbnail}
                alt={`${name} image`}
                className='w-[80px] rounded-lg'
              />
              <span>{name}</span>
            </div>

            <span className='p-2 rounded-xl border'>
              <BiLinkExternal />
            </span>
          </a>
        );
      })}
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className={`relative flex flex-col w-full h-32 items-center gap-y-3 py-5 backdrop-blur-sm`}
      >
        <span>{open ? "Less" : "More"}</span>
        {open ? <BsArrowUpCircle /> : <BsArrowDownCircle />}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50'></div>
      </button>
    </div>
  );
};

const SkillPage = () => {
  return (
    <>
      <section className='flex flex-col gap-y-12 items-center'>
        <h1 className='font-semibold text-2xl'>My Programming Skill</h1>
        <ProgLang />
      </section>
      <section className='flex flex-col items-center my-10'>
        <h1 className='my-10 text-3xl font-semibold'>Certification</h1>
        <Certifications />
      </section>
    </>
  );
};

export default SkillPage;
