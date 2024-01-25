import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  mysql,
  tailwind,
  nodejs,
  mongodb,
  git,
  php,
  laravel,
  kanban,
  adem,
  python,
  smb3,
  certassist,
  emmanuel,
  claribel,
  jose
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Laravel",
    icon: laravel,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Chief Executive Officer, Software Development and Consulting",
    company_name: "ADEM Digital",
    icon: adem,
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "Employed Agile methodologies in implementing business strategies, achieving an exceptional +833% increase in annual revenue through innovative management and market expansion.",
      "Led a team of 6 software engineers, designers, and project managers using SCRUM practices, fostering a culture of collaboration and continuous improvement in software development.",
      "Managed the Agile development and launch of 6 innovative software products, demonstrating strong skills in product management and a commitment to outstanding customer service.",
    ],
  },
  {
    title: "MERN Full Stack Developer",
    company_name: "ADEM Digital",
    icon: adem,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Implemented a the robust MERN tech stack including TypeScript, ReactJS, MongoDB, ExpressJS for a SaaS web application.",
      "Leveraged the Stripe API to enable the application to successfully handle payments and access.",
      "Use of the Auth0 API to enable users to login with social credentials or email as preferred, while also leveraging the Auth0 Management API to manage roles and access to different features.",
    ],
  },
  {
    title: "PHP - Laravel Full Stack Developer",
    company_name: "ADEM Digital",
    icon: adem,
    iconBg: "#383E56",
    date: "2021 - 2023",
    points: [
      "Implemented a robust tech stack including TypeScript, PHP with Laravel, ReactJS, and InertiaJS to design and implement a high-traffic web application for the federal government.",
      "Integrated Eloquent ORM with MySQL for efficient data handling, and Git for version control, ensuring robust and scalable architecture.",
      "Engineered the application to support over 300,000 concurrent users by implementing good design that enabled good performance and service KPIs.",
      "Leveraged Pusher for real-time data interaction and Webhooks for event-driven updates.",
      "Applied Axios for efficient HTTP communication, enhancing user experience and interaction.",
      "Generated $4 million in revenue by meeting all Key Performance Indicators (KPIs) of the award contract by adopting an Agile SCRUM methodology, ensuring timely delivery and iterative improvements.",
      "Leveraged AWS S3 for scalable storage solutions and adhered to the Model-View-Controller (MVC) pattern for efficient application structure and maintenance.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "ADEM Digital",
    icon: adem,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "Implemented a web application by using a robust tech stack that includes NextJS, Javascript, ReactJS, Firebase for an internally developed web application to manage access for living complexes as a SaaS.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Having worked alongside Wellington for several years, I can attest to his outstanding skills as a Full Stack Developer. His approach to problem-solving is both creative and methodical, making him an invaluable member of our team. Wellington's ability to mentor others and his eagerness to embrace new technologies makes him not just a great developer but a true asset to any team.",
    name: "Emmanuel Gonzalez",
    designation: "CTO",
    company: "ADEM Digital",
    image: emmanuel,
  },
  {
    testimonial:
      "Wellington's contribution to our educational web application was pivotal. His technical expertise, coupled with a deep understanding of our needs, helped us create a tool that has positively impacted thousands of students. He was not just a developer but a partner in our mission to enhance educational outcomes. His work has left a lasting impression on our department and the students we serve.",
    name: "Claribel Ojeda",
    designation: "CEO",
    company: "CORe Consulting & Solutions",
    image: claribel,
  },
  {
    testimonial:
    "Wellington's educational app was a crucial part of my exam prep, similar to UWorld but with outstanding personalized analytics. It's intuitive, tailors content to my weak areas, and the question bank is both comprehensive and challenging. His dedication to enhancing the learning experience is evident and greatly appreciated.",
    name: "Jose Brito",
    designation: "UAT Tester",
    company: "Medical Doctor",
    image: jose,
  },
];

const projects = [
  {
    name: "Super Mario Bros. 3 - Clone",
    description:
      "A vanilla javascript, HTML and CSS app that is a clone of the first level of Super Mario Bros 3. The purpose was to build a game using mainly Javascript classes and Object Oriented Programming.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: smb3,
    source_code_link: "https://github.com/weabreus/mario-clone",
    deployment_link: "https://weabreus.github.io/mario-clone/",
  },
  {
    name: "Test administration app",
    description:
      "An application to test users in various subjects or topics and provide performance analysis based on the results. Developed using the MERN stack and leveraging the Stripe API to enable the app to function as SaaS.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: certassist,
    source_code_link: "https://github.com/ADEM-Digital/certassist-client",
    deployment_link: "https://certassist-client.vercel.app/",
  },
  {
    name: "Kanban App",
    description:
      "A simple Kanban web application made with to demonstrate understanding of React by applying react hooks such as useContext, useState, useParams, and useEffect. This app also demonstrates understanding of the Drag and Drop API and use of the local storage of the browser.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: kanban,
    source_code_link: "https://github.com/weabreus/kanban-mini-project",
    deployment_link: "https://kanban-2l4nqsb4l-stained9000.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
