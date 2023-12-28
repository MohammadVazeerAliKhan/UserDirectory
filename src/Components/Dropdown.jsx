import React, { useEffect, useState } from "react";

const Dropdown = ({ region, setRegion }) => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch("https://worldtimeapi.org/api/timezone");
        const data = await response.json();
        // console.log(data);
        setRegions(data);
      } catch (err) {
        console.error("Error while fetching regions", err);
      }
    };

    fetchRegions();
  }, []);

  return (
    <div>
      {}
      <select
        id="dropdown"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        {regions?.map((regn) => (
          <option key={regn} value={regn}>
            {regn}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
