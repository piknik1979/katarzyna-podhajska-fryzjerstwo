import React from 'react';
import styled from "styled-components";
import home from "assets/home.png";
import play from "assets/play.png";
import Navbar from './Navbar';
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animation";

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
          <div className="subTitle">
            <p>
              "My tu kurde, Walduś włoski obcinamy. Jeśli chcesz z Mariolką
              tuy uprzyjść i się obcionć to daj znać!"
                          F. Kiepski
            </p>  
          </div>
          <img src={play} alt="Play Button" />
        </div>  
      </motion.div>

      <motion.div className="info"
      variants={homeInfoAnimation}  
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
          <div className="grid">
            <div className="col">
                <strong>Zakład Fryzjerski</strong>
                <p>Katarzyna Podhajska Fryzjerstwo</p>
            </div>
            <div className="col">
                <strong>Email</strong>
                <p>katarzyna-podhajska-fryzjerstwto@gmail.com</p>
            </div> 
            <div className="col">
                <strong>MTelefon</strong>
                <p>+48 8897666511</p>
            </div> 
            <div className="col">
                <strong>Addres</strong>
                <p>Świętojańska 111</p>
                <p>81-222 Gdynia</p>
            </div> 
            <div className="col">
                <strong>Usługi</strong>
                <p>Obcinanko</p>
                <p>Golonko</p>
            </div> 
            <div className="col">
                <strong>Godziny otwarcia</strong>
                <p>Poniedziałek - Sobota</p>
                <p>08:00 do 16:00</p>
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
  .home{
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
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: #fff;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
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
      }
    }
  }
`;

export default Home