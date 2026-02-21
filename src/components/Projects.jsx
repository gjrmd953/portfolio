import React from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce website built with React and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702",
    liveLink: "https://splendid-cheesecake-54e75d.netlify.app/product",
    githubLink: "https://github.com/gjrmd953/finalproject",
  },
  {
    id: 2,
    title: "Task Manager App",
    description:
      "A task management app where users can add, edit and delete tasks.",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    liveLink: "#",
    githubLink: "https://github.com/gjrmd953/portfolio",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects and skills.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects and skills.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects and skills.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects and skills.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    liveLink: "#",
    githubLink: "#",
  },

];

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;