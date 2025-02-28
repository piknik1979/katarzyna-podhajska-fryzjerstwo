import React, { useState } from 'react';
import loadmore from "assets/loadmore.png";
import booksyLogo from "assets/booksyBack.png"; 
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { testimonialsAnimations } from "animation";

function Testimonials() {
  const [element, controls] = useScroll();
  const [selected, setSelected] = useState(0);

  const testimonials = [
    {
      designation: "Strzyżenie damskie. Włosy krótkie z modelowaniem",
      name: "Patrycja B.",
      review:
        "Wizytę umówiłam z polecenia i się nie zawiodłam. Pani Kasia wysłuchała wszystkie moje uwagi i jeśli chciałam zrobić coś trochę inaczej to zmieniła to. Bardzo miła atmosfera i można porozmawiać o różnych rzeczach. Bardzo dziękuję za profesjonalną obsługę.",
      booksyLink: "https://booksy.com/pl-pl/72069_katarzyna-podhajska-fryzjerstwo_fryzjer_21029_gdynia#ba_s=seo"
    },
    {
      designation: "Trwała Włosy długie + modelowanie",
      name: "Oliwia P.",
      review:
        "Gorąco polecam! Bardzo przyjemne miejsce w którym można się całkowicie zrelaksować i oddać w profesjonalne ręce. Wyszłam z uśmiechem na twarzy i nową fryzurą. Na pewno wrócę.",
      booksyLink: "https://booksy.com/pl-pl/72069_katarzyna-podhajska-fryzjerstwo_fryzjer_21029_gdynia#ba_s=seo"
    },
    {
      designation: "Kompres, ozonowanie, ampułka, długie włosy.",
      name: "Anna K.",
      review:
        "Zarezerwowałam wizytę w ten sam dzień i naprawdę było warto. Pani Kasia zrobiła regenerację włosów i podcięła włosy. Miejsce jest niezykle relaksujące i można na chwilę zresetować ciało i ducha.",
      booksyLink: "https://booksy.com/pl-pl/72069_katarzyna-podhajska-fryzjerstwo_fryzjer_21029_gdynia#ba_s=seo"
    },
    {
      designation: "Strzyżenie męskie z myciem",
      name: "Sebastian S.",
      review:
        "Zostałem bardzo dobrze ostrzyżony. Pani Katarzyna zna się na rzeczy i jest bardzo profesjonalna, a w jej atelier panuje bardzo miła atmosfera.",
      booksyLink: "https://booksy.com/pl-pl/72069_katarzyna-podhajska-fryzjerstwo_fryzjer_21029_gdynia#ba_s=seo"
    },
    {
      designation: "Upięcie. Włosy średnie",
      name: "Gosia W.",
      review:
        "Jestem bardzo zadowolona z wykonanego upięcia przez P. KAsię. Fryzura wytrzymała w nienaruszonym stanie całą noc. Sama usługa przebiegła w przemiłej atmosferze. Polecam!",
      booksyLink: "https://booksy.com/pl-pl/72069_katarzyna-podhajska-fryzjerstwo_fryzjer_21029_gdynia#ba_s=seo"
    },
    {
      designation: "Farbowanie włosów średnich + strzyżenie _ modelowanie",
      name: "Gosia O.",
      review:
        "Pani Kasia doradziła kolor włosów i kształt fryzury. Wyszło elegancko. Bardzo dziękuję. :)",
      booksyLink: "https://booksy.com/pl-pl/72069_katarzyna-podhajska-fryzjerstwo_fryzjer_21029_gdynia#ba_s=seo"
    },
    {
      designation: "Strzyżenie męskie z myciem",
      name: "Rafał J.",
      review:
        "Gorąco polecam ten właśnie salon. Długo szukałem miejsca w którym ktoś odpowiednio zajmie się męską fryzurą z długimi włosami i... nareszccie znalazłem. Na pewno będę tu wracał! :)",
      booksyLink: "https://booksy.com/pl-pl/72069_katarzyna-podhajska-fryzjerstwo_fryzjer_21029_gdynia#ba_s=seo"
    },
    {
      designation: "Strzyżenie damskie, włosy długie z modelowaniem",
      name: "Anna B",
      review:
        "Bardzo profesjonalna obsługa. Pani Katarzyna rzeczywiście słucha oczekwiań, doradza i ostatecznie realizuje wspólnie ustaloną wersję, a nie swoją wizję, niekoniecznie zgodną z tą klienta. Włosy układaja się dobrze również po domowym myciu, bez stylizacyjnych czarów, nie do odtworzenia w warunkach domowych. Dodatkowym plusem jest jasny, ładnie zaaranżowany gabinet i strefa wejściowa.",
      booksyLink: "https://booksy.com/pl-pl/72069_katarzyna-podhajska-fryzjerstwo_fryzjer_21029_gdynia#ba_s=seo"
    }
  ];

  const nextTestimonial = () => {
    setSelected((prevSelected) => (prevSelected + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setSelected((prevSelected) =>
      prevSelected === 0 ? testimonials.length - 1 : prevSelected - 1
    );
  };

  return (
    <Section id="testimonials" ref={element}>
      <div className="container">
        <motion.div
          className="testimonials"
          variants={testimonialsAnimations}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
        >
          {testimonials.map(({ designation, name, review, booksyLink }, index) => {
            return (
              <div
                className={`testimonial ${selected === index ? "active" : "hidden"}`}
                key={index}
              >
                <div className="image">
                  <div className="circle2">
                    <img src={loadmore} alt="Loadmore" />
                  </div>
                </div>
                <div className="title-container">
                  <div className="booksy-link-container">
                    <span>Opinie z Booksy</span>
                    <a href={booksyLink} target="_blank" rel="noopener noreferrer">
                      <img src={booksyLogo} alt="Booksy Logo" className="booksy-logo" />
                    </a>
                  </div>
                  <span className="designation">{designation}</span>
                  <h3 className="title">{name}</h3>
                </div>
                <p className="description">{review}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Strzałki poniżej */}
        <div className="controls">
          <button className="prev" onClick={prevTestimonial}>
            ←
          </button>
          <button className="next" onClick={nextTestimonial}>
            →
          </button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  overflow: hidden;

  .container {
    min-height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    position: relative;

    .testimonials {
      display: flex;
      gap: 1rem;
      text-align: center;
      justify-content: center;
      width: 30%;
      .testimonial {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        min-height: 25rem; /* Stała wysokość dla opinii */
      }
      .hidden {
        display: none;
      }
      color: #fff;
      .designation {
        height: 8rem;
      }
    }
    .circle2 {
  width: 50px; /* Rozmiar okręgu */
  height: 50px; /* Rozmiar okręgu */
  border-radius: 50%; /* Tworzy okrąg */
  background-color: #8860e6; /* Fioletowe tło */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}

.circle2 img {
  width: 100%; /* Rozmiar obrazka, dopasowanie do okręgu */
  height: 100%; /* Rozmiar obrazka, dopasowanie do okręgu */
  object-fit: contain;
}

    .booksy-link-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      span {
        font-size: 1.2rem;
        font-weight: bold;
        color: #fff;
      }
      .booksy-logo {
        width: 100px;
        height: auto;
      }
    }

    .controls {
      position: absolute;
      bottom: 7rem; /* Ustawienie strzałek na dole */
      display: flex;
      justify-content: center;
      gap: 1rem;
      
      button {
        padding: 0.5rem 1rem;
        border-radius: 50%;
        background-color: #8860e6b0;
        border: none;
        cursor: pointer;
        color: white;
        font-size: 1.5rem;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #8860e6;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .container {
      padding: 4rem 0;
      .testimonials {
        width: 80%;
        .testimonial {
          .description {
            height: 18rem;
          }
        }
      }
    }
  }
`;

export default Testimonials;
