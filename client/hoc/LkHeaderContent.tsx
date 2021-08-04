import React, { useState } from "react";
import PersonData from "../components/PersonData";

const LkHeaderContent = () => {
  const [activeFilter, setActiveFilter] = useState(1);

  return (
    <div className="personalData">
      <ul className="filters">
        <li
          onClick={() => setActiveFilter(1)}
          className={activeFilter == 1 ? "active" : ""}
        >
          All videos
        </li>
        <li
          onClick={() => setActiveFilter(2)}
          className={activeFilter == 2 ? "active" : ""}
        >
          Suggested
        </li>
        <li
          onClick={() => setActiveFilter(3)}
          className={activeFilter == 3 ? "active" : ""}
        >
          Highlighed of the week
        </li>
        <li
          onClick={() => setActiveFilter(4)}
          className={activeFilter == 4 ? "active" : ""}
        >
          Special packages
        </li>
      </ul>
      <PersonData />
    </div>
  );
};

export default LkHeaderContent;
