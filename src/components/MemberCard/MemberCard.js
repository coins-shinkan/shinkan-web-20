import React from "react";
import styled from "styled-components";

const MemberCard = styled.div`
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

export default ({ img, name, description, link }) => (
  <MemberCard>
    <div>
      <div>
        <img className="card-img" src={img} alt="" />
      </div>
      <div className="card-content">
        <h1 className="card-title">{name}</h1>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-link">
        <a href={link}>twitter</a>
      </div>
    </div>
  </MemberCard>
);
