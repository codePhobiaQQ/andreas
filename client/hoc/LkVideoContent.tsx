import Link from "next/link";
import React, { useState } from "react";
import PersonData from "../components/PersonData";

const LkVideoContent = () => {
  return (
    <div className="personalData">
      <Link href="/home">
        <a className="d-flex align-items-center videoBack">
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.70162 0.753296L1.70166 3.75334L4.70162 6.7533"
              stroke="black"
              strokeLinecap="round"
            />
          </svg>
          <span>Go Back</span>
        </a>
      </Link>
      <PersonData />
    </div>
  );
};

export default LkVideoContent;
