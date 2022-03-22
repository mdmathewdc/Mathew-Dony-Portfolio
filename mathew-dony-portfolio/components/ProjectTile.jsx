import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { projectData } from "./constants/ProjectData";
import styled from "styled-components";

const ProjectTile = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 16);
  }, []);

  return (
    <TileContainer>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {projectData.map((project, index) => {
            return (
              <motion.div className="item">
                <p>{project.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </TileContainer>
  );
};

const TileContainer = styled.div`
  .item {
    height: 35vh;
    min-width: 50vw;
    background-color: #104f72;
    border-radius: 2rem;
    padding: 2rem;
    margin: 1rem;
  }

  p {
    font-size: 1rem;
  }

  .inner-carousel {
    display: flex;
  }

  .carousel {
    cursor: grab;
    overflow: hidden;
  }
`;

export default ProjectTile;
