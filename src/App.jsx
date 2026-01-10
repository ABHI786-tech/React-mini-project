import React from "react";
import Projects from "./constant/projects";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden
           transform hover:-translate-y-2 transition-all duration-300
           hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)]"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover transform group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-5">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium
                     hover:bg-indigo-700 transition-all duration-300 group-hover:translate-x-1"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-400 to-slate-500">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-700 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white py-6">
          🚀 My Projects
        </h1>
      </header>

      {/* Content */}
      <main className="px-6 py-14">
        <div className="max-w-7xl mx-auto grid gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
