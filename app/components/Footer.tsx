import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="text-white mt-10 p-4 gap-3 flex flex-col items-center">
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/muhammedansar/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>
        <a
          href="https://github.com/muhammedansar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          <FaGithub className="h-6 w-6" />
        </a>
      </div>

      <div className="text-sm mb-2">
        &copy; {new Date().getFullYear()} Developed by Muhammed Ansar
      </div>
    </footer>
  );
};

export default Footer;
