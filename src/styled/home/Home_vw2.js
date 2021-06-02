import React, { useState } from "react";
import styled from "styled-components";
import InpCard from "../cards/inpCard";
import LinkCard from "../cards/linkCard";
import DetailedCard from "../cards/detailCard";
import brand from "../../assets/icon-brand-recognition.svg";
import detailed from "../../assets/icon-detailed-records.svg";
import customizable from "../../assets/icon-fully-customizable.svg";

const data = [
  {
    ico: brand,
    head: "Brand Recognition",
    desc: `Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.`,
  },
  {
    ico: detailed,
    head: "Detailed Records",
    desc: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`,
  },
  {
    ico: customizable,
    head: "Fully Customizable",
    desc: `Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`,
  },
];
export default function Home_vw2() {
  const [linksgenerated, setlinksgenerated] = useState([]);
  return (
    <Wrapper>
      <div className="vw_2">
        <InpCard
          setlinksgenerated={setlinksgenerated}
          linksgenerated={linksgenerated}
        />
        {linksgenerated.map((obj) => (
          <LinkCard
            orignalLink={obj.original_link}
            shortLink={obj.full_short_link}
          />
        ))}
        <p className="bigtxt">Advanced Statistics</p>
        <p className="smalltxt">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
        <div className="cardsCtr">
          <div className="line" />
          {data.map((obj, i) => (
            <DetailedCard
              key={i}
              mar={i * 2}
              ico={obj.ico}
              head={obj.head}
              desc={obj.desc}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  .vw_2 {
    box-shadow: 0px 4rem 0px 1px rgba(255, 255, 255, 1) inset;
    -webkit-box-shadow: 0px 4rem 0px 1px rgba(255, 255, 255, 1) inset;
    -moz-box-shadow: 0px 4rem 0px 1px rgba(255, 255, 255, 1) inset;
    min-height: 100vh;
    width: 100vw;
    background-color: #eff1f7;
    padding: 0 10rem;
  }
  .bigtxt {
    margin-top: 5rem;
    margin-bottom: 0.5rem;
    font-weight: 800;
    font-size: 2rem;
    color: #34313d;
  }
  .smalltxt {
    margin: 0 auto;
    max-width: 32rem;
    font-size: 18px;
    color: #bfbfbf;
    margin-bottom: 8rem;
  }
  .cardsCtr {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: max-content;
  }
  .line {
    position: absolute;
    top: 50%;
    border-bottom: 8px solid #2acfcf;
    width: 100%;
  }
  /* media queries */

  @media (max-width: 750px) {
    .vw_2 {
      padding: 0 2rem;
    }
  }
  @media (max-width: 450px) {
    .bigtxt {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 950px) {
    .vw_2 {
      box-shadow: 0px 6rem 0px 1px rgba(255, 255, 255, 1) inset;
      -webkit-box-shadow: 0px 6rem 0px 1px rgba(255, 255, 255, 1) inset;
      -moz-box-shadow: 0px 6rem 0px 1px rgba(255, 255, 255, 1) inset;
    }
  }
  @media (max-width: 1100px) {
    .vw_2 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .cardsCtr {
      flex-direction: column;
      width: max-content;
      height: 58rem;
      margin-bottom: 4rem;
    }
    .line {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      border-right: 8px solid #2acfcf;
      border-bottom: none;
      width: 0;
      height: 100%;
    }
  }
`;
