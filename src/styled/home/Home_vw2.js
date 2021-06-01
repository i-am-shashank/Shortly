import React from "react";
import styled from "styled-components";
import Button from "../Button";
import InpCard from "../cards/InpCard";
import LinkCard from "../cards/LinkCard";

export default function Home_vw2() {
  return (
    <Wrapper>
      <div className="vw_2">
        <InpCard />
        <LinkCard />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  .vw_2 {
    min-height: 100vh;
    background-color: #eff1f7;
    padding: 0 10rem;
  }
  /* media queries */

  @media (max-width: 750px) {
    .vw_2 {
      padding: 0 2rem;
    }
  }
  @media (max-width: 1350px) {
  }
  @media (max-width: 1150px) {
  }
  @media (max-width: 1150px) {
  }
`;
