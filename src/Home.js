import React from "react";
import styled from "styled-components";
import developerSvg from "./assets/illustration-working.svg";
import Button from "./styled/Button";

export default function Home() {
  return (
    <Wrapper>
      <div className="vw_1">
        <div className="textContent">
          <p className="textBig">More than just shorter links</p>
          <p className="textSmall">
            Build your brand's recognition and get detailed insight on how your
            links are performing.
          </p>
          <Button primary round big fbig>
            Get started
          </Button>
        </div>
        <img alt="" className="developerSvg" src={developerSvg} />
      </div>
      <div className="vw_2"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 4rem;
  .vw_1 {
    display: flex;
    align-items: center;
    min-height: 80vh;
    padding: 0 6rem;
    background-color: #ffffff;
  }
  .textContent {
    width: 40rem;
    display: flex;
    flex-direction: column;
  }
  .developerSvg {
    position: absolute;
    right: -8rem;
  }
  .textBig {
    margin: 0;
    color: #34313d;
    font-weight: 800;
    font-size: 5rem;
  }
  .textSmall {
    color: #bfbfbf;
    font-weight: 500;
    font-size: 18px;
  }

  /* vw_2 */

  .vw_2 {
    min-height: 100vh;
    background-color: #eff1f7;
    padding: 0 6rem;
  }

  /* media queries */

  @media (max-width: 750px) {
    .vw_1,
    .vw_2 {
      padding: 0 2rem;
    }
  }
  @media (max-width: 1350px) {
    .developerSvg {
      height: 24rem;
    }
    .textBig {
      font-size: 4rem;
    }
    .textContent {
      width: 36rem;
    }
  }
  @media (max-width: 1150px) {
    .developerSvg {
      height: 20rem;
    }
    .textBig {
      font-size: 3.5rem;
    }
    .textContent {
      width: 28rem;
    }
  }
  @media (max-width: 1150px) {
    .developerSvg {
      position: static;
      order: 0;
    }
    .vw_1 {
      flex-direction: column;
    }
    .textContent {
      order: 1;
    }
  }
  @media (max-width: 750px) {
    .developerSvg {
      height: auto;
      width: 100%;
      order: 0;
    }
    .vw_1 {
      flex-direction: column;
    }
    .textContent {
      width: 100%;
      text-align: center;
      align-items: center;
    }
    .textBig {
      font-size: 2rem;
    }
  }
`;
