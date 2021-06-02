import React from "react";
import styled from "styled-components";
import InpCard from "../cards/InpCard";
import LinkCard from "../cards/LinkCard";

export default function Home_vw2() {
  return (
    <Wrapper>
      <div className="vw_2">
        <InpCard />
        <LinkCard />
        <p className="bigtxt">Advanced Statistics</p>
        <p className="smalltxt">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  .vw_2 {
    min-height: 100vh;
    width: 100vw;
    background-color: #eff1f7;
    padding: 0 10rem;
  }
  .bigtxt {
    font-weight: 800;
    font-size: 2rem;
    color: #34313d;
  }
  .smalltxt {
    font-size: 18px;
    color: #bfbfbf;
  }
  /* media queries */

  @media (max-width: 750px) {
    .vw_2 {
      padding: 0 2rem;
    }
  }
  @media (max-width: 450px) {
    .bigtxt{
      font-size: 1.6rem;
    }
  }
`;
