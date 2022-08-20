import React from "react";
import styled from "styled-components";
import Project from "./Project";
import { v4 as uuid } from "uuid";

export default function Projects() {
  const projectData = [
  
    {
      
      id: "1",
      name: " Mern-Quiz-App",
      img: "https://user-images.githubusercontent.com/97445870/183285768-23eaf48c-a1a6-435a-a080-dcaa0f94bb52.png",
      gh: "https://github.com/SudhirPC/MERN-Quiz-App",
      url: "https://mern-quiz-app-by-sudhir.vercel.app/",
      desc: " The MERN-Quiz-App is a place where ",
      stack: " HTML, CSS, JavaScript, MongoDB, React, Redux and Tailwind CSS",
      Feature:
        " Sign-in, Sign-Up, User Authentication, Users can come and attempt the quiz and get the result. Also, Admin has access to add the Quiz on a front page and delete the user functionality.",
      Responsibility:
        "  It was an Individual Project completed in Two-Weeks with Backend and Frontend",
    },
    {
      
      id: "2",
      name: " Gear-Best Clone",
      img: "https://user-images.githubusercontent.com/97445870/180730138-22c7b6fd-6d34-4d54-8928-11e68f82718a.png",
      gh: "https://github.com/SudhirPC/gear-best-clone",
      url: "https://gearbestsudhir.netlify.app/",
      desc: " Gear Best is an Online Shopping for the best cell phones, electronic gadgets, toys, sporting goods, home product.",
      stack: " HTML, CSS, JavaScript, MongoDB, React, Redux and Tailwind CSS",
      Feature:
        " Sign-in, Sign-Up, User Authentication,Filtering and Sorting,Add To Cart Functionality.",
      Responsibility:
        "  It was an Individual Project completed in Four-Day with Backend and Frontend",
    },
    {
      id: "3",
      name: " Fab-Bag Clone",
      img: "https://user-images.githubusercontent.com/97445870/168086084-9444da60-3cfa-4fab-b763-4e9d62d9cef3.png",
      gh: "https://github.com/khageswar9/FabBag_clone",
      url: "https://dashing-fox-837d55.netlify.app/",
      desc: " FabBag is a India's largest beauty subscription service also Provides Products like Bags etc",
      stack: " HTML, CSS, JavaScript, MongoDB, React, Redux ",
      Feature:
        " Sign-in,Sign-Up,User Authentication,Filtering and Sorting,Add To Cart Functionality ",
      Responsibility:
        " Create Navbar,Footer,Sidebars and all Dropdowns and also merge all the Components with Navbar ",
    },
    {
      id: "4",
      name: " Intern Theory Clone",
      img: "https://user-images.githubusercontent.com/97519781/165341374-0b51ce00-57c2-4507-816a-c0725d646cce.png",
      gh: "https://github.com/akashbind12/intern_theory_clone_project",
      url: "https://intern-theory-clone-project.vercel.app/",
      desc: " Provider of an online internship portal intended to offer Internships courses and connect students with companies looking for interns.",
      stack: " HTML, CSS, JavaScript, MongoDB",
      Feature:
        " Sign-in , Sign-Up, User Authentication , Filtering and Sorting, Add To Cart Functionality ",
      Responsibility:
        " Create  Courses Page,Add To Cart Functionality and Payment Page",
    },
     {
       id: "5",
       name: " Calculator-React",
       img: "https://user-images.githubusercontent.com/97445870/167365385-a246950b-d6d4-4e23-b0d0-2a4b671ef41b.png",
       gh: "https://github.com/SudhirPC/Calculator-React",
       url: "https://calculator-react-lemon.vercel.app/",
       desc: " Digital Calculator made by using React ",
       stack: " HTML, CSS, JavaScript and React",
       Feature:" Mathematical Calculations ",
     Responsibility:"  It was an Individual Project completed in One-Day",
   },
    {
      id: "6",
      name: " Weather App",
      img: "https://user-images.githubusercontent.com/97445870/165687283-bb1157b5-4ea6-4900-8cbd-ab218170eef6.png",
      gh: "https://github.com/SudhirPC/Weather_Forecast",
      url: "https://weather-forecast-sudhirchavhan100-gmailcom.vercel.app/",
      desc: " Weather App Features- Weekly Weather Forecast Reports according to the city along with a Map. Tech Stack Used- JavaScript ,HTML ,CSS ",
      stack: " HTML, CSS, JavaScript",
      Feature: " User can see Weather Forecast Information according to entered Place",
      Responsibility: " It was an Individual Project completed in One-Day",
    },
    {
      id: "7",
      name: " Food App",
      img: "https://user-images.githubusercontent.com/97445870/165927305-fa66172c-854c-4df7-a2cc-63ad8b8d6de3.png",
      gh: "https://github.com/SudhirPC/Food_Application",
      url: "https://food-application-sudhirchavhan100-gmailcom.vercel.app/",
      desc: " Food App is provide the random food on home page, Provides Special Menu's also Login and authentication of User Name by Registering.Tech Stack Used- JavaScript ,HTML ,CSS ",
      stack: " HTML, CSS, Javascript",
      Feature:" User can Register and Login here also for User Random as well as search Recipies available",
      Responsibility: " It was an Individual Project completed in One-Day",
    },
    {
      id: "8",
      name: " You Tube Clone",
      img: "https://user-images.githubusercontent.com/97445870/165686506-be41004f-94f4-4c40-a15c-d211bd8f18e3.png",
      gh: "https://github.com/SudhirPC/You_tube_clone",
      url: "https://you-tube-clone-gray.vercel.app/",
      desc: " Here I clone the some part of You tube by myself in one day using HTML ,CSS and JavaScript",
      stack: " HTML, CSS, Javascript",
      Feature:" Users can search video and view on fullscreen, Sidebar hide Features",
      Responsibility: "It was an Individual Project completed in One-Day",
    },
  ];

  return (
    <Cont id="projects" key={uuid()}>
      <Heading>Projects</Heading>
      <div  className="projecth3">
      <h3>
        My projects make use of a vast variety of latest technology tools. <br/>My
        best experience is to create NodeJS Backend Projects, React Project <br/> and JavaScript Project.
        Below are some of My Projects. <br/>Note that not all of the mentioned
        projects are on GitHub yet.
      </h3>
      </div>
      <ProjectsCont>
        <Project data={projectData} />
      </ProjectsCont>
    </Cont>
  );
}

