// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import myPhoto from "./assets/images/myPhoto.png";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a>
        <img
              src={myPhoto}
              className="block mx-auto h-10 rounded-full sm:mx-3 sm:shrink-0"
            />
        </a>
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-1 text-xl">
            Yohei Sato
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projetos
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Competências
          </a>
        </nav>
        <a
          href="https://www.linkedin.com/in/lucas-sato-231689197/"
          className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0"
        >
          LinkedIn
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
