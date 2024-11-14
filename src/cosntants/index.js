import bbms from "../assets/bbms.png"
import chatapp from "../assets/chatapp.png"
import cartapp from "../assets/cartapp.png"
export const PROFILE_CONTENT = `I am a passionate frontend developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React, angular and visualiser, as well as back-end technologies like Node.js, MySQL and Mongo DB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front end developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, visualiser, Node.js, MySQL and more. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Associate Software Engineer",
    company: "Temenos",
    description: `developed and maintained web applications using JavaScript, React.js, and Node.js. Implemented responsive designs and optimized frontend performance. Worked in maintenance after the go live of the project`,
    technologies: ["Javascript", "React.js", "Next.js", "visualiser"],
  },
  {
    year: "2021 - 2021",
    role: "Full Stack Developer Trainee",
    company: "Techimax",
    description: `Designed and developed user interfaces for web applications using Angular and Django. Worked closely with backend developers to integrate frontend components with APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "Typescript", "Bootstrap", "Angular", "Django", "Java"],
  }
];

export const PROJECTS = [
  {
    title: "Chat App",
    image:chatapp,
    link:"https://download-log.netlify.app",
    description:
      "A fully functional Native Application to chat and transfer media with friends and family in real time",
    technologies: ["HTML", "CSS","JavaScript", "React", "Node.js", "Firebase"],
  },
  {
    title: "Cart Management Website",
    image:cartapp,
    link:"https://purple-cart.netlify.app/",
    description:
      "A website which allows users to add, update and delete the items into a cart just in case if they want to remember.",
    technologies: ["HTML", "CSS", "Javascript", "Firebase"],
  },
  {
    title: "Blood Bank Management Website",
    image:bbms,
    description:
      "A Website which allows users to find the blood donors and interact with them based on the needs.",
    technologies: ["HTML", "CSS", "Angular", "Bootstrap","Django"],
  },
];

export const CONTACT = {
  address: "8/44a Bhannerghatta road, Banglore ",
  phoneNo: "+91 9948811701 ",
  email: "hemanthc438@gmail.com",
};