export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certificates", link: "#Certificates" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Docker Containerization",
    description:
      "Passionate about leveraging Docker containerization to streamline development workflows, enhance scalability, and ensure consistent environments for robust and efficient application deployment.",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] group",
    imgClassName:
      "w-full h-full group-hover:scale-110 transition-transform duration-300 ease-in-out",
    titleClassName:
      "justify-end group-hover:translate-x-4 transition-transform duration-300 ease-in-out",
    img: "/DockerContainerization.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[180px]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Checkout My CV Here..",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 ",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },

  {
    id: 5,
    title: "Currently building Multi Tier Web Application Called VProfile",
    description: "Multi Tier Web Application",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Reach out to me via email.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "IT Insights - React Web App (Group Project)",
    des: "A web application that Undergraduates can explore their career paths and seek guidance with chatting with experts when needed.",
    img: "/Pj1.png",
    iconLists: [
      "/re.svg",
      "/js.svg",
      "/css.svg",
      "/node.svg",
      "/bootstrap.svg",
    ],
    link: "https://www.linkedin.com/posts/jehan-rodrigo_itinsights-capstoneproject-webdevelopment-activity-7205602851392286720-SilH?utm_source=share&utm_medium=member_desktop",
    // link: "https://github.com/Group-10-IS-4110-Capstone-project/Group-10_IS_4110",
  },
  {
    id: 2,
    title: "Movie Seat Booking - Web App (Group Project)",
    des: "A web application that allows users to book seats for their favorite movies.",
    img: "/MovieBooking.png",
    iconLists: ["/re.svg", "/node.svg", "/next.svg", "/mongo.png", "/mui.png"],
    link: "https://www.linkedin.com/posts/jehan-rodrigo_mernstack-webdevelopment-devops-activity-7226871300772741120-Cu9n?utm_source=share&utm_medium=member_desktop",
    // link: "https://github.com/HarshaDMadu/Web_Project",
  },
  {
    id: 3,
    title: "Portfolio Website - Web App (Individual Project)",
    des: "Portfolio Website which showcases my skills and projects.",
    img: "/Portfolio.png",
    iconLists: [
      "/re.svg",
      "/next.svg",
      "/ts.svg",
      "/tail.svg",
      "/Aceternity.png",
    ],
    link: "https://github.com/JehanRodrigo/portfolio-website",
  },
  {
    id: 4,
    title: "VProfile - Web App (Individual Project) (Ongoing)",
    des: "A Multi Tier Web Application Called VProfile.",
    img: "/p4.svg",
    iconLists: ["/dock.svg", "/tail.svg", "/ts.svg", "/next.svg"],
    link: "",
  },
];

export const certificates = [
  {
    img: "/C1.jpg",
  },
  {
    img: "/C2.jpg",
  },
  {
    img: "/C3.jpg",
  },
  {
    img: "/C4.jpg",
  },
  {
    img: "/C5.jpg",
  },
];

export const skills = [
  {
    id: 1,
    name: "docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 2,
    name: "kubernates",
    img: "/kubernetes.svg",
    nameImg: "/kubernetesName.svg",
  },
  {
    id: 3,
    name: "AWS",
    img: "/aws.svg",
    nameImg: "awsName.svg",
  },
  {
    id: 4,
    name: "React.js",
    img: "/re.svg",
    nameImg: "/reactName.svg",
  },
  {
    id: 5,
    name: "Next.js",
    img: "/next.svg",
    nameImg: "/nextName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "I have worked with couple of web project which I can sharpen my skills.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Docker Containerization",
    desc: "Worked with few docker containers in association with web development which enhance my DevOps skills.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Out of the Box thinking and Commitment",
    desc: "Have a keen practical knowledge of day today works.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Kubernetes and Jenkins CI/CD Enthusiast",
    desc: "Currently learning Kubernetes and Jenkins. In order to level up my DevOps skills.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: "1",
    img: "/git.svg",
    link: "https://github.com/JehanRodrigo",
  },
  {
    id: "2",
    img: "/x.png",
    link: "https://x.com/rodrigo_je30205?s=21",
  },
  {
    id: "3",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jehan-rodrigo",
  },
];
