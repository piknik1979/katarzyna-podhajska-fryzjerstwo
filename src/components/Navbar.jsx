import React, { useState } from 'react';
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useScroll } from "components/useScroll";
import { motion } from "framer-motion";
import { navAnimation } from "animation";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Nav 
      ref={element}
      variants={navAnimation}
      transition={{ delay: 0.1 }}
      animate={controls} 
      state={isNavOpen ? 1 : 0}
    >
      <div className="brand__container">
        <button type="button" className="brand" onClick={() => handleButtonClick()}>
          {/* Logo może być dodane tutaj */}
        </button>  
        <div className="toggle">
          {isNavOpen ? (
            <MdClose onClick={() => setIsNavOpen(false)} />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setIsNavOpen(true);
              }}
            />
          )}
        </div>
      </div>

      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li className="active">
            <a href="#home">Strona Główna</a>
          </li>
          <li>
            <a href="#services">Usługi</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#pricing">Pakiety</a>
          </li>
          <li>
            <a href="#video">Szopen Włosów</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  color: #fff;
  padding-top: 2rem;

  .brand__container {
    margin: 0 2rem;
    .toggle {
      display: none;
    }
  }

  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;

      .active {
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }

      li {
        a {
          color: #000;
          text-decoration: none;
          font-weight: 400;
          font-size: 0.9rem;
          text-transform: uppercase;
        }
      }
    }
  }

  .toggle {
    display: none;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;

    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;

        svg {
          font-size: 2.5rem; /* Powiększenie ikon */
          color: #fff; /* Biały kolor */
          stroke-width: 2; /* Dodanie grubości kreski */
          stroke: #fff; /* Ustawienie białej ramki dla ikony */
          cursor: pointer;
          transition: transform 0.2s ease;

          &:hover {
            transform: scale(1.2); /* Efekt powiększenia przy najechaniu */
          }
        }
      }
    }

    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "100%" : "0%")};
      height: 100vh;
      background-color: var(--secondary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;

      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;

        li {
          a {
            color: #fff;
            font-size: 1.2rem;
            padding: 0.5rem 0;
          }
        }
      }
    }

    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
  }
`;

export default Navbar;
