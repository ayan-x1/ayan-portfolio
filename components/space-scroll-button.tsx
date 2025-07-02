import React from 'react';
import styled from 'styled-components';

interface SpaceScrollButtonProps {
  onClick?: () => void;
}

const SpaceScrollButton: React.FC<SpaceScrollButtonProps> = ({ onClick }) => {
  return (
    <StyledButton type="button" className="btn" onClick={onClick} aria-label="Scroll to About">
      <ArrowWrapper>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="none" />
          <path d="M10 14l6 6 6-6" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </ArrowWrapper>
      <div id="container-stars">
        <div id="stars" />
      </div>
      <div id="glow">
        <div className="circle" />
        <div className="circle" />
      </div>
    </StyledButton>
  );
};

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  background-size: 300% 300%;
  cursor: pointer;
  backdrop-filter: blur(1rem);
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(
      137.48deg,
      #ffdb3b 10%,
      #fe53bb 45%,
      #8f51ea 67%,
      #0044ff 87%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  position: relative;
  font-size: 1rem;
  #container-stars {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(1rem);
    border-radius: 50%;
  }
  #glow {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .circle {
    width: 100%;
    height: 30px;
    filter: blur(2rem);
    animation: pulse_3011 4s infinite;
    z-index: -1;
  }
  .circle:nth-of-type(1) {
    background: rgba(254, 83, 186, 0.636);
  }
  .circle:nth-of-type(2) {
    background: rgba(142, 81, 234, 0.704);
  }
  &:hover #container-stars {
    z-index: 1;
    background-color: #212121;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    border: double 4px #fe53bb;
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;
  }
  &:active .circle {
    background: #fe53bb;
  }
  #stars {
    position: relative;
    background: transparent;
    width: 200rem;
    height: 200rem;
  }
  #stars::after {
    content: "";
    position: absolute;
    top: -10rem;
    left: -100rem;
    width: 100%;
    height: 100%;
    animation: animStarRotate 90s linear infinite;
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
  }
  #stars::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    animation: animStar 60s linear infinite;
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
    opacity: 0.5;
  }
  @keyframes animStar {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-135rem);
    }
  }
  @keyframes animStarRotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0);
    }
  }
  @keyframes gradient_301 {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes pulse_3011 {
    0% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
    100% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;

export default SpaceScrollButton; 