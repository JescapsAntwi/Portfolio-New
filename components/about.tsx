"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ContainerVariants = {
  hidden: {
    opacity: number;
    y: number;
  };
  visible: {
    opacity: number;
    y: number;
    transition: {
      duration: number;
      ease: string;
    };
  };
};

const About = () => {
  const containerVariants: ContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-muted">
      <div className="container mb-8 flex justify-center">
        <div className="relative w-[250px] h-[312px] md:w-[300px] md:h-[375px] overflow-hidden rounded-xl">
          <Image
            src="/Profile.jpg"
            alt="Jescaps Antwi"
            fill
            priority
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="container grid items-center justify-center gap-12 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid gap-4 p-6 rounded-xl bg-gradient-to-br from-background to-muted border shadow-sm"
            >
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl/tight bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent text-center">
                About Me
              </h2>
              <p className="max-w-[600px] text-sm text-muted-foreground md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed">
                Hey! I&apos;m Jescaps. I&apos;m passionate about crafting sleek,
                high-performing websites that bring ideas to life. With a year
                of hands-on experience, I&apos;ve been diving deep into the
                world of{" "}
                <span className="font-bold text-red-500 ">
                  {" "}
                  typescript, javascript, react, and node.js.
                </span>
                , building everything from dynamic UIs to powerful backends.
                <br />
                <br />
                Let&apos;s turn code into creativity!
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid gap-4 p-6 rounded-xl bg-gradient-to-br from-background to-muted border shadow-sm"
            >
              <h3 className="text-2xl font-bold tracking-tighter md:text-3xl/tight bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent text-center">
                Skills
              </h3>
              <p className="text-muted-foreground">
                In the ever-evolving world of web development, my skills define
                my capabilities. I have a strong command of{" "}
                <span className="font-bold text-red-500 ">
                  {" "}
                  typescript, javascript, react, and node.js.
                </span>{" "}
                complemented by experience in{" "}
                <span className="font-bold text-red-500 ">
                  {" "}
                  Next.js, Express.js, and a variety of modern libraries.
                </span>{" "}
                With a keen eye for responsive design and UI/UX principles, I
                ensure seamless user experiences across all devices.
                Additionally, my proficiency in Git allows me to maintain clean,
                structured, and well-documented code. I am also fluent in{" "}
                <span className="font-bold text-red-500 ">
                  {" "}
                  Python, C, Java, and SQL.{" "}
                </span>
                Driven by a passion for continuous learning, I am eager to
                contribute to innovative and forward-thinking projects.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid gap-4 p-6 rounded-xl bg-gradient-to-br from-background to-muted border shadow-sm"
            >
              <h3 className="text-2xl font-bold tracking-tighter md:text-3xl/tight bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent text-center">
                Background
              </h3>
              <p className="text-muted-foreground">
                I&apos;m pursuing a bachelor&apos;s degree in Computer Science
                at Ashesi University. By the way, I&apos;ve worked on some
                projects with small teams and done some free-lancing too. I am
                always on the hunt for the latest tech trends—staying ahead of
                the curve isn&apos;t just a habit, it&apos;s an obsession! -
                Whether it&apos;s a new framework, a cutting-edge tool, or the
                next big thing in web dev, I&apos;m all in!
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid gap-4 p-6 rounded-xl bg-gradient-to-br from-background to-muted border shadow-sm"
            >
              <h3 className="text-2xl font-bold tracking-tighter md:text-3xl/tight bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent text-center">
                Work Experience
              </h3>
              <div className="text-muted-foreground space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <h4 className="font-bold text-xl bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                      Frontend Developer Intern - Oasis Infobyte (India)
                    </h4>
                    <span className="text-red-500">•</span>
                    <a
                      href="https://github.com/JescapsAntwi/OIBSIP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-600 hover:underline"
                    >
                      GitHub
                    </a>
                    <span className="text-red-500">•</span>
                    <a
                      href="https://github.com/JescapsAntwi/OIBSIP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-600 hover:underline"
                    >
                      Live Site
                    </a>
                    <span className="text-red-500">•</span>
                    <span className="text-sm">June 2024 - Sep 2024</span>
                  </div>
                  <ul className="list-disc list-inside">
                    <li>
                      Developed and maintained responsive web applications using
                      React and TypeScript
                    </li>
                    <li>
                      Collaborated with the design team to implement UI/UX
                      improvements
                    </li>
                    <li>
                      Optimized application performance resulting in 30% faster
                      load times
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <h4 className="font-bold text-xl bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                      Volunteer Full-Stack Developer - Databank Ghana
                    </h4>
                    <span className="text-red-500">•</span>
                    <a
                      href="https://github.com/JescapsAntwi/DB-Dasboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-600 hover:underline"
                    >
                      GitHub
                    </a>
                    <span className="text-red-500">•</span>
                    <a
                      href="https://db-dasboard.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-600 hover:underline"
                    >
                      Live Site
                    </a>
                    <span className="text-red-500">•</span>
                    <span className="text-sm"> Mar 2025 - Apr 2025</span>
                  </div>
                  <ul className="list-disc list-inside">
                    <li>
                      Designed a comprehensive digital system to manage internal
                      HR records and workflows, reducing manual workload by 40%.
                    </li>
                    <li>
                      Automated workflows using backend logic and no-code
                      prototyping tools.
                    </li>
                    <li>
                      Integrated charts for data visualization, enabling HR to
                      make data-driven staffing decisions
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <h4 className="font-bold text-xl bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                      Machine - Databank Ghana
                    </h4>
                    <span className="text-red-500">•</span>
                    <a
                      href="https://github.com/JescapsAntwi/DB-Dasboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-600 hover:underline"
                    >
                      GitHub
                    </a>
                    <span className="text-red-500">•</span>
                    <a
                      href="https://db-dasboard.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-600 hover:underline"
                    >
                      Live Site
                    </a>
                    <span className="text-red-500">•</span>
                    <span className="text-sm"> Mar 2025 - Apr 2025</span>
                  </div>
                  <ul className="list-disc list-inside">
                    <li>
                      Designed a comprehensive digital system to manage internal
                      HR records and workflows, reducing manual workload by 40%.
                    </li>
                    <li>
                      Automated workflows using backend logic and no-code
                      prototyping tools.
                    </li>
                    <li>
                      Integrated charts for data visualization, enabling HR to
                      make data-driven staffing decisions
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="/Jescaps Antwi CV.pdf"
            download="JescapsAntwi_CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-600 rounded-md hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
