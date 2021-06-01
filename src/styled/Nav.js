import React from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo.svg";
import Button from "./Button";

export default function Nav() {
  return (
    <Wrapper>
      <div className="routes">
        <img alt="Shortly" src={logo} />
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/resources">Resources</a>
      </div>
      <div className="buttons">
        <Button secondary>Login</Button>
        <Button primary round>
          Sign Up
        </Button>
      </div>
      <div className="dropdown">
        <FiMenu className="menuico" />
        <div className="options">
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/resources">Resources</a>
          <hr />
          <a href="/login">Login</a>
          <Button primary round>
            Sign Up
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 6rem;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  a {
    color: #bfbfbf;
    font-weight: 800;
    font-size: 18px;
    text-decoration: none;
    :hover {
      color: #34313d;
    }
  }
  .routes {
    display: flex;
    align-items: center;
    width: 40%;
    width: 32rem;
    justify-content: space-between;
  }
  .buttons {
    display: flex;
    align-items: center;
    width: 15rem;
    justify-content: space-between;
  }
  .dropdown {
    display: none;
  }
  @media (max-width: 950px) {
    .routes a,
    .buttons {
      display: none;
    }
    .dropdown {
      display: block;
      position: relative;
      padding: 0.5rem;
      :hover {
        .menuico {
          color: #34313d;
        }
      }
    }
    .menuico {
      font-size: 2rem;
      cursor: pointer;
      color: #bfbfbf;
    }
    .options {
      display: none;
      padding: 2rem 4rem !important;
      right: 0;
      border-radius: 0.6rem;
      flex-direction: column;
      position: absolute;
      background-color: #3b3054;
      width: max-content;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      padding: 12px 16px;
      z-index: 1;
      cursor: pointer;
      a {
        color: #ffffff;
        margin: 0.5rem 0;
      }
      a:hover {
        opacity: 0.8;
      }
      hr {
        width: 100%;
      }
      Button {
        margin: 0.5rem 0;
      }
    }
    .dropdown:hover .options {
      display: flex;
      align-items: center;
    }
  }
  @media (max-width: 750px) {
    padding: 0 2rem;
  }
`;
