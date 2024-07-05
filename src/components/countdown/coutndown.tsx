"use client";
import React, { useState, useEffect } from "react";
import "./countdown.css";

type CountdownProps = {
  date: Date;
  onFinish: () => void;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (date: Date): TimeLeft => {
  const currentTime = new Date().getTime();
  const distance = date.getTime() - currentTime;

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
};

const formatLabel = (
  value: number,
  labels: [string, string, string],
): string => {
  if (value === 1) return labels[0];
  if (value >= 2 && value <= 4) return labels[1];
  return labels[2];
};
const checkIfCountdownFinished = (targetDate: Date): boolean => {
  const currentDate = new Date();
  return currentDate >= targetDate;
}

const Countdown: React.FC<CountdownProps> = ({ date, onFinish }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(date));
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(date);
      setTimeLeft(newTimeLeft);

      if (checkIfCountdownFinished(date)) {
          setIsFinished(true);
          onFinish();
          clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [date, onFinish]);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <h2 className="countdown-value">{timeLeft.days}</h2>
        <p className="countdown-label">
          {formatLabel(timeLeft.days, ["Dzień", "Dni", "Dni"])}
        </p>
      </div>
      <div className="countdown-item">
        <h2 className="countdown-value">{timeLeft.hours}</h2>
        <p className="countdown-label">
          {formatLabel(timeLeft.hours, ["Godzina", "Godziny", "Godzin"])}
        </p>
      </div>
      <div className="countdown-item">
        <h2 className="countdown-value">{timeLeft.minutes}</h2>
        <p className="countdown-label">
          {formatLabel(timeLeft.minutes, ["Minuta", "Minuty", "Minut"])}
        </p>
      </div>
      <div className="countdown-item">
        <h2 className="countdown-value">{timeLeft.seconds}</h2>
        <p className="countdown-label">
          {formatLabel(timeLeft.seconds, ["Sekunda", "Sekundy", "Sekund"])}
        </p>
      </div>
    </div>
  );
};

export default Countdown;
