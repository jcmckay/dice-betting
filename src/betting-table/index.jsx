import React from "react";

import "./styles.css";

export default function BettingTable() {
  return (
    <div className="betting-table">
      <label>
        <strong>Bankroll:</strong> $100
      </label>

      <div className="row">
        <div>5</div>
        <div>6</div>
      </div>
      <div className="row">
        <div>3</div>
        <div>4</div>
      </div>
      <div className="row">
        <div>1</div>
        <div>2</div>
      </div>
      <div className="row">
        <div>Odd</div>
        <div>Even</div>
      </div>

      <button>Roll the Dice</button>
    </div>
  );
}
