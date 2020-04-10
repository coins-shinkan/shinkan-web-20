import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Media from "../const/Media";
import village from "../imgs/murakami.jpg";
import soy from "../imgs/kai.png";
import shimi from "../imgs/shimi.png";
import miss from "../imgs/miss.jpg";

const Cards = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
  .card-img {
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: 100%;
  }
  .card-content {
    padding: 20px;
  }
  .card-title {
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
  }
  .card-text {
    text-align: center;
    color: #777;
    font-size: 14px;
    line-height: 1.5;
  }
  .card-link {
    text-align: center;
    border-top: 1px solid #eee;
    padding: 20px;
  }
  .card-link a {
    text-decoration: none;
    color: #0bd;
    margin: 0 10px;
  }
  .card-link a:hover {
    color: #0090aa;
  }
`;

const Page = styled.div`
  height: 100%;
  width: 70rem;
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    row-gap: 1em;
    ${Media.MOBILE} {
      grid-template-columns: 1fr;
    }
  }
  h1 {
    text-align: center;
  }
  h4 {
    text-align: center;
  }
  ${Media.MOBILE} {
    width: 100%;
  }
  :last-child {
    margin-bottom: 10px;
  }
`;

export default () => (
  <>
    <Helmet>
      <title>私たちが作りました</title>
    </Helmet>
    <Layout>
      <Page>
        <h1>生産者表示</h1>
        <h4>ここに載っている方々以外にもたくさんのお力添えをいただきました</h4>
        <div className="cards">
          <Cards>
            <div>
              <div>
                <img className="card-img" src={village} alt=""></img>
              </div>
              <div className="card-content">
                <h1 className="card-title">むらかみ</h1>
                <p className="card-text">
                  新歓委員長です。新入生を歓迎したかった。
                </p>
              </div>
              <div className="card-link">
                <a href="https://twitter.com/ITF_village">twitter</a>
              </div>
            </div>
          </Cards>
          <Cards>
            <div>
              <div>
                <img className="card-img" src={shimi} alt=""></img>
              </div>
              <div className="card-content">
                <h1 className="card-title">しみちゃん</h1>
                <p className="card-text">よしなに</p>
              </div>
              <div className="card-link">
                <a href="https://twitter.com/sh1mc">twitter</a>
              </div>
            </div>
          </Cards>
          <Cards>
            <div>
              <div>
                <img className="card-img" src={soy} alt=""></img>
              </div>
              <div className="card-content">
                <h1 className="card-title">そやま</h1>
                <p className="card-text">
                  このWebをつくりました。パンフレットには載っていませんが新歓委員です。よろしくお願いします。
                </p>
              </div>
              <div className="card-link">
                <a href="https://twitter.com/0ilpanic">twitter</a>
              </div>
            </div>
          </Cards>
          <Cards>
            <div>
              <div>
                <img className="card-img" src={miss} alt=""></img>
              </div>
              <div className="card-content">
                <h1 className="card-title">あおき</h1>
                <p className="card-text">
                  アルバイト頑張りすぎて落単しないようにしようね！
                </p>
              </div>
              <div className="card-link">
                <a href="https://twitter.com/ITF_menhera">twitter</a>
              </div>
            </div>
          </Cards>
        </div>
      </Page>
    </Layout>
  </>
);
