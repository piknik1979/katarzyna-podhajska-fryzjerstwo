import React from 'react';
import styled from 'styled-components';
import service1 from 'assets/service1.png';
import service2 from 'assets/service2.png';
import service3 from 'assets/service3.png';
import play from 'assets/play.png';
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
          <p><strong>Strzyżenie damskie:</strong> obejmuje strzyżenie z modelowaniem oraz strzyżenie grzywki</p>
          <p><strong>Strzyżenie męskie:</strong> z myciem, modelowaniem, strzyżeniem brody i wąsów</p>
          <p><strong>Strzyżenie dziecięce</strong></p>
          <p><strong>Modelowanie:</strong> suszenie, loki, upięcia włosów, trwałe prostowanie, nanoplastia</p>
        </>
      ),
      image: service1,
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
    },
  ];

  return (
    <Section id="services" ref={element}>
      <Title value="usługi" />
      <div className="services">
        {data.map(({ type, text, image }, index) => (
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
            <img src={play} alt="Read more" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;

  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 14rem;
    margin-top: 10rem;
    gap: 5rem;

    &__service {
      padding: 2rem;
      &:nth-of-type(2) {
        background-color: var(--primary-color);
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
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      gap: 2rem;
      margin: 0 2rem;
      padding: 1rem 0;

      &__service {
        min-width: 80%;
        flex: 0 0 auto;
        scroll-snap-align: center;
        background-color: #f9f9f9;
        border-radius: 1rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

        &__image {
          margin-bottom: 1rem;
        }
        &__title h2 {
          font-size: 1.8rem;
          line-height: 2rem;
          word-break: break-all; /* Dodano */
        }
        &__description {
          font-size: 1rem;
          word-break: break-all; /* Umożliwia łamanie długich słów w opisie */
          white-space: normal; /* Wymusza łamanie tekstu w description */
        }
      }
    }

    /* Styl dla tytułów w wersji mobilnej */
    .services__service__title h2 {
      word-wrap: break-word;
      white-space: normal;
    }
  }
`;

export default Services;
