import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "fuel quantity predictor app",
    description:
      "a fuel prediction system for Ghana’s Satellite Trans Limited.",
    image: "/projects/project-19.png",
    liveSite: "https://f09f5335bd586d5a80.gradio.live/",
    github: "https://github.com/JescapsAntwi/fuel-predictor",
    techStack: ["Python"],
  },
  {
    title: "employee + human capital dashboard",
    description:
      "a sleek, interactive dashboard that transforms employee statistics and human capital data into visually engaging insights, blending dynamic charts.",
    image: "/projects/project-7.png",
    liveSite: "https://db-dasboard.vercel.app/",
    github: "https://github.com/JescapsAntwi/DB-Dasboard",
    techStack: ["React", "TypeScript", "Tailwind"],
  },

  {
    title: "hospital management system",
    description: "a hospital management system for natembea health center.",
    image: "/projects/project-8.png",
    liveSite: "https://nantembea-interface.vercel.app/",
    github: "https://github.com/JescapsAntwi/Nantembea-Interface",
    techStack: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "jumpman X nike site redesign",
    description: "a redesign of the popular jumpman X Nike site.",
    image: "/projects/project-20.png",
    liveSite: "https://nike-x-jescaps.vercel.app/",
    github: "https://github.com/JescapsAntwi/nike-jordan-redesign",
    techStack: ["Next", "TypeScript", "Tailwind", "Firebase"], //add firebase
  },
  {
    title: "client portfolio",
    description: "a portfolio website for a client.",
    image: "/projects/project-10.png",
    liveSite: "https://francisacquah.vercel.app/",
    github: "https://github.com/JescapsAntwi/Client-Francis-Portfolio",
    techStack: ["React", "TypeScript", "Tailwind"],
  },

  {
    title: "school exeat system",
    description:
      "the Aburi Girls Exeat Hub is a comprehensive digital platform designed to modernize and streamline the exeat management process.",
    image: "/projects/project-17.png",
    liveSite: "https://aburi-girls-exeat.netlify.app/",
    github: "https://github.com/JescapsAntwi/aburi-girls-exeat-system",
    techStack: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "hope & healing",
    description:
      "hope & healing is a comprehensive online hub dedicated to supporting survivors of Gender-Based Violence (GBV), their families, and allies. Our platform provides a safe, accessible space for resources, support, and community building in the fight against GBV.",
    image: "/projects/project-15.png",
    liveSite: "https://hope-healing.vercel.app/",
    github: "https://github.com/JescapsAntwi/hope-healing",
    techStack: ["React", "TypeScript", "Tailwind"],
  },

  {
    title: "agri life insights",
    description:
      "a web application that provides insights and data on agricultural activities, weather, and market trends for farmers.",
    image: "/projects/project-18.png",
    liveSite: "https://solfa-project.netlify.app/",
    github: "https://github.com/JescapsAntwi/agri-life-insights",
    techStack: ["React", "TypeScript", "CSS", "Mongo"],
  },

  {
    title: "animal racing game",
    description:
      "A betting-style racing simulator featuring randomized animal winners based on weighted probabilities.",
    image: "/projects/project-11.png",
    liveSite: "https://gamehub-trio.vercel.app/",
    github: "https://github.com/JescapsAntwi/gamehub-trio",
    techStack: ["React", "TypeScript", "CSS", "Mongo"],
  },

  {
    title: "oddsmaster – math & risk challenge",
    description:
      "test your logic under pressure by solving math puzzles with a twist of confidence-based betting.",
    image: "/projects/project-12.png",
    liveSite: "https://gamehub-trio.vercel.app/",
    github: "https://github.com/JescapsAntwi/gamehub-trio",
    techStack: ["React", "TypeScript", "CSS", "Mongo"],
  },

  {
    title: "bankroll manager – budgeting game",
    description:
      "a turn-based strategy simulation that challenges players to manage a bankroll across risk-tiered betting rounds.",
    image: "/projects/project-13.png",
    liveSite: "https://gamehub-trio.vercel.app/",
    github: "https://github.com/JescapsAntwi/gamehub-trio",
    techStack: ["React", "TypeScript", "CSS", "Mongo"],
  },

  {
    title: "shooting arcade game",
    description:
      "defend Earth from alien invaders in this action-packed arcade-style game!",
    image: "/projects/project-14.png",
    liveSite: "https://shooting-arcade.vercel.app/",
    github: "https://github.com/JescapsAntwi/shooting-arcade",
    techStack: ["React", "TypeScript", "CSS", "HTML"],
  },
  {
    title: "spin & survive",
    description: "a modern, interactive slot machine game.",
    image: "/projects/project-16.png",
    liveSite: "https://spin-to-survive.vercel.app/",
    github: "https://github.com/JescapsAntwi/spin-to-survive",
    techStack: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "typing test game",
    description: "a typing test game for testing your typing speed.",
    image: "/projects/project-1.png",
    liveSite: "https://jescapsantwi.github.io/TypingTestGame/",
    github: "https://github.com/JescapsAntwi/TypingTestGame",
    techStack: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "sketchez",
    description:
      "a whiteboard on your screen, where you can draw lines, and shapes, or even write notes using a pencil or text tool.",
    image: "/projects/project-4.png",
    liveSite: "https://sketchez.vercel.app/",
    github: "https://github.com/JescapsAntwi/Sketchez",
    techStack: ["React", "TypeScript", "Tailwind"],
  },

  {
    title: "website redesign",
    description:
      "a redesign of the human practices page of the 2024 Ashesi iGEM team.",
    image: "/projects/project-9.png",
    liveSite: "https://igem-project.vercel.app/",
    github: "https://github.com/JescapsAntwi/IGEM-Project",
    techStack: ["React", "Next", "Tailwind"],
  },
  {
    title: "currency converter",
    description: "check the exchange rates of several currencies.",
    image: "/projects/project-6.png",
    liveSite: "https://currency-converter-jes.netlify.app/",
    github: "https://github.com/JescapsAntwi/currency-converter",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  //check the exchange rates of several currencies.

  {
    title: "app tour guide",
    description: "under development",
    image: "/projects/project-2.png",
    liveSite: "",
    github: "",
    techStack: ["Next", "TypeScript", "Tailwind", "Mongo"],
  },
  {
    title: "macos replica",
    description: "under development",
    image: "/projects/project-5.png",
    liveSite: "",
    github: "",
    techStack: ["Next", "React", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            My Projects
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            These are some of the projects I have worked on.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={{ ...project, github: project.github ?? null }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
