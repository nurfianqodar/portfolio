// src/components/GitHubProjects.tsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiGithub } from "react-icons/fi";
import { SiYoutube } from "react-icons/si";

interface Project {
  name: string;
  html_url: string;
  created_at: Date;
  language: string;
  owner: {
    avatar_url: string;
  };
}

interface YouTubeVideoItem {
  id: {
    videoId: string;
  };
}

interface YouTubeResponse {
  items: YouTubeVideoItem[];
}

const GitHubProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [youtubeVideos, setYoutubeVideos] = useState<YouTubeVideoItem[]>([]);

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

    const fetchYouTubeVideos = async () => {
      try {
        const response = await axios.get<YouTubeResponse>(
          "https://www.googleapis.com/youtube/v3/search?order=date&maxResults=20&part=id&channelId=UC7VfdDrBeigCtMHprRngYDw&key=AIzaSyDq5SwRAS6qCmp-KQ2l7yKQW3JTn31T_FI"
        );
        setYoutubeVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProjects();
    fetchYouTubeVideos();
  }, []);

  return (
    <>
      <ProjectSection projects={projects} />
      <YouTubeSection videos={youtubeVideos} />
      <MoreProjectsSection />
    </>
  );
};

const ProjectSection: React.FC<{ projects: Project[] }> = ({ projects }) => (
  <section className='flex w-full flex-col mx-auto items-center gap-y-4'>
    <h1 className='text-2xl font-bold flex items-center mb-5'>My Projects</h1>
    <a
      className='flex items-center mb-5 text-xl'
      href='https://github.com/nurfianqodar/'
    >
      On GitHub <FiGithub className='ml-2' />
    </a>
    <div className='flex w-full flex-wrap gap-5 items-center justify-center'>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <a
    className='flex w-full border pl-5 px-2 py-2 rounded-xl items-center gap-2 max-w-sm'
    href={project.html_url}
    target='_blank'
    rel='noopener noreferrer'
  >
    <img
      src={project.owner.avatar_url}
      alt='avatar'
      className='rounded-full w-10'
    />
    <div className='flex flex-col'>
      <span className='font-semibold text-lg'>{project.name}</span>
      <span className='font-light text-xs'>{`Language: ${project.language}`}</span>
      <span className='font-light text-xs'>{`Created: ${new Date(
        project.created_at
      ).toLocaleDateString()}`}</span>
    </div>
  </a>
);

const YouTubeSection: React.FC<{ videos: YouTubeVideoItem[] }> = ({
  videos,
}) => (
  <section className='flex items-center justify-center flex-col my-16'>
    <h1 className='flex items-center mb-10'>
      My YouTube Channel <SiYoutube />
    </h1>
    <div className='flex flex-wrap gap-5'>
      {videos.map((video, index) => (
        <YouTubeEmbed key={index} videoId={video.id.videoId} />
      ))}
    </div>
  </section>
);

const YouTubeEmbed: React.FC<{ videoId: string }> = ({ videoId }) => (
  <iframe
    allowFullScreen
    src={`https://www.youtube-nocookie.com/embed/${videoId}`}
    title={`YouTube video ${videoId}`}
    className='w-full h-64'
  ></iframe>
);

const MoreProjectsSection: React.FC = () => (
  <section className='my-24 flex justify-center'>
    <h1 className='font-semibold text-xl'>More projects? Coming soon...</h1>
  </section>
);

export default GitHubProjects;
