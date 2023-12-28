import React, { useState, useEffect } from "react";

const fetchRegionTime = async (region) => {
  // Fetching timezone from the api
  const response = await fetch(
    `https://worldtimeapi.org/api/timezone/${region}`
  );
  const data = await response.json();
  const datetimeString = data.datetime;
  const dateTimeObject = new Date(datetimeString);
  const formattedTime = dateTimeObject.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: data.timezone,
  });
  console.log(formattedTime);
  return formattedTime;
};

const convertTimeToSeconds = (regionTime) => {
  const date = new Date("January 1, 1970 " + regionTime);
  return date.getTime();
};

function Clock({ region }) {
  const [currentTime, setCurrentTime] = useState(
    convertTimeToSeconds("00:00:00 AM")
  );
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const updateCurrentTime = async () => {
      const timeNow = await fetchRegionTime(region);
      setCurrentTime(convertTimeToSeconds(timeNow));
    };
    updateCurrentTime();
  }, [region]);

  useEffect(() => {
    let intervalId;
    const startClock = () => {
      intervalId = setInterval(() => {
        setCurrentTime((prevCurrentTime) => prevCurrentTime + 1000);
      }, 1000);
    };
    const pauseClock = () => {
      clearInterval(intervalId);
    };
    if (!paused) {
      startClock();
    } else {
      pauseClock();
    }
    return () => clearInterval(intervalId);
  }, [paused]);

  const handleStartPause = () => {
    setPaused((prevPaused) => !prevPaused);
  };

  return (
    <div className="clock">
      {/* Display current time in a visually appealing format */}
      {/* {currentTime} */}
      <p className="display">
        {new Date(currentTime).toLocaleTimeString([], { hour12: true })}
      </p>
      <button className="backbtn" onClick={handleStartPause}>
        {paused ? "Start" : "Pause"}
      </button>
    </div>
  );
}

export default Clock;

// {"abbreviation":"IST","client_ip":"115.98.44.158","datetime":"2023-12-27T14:06:01.762639+05:30","day_of_week":3,"day_of_year":361,"dst":false,"dst_from":null,"dst_offset":0,"dst_until":null,"raw_offset":19800,"timezone":"Asia/Kolkata","unixtime":1703666161,"utc_datetime":"2023-12-27T08:36:01.762639+00:00","utc_offset":"+05:30","week_number":52}
