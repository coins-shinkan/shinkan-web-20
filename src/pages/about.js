import React from "react";
import "./card.css";
import gazo from "./murakami.jpg";

function App() {
  return (
    <div className="card">
      <div>
        <img className="card-img" src={gazo} alt=""></img>
      </div>
      <div className="card-content">
        <h1 className="card-title">村上 皓亮</h1>
        <p className="card-text">
          新歓委員長です。全部の行事にいる予定なので僕だけ覚えてればなんとかなります。写真はチワワに吠えられる僕です。
        </p>
      </div>
      <div className="card-link">
        <a href="https://twitter.com/ITF_village">twitter</a>
      </div>
    </div>
  );
}

export default App;
