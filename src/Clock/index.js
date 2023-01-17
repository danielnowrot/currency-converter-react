import { useState, useEffect } from 'react';
import "./style.css";

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    };

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <span className="clock">
            Dzisiaj jest
            {" "}
            {date.toLocaleDateString(undefined, { month: "long", weekday: "long", day: "numeric" })}
            {", "}
            {date.toLocaleTimeString()}
        </span>
    );
}
