import React, { useEffect, useState } from "react";
import {
  BiLinkExternal,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { SiExpress, SiHono, SiNestjs, SiRedux } from "react-icons/si";

const programmingLanguage: {
  name: string;
  logo: React.ReactElement;
  link: string;
}[] = [
  {
    name: "JavaSctipt",
    logo: <BiLogoJavascript />,
    link: "url",
  },
  {
    name: "TypeScript",
    logo: <BiLogoTypescript />,
    link: "",
  },
  {
    name: "Python",
    logo: <BiLogoPython />,
    link: "",
  },
  {
    name: "React",
    logo: <BiLogoReact />,
    link: "",
  },
  {
    name: "Express JS/TS",
    logo: <SiExpress />,
    link: "",
  },
  {
    name: "Redux",
    logo: <SiRedux />,
    link: "",
  },
  {
    name: "Hono",
    logo: <SiHono />,
    link: "",
  },
  {
    name: "Nest JS",
    logo: <SiNestjs />,
    link: "",
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
            className='flex flex-col items-center justify-center gap-y-1'
          >
            <span className='text-6xl'>{logo}</span>
            <span>{name}</span>
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
      : setCertificates(certificate.slice(0, 3));
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
        className={`${
          open ? "" : "-translate-y-32"
        } relative flex flex-col w-full h-32 items-center gap-y-3 py-5 backdrop-blur-sm`}
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
