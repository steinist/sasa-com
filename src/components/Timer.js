import React, { useState, useEffect } from "react";

const Timer = () => {
  const [countdownDate, setCountdownDate] = useState(
    // new Date("01/29/2021").getTime()
    new Date().getTime() + 5 * 24 * 60 * 60 * 1000
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = setInterval(() => setNewTime(), 1000);
    return () => clearInterval(tick);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      let distanceToDate = countdownDate - currentTime;

      //   if (distanceToDate <= 0) {
      //     console.log(countdownDate);
      //     setCountdownDate(countdownDate + 5 * 24 * 60 * 60 * 1000);
      //     distanceToDate = countdownDate - currentTime;
      //     console.log("hello");
      //   }

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      if (numbersToAddZeroTo.includes(days)) {
        days = `0${days}`;
      } else if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <div>
      <div className="countdown-wrapper">
        <div className="time-section">
          <div className="time">{state.days || "00"}</div>
          <small className="time-text">DAYS</small>
        </div>

        <div className="time-section">
          <div className="time">{state.hours || "00"}</div>
          <small className="time-text">HRS</small>
        </div>

        <div className="time-section">
          <div className="time">{state.minutes || "00"}</div>
          <small className="time-text">MINS</small>
        </div>

        <div className="time-section">
          <div className="time">{state.seconds || "00"}</div>
          <small className="time-text">SECS</small>
        </div>
      </div>
    </div>
  );
};

export default Timer;
