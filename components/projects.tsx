import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "macos replica",
    description: "lolify creates branded memes to boost engagement and drive better campaign results.",
    image: "/projects/project-5.png",
    liveSite: "https://lolify.io/",
    techStack: ["Next", "React", "Tailwind"],
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
    title: "react joyride",
    description: "for getting all the doubts and question at one place",
    image: "/projects/project-2.png",
    liveSite: "https://ama-beige.vercel.app/",
    github: "https://github.com/notcodesid/askmeanything",
    techStack: ["Next", "TypeScript", "Tailwind", "Mongo"],
  },
  {
    title: "anonymous chat room",
    description: "a basic roadmap and resources for learning Web development.",
    image: "/projects/project-3.png",
    liveSite: "https://learnwebdev.vercel.app/",
    github: "https://github.com/notcodesid/learnwebdev",
    techStack: ["React", "Next", "Tailwind"],
  },
  {
    title: "currency converter",
    description: "reimagining the relationship between humans and our best friends",
    image: "/projects/project-4.png",
    liveSite: "https://dognosis.vercel.app/",
    github: "https://github.com/notcodesid/dognosis",
    techStack: ["Next", "React", "Tailwind"],
  },

  {
    title: "ninja sketch",
    description: "a typing tester that lets you check your typing speed.",
    image: "/projects/project-6.png",
    liveSite: "https://typing-tester-phi.vercel.app/",
    github: "https://github.com/notcodesid/typing-tester",
    techStack: ["React", "TypeScript", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            These are some of the projects I have worked on.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={{ ...project, github: project.github ?? null }} />
          ))}
        </div>
      </div>
    </section>
  );
}