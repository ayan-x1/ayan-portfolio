import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const SideDropdownButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <StyledSideWrapper>
      <div className="side-btn-container" ref={dropdownRef}>
        <StyledButton type="button" className="btn" onClick={() => setOpen((o) => !o)}>
          <strong>SPACE</strong>
          <div id="container-stars">
            <div id="stars" />
          </div>
          <div id="glow">
            <div className="circle" />
            <div className="circle" />
          </div>
        </StyledButton>
        {open && (
          <DropdownMenu>
            <DropdownItem onClick={() => { setOpen(false); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>About</DropdownItem>
            <DropdownItem onClick={() => { setOpen(false); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>Projects</DropdownItem>
            <DropdownItem onClick={() => { setOpen(false); window.open('/Ayan_s_Resume.pdf', '_blank'); }}>Download Resume</DropdownItem>
            <DropdownItem onClick={() => { setOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</DropdownItem>
          </DropdownMenu>
        )}
      </div>
    </StyledSideWrapper>
  );
};

const StyledSideWrapper = styled.div`
  position: fixed;
  top: 50%;
  right: 2rem;
  z-index: 50;
  transform: translateY(-50%);
  .side-btn-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
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
  strong {
    z-index: 2;
    font-family: inherit;
    font-size: 0.9rem;
    letter-spacing: 2px;
    color: #fff;
    text-shadow: 0 0 4px white;
    pointer-events: none;
  }
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

const DropdownMenu = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  background: rgba(30, 30, 40, 0.98);
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  min-width: 180px;
  padding: 0.5rem 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const DropdownItem = styled.button`
  background: none;
  border: none;
  color: #fff;
  text-align: left;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: background 0.18s;
  &:hover {
    background: #8f51ea;
  }
`;

export default SideDropdownButton; 