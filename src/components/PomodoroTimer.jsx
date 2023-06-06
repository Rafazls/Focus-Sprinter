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
      <div className='absolute bg-green-500 rounded-xl w-60 h-32 flex items-center flex-col border-2 border-black' id="pomodoroDiv" onMouseDown={(e)=> {
        const pomodoro = document.getElementById('pomodoroDiv')
        document.onmousemove = (ev) => {
          if (ev.clientX + pomodoro.clientWidth < document.body.clientWidth && ev.clientY + pomodoro.clientHeight < document.body.clientHeight){
            console.log(ev.clientX + pomodoro.clientWidth, document.body.clientWidth)
            pomodoro.style.left = `${ev.clientX}px`
            pomodoro.style.top = `${ev.clientY}px`
          }
        }
      }}>
        <h1 className='text-white text-2xl'>Pomodoro</h1>
        <div className='mt-2'>
          <button onClick={handleStart} disabled={isActive} className='bg-green-300 rounded-full px-6 text-green-900 hover:bg-green-200 mr-2'>
            Iniciar
          </button>
          <button onClick={handleStop} disabled={!isActive} className='bg-green-300 rounded-full px-6 text-green-900 hover:bg-green-200 cursor-pointer'>
            Parar
          </button>
        </div>
        <div className="popup mt-3 flex items-center justify-center">
          <div className="popup-content flex flex-col items-center justify-center">
            <h3 className='text-sm'>{isBreak ? 'Tempo de Pausa' : 'Tempo de Trabalho'}</h3>
            <p className='font-bold text-base'>{formatTime(time)}</p>
          </div>
        </div>
      </div>
    );
  };
  