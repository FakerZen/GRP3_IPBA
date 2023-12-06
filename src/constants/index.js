import {
  mobile,
  backend,
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
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "journey",
    title: "Journey",
  },
  {
    id: "plan",
    title: "Promotional Plan",
  },
];

const services = [
  {
    title: "Janrey Hilbert Mendoza",
    icon: web,
  },
  {
    title: "Jakub Aron Yabot",
    icon: mobile,
  },
  {
    title: "John Ethan De La Cruz",
    icon: backend,
  },
  {
    title: "Mary Jane Octaviano",
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
    title: "Choosing our Topic",
    iconBg: "#383E56",
    points: [
      "Knowing the difficulties of high school students face in programming, we've deliberately selected Programming as our primary focus. Our aim is to offer valuable support and resources tailored specifically to meet the needs of this age group.",
    ],
  },
  {
    title: "Writing Research Title",
    iconBg: "#E6DEDD",
    points: [
      "We scrupulously wrote our research title, 'Empowering Novice Programmers: A Comprehensive Approach,' to reflect our dedication to providing aspiring programmers with a thorough and inclusive educational experience. Our focus is specifically on APEC School High School students in Calumpang, ensuring that these budding programmers receive the support and resources they need to thrive in the industry of programming.",
    ],
  },
  {
    title: "Writing Research Outline",
    iconBg: "#383E56",
    points: [
      "Constructing the research outline was a scrupulous process that involved writing a persuasive thesis statement, formulating insightful research questions, and establishing a robust methodology. This rigorous approach laid the groundwork for a structured and impactful investigation that would delve into the intricacies of novice programmers' experiences.",
    ],
  },
  {
    title: "Survey Results",
    iconBg: "#E6DEDD",
    points: [
      "We wanted to ensure our research was truly grounded in the needs of our target audience, so we conducted a survey to gather their insights on various forms of streaming content—Interviews, Podcasts, and Tutorials. The results were overwhelmingly clear: Tutorials emerged as the preferred mode of learning, with a significant majority of respondents favoring this format.",
    ],
  },
  {
    title: "Streaming Content Finalization",
    iconBg: "#383E56",
    points: [
      "Based on the survey results and our desire to meet the needs of our target audience, we decided to focus on creating tutorial content. Tutorials are a great way for novice programmers to learn new skills because they are hands-on and engaging. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Empowering Novice Coders through Comprehensive Support and Community Integration:",
    description:
      "Navigating the world of coding as a novice can feel like an uncharted journey. We're here to be your comprehensive companion, providing you with the support and resources you need to thrive. Our platform goes beyond traditional tutorials, offering a vibrant community where you can connect with fellow learners, exchange tips and tricks, and overcome coding challenges together. We're active in programming communities, engaging with you on social media, and ensuring our platform is easily discoverable through search engine optimization (SEO).",
  },
  {
    name: "Chart a Course Beyond the Coding Journey to Discover Your Streamer Sanctuary:",
    description:
      "Feeling trapped in a maze of dry, impersonal tutorials? Our streaming platform is your escape from the coding monotony, offering an engaging and refreshing learning environment. Targeted ads will guide you to our platform, where free trials and introductory courses will immerse you in the world of programming. Transform learning into an exhilarating adventure through interactive coding challenges and contests.",
  },
  {
    name: "Embrace the Programming Journey with Our Expertise:",
    description:
      "Toss those snooze-inducing tutorials! We're crafting content that's as captivating as it is informative, each video a portal to programming mastery. Think of us as your personal coding Yoda, guiding you through the twists and turns with engaging lessons. Not just theory, though! We're bringing in coding rockstars to share their battle-tested secrets, and real-life success stories to fuel your 'I can do this' fire. Plus, we're all about consistency, so expect a fresh dose of coding goodness at your fingertips. But it's not just a knowledge dump we're building a supportive community where you can ask questions, share struggles, and level up together. Ready to unlock your coding potential? Join us, and let's turn you into a coding legend",
  },
];

export { services, technologies, experiences, testimonials, projects };
