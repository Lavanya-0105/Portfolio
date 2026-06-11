import { motion } from "framer-motion";
import { useState } from "react";
import myResume from "./assets/Mukku_NagaLavanya_Resume.pdf";
import bistroImg from "./assets/Bistro Delight.avif";
import profileImg from "./assets/Profile.png";
import swaggerImg from "./assets/Swagger UI.png";
import threadmatch from "./assets/ThreadMatch.webp";

export default function PortfolioWebsite() {
  const [isExpanded, setIsExpanded] = useState(false);

  const skills = [
    { name: "React.js", slug: "react", color: "61DAFB" },
    { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
    { name: "Node.js", slug: "nodedotjs", color: "339933" },
    { name: "AWS", image: "https://skillicons.dev/icons?i=aws" },
    { name: "MongoDB", slug: "mongodb", color: "47A248" },
    { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
    { name: "Docker", slug: "docker", color: "2496ED" },
    { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
    { name: "Redux", slug: "redux", color: "764ABC" },
    { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
    { name: "Jest", slug: "jest", color: "C21325" },
    { name: "Cypress", slug: "cypress", color: "17202C" },
    { name: "Git", slug: "git", color: "F05032" },
    { name: "CI/CD", slug: "githubactions", color: "2088FF" },
    { name: "Express.js", slug: "express", color: "000000" },
  ];
  const visibleSkills = isExpanded ? skills : skills.slice(0, 8);
  const projects = [
    {
      id: 1,
      title: " Bistro Delight",
      description:
        "A premium food delivery platform inspired by Parisian culinary speed, utilizing component-driven logic to map menus fluidly.",
      tech: ["React", "Vite", "CSS3"],
      image: bistroImg,
      liveLink:
        "https://food-delivery-mzgyy4kvi-lavanya-projects0105.vercel.app/", // Put your live link here
      githubLink: "https://github.com/Lavanya-0105/Food-Delivery.git",
    },
    {
      id: 2,
      title: "Task Management App",
      image: swaggerImg,
      description:
        "Secure Express/MongoDB REST API featuring strict Role-Based Access Controls (RBAC) and interactive Swagger UI documentation.",
      tech: ["Node.js", "MongoDB", "Express.js"],
      liveLink: "https://github.com/Lavanya-0105/Task-management.git",
      githubLink: "https://github.com/Lavanya-0105/Task-management.git ",
    },
    {
      id: 3,
      title: "ThreadMatch",
      image: threadmatch,
      description:
        "Built a full-stack outfit recommendation platform that generates personalized clothing combinations based on body type, occasion, weather, and color preferences.",
      tech: ["React", "OpenAI API", "Node.js", "Mongodb"],
      liveLink: "https://thread-match.vercel.app/",
      githubLink: "https://github.com/Lavanya-0105/ThreadMatch.git",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans selection:bg-blue-500/20">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-500/[0.06] blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-xl bg-white/90 border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-blue-600">
            Lavanya
          </h1>

          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-600">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-sm">
            <a href={myResume} download>
              Download Resume
            </a>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-44 pb-24 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.25em] text-blue-600 font-extrabold text-xs mb-5">
              Software Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900 mb-6">
              Engineering modern <br />
              <span className="text-blue-600">web experiences.</span>
            </h1>

            <p className="text-slate-600 text-lg leading-8 max-w-xl mb-10">
              From a blank screen to a fully functional application, I build
              scalable full-stack web experiences with clean logic and attention
              to detail.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-blue-600 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md">
                <a href="#projects">View Projects</a>
              </button>

              <button className="border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 px-7 py-3.5 rounded-xl font-semibold transition-all">
                <a href="#contact">Contact Me</a>
              </button>
            </div>
          </motion.div>

          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative w-[380px] h-[480px] rounded-[32px] border border-slate-200 bg-white overflow-hidden shadow-xl">
              <div className="w-full h-full flex items-center justify-center text-7xl select-none">
                <img
                  src={profileImg}
                  alt="Naga Lavanya Mukku"
                  className="w-full h-full object-cover object-center grayscale-0 hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-100/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
              About Me
            </h2>

            <p className="text-slate-600 text-base leading-8 mb-4">
              An aspiring <span className="text-blue-600 font-bold">MERN</span>
              -Stack Developer (MongoDB, Express, React, Node.js) with
              <span className="text-blue-600 font-bold"> 5+ years </span>
              of experience.{" "}
              <span className="text-blue-600 font-bold">In an AI era </span>
              where everything is automated, I still{" "}
              <strong className="text-blue-600 font-bold">
                love crafting
              </strong>{" "}
              user-centric digital products by hand with absolute precision.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { value: "500+", label: "Hours of Code" },
              { value: "40+", label: "UI Components Crafted" }, // Replaced 5+ Apps
              { value: "100%", label: "Responsive Layouts" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-slate-200 rounded-2xl py-6 shadow-sm"
              >
                <h3 className="text-4xl font-extrabold text-blue-600 mb-1">
                  {item.value}
                </h3>

                <p className="text-xs tracking-wide text-slate-500 uppercase font-bold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}

      <section id="skills" className="py-24 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900">Skills</h2>

            {/* Toggle Button in the header */}
            {skills.length > 8 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-blue-600 hover:text-blue-700 transition-colors font-bold flex items-center gap-1 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100 shadow-sm"
              >
                {isExpanded ? "Show Less ↑" : "Show More ↓"}
              </button>
            )}
          </div>

          {/* Grid layout containing the sliced skills list */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 transition-all duration-500 ease-in-out">
            {visibleSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center group"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                  <img
                    src={
                      skill.image
                        ? skill.image
                        : `https://cdn.simpleicons.org/${skill.slug}/${skill.color}`
                    }
                    alt={skill.name}
                    className="w-10 h-10 mx-auto mb-4"
                  />
                </div>
                <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900">Projects</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 transition-colors font-semibold">
              View All Projects
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top of Card: Clickable Project Image Link */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-48 block w-full overflow-hidden bg-slate-100 border-b border-slate-100 relative"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-transparent" />
                  )}
                  {/* Tiny interactive indicator visual on image */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-blue-600 px-2.5 py-1 rounded-md text-xs font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Live Demo ↗
                  </div>
                </a>

                {/* Body of Card */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        {project.title}
                      </h3>
                      {/* Clean inline link alternative text directly by headline */}
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-blue-600 hover:underline"
                      >
                        Visit Site ↗
                      </a>
                    </div>

                    <p className="text-slate-600 text-sm leading-7 mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Section: Tech Stack & GitHub code button together */}
                  <div className="flex flex-col gap-4 pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* GitHub Button placed right underneath or beside tech layouts */}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 py-2 rounded-xl text-xs font-semibold transition-all shadow-sm flex items-center justify-center gap-2 w-full"
                      title="View Source Code"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section
        id="experience"
        className="py-24 px-6 bg-slate-50 border-b border-slate-200"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Professional Experience
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              Timeline of my software engineering career and technical
              contributions.
            </p>
          </div>

          {/* 3-Column Timeline Layout */}
          <div className="relative space-y-16">
            {/* -------------------- ROLE 1: KALYAN JEWELLERS -------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-[280px_100px_1fr] gap-4 items-stretch">
              {/* COLUMN 1: Role, Company & Location */}
              <div className="md:text-right md:pr-8 pt-4 flex flex-col md:items-end items-start justify-start">
                {/* Changed text-slate-900 to text-blue-600 */}
                <h3 className="text-xl font-extrabold text-blue-600">
                  Software Engineer
                </h3>
                <span className="text-sm font-bold text-slate-700 mt-1">
                  Kalyan Jewellers Inc.
                </span>
                <p className="text-xs text-slate-700 mt-0.5">Chicago, IL</p>
              </div>

              {/* COLUMN 2: Vertical Line Track (Top Dot/Year -> Line -> Bottom Dot/Year) */}
              <div className="flex md:flex-col items-center justify-between relative py-4 min-h-[200px] md:min-h-0 w-full">
                {/* Vertical Track Line (Spans perfectly from top dot to bottom dot) */}
                <div className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-[2px] bg-slate-300 hidden md:block" />

                {/* TOP OF LINE: Starting Node & Year */}
                <div className="flex md:flex-col items-center gap-1 z-10 md:absolute md:top-4 md:left-1/2 md:-translate-x-1/2">
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50 md:bg-white md:px-1.5 py-0.5 rounded">
                    Present
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 border-2 border-white shadow-sm hidden md:block" />
                </div>

                {/* BOTTOM OF LINE: Ending Node & Year */}
                <div className="flex md:flex-col items-center gap-1 z-10 md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 border-2 border-white shadow-sm hidden md:block" />
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50 md:bg-white md:px-1.5 py-0.5 rounded">
                    2024
                  </span>
                </div>
              </div>

              {/* COLUMN 3: Project Desc, Contribution, Tech Stack */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm md:ml-4 w-full flex flex-col justify-center">
                {/* Added border-blue-600, text-blue-900, and a soft bg-blue-50/50 background tint */}
                <p className="text-sm font-semibold text-blue-900 truncate mb-3 border-l-2 border-blue-600 pl-3 bg-blue-50/50 py-1 rounded-r-md">
                  Project: Enterprise retail order management pipelines handling
                  5,000+ daily transactions.
                </p>

                <p className="text-slate-600 text-sm leading-6 mb-5 line-clamp-3">
                  Developed scalable RESTful APIs with JWT authentication and
                  built responsive React/TypeScript frontends with Redux that
                  slashed load times by 30%. Implemented real-time event-driven
                  tracking via WebSockets to bring data synchronization
                  latencies under 2 seconds.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {[
                    "React.js",
                    "TypeScript",
                    "Node.js",
                    "PostgreSQL",
                    "WebSockets",
                    "Docker",
                    "AWS",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* -------------------- ROLE 2: TCS -------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-[280px_100px_1fr] gap-4 items-stretch">
              {/* COLUMN 1: Role, Company & Location */}
              <div className="md:text-right md:pr-8 pt-4 flex flex-col md:items-end items-start justify-start">
                <h3 className="text-xl font-extrabold text-blue-600">
                  Associate Software Developer
                </h3>
                <span className="text-sm font-bold text-slate-700 mt-1">
                  Tata Consultancy Services Lmtd.
                </span>
                <p className="text-xs text-slate-700 mt-0.5">Chennai, India</p>
              </div>

              {/* COLUMN 2: Vertical Line Track (Top Dot/Year -> Line -> Bottom Dot/Year) */}
              <div className="flex md:flex-col items-center justify-between relative py-4 min-h-[200px] md:min-h-0 w-full">
                {/* Vertical Track Line */}
                <div className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-[2px] bg-slate-300 hidden md:block" />

                {/* TOP OF LINE: Starting Node & Year */}
                <div className="flex md:flex-col items-center gap-1 z-10 md:absolute md:top-4 md:left-1/2 md:-translate-x-1/2">
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50 md:bg-white md:px-1.5 py-0.5 rounded">
                    2022
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 border-2 border-white shadow-sm hidden md:block" />
                </div>

                {/* BOTTOM OF LINE: Ending Node & Year */}
                <div className="flex md:flex-col items-center gap-1 z-10 md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 border-2 border-white shadow-sm hidden md:block" />
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50 md:bg-white md:px-1.5 py-0.5 rounded">
                    2019
                  </span>
                </div>
              </div>

              {/* COLUMN 3: Project Desc, Contribution, Tech Stack */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm md:ml-4 w-full flex flex-col justify-center">
                <p className="text-sm font-semibold text-blue-900 truncate mb-3 border-l-2 border-blue-600 pl-3 bg-blue-50/50 py-1 rounded-r-md">
                  Project: Large-scale enterprise financial reporting platforms
                  and business intelligence ecosystems.
                </p>

                <p className="text-slate-600 text-sm leading-6 mb-5 line-clamp-3">
                  Designed interactive TypeScript dashboards featuring dynamic
                  charts and optimized backend MongoDB workflows to increase
                  runtime rendering speeds by 35%. Built rigorous unit and
                  end-to-end automated tests with Jest and Cypress to guarantee
                  production release stability.
                </p>
                {/* Tech Stack Footer Row */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {[
                    "React.js",
                    "TypeScript",
                    "Node.js",
                    "MongoDB",
                    "Jest",
                    "Cypress",
                    "Agile",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-white border border-slate-200 rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Let's work together
            </h2>
            <p className="text-slate-600 text-base leading-7 max-w-md">
              Have a project in mind or want to say hi? You can email me
              directly via Gmail or connect on professional networks.
            </p>
          </div>

          {/* Interactive Actions Layout */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto justify-center">
            {/* Email Button - Formatted cleanly for both apps and webmail redirects */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nagalavanyamukku@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-bold transition-all duration-300 shadow-md text-center inline-block whitespace-nowrap w-full sm:w-auto"
            >
              Email Me
            </a>

            {/* LinkedIn Button using bulletproof inline SVG */}
            <a
              href="https://linkedin.com/in/lavanyamukku"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 hover:border-blue-300 bg-white hover:bg-slate-50 text-[#0A66C2] p-3 rounded-xl transition-all duration-300 shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto px-6 font-semibold"
              title="Connect on LinkedIn"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Bottom Left Corner: Social and Contact Icons */}

          <div className="flex items-center gap-3">
            {/* GitHub - Original Dark Asset */}
            <a
              href="https://github.com/Lavanya-0105"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all group"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="w-5 h-5 transition-transform group-hover:scale-105"
              />
            </a>
            {/* LinkedIn - Original Corporate Blue Asset */}
            <a
              href="https://linkedin.com/in/lavanyamukku"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-5 h-5 transition-transform group-hover:scale-105"
              />
            </a>
            {/* Gmail - Original Multi-color Envelope Asset */}
            <a
              href="mailto:nagalavanyamukku@gmail.com"
              aria-label="Email Me"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm hover:border-red-200 hover:shadow-md transition-all group"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                alt="Gmail"
                className="w-5 h-5 object-contain transition-transform group-hover:scale-105"
              />
            </a>
          </div>
          <p className="text-slate-500 text-xs">
            © 2026 Lavanya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
