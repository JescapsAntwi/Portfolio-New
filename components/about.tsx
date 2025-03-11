import Image from 'next/image'

export default function About() {
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

      <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl/tight">About Me</h2>
          <p className="max-w-[600px] text-sm text-muted-foreground md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed">
            Hey! I&apos;m Jescaps. I&apos;m passionate about crafting sleek, high-performing websites that bring ideas to life. With a year of hands-on experience, I&apos;ve been diving deep into the world of <span className="font-bold text-red-500 "> typescipt, javascript, react, and node.js.</span>
            , building everything from dynamic UIs to powerful backends.

            <br />
            <br />
            Let&apos;s turn code into creativity!
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <h3 className="text-2xl font-bold tracking-tighter md:text-3xl/tight">Background</h3>
            <p className="text-muted-foreground">
              I&apos;m pursuing a bachelor&apos;s degree in Computer Science at
              Ashesi University. By the way, I&apos;ve worked on some projects with
              small teams and done some free-lancing too. I am always on the hunt for the latest tech trends—staying ahead of the curve isn&apos;t just a habit, it&apos;s an obsession! -  Whether it&apos;s a new framework, a cutting-edge tool, or the next big thing in web dev, I&apos;m all in!
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-2xl font-bold tracking-tighter md:text-3xl/tight">Skills</h3>
            <p className="text-muted-foreground">
              In the ever-evolving world of web development,
              my skills define my capabilities. I have a strong command of <span className="font-bold text-red-500 "> typescipt, javascript, react, and node.js.</span> complemented by experience in <span className="font-bold text-red-500 "> Next.js, Express.js, and a variety of modern libraries.</span> With a keen eye for
              responsive design and UI/UX principles, I ensure seamless user
              experiences across all devices. Additionally, my proficiency in Git allows me to maintain clean, structured, and well-documented code. I am also fluent in <span className="font-bold text-red-500 "> Python, C, Java, and SQL. </span>
              Driven by a passion for continuous learning, I am eager to contribute to innovative and forward-thinking projects.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="/JescapsAntwiCV.pdf"
              download="JescapsAntwi_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors"
            >
              <svg
                className="w-4 h-4"
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
      </div>
    </section>
  )
}