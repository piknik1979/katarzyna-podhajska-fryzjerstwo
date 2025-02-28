import React from 'react';
import styled from 'styled-components';
import service1 from 'assets/service1.png';
import service2 from 'assets/service2.png';
import service3 from 'assets/service3.png';
import booksyIcon from 'assets/logoBooksy.png'; // Domyślna ikona Booksy
import booksyIconColoring from 'assets/booksyBack.png'; // Nowe logo dla Koloryzacji
import Title from './Title';
import { useScroll } from 'components/useScroll';
import { motion } from 'framer-motion';
import { servicesAnimations } from 'animation';

function Services() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: 'Strzyżenie i Stylizacja',
      text: (
        <>
          <p><strong>Strzyżenie damskie:</strong> obejmuje strzyżenie z modelowaniem oraz strzyżenie grzywki</p>
          <p><strong>Strzyżenie męskie:</strong> z myciem, modelowaniem, strzyżeniem brody i wąsów</p>
          <p><strong>Strzyżenie dziecięce:</strong> dostosowane do delikatnych włosów dzieci</p>
          <p><strong>Modelowanie:</strong> suszenie, loki, upięcia włosów, trwałe prostowanie, nanoplastia</p>
        </>
      ),
      image: service1,
      booksyIcon: booksyIcon,
    },
    {
      type: 'Koloryzacja i Zabiegi Chemiczne',
      text: (
        <>
          <p><strong>Farbowanie włosów:</strong> pełna koloryzacja, odrosty, refleksy, baleyage, sombre, tonowanie</p>
          <p><strong>Dekoloryzacja:</strong> ściąganie koloru, dekoloryzacja włosów</p>
          <p><strong>Trwała ondulacja</strong></p>
        </>
      ),
      image: service2,
      booksyIcon: booksyIconColoring,
    },
    {
      type: 'Pielęgnacja i Regeneracja',
      text: (
        <>
          <p><strong>Mycie włosów.</strong></p>
          <p><strong>Kompres i ozonowanie</strong></p>
          <p><strong>Ampułki:</strong> zabiegi z użyciem ampułek odżywczych</p>
          <p><strong>Botox:</strong> regeneracja włosów</p>
          <p><strong>Laminacja włosów</strong></p>
          <p><strong>Nanoplastia:</strong> zaawansowana regeneracja i prostowanie włosów</p>
        </>
      ),
      image: service3,
      booksyIcon: booksyIcon,
    },
  ];

  return (
    <Section id="services" ref={element}>
      <Title value="usługi" />
      <div className="services">
        {data.map(({ type, text, image, booksyIcon }, index) => (
          <motion.div
            className="services__service"
            key={index}
            variants={servicesAnimations}
            animate={controls}
            transition={{
              delay: 0.03,
              type: 'tween',
              duration: 0.8,
            }}
          >
            <div className="services__service__image">
              <img src={image} alt="Service" />
            </div>
            <div className="services__service__title">
              <h2>{type}</h2>
            </div>
            <div className="services__service__description">{text}</div>
            <div className="booksy-links">
              <a href="https://booksy.com/pl-pl/72069_katarzyna-podhajska-fryzjerstwo_fryzjer_21029_gdynia#ba_s=seo" target="_blank" rel="noopener noreferrer">
                <div className={`booksy-link ${index === 1 ? 'black-background' : ''}`}>
                  <img src={booksyIcon} alt="Booksy" />
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  justify-content: center;

  .services {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 10rem;
    margin-top: 10rem;
    gap: 5rem;

    &__service {
      padding: 2rem;
      &:nth-of-type(2) {
        background-color: #000;
        .services__service__title {
          span {
            color: #fff;
          }
        }
        .services__service__description {
          color: #fff;
        }
      }
      &__image {
        margin-bottom: 3rem;
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          margin-bottom: 5rem;
          color: var(--secondary-color);
        }
      }
      &__description {
        color: var(--primary-color);
        margin-bottom: 2rem;
      }
    }
  }

  /* Wersja mobilna */
  @media screen and (max-width: 1080px) {
    .services {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin: 0;
      padding: 1rem;

      &__service {
        width: 100%;
        margin-bottom: 2rem;
        background-color: #f9f9f9;
        border-radius: 1rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

        &__image {
          margin-bottom: 1rem;
        }
        &__title h2 {
          font-size: 2rem;
          line-height: 2.5rem;
        }
        &__description {
          font-size: 1rem;
        }
      }
    }
  }

  .booksy-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .booksy-link {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 180px;
      height: auto;
    }
  }

  .black-background {
    background-color: #000;
    border-radius: 50%;
    padding: 1rem;
    img {
      width: 180px;
      height: auto;
    }
  }
`;

export default Services;
