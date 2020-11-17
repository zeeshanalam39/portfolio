const userName = "Zeeshan Alam";
const githubLink = "https://github.com/zeeshanalam39";
// const twitterLink = "";
const linkedinLink = "https://www.linkedin.com/in/zeeshan-alam-8796aa18b/";
const repoLink = "";
const fiverrLink = "https://www.fiverr.com/zeeshan__alam";

const mainDesc = "Full Stack Developer";
const aboutDesc = `Hi! I'm ${userName}, final year student of Computer Engineering at NUST Pakistan. I'm a web developer. I build websites using React & Node. My primary focus is on React. I also love coding in Python and C++. In free time, I see old pictures and find courses on web.`;

const langs = [
  {
    name: "Data Structures",
    percentage: 90,
    color: "#581845"
  },
  {
    name: "Vanilla JavaScript",
    percentage: 80,
    color: "#f7df1e"
  },
  {
    name: "React",
    percentage: 75,
    color: "#61dafb"
  },
  {
    name: "Python",
    percentage: 80,
    color: "#3476ab"
  },
  {
    name: "C++",
    percentage: 75,
    color: "#649bd3"
  },
  {
    name: "HTML & CSS",
    percentage: 90,
    color: "#e85324"
  }
];

const projects = [
  {
    title: "Background Generator",
    desc:
      "A tool for front end developers or designers to create background gradients for websites. User can customize colors and copy generated code.",
    demo: "https://gradient-background.netlify.app/",
    repo: "https://github.com/zeeshanalam39/background-generator"
  },
  {
    title: "MQTT Protocol Server",
    desc: "MQTT Server built using Berkeley Sockets to connect mqtt pub-sub.",
    demo: "",
    repo: "https://github.com/zeeshanalam39/mqtt-protocol-server"
  }
];

export {
  userName,
  githubLink,
  // twitterLink,
  linkedinLink,
  repoLink,
  fiverrLink,
  mainDesc,
  aboutDesc,
  langs,
  projects
};
