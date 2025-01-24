import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Div visible={visible} onClick={scrollToTop}>
      <div className="icon">
        <FaChevronUp />
      </div>
      <div className="text">DO GÓRY</div>
    </Div>
  );
}

const Div = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: var(--secondary-color, #007bff);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease, visibility 0.3s ease;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: #fff;
      font-size: 1.5rem;
    }
  }

  .text {
    margin-top: 4px;
    font-size: 0.6rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
  }

  &:hover {
    background-color: var(--primary-color, #0056b3);
  }
`;

export default ScrollToTop;
