import React from "react";
import styled from "styled-components";

export default function Button(props) {
  return <Wrapper {...props}></Wrapper>;
}

const Wrapper = styled.button`
  background-color: ${(props) => (props.primary ? "#2acfcf" : "transparent")};
  color: ${(props) => (props.primary ? "#ffffff" : "#bfbfbf")};
  border: none;
  cursor: pointer;
  font-weight: 800;
  font-size: 1rem;
  padding: ${(props) => (props.big ? "1rem 2rem" : "0.5rem 1.5rem")};
  border-radius: ${(props) => (props.round ? "1rem" : "0.4rem")};
  :hover {
    color: ${(props) => props.secondary && "#34313d"};
    opacity: ${(props) => props.primary && 0.8};
  }
`;
