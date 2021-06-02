import React from "react";
import styled from "styled-components";
import footerBak from "../../assets/bg-boost-desktop.svg";
import {
  Facebook,
  Twitter,
  Pinterest,
  Instagram,
} from "../../assets/socialicons";
import Button from "../Button";

export default function Footer() {
  return (
    <Wrapper>
      <div className="upperFooter">
        <p className="boostTxt">Boost your links today</p>
        <Button primary round>
          Get Started
        </Button>
      </div>
      <div className="lowerFooter">
        <p className="logo">Shortly</p>
        <div className="optionsCol">
          <p className="head">Features</p>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div className="optionsCol">
          <p className="head">Resources</p>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div className="optionsCol">
          <p className="head">Company</p>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className="icons">
          <Facebook />
          <Twitter />
          <Pinterest />
          <Instagram />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .upperFooter {
    background-image: url(${footerBak});
    background-size: 100% 100%;
    background-color: #3b3054;
    object-fit: cover;
    height: 10rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
    align-items: center;
  }
  .boostTxt {
    font-size: 2rem;
    font-weight: 800;
    color: white;
  }
  /* lower footer */
  .lowerFooter {
    background-color: #232127;
    padding: 2rem;
    padding-bottom: 5rem;
    min-height: 10rem;
    color: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
  .logo {
    width: 25%;
    font-weight: 800;
    font-size: 2rem;
  }
  .optionsCol {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .head {
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  .icons {
    display: flex;
    justify-content: space-between;
    width: 10rem;
  }
  p:hover,
  .logo:hover {
    color: #2acfcf;
    cursor: pointer;
  }
  svg:hover {
    cursor: pointer;
    path {
      fill: #2acfcf;
    }
  }
  @media (max-width: 450px) {
    .boostTxt {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 800px) {
    .logo {
      width: 20%;
    }
  }
  @media (max-width: 750px) {
    .lowerFooter {
      flex-direction: column;
      align-items: center;
    }
    .logo {
      width: max-content;
      margin-bottom: 1rem;
    }
    .optionsCol {
      margin: 1rem 0;
      text-align: center;
    }
    .icons {
      margin-top: 2rem;
    }
  }
`;
