import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

export default function LinkCard({ orignalLink, shortLink }) {
  const [copied, setcopied] = useState(false);
  return (
    <Wrapper>
      <p>{orignalLink || "https://asdasdasda.com"}</p>
      <div>
        <a href={shortLink || "https://asdasdasda.com"}>
          {shortLink || "https://asdasdasda.com"}
        </a>
        <Button primary>{copied ? "Copied!" : "Copy"}</Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 0.6rem;
  margin: 2rem auto;
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
  p {
    width: 40%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  a {
    color: #2acfcf;
    text-decoration: none;
    margin-right: 0.5rem;
    /* very low prority bug */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;
  }
  @media (max-width: 750px) {
  }
  @media (max-width: 950px) {
  }
  @media (max-width: 1150px) {
  }
  @media (max-width: 1150px) {
  }
`;
