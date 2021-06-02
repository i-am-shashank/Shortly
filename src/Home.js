import React from "react";
import styled from "styled-components";
import Vw1 from "./styled/home/Home_vw1";
import Vw2 from "./styled/home/Home_vw2";

export default function Home() {
  return (
    <Wrapper>
      <Vw1 />
      <Vw2 />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 4rem;
`;
