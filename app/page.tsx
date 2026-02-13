"use client";

import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  Menu,
  Sun,
  Moon,
} from "lucide-react";
import ChatUI from "@/components/ui/ChatUI";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const skills = [
    "C#",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "SQL",
    "Power Bi",
    "Flutter",
    "Figma",
    "Front-end",
    "Qlikview",
  ];
  const projects = [
    {
      name: "EAN Barcode Generator",
      description:
        "A production-ready web tool for generating printable EAN barcode sheets from CSV or manual input. Built with Next.js, Python (ReportLab), and deployed on Vercel + Render.",
      link: "https://ean.santeripikkarainen.com/",
    },
    //{ name: "Project B", description: "...", link: "#" },
    // { name: "Project C", description: "...", link: "#" },
  ];

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#about") scrollToRef(aboutRef);
    if (hash === "#skills") scrollToRef(skillsRef);
    if (hash === "#projects") scrollToRef(projectsRef);
    if (hash === "#contact") scrollToRef(contactRef);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`max-w-6xl  w-full mx-auto justify-start items-start flex flex-col
min-h-screen  text-gray-900  dark:text-gray-100 font-mono p-4 sm:p-8 transition-colors duration-200`}
    >
      <header className="mb-8 sm:mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Santeri Pikkarainen
          </h1>
          <p className="text-lg sm:text-xl">Front-end Developer</p>
        </div>
      </header>

      <nav className="mb-8 sticky top-0 bg-gray-100 dark:bg-gray-900 py-4 z-10 flex w-full items-center justify-center">
        <div className="flex flex-wrap items-center">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-gray-900 bg-white border-gray-300 hover:bg-gray-100 dark:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mr-2"
          >
            <Menu />
          </Button>
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } sm:flex flex-col sm:flex-row absolute sm:relative top-full left-0 right-0 bg-gray-100 dark:bg-gray-900 sm:bg-transparent sm:dark:bg-transparent`}
          >
            <Button
              onClick={() => scrollToRef(aboutRef)}
              className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2 text-gray-900 bg-white border-gray-300 hover:bg-gray-100 dark:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              About
            </Button>
            <Button
              onClick={() => scrollToRef(skillsRef)}
              className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2 text-gray-900 bg-white border-gray-300 hover:bg-gray-100 dark:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              Skills
            </Button>
            <Button
              onClick={() => scrollToRef(projectsRef)}
              className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2 text-gray-900 bg-white border-gray-300 hover:bg-gray-100 dark:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              Projects
            </Button>
            <Button
              onClick={() => scrollToRef(contactRef)}
              className="w-full sm:w-auto text-gray-900 bg-white border-gray-300 hover:bg-gray-100 dark:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              Contact
            </Button>
          </div>
          <Button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-auto sm:ml-2 text-gray-900 bg-white border-gray-300 hover:bg-gray-100 dark:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      <ChatUI />

      <main className="space-y-8 sm:space-y-12">
        <section ref={aboutRef} id="about">
          <Card className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
            <CardContent className="pt-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center">
                <Terminal className="mr-2" /> About Me
              </h2>
              <p className="mb-4 text-sm sm:text-base">
                Frontend-focused IT graduate building clean, intuitive, and
                reliable web applications. I turn ideas into fast, user-centered
                digital experiences.
              </p>
            </CardContent>
          </Card>
        </section>

        <section ref={skillsRef} id="skills">
          <Card className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
            <CardContent className="pt-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-xs sm:text-sm dark:border-gray-600 dark:text-gray-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section ref={projectsRef} id="projects">
          <Card className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
            <CardContent className="pt-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Projects</h2>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div
                    key={project.name}
                    className="border border-gray-300 dark:border-gray-700 p-4 rounded-md"
                  >
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      {project.name}
                    </h3>
                    <p className="mb-2 text-sm sm:text-base">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base"
                    >
                      View Project
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section ref={contactRef} id="contact">
          <Card className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
            <CardContent className="pt-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact</h2>
              <div className="space-y-2">
                <a
                  href="mailto:santeripikkarainen@gmail.com"
                  className="flex items-center  text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Mail className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />{" "}
                  santeripikkarainen@gmail.com
                </a>
                <a
                  href="https://github.com/SaneX8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center  text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Github className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />{" "}
                  github.com/SaneX8
                </a>
                <a
                  href="https://linkedin.com/in/santeri-pikkarainen-360a4113a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center  text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Linkedin className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />{" "}
                  linkedin.com/in/santeri-pikkarainen-360a4113a
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
