import React from "react";
import { langs } from "../user/user";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="container skills-container" id="skills-section">
      <span className="skills-title">Skills</span>
      <div className="skills">
        {langs.map((skill) => (
          <Skill skill={skill} key={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
