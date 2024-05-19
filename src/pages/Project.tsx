// src/components/GitHubProjects.tsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiGithub } from "react-icons/fi";

interface Project {
  name: string;
  html_url: string;
  created_at: Date;
  language: string;
  owner: {
    avatar_url: string;
  };
}

const ProjectPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<Project[]>(
          "https://api.github.com/users/nurfianqodar/repos"
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <section className='flex w-full flex-col mx-auto items-center gap-y-4'>
        <h1 className='text-2xl font-bold flex items-center mb-10'>
          My Projects on
          <a
            className='flex items-center ml-2'
            href='https://github.com/nurfianqodar/'
          >
            GitHub{" "}
            <span className='ml-1'>
              <FiGithub />
            </span>
          </a>
        </h1>

        <div className='flex w-full flex-wrap gap-5 items-center justify-center'>
          {projects.map((project, index) => (
            <a
              key={index}
              className='flex w-full border pl-5 px-2 py-2 rounded-xl items-center gap-2 max-w-md'
              href={project.html_url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={project.owner.avatar_url}
                alt='avatar url'
                className='rounded-full w-10'
              />
              <div className='flex flex-col'>
                <span className='font-semibold text-lg'>{project.name}</span>
                <span className='font-light text-xs'>{`Language : ${project.language}`}</span>
                <span className='font-light text-xs'>{`created: ${new Date(
                  project.created_at
                ).toLocaleDateString()}`}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className='my-24 flex justify-center'>
        <h1 className='font-semibold text-xl'>More projects? coming soon...</h1>
      </section>
    </>
  );
};

export default ProjectPage;
