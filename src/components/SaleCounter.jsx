import React, { useState, useEffect } from "react";
import Redbox from "./Redbox";

export default function SaleCounter() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const endDate = new Date("29 Nov 2024 12:00 PM");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const diff = (endDate - now) / 1000; // Difference in seconds

      if (diff <= 0) {
        clearInterval(intervalId); // Stop the countdown if the time is up
      } else {
        setTime({
          days: Math.floor(diff / 3600 / 24),
          hours: Math.floor((diff / 3600) % 24),
          minutes: Math.floor((diff / 60) % 60),
          seconds: Math.floor(diff % 60),
        });
      }
    }, 1000);

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="mt-24 ml-[135px]">
      <Redbox text="Today 's" />

      <div className="flex mt-5 gap-20 items-center">
        <div className="font-semibold text-4xl">Flash Sales</div>
        <div className="flex gap-2">
          <div className="flex flex-col items-center">
            <label htmlFor="Days" className="text-sm">
              Days
            </label>
            <input
              type="text"
              value={time.days}
              readOnly
              className="w-16 text-center focus:outline-none cursor-default text-4xl"
            />
          </div>
          <span className="text-primary text-4xl pt-4">:</span>
          <div className="flex flex-col items-center">
            <label htmlFor="Hours" className="text-sm">
              Hours
            </label>
            <input
              type="text"
              value={time.hours}
              readOnly
              className="w-16 text-center focus:outline-none cursor-default text-4xl"
            />
          </div>
          <span className="text-primary text-4xl pt-4">:</span>

          <div className="flex flex-col items-center">
            <label htmlFor="Min" className="text-sm">
              Min
            </label>
            <input
              type="text"
              value={time.minutes}
              readOnly
              className="w-16 text-center focus:outline-none cursor-default text-4xl"
            />
          </div>
          <span className="text-primary text-4xl pt-4">:</span>

          <div className="flex flex-col items-center">
            <label htmlFor="Sec" className="text-sm">
              Sec
            </label>
            <input
              type="text"
              value={time.seconds}
              readOnly
              className="w-16 text-center focus:outline-none cursor-default text-4xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
