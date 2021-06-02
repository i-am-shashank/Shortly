import React, { useState, Suspense } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../Button";
import designSvg from "../../assets/bg-shorten-desktop.svg";

export default function InpCard({ setlinksgenerated, linksgenerated }) {
  const [errmsg, seterrmsg] = useState("");
  const [inputval, setinputval] = useState("");
  const [loading, setloading] = useState(false);
  const ENDPOINT = "https://api.shrtco.de/v2/shorten";
  async function fetchData() {
    try {
      setloading(true);
      const res = await axios.get(`${ENDPOINT}?url=${inputval}`);
      setlinksgenerated([...linksgenerated, res.data.result]);
      setloading(false);
    } catch (err) {
      seterrmsg("please enter a valid url");
    }
  }
  const onChangeHandler = (e) => {
    setinputval(e.target.value);
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    !inputval && seterrmsg("please add a link");
    errmsg && inputval && seterrmsg("");
    fetchData();
  };
  return (
    <Wrapper>
      {/* {loading && <div className="loader">loading</div>} */}
      <form className="form">
        <div className="inpsec">
          <input
            required
            onChange={onChangeHandler}
            placeholder="Shorten a link here..."
          ></input>
          <p className="errmsg">{errmsg}</p>
        </div>
        <Button
          type="submit"
          primary
          big
          value={inputval}
          onClick={onClickHandler}
        >
          Shorten It!
        </Button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #3b3054;
  border-radius: 0.6rem;
  margin: 0 auto;
  width: 100%;
  height: 8rem !important;
  max-height: max-content;
  overflow: hidden;
  object-fit: cover;
  background-image: url(${designSvg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 48px #0000000b;
  .inpsec {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
  input {
    width: 90%;
    font-size: 18px;
    padding: 1.2rem;
    border-radius: 0.4rem;
    border: none;
    outline: none;
    box-sizing: border-box;
  }
  .form {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: max-content;
    width: 100%;
  }
  .errmsg {
    margin: 0;
    text-align: left;
    color: #e6686b;
  }
  @media (max-width: 750px) {
    .vw_2 {
      padding: 0 2rem;
    }
  }
  @media (max-width: 950px) {
    height: 12rem !important;
    display: flex;
    justify-content: center;
    align-items: center;
    .form {
      flex-direction: column;
      width: 90%;
    }
    input,
    .inpsec,
    Button {
      width: 100% !important;
    }
    Button {
      margin-top: 0.5rem;
    }
  }
`;
