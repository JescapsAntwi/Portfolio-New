import ProjectCard from "./ProjectCard";

const projects = [
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
    title: "client portfolio",
    description: "a portfolio website for a client.",
    image: "/projects/project-10.png",
    liveSite: "https://francisacquah.vercel.app/",
    github: "https://github.com/JescapsAntwi/Client-Francis-Portfolio",
    techStack: ["React", "TypeScript", "Tailwind"],
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
    image: "/projects/project-13.png",
    liveSite: "https://shooting-arcade.vercel.app/",
    github: "https://github.com/JescapsAntwi/gamehub-trio",
    techStack: ["React", "TypeScript", "CSS", "Mongo"],
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
    github: "",
    techStack: ["React", "TypeScript", "Tailwind"],
  },

  {
    title: "Website Redesign",
    description:
      "a redesign of the human practices page of the 2024 Ashesi iGEM team. (under development)",
    image: "/projects/project-9.png",
    liveSite: "",
    github: "",
    techStack: ["React", "Next", "Tailwind"],
  },
  {
    title: "currency converter",
    description:
      "check the exchange rates of several currencies. (under development)",
    image: "/projects/project-6.png",
    liveSite: "",
    github: "",
    techStack: ["Next", "React", "Tailwind"],
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
