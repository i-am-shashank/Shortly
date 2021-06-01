import React from "react";
import styled from "styled-components";

export default function Button(props) {
  return <Wrapper {...props}></Wrapper>;
}

const Wrapper = styled.button`
  background-color: ${(props) => (props.primary ? "#2acfcf" : "transparent")};
  color: ${(props) => (props.primary ? "#ffffff" : "#bfbfbf")};
  width: ${(props) => (props.maxwidth ? "100%" : "max-content")};
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 800;
  font-size: ${(props) => (props.fbig ? "1.5rem" : "18px")};
  padding: ${(props) => (props.big ? "1.2rem 2rem" : "0.8rem 1.5rem")};
  border-radius: ${(props) => (props.round ? "5rem" : "0.4rem")};
  :hover {
    color: ${(props) => props.secondary && "#34313d"};
    background-color: ${(props) => props.primary && "#62D8D8"};
  }
  @media (max-width: 1350px) {
    font-size: ${(props) => props.fbig && "18px"};
  }
`;
