import React, { useState, useEffect } from 'react';

export default function PomodoroTimer(){
    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
  
    useEffect(() => {
      let interval = null;
  
      if (isActive && time > 0) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
      } else if (isActive && time === 0) {
        clearInterval(interval);
        setIsActive(false);
        setIsBreak(!isBreak);
        setTime(isBreak ? 25 * 60 : 5 * 60); // Altere os tempos de pausa e trabalho conforme necessário
      }
  
      return () => {
        clearInterval(interval);
      };
    }, [isActive, time, isBreak]);
  
    const handleStart = () => {
      setIsActive(true);
    };
  
    const handleStop = () => {
      setIsActive(false);
    };
  
    const formatTime = (timeInSeconds) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
  
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
  
    return (
      <div>
        <button onClick={handleStart} disabled={isActive}>
          Iniciar
        </button>
        <button onClick={handleStop} disabled={!isActive}>
          Parar
        </button>
        <div className="popup">
          <div className="popup-content">
            <h3>{isBreak ? 'Tempo de Pausa' : 'Tempo de Trabalho'}</h3>
            <p>{formatTime(time)}</p>
          </div>
        </div>
      </div>
    );
  };
  