import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { projectData } from "./constants/ProjectData";
import styled from "styled-components";

const ProjectTile = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
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
              <motion.div className="tile-item">
                <div className="tile-info">
                  <p>{project.name}</p>
                  <p>{project.description}</p>
                  <p>{project.technologies}</p>
                  {project.github && <p>{project.github}</p>}
                  {project.url && <p>{project.url}</p>}
                </div>
                {/* <img className="tile-image" src={`/project-tiles/${project.name}.png`}></img> */}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </TileContainer>
  );
};

const TileContainer = styled.div`
  .tile-item {
    position: relative;
    height: 35vh;
    min-width: 50vw;
    background-color: #104f72;
    border-radius: 2rem;
    padding: 2rem;
    margin: 1rem;
    overflow: hidden;
    background: linear-gradient(142deg, #2133f8 0%, #5e2e99 50%, #b7255e 100%);
  }

  // .tile-image {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   border-radius: 2rem;
  //   filter: blur(2px);
  //   transform: scale(1.05);
  // }

  .tile-info {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 10%;
  }

  p {
    font-size: 0.5rem;
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
