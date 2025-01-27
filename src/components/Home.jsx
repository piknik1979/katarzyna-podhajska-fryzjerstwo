import React from 'react';
import styled from "styled-components";
import home from "assets/home.png";
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
            <div className="socialLinks">
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
                  <span>Facebook</span>
                </a>
              </p>
            </div>
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
          font-size: clamp(2rem, 6vw, 4.8rem); /* Responsywna wielkość czcionki */
          line-height: 1.2; /* Utrzymanie spójnego odstępu między liniami */
          color: #e47194;
          text-align: left;
          word-wrap: break-word; /* Zawijanie tekstu, jeśli jest zbyt długi */
          overflow-wrap: break-word;
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
    // width: 850px;
    // height: 380px;

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem; /* Większy odstęp między kolumnami w wersji desktopowej */
      color: #fff;

      .col {
        margin-bottom: 2rem;

        img {
          width: 234px; /* Powiększone logo dla obu wersji */
          margin-right: 8px;
        }

        .booksyLink {
          margin-bottom: 0rem;
        }

        .facebookLink {
          display: flex;
          align-items: center;
          margin-top: 0rem;
          margin-bottom: 0rem;
        }

        .facebookLink a {
          display: flex;
          align-items: center;
          color: #fff;
          text-decoration: none;
          font-weight: normal;
          transition: color 0.3s ease;
        }

        .facebookLink svg {
          font-size: 1.8rem;
          margin-right: 8px;
          margin-top: -0.3rem;
        }

        .facebookLink span {
          font-size: 1rem;
          line-height: 1.8rem;
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
            font-size: clamp(3rem, 9vw, 6rem); /* Zmniejszenie maksymalnego rozmiaru */
            text-align: center; /* Opcjonalnie wyśrodkowanie na mobilkach */
          }
        }
      }
    }

    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
        gap: 1rem; /* Mniejszy odstęp w wersji mobilnej */
        .col {
          img {
            width: 170px;
          }
        }
      }
    }
  }

  .socialLinks {
    display: flex;
    align-items: center;
    gap: 1rem; /* Równy odstęp między Booksy a Facebook w wersji desktopowej */
  }
`;

export default Home;
