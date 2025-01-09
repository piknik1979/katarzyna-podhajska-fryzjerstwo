import React, { useState } from 'react';
import styled from "styled-components";
import Title from './Title';
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { contactAnimation } from "animation";
import emailjs from 'emailjs-com';

function Contact() {
  const [element, controls] = useScroll();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send('piknik1979', 'template_gpk8jyb', templateParams, 'NXy1BGT7rnYvW5nnoD')
      .then((response) => {
        setStatus('Wiadomość wysłana pomyślnie!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setStatus('Wystąpił błąd podczas wysyłania wiadomości.');
      });
  };

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
          <p>W razie pytań proszę o wiadomość:</p>
          <h2>Dane kontaktowe</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Witam serdecznie!</h4>
            <p>Jeśli masz jakiekolwiek pytania, proszę nie wahaj się skontaktować:</p>
            <p>Jesteśmy do Twojej dyspozycji. Czekamy na Twoje pytania!</p>
            <div>
              <p><strong>Adres:</strong> ulica Świętojańska 83/83A</p>
              <p> 1A lokal w bramie, Gdynia, 81-389</p>
              <p><strong>Email:</strong> podhajskakatarzyna@gmail.com</p>
              <p><strong>Telefon:</strong> 508323986</p>
            </div>
          </div>  
          <div className="contact__data__form">
            <input
              type="text"
              name="name"
              placeholder="Imię i nazwisko"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Wiadomość"
              value={formData.message}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Wyślij wiadomość</button>
            {status && <p>{status}</p>}
          </div>
        </div>

        {/* Google Maps iframe */}
        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=54.512137898888106,18.539682888053047"
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
      margin: 6rem 0 2rem 0;
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
      grid-template-columns: 1fr 1.2fr;
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
      &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        input,
        textarea {
          text-transform: uppercase;
          border: none;
          border-bottom: 0.1rem solid var(--secondary-color);
          width: 100%;
          color: var(--secondary-color);
          padding-bottom: 0.7rem;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: var(--secondary-color);
          }
        }
        textarea {
          width: 100%;
          height: 50%;
          resize: none;
        }
        button {
          width: 100%;
          background-color: transparent;
          border: 0.1rem solid var(--secondary-color);
          height: 3rem;
          color: var(--secondary-color);
          text-transform: uppercase;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            background-color: var(--secondary-color);
            color: #fff;
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
        &__form {
          button {
            height: 6rem;
          }
        }
      }
    }
  }
`;

export default Contact;
