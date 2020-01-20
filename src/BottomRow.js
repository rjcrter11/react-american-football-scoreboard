import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  let [down, setDown] = useState(1);
  let [toGo, setToGo] = useState(10);
  let [ballOn, setBallOn] = useState(50);
  let [quarter, setQuarter] = useState(1);
  const changeDown = () => setDown(down < 4 ? down + 1 : 1);
  const yardsToGo = () => setToGo(toGo > 0 ? toGo - 1 : 10);
  const ballSpot = () => setBallOn(ballOn > 0 ? ballOn - 10 : 50);
  const theQuarter = () => setQuarter(quarter < 4 ? quarter + 1 : 1);
  return (
    <div>
      <BottomBoard
        downNumber={down}
        yardsToGo={toGo}
        ballOn={ballOn}
        quarter={quarter}
      />

      <DownChanger
        onDownNumber={changeDown}
        yardNumber={yardsToGo}
        yardLine={ballSpot}
        quarterChange={theQuarter}
      />
    </div>
  );
};

const DownChanger = (props) => {
  const { onDownNumber } = props;

  return (
    <div className="buttonsRow">
      <button className="down__button bottom__buttons" onClick={onDownNumber}>
        Make a Play
      </button>
      <Yards yardNumber={props.yardNumber} />
      <SpotBall yardLine={props.yardLine} />
      <NextQuarter quarterChange={props.quarterChange} />
    </div>
  );
};

const Yards = (props) => {
  const { yardNumber } = props;
  return (
    <button className="togo__button bottom__buttons" onClick={yardNumber}>
      Yards to go
    </button>
  );
};

const SpotBall = (props) => {
  const { yardLine } = props;
  return (
    <button className="buttons__right" onClick={yardLine}>
      Ball On
    </button>
  );
};

const NextQuarter = (props) => {
  const { quarterChange } = props;
  return (
    <button className="last__button" onClick={quarterChange}>
      Next Quarter
    </button>
  );
};

const BottomBoard = (props) => {
  const { downNumber, yardsToGo, ballOn, quarter } = props;
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downNumber}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{yardsToGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value"> {quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
