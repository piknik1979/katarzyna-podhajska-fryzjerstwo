import React, { useState } from "react";
import styled from "styled-components";
// Poprawne importowanie zdjęć z folderu assets
import portfolio01 from "assets/Portfolio (01).jpeg";
import portfolio02 from "assets/Portfolio (02).jpeg";
import portfolio03 from "assets/Portfolio (03).jpeg";
import portfolio04 from "assets/Portfolio (04).jpeg";
import portfolio05 from "assets/Portfolio (05).jpeg";
import portfolio06 from "assets/Portfolio (06).jpeg";
import portfolio07 from "assets/Portfolio (07).jpeg";
import portfolio08 from "assets/Portfolio (08).jpeg";
import portfolio09 from "assets/Portfolio (09).jpeg";
import portfolio10 from "assets/Portfolio (10).jpeg";
import portfolio11 from "assets/Portfolio (11).jpeg";
import portfolio12 from "assets/Portfolio (12).jpeg";
import portfolio13 from "assets/Portfolio (13).jpeg";
import portfolio14 from "assets/Portfolio (14).jpeg";
import portfolio15 from "assets/Portfolio (15).jpeg";
import portfolio16 from "assets/Portfolio (16).jpeg";
import portfolio17 from "assets/Portfolio (17).jpeg";
import portfolio18 from "assets/Portfolio (18).jpeg";
import portfolio19 from "assets/Portfolio (19).jpeg";
import portfolio20 from "assets/Portfolio (20).jpeg";
import portfolio21 from "assets/Portfolio (21).jpeg";
import portfolio22 from "assets/Portfolio (22).jpeg";
import portfolio23 from "assets/Portfolio (23).jpeg";
import portfolio24 from "assets/Portfolio (24).jpeg";
import portfolio25 from "assets/Portfolio (25).jpeg";
import portfolio26 from "assets/Portfolio (26).jpeg";
import portfolio27 from "assets/Portfolio (27).jpeg";
import portfolio28 from "assets/Portfolio (28).jpeg";
import portfolio29 from "assets/Portfolio (29).jpeg";
import portfolio30 from "assets/Portfolio (30).jpeg";
import portfolio31 from "assets/Portfolio (31).jpeg";
import portfolio32 from "assets/Portfolio (32).jpeg";
import portfolio33 from "assets/Portfolio (33).jpeg";
import portfolio34 from "assets/Portfolio (34).jpeg";
import portfolio35 from "assets/Portfolio (35).jpeg";
import portfolio36 from "assets/Portfolio (36).jpeg";
import portfolio37 from "assets/Portfolio (37).jpeg";
import portfolio38 from "assets/Portfolio (38).jpeg";
import portfolio39 from "assets/Portfolio (39).jpeg";
import portfolio40 from "assets/Portfolio (40).jpeg";
import portfolio41 from "assets/Portfolio (41).jpeg";
import portfolio42 from "assets/Portfolio (42).jpeg";
import portfolio43 from "assets/Portfolio (43).jpeg";
import portfolio44 from "assets/Portfolio (44).jpeg";
import portfolio45 from "assets/Portfolio (45).jpeg";
import portfolio46 from "assets/Portfolio (46).jpeg";
import portfolio47 from "assets/Portfolio (47).jpeg";
import portfolio48 from "assets/Portfolio (48).jpeg";
import portfolio49 from "assets/Portfolio (49).jpeg";
import portfolio50 from "assets/Portfolio (50).jpeg";
import portfolio51 from "assets/Portfolio (51).jpeg";
import portfolio52 from "assets/Portfolio (52).jpeg";
import portfolio53 from "assets/Portfolio (53).jpeg";
import portfolio54 from "assets/Portfolio (54).jpeg";
import portfolio55 from "assets/Portfolio (55).jpeg";
import portfolio56 from "assets/Portfolio (56).jpeg";
import portfolio57 from "assets/Portfolio (57).jpeg";
import portfolio58 from "assets/Portfolio (58).jpeg";
import portfolio59 from "assets/Portfolio (59).jpeg";
import portfolio60 from "assets/Portfolio (60).jpeg";
import portfolio61 from "assets/Portfolio (61).jpeg";
import portfolio62 from "assets/Portfolio (62).jpeg";
import portfolio63 from "assets/Portfolio (63).jpeg";
import portfolio64 from "assets/Portfolio (64).jpeg";
import portfolio65 from "assets/Portfolio (65).jpeg";
import portfolio66 from "assets/Portfolio (66).jpeg";

