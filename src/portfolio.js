/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Tommaso Patriti",
  title: "Hi all, I'm Tommaso",
  subTitle: emoji(
    "Clean code is not just a practice but a philosophy that I bring to every project. With a commitment to continuous improvement, I aspire to create impactful solutions that not only function seamlessly but also showcase the beauty of well-crafted code."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1aMEJ-26222EaPKvDVtOcBqv2FgdpPcix/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ro0t-set",
  linkedin: "https://www.linkedin.com/in/tommaso-patriti",
  gmail: "tommasopatriti@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Software Developer with a passion for cloud-native solutions",
  skills: [
    emoji("⚡ Development of microservices-based architectures"),
    emoji("⚡ Implementation of Kubernetes autoscaling solutions"),
    emoji("⚡ Experience with cloud platforms and container orchestration")
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-ship"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "vue",
      fontAwesomeClassname: "fab fa-vuejs"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Bologna",
      logo: require("./assets/images/uniboLogo.png"),
      subHeader: "M.Eng in Computer Science & Engineering",
      duration: "Sep 2022 - now",
      desc: "Focus on distributed systems, machine learning, and cybersecurity."
    },
    {
      schoolName: "Universitat Politècnica de Catalunya",
      logo: require("./assets/images/UPCLogo.png"),
      subHeader: "M.Eng Exchange Student",
      duration: "Feb 2023 - Jul 2023",
      desc: "Participated in exchange program focused on advanced programming paradigms."
    },
    {
      schoolName: "University of Bologna",
      logo: require("./assets/images/uniboLogo.png"),
      subHeader: "B.Sc in Computer Science & Engineering",
      duration: "Sep 2019 - Jul 2022",
      desc: [
        "Graduated with a score of 103/110. Thesis project on a LoRa-mesh system for marine communication.\n",
        "A LoRa-mesh based system for marine Social IoT.\n",
        "Published in: 2023 IEEE 20th Consumer Communications & Networking Conference (CCNC) IEEE://10060829\n",
        "I worked on creating a LoRa based mesh system for communication between ships. It was my thesis project, subsequently published."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud-Native Solutions",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Microservices",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Dallara Automobili",
      companylogo: require("./assets/images/DallaraLogo.png"),
      date: "2024",
      desc: "Internship aimed at completing my master’s thesis, focused on Kubernetes autoscaling algorithms and clean architecture.",
      descBullets: [
        "Development and implementation of autoscaling algorithms for Kubernetes",
        "Application of clean architecture principles"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "University of Bologna",
      companylogo: require("./assets/images/uniboLogo.png"),
      date: "2024",
      desc: "Provided support to students with disabilities and learning disorders, reviewing exams and explaining complex concepts.",
      descBullets: [
        "Reviewed exams and helped students understand complex topics",
        "Gained valuable experience in assisting students with special needs"
      ]
    },
    {
      role: "Software Engineer - Manager",
      company: "Settimana Flessibile Manager",
      companylogo: require("./assets/images/sfLogo.png"),
      date: "2017 – 2019",
      desc: "Developed a web platform (Django-based) to manage the self-governance system for several Umbrian high schools.",
      descBullets: [
        "Built a system to manage school activities autonomously",
        "Managed relationships with managers, teachers, and students"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Significant Projects I Have Worked On",
  projects: [
    {
      image: require("./assets/images/piperchatLogo.png"), // Replace with actual image path
      projectName: "PiperChat",
      projectDesc: "A microservices-based Discord clone using WebRTC, Docker, Vue.js, and Node.js. Implemented features for real-time communication and managed the deployment using Kubernetes.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/zucchero-sintattico/piperchat"
        }
      ]
    },
    {
      image: require("./assets/images/PiperKtLogo.png"), // Replace with actual image path
      projectName: "PiperKT",
      projectDesc: "A Kotlin-based clone of PiperChat with a microservices architecture, leveraging Kubernetes and Nginx for deployment. Focused on building a scalable and maintainable application.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/zucchero-sintattico/piperchat"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "tommasopatriti@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
