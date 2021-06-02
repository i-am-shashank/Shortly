import React from "react";
import styled from "styled-components";
import Button from "../Button";
import developerSvg from "../../assets/illustration-working.svg";

export default function Home_vw1() {
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .vw_1 {
    display: flex;
    align-items: center;
    min-height: 80vh;
    padding: 0 10rem;
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
  Button{
    margin-top: 1rem;
    margin-bottom: 4rem;
  }

  /* media queries */

  @media (max-width: 1440px) {
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
  @media (max-width: 1200px) {
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
      padding: 0 2rem;
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
