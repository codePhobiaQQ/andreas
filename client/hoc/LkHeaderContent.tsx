import React, { useState } from "react";
import PersonData from "../components/PersonData";
import ICategory from "../models/ICategory";

interface ILkHeaderContent {
  categories: ICategory[];
}

const LkHeaderContent = ({ categories }: ILkHeaderContent) => {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <div className="personalData">
      <ul className="filters">
        {categories?.map((category, index) => (
          <li
            className={activeFilter == index ? "active" : ""}
            onClick={() => setActiveFilter(index)}
            key={index}
          >
            {category.name}
          </li>
        ))}
      </ul>
      <PersonData />
    </div>
  );
};

export default LkHeaderContent;
