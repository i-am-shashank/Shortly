import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Button from "./Button";

export default function Nav() {
  return (
    <Wrapper>
      <div className="routes">
        <img src={logo} />
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
      </div>
      <div className="buttons">
        <Button secondary>Login</Button>
        <Button primary round>
          Sign Up
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  a {
    color: #bfbfbf;
    font-weight: 800;
    text-decoration: none;
    :hover {
      color: #34313d;
    }
  }
  .routes {
    display: flex;
    align-items: center;
    /* border: 2px solid red; */
    width: 40%;
    justify-content: space-between;
  }
`;
