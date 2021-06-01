import React from "react";
import styled from "styled-components";
import Button from "./styled/Button";
import Home_vw1 from "./styled/home/Home_vw1";
import Home_vw2 from "./styled/home/Home_vw2";

export default function Home() {
  return (
    <Wrapper>
      <Home_vw1 />
      <Home_vw2 />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 4rem;

  /* vw_2 */
`;
