import React from "react";
import styled from "styled-components";

export default function detailCard(props) {
  const { ico, head, desc } = props;
  return (
    <Wrapper {...props}>
      <div className="ico">
        <img alt="" src={ico} />
      </div>
      <p className="head">{head}</p>
      <p className="desc">{desc}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  padding: 2rem;
  text-align: left;
  padding-top: 4rem;
  display: flex;
  height: 280px;
  flex-direction: column;
  background-color: white;
  border-radius: 0.4rem;
  box-shadow: 0px 0px 48px #0000000b;
  margin-top: ${(props) => props.mar && `${props.mar}rem`};
  .ico {
    box-sizing: initial !important;
    position: absolute;
    padding: 0.5rem;
    top: -2.5rem;
    left: 2rem;
    background-color: #3b3054;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    img {
      height: 70%;
      width: 70%;
    }
  }
  .head {
    font-weight: 800;
    margin-bottom: 1rem;
    color: #34313d;
  }
  .desc {
    color: #bfbfbf;
  }
  @media (max-width: 1250px) {
    width: 256px;
    height: 268px;
    padding-top: 3rem;
    .ico {
      height: 3rem;
      width: 3rem;
    }
  }
  @media (max-width: 1100px) {
    margin-top: 0;
  }
`;
