import {
    mobile,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,

    git,
    figma,
    docker,

    threejs,
    bootstrap,

    lawcadia,
    alight,
    financedashboard,
    aitshirt,

    males,
    females,
    cats,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
      link: false,
    },
    {
      id: "work",
      title: "Work",
      link: false,
    },
    {
      id: "contact",
      title: "Contact",
      link: false,
    },
    {
      id: "github",
      title: "GitHub",
      link: "https://github.com/andrejs-is-on-the-computer"
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Software Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Application Developer",
      company_name: "Lawcadia",
      icon: lawcadia,
      iconBg: "#fff",
      date: "January 2017 - March 2020",
      points: [
        "Developing and maintaining the web application using a custom framework and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create a high-quality product.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Senior Application Manager",
      company_name: "Alight",
      icon: alight,
      iconBg: "#000000",
      date: "August 2021 - Present",
      points: [
        "Developing and maintaining client's information, workflows and environments.",
        "Ensuring the continuous enhacement and availability of services.",
        "Cooperating with teams to maintain useful interfaces and reports.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "What a good son. Not as good as his sister, but at least he is trying.",
      name: "My Mum",
      designation: "Parent",
      company: "Bicevskis Family",
      image: females,
    },
    {
      testimonial:
        "He lost my leather jacket and stole my Dr. Martens boots. I have not entirely forgiven him for this.",
      name: "My Brother",
      designation: "Sibling",
      company: "Bicevskis Family",
      image: males,
    },
    {
      testimonial:
        "Meow meow meow, meow meow. Meow?",
      name: "Bashir",
      designation: "Beloved Cat",
      company: "Our Home",
      image: cats,
    },
  ];
  
  const projects = [
    {
      name: "T-Shirt designer with AI",
      description:
        "Design a shirt uploading your own logo or background, or type in a prompt for the AI to generate those for you.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
        {
          name: "openAI",
          color: "green-text-gradient",
        },
      ],
      image: aitshirt,
      source_code_link: "https://github.com/andrejs-is-on-the-computer/AI-tshirt-designer--react-3js",
    },
    {
      name: "Finance Dashboard",
      description:
        "Web application that allows a user to view the status of their investments easily, with Social Media metrics provided.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "tremor",
          color: "green-text-gradient",
        },
      ],
      image: financedashboard,
      source_code_link: "https://github.com/andrejs-is-on-the-computer/react-dash-tremor-tailwind",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };