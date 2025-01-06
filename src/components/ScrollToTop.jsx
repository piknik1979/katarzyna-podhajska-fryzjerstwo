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
    <Div>
      <button
        type="button"
        className={`button-link ${visible ? 'block' : 'none'}`}
        onClick={scrollToTop}
      >
        <FaChevronUp />
      </button>
    </Div>
  );
}

const Div = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: var(--secondary-color);
  padding: 1rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: 0.4s ease-in-out;
  svg {
    color: #fff;
    font-size: 1.3rem;
  }
  &.none {
    opacity: 0;
    visibility: hidden;
  }
`;

export default ScrollToTop;
