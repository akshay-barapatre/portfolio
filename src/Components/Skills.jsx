import React from "react";
import styled from "styled-components";
import Skill from "./Skill";

export default function Skills() {
  const skillsData = [
    { name: "HTML", url: "html.svg" },
    { name: "CSS", url: "css.svg" },
    { name: "JavaScript", url: "js.svg" },
    { name: "React", url: "react.svg" },
    { name: "Redux", url: "redux.svg" },
    { name: "Express", url: "express.svg" },
    { name: "MongoDB", url: "mongo.svg" },
    { name: "Git", url: "git.svg" },
    { name: "Netlify", url: "https://assets-us-01.kc-usercontent.com/4ec262a7-3d6c-008c-aa10-1e6ffc6c2e14/0e19ec0f-bc92-4011-9c1e-c37798453fb2/netlify_logo.png" },
    {name: "Heroku", url: "https://cdn-icons-png.flaticon.com/512/873/873120.png"},
    {name: "Vercel", url: "https://assets-global.website-files.com/5f217a8e6bc2c82a9d803089/5f217a8e6bc2c80d3780360e_CBm5_MB7_400x400.jpg"},

  ];
  return (
    <Cont id="skills">
      <Heading>Skills</Heading>
      <SkillsCont>
        <Skill data={skillsData} />
      </SkillsCont>
    </Cont>
  );
}

const Cont = styled.div`
  background-color: #67687c;
  padding-bottom: 9rem;
  padding-top: 20px;
  clip-path: polygon(
    0 8%,
    /* left top */ 100% 0,
    /* right top */ 100% 92%,
    /* right bottom */ 0 100% /* left bottom */
  );
  @media (max-width: 1264px) {
    clip-path: polygon(
      0 7%,
      /* left top */ 100% 0,
      /* right top */ 100% 93%,
      /* right bottom */ 0 100% /* left bottom */
    );
  }
  @media (max-width: 768px) {
    clip-path: polygon(
      0 5%,
      /* left top */ 100% 0,
      /* right top */ 100% 95%,
      /* right bottom */ 0 100% /* left bottom */
    );
  }
  @media (max-width: 500px) {
    clip-path: polygon(
      0 2%,
      /* left top */ 100% 0,
      /* right top */ 100% 98%,
      /* right bottom */ 0 100% /* left bottom */
    );
  }
`;
const Heading = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: white;
  padding-top: 5rem;
  text-align: center;
  font-size: 2rem;
`;
const SkillsCont = styled.div`
  margin: 4rem auto;
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 500px) {
    margin: 2rem auto;
  }
`;