const Cont = styled.div`
  box-sizing: border-box;
  background-color: rgb(176, 196, 219);
  margin-top: -105px;
  margin-bottom: -100px;
  padding-bottom: 14vw;
  height: auto;
  clip-path: polygon(
    0 2%,
    /* left top */ 100% 0,
    /* right top */ 100% 98%,
    /* right bottom */ 0 100% /* left bottom */
  );

  @media (max-width: 500px) {
    margin-bottom: -120px;
    padding-bottom: 6vw;
    clip-path: polygon(
      0 2%,
      /* left top */ 100% 0,
      /* right top */ 100% 98%,
      /* right bottom */ 0 100% /* left bottom */
    );
  }

  @media (max-width: 768px) {
    clip-path: polygon(
      0 2%,
      /* left top */ 100% 0,
      /* right top */ 100% 98%,
      /* right bottom */ 0 100% /* left bottom */
    );
  }

  @media only screen and (min-width: 501px) and (max-width: 800px) {
    margin-top: -150px;
  }

  @media only screen and (min-width: 768px) and (max-width: 801px) {
    margin-bottom: -125px;
  }

  @media (max-width: 1264px) {
    clip-path: polygon(
      0 2%,
      /* left top */ 100% 0,
      /* right top */ 100% 98%,
      /* right bottom */ 0 100% /* left bottom */
    );
  } ;
`;
const Heading = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: black;
  padding-top: 5rem;
  text-align: center;
  font-size: 2rem;
`;
const ProjectsCont = styled.div`
  margin: 5rem auto 0;
  width: 70vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 1264px) {
    margin: 2rem auto 0;
    width: 80vw;
  }
  @media (max-width: 768px) {
    margin: 2rem auto 0;
    width: 90vw;
    padding-bottom: 3rem;
  }
  @media (max-width: 500px) {
    margin: auto;
    width: 90vw;
    padding-bottom: 3rem;
    font-size: 14px;
  }
`;
