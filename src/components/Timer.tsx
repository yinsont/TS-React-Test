import React, { useState, useEffect } from 'react';

interface Props {}

const Timer: React.FC<Props> = () => {
  const [milliseconds, setMilliseconds] = useState(0)
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const [pause, setPause] = useState(true);
  const [on, setOn] = useState(false)

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (!pause) {
      timerId = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 1);
      }, 1);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [pause]);

  const handleStart = () => {
    setPause(false);
    setOn(!on)
  };

  const handlePause = () => {
    setPause(true);
  };

  const handleResume = () => {
    setPause(false);
  };

  const handleReset = () => {
    setMilliseconds(0)
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setPause(true);
    setOn(!on)
  };

  useEffect(() => {
    if (milliseconds >= 1000) {
        setSeconds((prevSeconds) => prevSeconds + 1);
        setMilliseconds(0);
      }

    if (seconds >= 60) {
      setMinutes((prevMinutes) => prevMinutes + 1);
      setSeconds(0);
    }

    if (minutes >= 60) {
      setHours((prevHours) => prevHours + 1);
      setMinutes(0);
    }
  }, [milliseconds, seconds, minutes]);

  while (on === true){
    return (
        <div>
        {pause ? (
        <button onClick={handleResume}>Resume</button>
        ) : (
            <button onClick={handlePause}>Pause</button>
        )}
        <button onClick={handleReset}>Reset</button>
        <h3>
            {hours.toString().padStart(2, '0')}:
            {minutes.toString().padStart(2, '0')}:
            {seconds.toString().padStart(2, '0')}:
            {milliseconds.toString().padStart(3,'0')}
        </h3>
        </div>
    )
  }
  return (
    <div>
      <button onClick={handleStart}>Start</button>
      
      <h3>
        {hours.toString().padStart(2, '0')}:
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}:
        {milliseconds.toString().padStart(3,'0')}
      </h3>
    </div>
  );
};

export default Timer;
