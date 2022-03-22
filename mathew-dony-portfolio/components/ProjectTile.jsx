import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { projectData } from "./constants/ProjectData";
import styled from "styled-components";

const ProjectTile = () => {
  return (
    <TileContainer>
      <motion.h1 className="carousel ">
        <motion.div className="inner-carousel">
          {projectData.map((project, index) => {
            return (
              <motion.div className="item">
                <p>{project.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.h1>
    </TileContainer>
  );
};

const TileContainer = styled.div`
  .item {
    height: 5rem;
    width: 12rem;
    background-color: blue;
    border-radius: 0.8rem;
  }
`;

export default ProjectTile;