import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { portfolioAnimations } from "animation";

function Portfolio() {
  const [element, controls] = useScroll();
  const [startIndex, setStartIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const images = [
    portfolio01, portfolio02, portfolio03, portfolio04, portfolio05, portfolio06, portfolio07, portfolio08,
    portfolio09, portfolio10, portfolio11, portfolio12, portfolio13, portfolio14, portfolio15, portfolio16,
    portfolio17, portfolio18, portfolio19, portfolio20, portfolio21, portfolio22, portfolio23, portfolio24,
    portfolio25, portfolio26, portfolio27, portfolio28, portfolio29, portfolio30, portfolio31, portfolio32,
    portfolio33, portfolio34, portfolio35, portfolio36, portfolio37, portfolio38, portfolio39, portfolio40,
    portfolio41, portfolio42, portfolio43, portfolio44, portfolio45, portfolio46, portfolio47, portfolio48,
    portfolio49, portfolio50, portfolio51, portfolio52, portfolio53, portfolio54, portfolio55, portfolio56,
    portfolio57, portfolio58, portfolio59, portfolio60, portfolio61, portfolio62, portfolio63, portfolio64,
    portfolio65, portfolio66,
  ];

  const itemsToShow = window.innerWidth < 1080 ? 1 : 4;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <Section id="portfolio" ref={element}>
      <h2>MOJE WYBRANE PRACE</h2>
      <motion.div
        className="carousel"
        variants={portfolioAnimations}
        animate={controls}
        transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
      >
        <div className="images">
          {images
            .slice(startIndex, startIndex + itemsToShow)
            .concat(images.slice(0, Math.max(0, startIndex + itemsToShow - images.length)))
            .map((image, index) => (
              <motion.img
                src={image}
                alt={`Portfolio ${index + 1}`}
                key={index}
                className="image"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleImageClick(image)}
              />
            ))}
        </div>
        <div className="arrows">
          <button className="prev" onClick={handlePrev}>
            &lt;
          </button>
          <button className="next" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </motion.div>

      {isOpen && (
        <FullscreenImage onClick={closeImage}>
          <img src={currentImage} alt="Fullscreen" className="image" />
          <button className="close-btn" onClick={closeImage}>
            ×
          </button>
        </FullscreenImage>
      )}
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h2 {
    color: #fff;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }

  .carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    position: relative;
    flex-direction: column;

    .images {
      display: flex;
      gap: 1rem;
      width: 80%;
      overflow: hidden;
      justify-content: center;

      .image {
        flex: 1;
        max-width: 100%;
        height: 500px;
        object-fit: contain;
        border-radius: 0.5rem;
        transition: transform 0.3s ease-in-out;

        &:hover {
          transform: scale(1.05);
          cursor: pointer;
        }
      }
    }

    .arrows {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;

      button {
        background-color: var(--primary-color);
        color: #fff;
        border: none;
        cursor: pointer;
        padding: 0.5rem 1.2rem;
        font-size: 1.5rem;
        transition: all 0.3s ease;

        @media screen and (max-width: 1080px) {
          padding: 0.2rem 0.4rem;
          font-size: 2.5rem;
        }
      }
    }
  }
`;

const FullscreenImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .image {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    cursor: pointer;
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #fff;
    border: none;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    z-index: 10000;
  }
`;

export default Portfolio;
