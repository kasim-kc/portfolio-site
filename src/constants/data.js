const portfolioData = {
  name: "Kasim Chhota",
  image: "src/assets/pic.jpg",
  keywords: ["React Developer", "Frontend Enthusiast"],
  objective:
    "A passionate and detail-oriented Front-End Developer seeking an opportunity to contribute to impactful projects, learn continuously, and grow in a collaborative development environment. Skilled in modern web technologies and eager to bring designs to life with clean, responsive interfaces.",

  education: [
    {
      id: 1,
      course: "Bachelor of Engineering in Information Technology",
      institution: "Savitribai Phule Pune University",
      duration: "2021 - 2025",
      result: "8.34 CGPA",
    },
    {
      id: 2,
      course: "Higher Secondary Certificate (HSC)",
      institution: "Smt. D.G. Agrawal Memorial School",
      duration: "2019 - 2021",
      result: "94%",
    },
    {
      id: 3,
      course: "Secondary School Certificate (SSC)",
      institution: "Smt. D.G. Agrawal Memorial School",
      duration: "2018 - 2019",
      result: "82%",
    },
  ],

  skills: [
    {
      id: 4,
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      id: 2,
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      id: 5,
      name: "Tailwind CSS",
      logo: "src/assets/tailwind-css.svg",
    },
    {
      id: 1,
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: 6,
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      id: 7,
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      id: 8,
      name: "VS Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ],

  projects: [
    {
      id: 1,
      img: "src/assets/ems.png",
      title: "Employee Management Dashboard",
      description:
        "A React-based dashboard for managing employee records with a clean UI and responsive layout. Hosted live on Vercel.app",
      techStack: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
      github: "https://github.com/kasim-kc/ems-dashboard-react",
      demo: "https://ems-dashboard-react.vercel.app/",
    },
    {
      id: 2,
      img: "src/assets/blog-site.png",
      title: "Blog Website",
      description:
        "Writer's lovable platform to showcase their talent by creating blogs and readers who read them. This site implements the CRUD functionalities. Hosted live on Render",
      techStack: ["React", "Redux", "React Router", "Tailwind CSS", "Render"],
      github: "https://github.com/kasim-kc/blog-website",
      demo: "https://api-blog-website-nz5y.onrender.com/",
    },
    {
      id: 3,
      img: "src/assets/landing-page.png",
      title: "HTML CSS Landing Page",
      description:
        "A responsive and aesthetic-looking landing page using just HTML and CSS to apply my knowledge of learning flex. How flex container and its children works, I understood through this project. Hosted live on GitHub Pages.",
      techStack: ["HTML", "CSS", "Flex"],
      github: "https://github.com/kasim-kc/Landing-Page",
      demo: "https://kasim-kc.github.io/Landing-Page/",
    },
    {
      id: 4,
      img: "src/assets/grid-site.png",
      title: "GRID Portfolio Page",
      description:
        "This minimal good-looking page is my practice to learning GRID display property of CSS. How to scale GRID children into multiple columns and rows and how to created great 2-D layouts was learnt. Hosted live on GitHub Pages.",
      techStack: ["HTML", "CSS", "GRID"],
      github: "https://github.com/kasim-kc/gridMiniProject",
      demo: "https://kasim-kc.github.io/gridMiniProject/",
    },
  ],
};

export default portfolioData;
