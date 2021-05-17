import React, { useState } from "react";
import "./AllBootcamps.scss";

import { bootcampData } from "../../utils/bootcampdata";
import CardComponent from "../../Components/CardComponent/CardComponent";

const AllBootcamps = () => {
  const [allBootcamps, setAllBootcamps] = useState(bootcampData);

  return (
    <div className="page-container">
      <h2 className="page-title">All Bootcamps</h2>
      <div className="bootcamp-list">
        <CardComponent data={allBootcamps} />
      </div>
    </div>
  );
};

export default AllBootcamps;
