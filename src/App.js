//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";

import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  let [homeScore, setHomeScore] = useState(0);
  let [awayScore, setAwayScore] = useState(0);

  const homeTouchdown = () => setHomeScore(homeScore + 7);
  const homeFieldGoal = () => setHomeScore(homeScore + 3);
  const awayTouchdown = () => setAwayScore(awayScore + 7);
  const awayFieldGoal = () => setAwayScore(awayScore + 3);

  return (
    <div className="container">
      <ScoreBoard
        homeLabel="Lions"
        homeScore={homeScore}
        awayLabel="Tigers"
        awayScore={awayScore}
        timer={<TimeClock />}
      />

      <section className="buttons">
        <HomeScore
          onScoreChange={homeTouchdown}
          label="Home Touchdown"
          className=" buttons homeButtons homeButtons__touchdown"
        />
        <HomeScore
          onScoreChange={homeFieldGoal}
          label="Home Field Goal"
          className="buttons homeButtons homeButtons__fieldGoal"
        />

        <AwayScore
          onScoreChange2={awayTouchdown}
          label="Away Touchdown"
          className="buttons awayButtons awayButtons__touchdown"
        />
        <AwayScore
          onScoreChange2={awayFieldGoal}
          label="Away Field Goal"
          className="buttons awayButtons awayButtons__fieldGoal"
        />
      </section>
    </div>
  );
}

const HomeScore = (props) => {
  const { onScoreChange, label } = props;
  return (
    <div className="homeButtons">
      <button onClick={onScoreChange}>{label}</button>
    </div>
  );
};

const AwayScore = (props) => {
  const { onScoreChange2, label } = props;
  return (
    <div className="awayButtons">
      <button onClick={onScoreChange2}>{label}</button>
    </div>
  );
};

const ScoreBoard = (props) => {
  const { homeLabel, homeScore, awayLabel, awayScore } = props;
  return (
    <section className="scoreboard">
      <div className="topRow">
        <div className="home">
          <h2 className="home__name">{homeLabel}</h2>
          <div className="home__score">{homeScore}</div>
        </div>
        <div className="timer">{<TimeClock />}</div>
        <div className="away">
          <h2 className="away__name">{awayLabel}</h2>
          <div className="away__score">{awayScore}</div>
        </div>
      </div>
      <BottomRow />
    </section>
  );
};

const TimeClock = () => {
  let [seconds, setSeconds] = useState(10);
  let [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }
  function reset() {
    setSeconds(10);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => (seconds > 0 ? seconds - 1 : 0));
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">{seconds}</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
