import React from 'react';
import styled from "styled-components";
import Title from './Title';
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { contactAnimation } from "animation";
import booksyIcon from 'assets/logoBooksy.png'; // Zastąp właściwą ścieżką do ikony

function Contact() {
  const [element, controls] = useScroll();

  return (
    <Section id="contact" ref={element}>
      <Title value="kontakt" />
      <motion.div className="contact"
        variants={contactAnimation}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
      >
        <div className="contact__title">
       
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Witam serdecznie!</h4>
            <p>Jeśli masz jakiekolwiek pytania, proszę nie wahaj się skontaktować:</p>
            {/* <h2>Dane kontaktowe</h2> */}
            <div>
         
              <p><strong>Adres:</strong> ulica Świętojańska 83/83A</p>
              <p>1A lokal w bramie, Gdynia, 81-389</p>
              <p><strong>Email:</strong> podhajskakatarzyna@gmail.com</p>
              <p><strong>Telefon:</strong> +48 508323986</p>
            </div>
          </div>
          <div className="contact__links">
            <a 
              href="https://booksy.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="booksy-link"
            >
              <img src={booksyIcon} alt="Booksy Icon" />
            </a>
            <a 
              href="https://maps.app.goo.gl/uNLTCuFNUFaU6pvHA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="map-link"
            >
              Otwórz w Google Maps
            </a>
          </div>
        </div>

        {/* Google Maps iframe */}
        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2191.2283988279446!2d18.537494776115724!3d54.512137898888106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd0c1f0adbc45b%3A0x2f0f61d2a905a45f!2s%C5%9Awi%C4%99toja%C5%84ska%2083%2C%2081-389%20Gdynia!5e0!3m2!1spl!2spl!4v1697051727697!5m2!1spl!2spl"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Lokalizacja zakładu na mapie Google"
          />
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .contact {
    color: var(--primary-color);
    margin: 0 18rem;
    &__title {
      2rem;
      text-align: left;
      p {
        text-transform: uppercase;
        color: var(--primary-color);
      }
      h2 {
        font-size: 2rem;
        color: var(--secondary-color);
      }
    }
    &__data {
      display: grid;
      grid-template-columns: 1fr;
      gap: 4rem;
      &__description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
          font-size: 1.5rem;
        }
        p {
          text-align: justify;
          margin-top: 20px;
        }
        div {
          p {
            strong {
              text-transform: uppercase;
            }
          }
        }
      }
      .contact__links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        .map-link {
          color: var(--secondary-color);
          text-transform: uppercase;
          text-decoration: none;
          border: 0.1rem solid var(--secondary-color);
          padding: 0.5rem;
          text-align: center;
          transition: 0.3s ease-in-out;
          &:hover {
            background-color: var(--secondary-color);
            color: #fff;
          }
        }
        .booksy-link {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
          img {
            width: 150px;
            height: 150px;
            transition: transform 0.3s;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }
    &__map {
      margin-top: 2rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .contact {
      margin: 1rem;
      padding: 0 1rem;
      &__title {
        margin: 0;
        text-align: center;
        p {
          font-size: 0.8rem;
        }
        h2 {
          font-size: 1.3rem;
        }
      }
      &__data {
        grid-template-columns: 1fr;
        margin: 0;
        p {
          text-align: left;
        }
      }
    }
  }
`;

export default Contact;
