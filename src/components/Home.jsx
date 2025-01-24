import React from 'react';
import styled from "styled-components";
import home from "assets/home.png";
// import play from "assets/play.png";
import Navbar from './Navbar';
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animation";
import { BsFacebook } from 'react-icons/bs';
import booksyLogo from 'assets/logoBooksyPink.png'; // Zaimportowanie logo Booksy z folderu assets

function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div className="home"
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>Katarzyna Podhajska Fryzjerstwo</h1>
          </div>  
        </div>  
      </motion.div>

      <motion.div className="info"
        variants={homeInfoAnimation}  
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="grid">
          <div className="col">
            <strong>Adres</strong>
            <p>ulica Świętojańska 83/83A</p>
            <p>1A lokal w bramie, Gdynia, 81-389</p>
          </div> 
          <div className="col">
            <strong>Email</strong>
            <p>podhajskakatarzyna@gmail.com</p>
          </div> 
          <div className="col">
            <strong>Telefon</strong>
            <p>+48 508323986</p>
          </div> 
          <div className="col"> 
            <strong>Social Media</strong>
            {/* Umieszczamy Booksy nad Facebookiem */}
            <p className="booksyLink">
              <a 
                href="https://booksy.com/pl-pl/72069_katarzyna-podhajska-fryzjerstwo_fryzjer_21029_gdynia#ba_s=seo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src={booksyLogo} 
                  alt="Booksy Logo" 
                  className="booksyLogo"
                />
              </a>
            </p>
            <p className="facebookLink">
              <a 
                href="https://www.facebook.com/katarzyna.podhajskafryzjerstwo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsFacebook />
                <span>Facebook</span> {/* Dodany tag <span> */}
              </a>
            </p>
          </div>
          <div className="col"> 
            <strong>Godziny otwarcia</strong>
            <p>Poniedziałek - Zamknięte</p>
            <p>Wtorek       - 9:00 - 15:00</p>
            <p>Środa        - 9:00 - 14:45</p>
            <p>Czwartek     - 9:00 - 15:00</p>
            <p>Piątek       - 11:00- 18:00</p>
            <p>Sobota       - 9:00 - 15:00</p>
            <p>Niedziela    - Zamknięte</p>
          </div>   
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background: url(${home}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;

  .home {
    height: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color: #fff;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      .title {
        h1 {
          font-size: 4.8rem;
          line-height: 5.3rem;
          color: #e47194;
        }
      }
    }
  }

  .info {
    position: absolute;
    bottom: 0rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 2rem;

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.6rem;
      color: #fff;

      .col {
        img {
          width: 234px; /* Powiększone logo dla obu wersji */
          margin-right: 8px;
          margin-bottom: 1rem; /* Dodany odstęp dolny między logo Booksy a Facebookiem */
        }

        .booksyLink {
          margin-bottom: 1rem; /* Dodany odstęp poniżej logo Booksy */
        }

        .facebookLink {
          display: flex;
          align-items: center;
          margin-top: 1rem; /* Opcjonalnie, jeśli chcesz odstęp od góry */
          margin-bottom: 2rem; /* Większy odstęp między Facebookiem a godzinami otwarcia */
        }

        .facebookLink a {
          display: flex;
          align-items: center;
          color: #fff;
          text-decoration: none; /* Usunięcie podkreślenia */
          font-weight: normal; /* Możesz zmienić wagę czcionki */
          transition: color 0.3s ease;
        }

        .facebookLink svg {
          font-size: 1.8rem;
          margin-right: 10px; /* Dodany margines między ikoną a tekstem */
        }

        .facebookLink span {
          font-size: 1rem; /* Można dostosować wielkość tekstu */
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    background-position: top left; 
    background-size: 210%;
    
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }

    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
        .col {
          img {
            width: 170px; /* Powiększone logo również na urządzeniach mobilnych */
          }
        }
      }
    }
  }
`;

export default Home;
