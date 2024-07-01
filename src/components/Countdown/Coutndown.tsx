"use client";
import React, { useState, useEffect } from 'react';
import './Countdown.css';

type CountdownProps = {
    date: Date;
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

const Countdown: React.FC<CountdownProps> = ({ date }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(date));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft(date));
        }, 1000);
        return () => clearInterval(intervalId);
    }, [date]);

    return (
        <div className="countdown">
            <div className="countdown-item">
                <h2 className="countdown-value">{timeLeft.days}</h2>
                <p className="countdown-label">Dni</p>
            </div>
            <div className="countdown-item">
                <h2 className="countdown-value">{timeLeft.hours}</h2>
                <p className="countdown-label">Godzin</p>
            </div>
            <div className="countdown-item">
                <h2 className="countdown-value">{timeLeft.minutes}</h2>
                <p className="countdown-label">Minut</p>
            </div>
            <div className="countdown-item">
                <h2 className="countdown-value">{timeLeft.seconds}</h2>
                <p className="countdown-label">Sekund</p>
            </div>
        </div>
    );
};

export default Countdown;
