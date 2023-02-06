"use client";
import { useState } from "react";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project"
import Contact from "./Components/Contact"
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from "react-scroll";
export default function Home() {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
      text: "درباره من",
    },
    {
      id: 2,
      link: "portfolio",
      text: "مهارت ها",
    },
    {
      id: 3,
      text: "پروژه ها",
      link: "experience",
    },
    {
      id: 4,
      link: "contact",
      text: "ارتباط با من",
    },
  ];
   

  return (
    <div className={darkMode ? "dark" : ""}>
      <header>
        <nav className="flex items-center w-full h-14 px-4 fixed nav bg-pink-800 text-white dark:bg-slate-900 ">
          <div className="md:mr-5">
            <h1 className="font-black text-xl">Maedeh Morajabi</h1>
          </div>

          <ul className="hidden md:flex ml-auto mr-4">
            {links.map(({ id, link, text }) => (
              <li
                key={id}
                className="nav-links px-4 cursor-pointer capitalize font-medium text-slate-50 dark:text-slate-100 hover:scale-105 hover:text-white duration-200"
              >
                <Link to={link} smooth duration={500}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center mr-auto">
            <li className="bg-pink-50 ml-4 p-1 rounded-md hover:scale-105">
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl text-slate-900 p-0.5 "
              />
            </li>
            <li>
              <a
                className="md:block hidden bg-gradient-to-r from-pink-100 text-sm to-pink-50 text-pink-900 px-4 py-2 border-none rounded-md ml-8 hover:scale-105 hover:from-pink-50 hover:to-pink-100 duration-200"
                href="/public/resume.pdf" download
              >
                دانلود رزومه
              </a>
            </li>
          </ul>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-white md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-pink-900 text-slate-100">
              {links.map(({ id, link, text }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>
      <main className="bg-pink-50 lg:px-32 px-10">
        <About />
        <Skill />
        <Project/>
<Contact/>
      </main>
      <footer>
        <div class="text-center p-5 bg-pink-900">
          <span class="text-white">&copy; 2022 Copyright - </span>
          <a class="text-white font-bold" href="#">
            Maedeh morajabi
          </a>
        </div>
      </footer>
    </div>
  );
}
