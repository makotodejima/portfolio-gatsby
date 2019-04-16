import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";

function Header({ currentPath }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <StyledNav>
      <Link to="/">
        <Logo />
      </Link>
      <Hamburger onClick={() => toggleExpansion(!isExpanded)}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v1H0V3zm0 6h20v1H0V9zm0 6h20v1H0v-2z" />
        </svg>
      </Hamburger>

      <HeaderLinks isExpanded={isExpanded}>
        <Link to="/work/" className={currentPath === "/work/" ? `current` : ""}>
          Work
        </Link>

        <Link
          to="/about/"
          className={currentPath === "/about/" ? `current` : ``}
        >
          About
        </Link>

        <Link
          to="/contact/"
          className={currentPath === "/contact/" ? `current` : ``}
        >
          Contact
        </Link>
      </HeaderLinks>
    </StyledNav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Hamburger = styled.button`
  display: none;
  align-items: center;
  padding: 0.3rem 0.75rem;
  width: 50px;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  cursor: pointer;
  :focus {
    outline: 0;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const HeaderLinks = styled.div`
  align-items: center;
  font-size: 1rem;

  a {
    display: inline-block;
    position: relative;
    color: black;
    margin-left: 1.5rem;
    text-decoration: none;
    &.current {
      color: blue;
    }
    &::before {
      content: "";
      position: absolute;
      visibility: hidden;
      width: 100%;
      height: 1px;
      background-color: #3d4852;
      bottom: -1px;
      left: 0;
      transform: scaleX(0);
      transition: all 0.25s ease-in-out 0s;
    }
    &:hover::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    display: ${props => (props.isExpanded ? `block` : `none`)};
    a {
      display: block;
      margin-top: 1rem;
      margin-left: 0;
    }
  }
`;
