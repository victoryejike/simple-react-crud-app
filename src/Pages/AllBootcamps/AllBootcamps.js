import React, { useState } from "react";
import "./AllBootcamps.scss";

import { bootcampData } from "../../utils/bootcampdata";
import CardComponent from "../../Components/CardComponent/CardComponent";
import SingleBootcamp from "../SingleBootcamp/SingleBootcamp";

import { Switch, Route, useRouteMatch } from "react-router-dom";

const AllBootcamps = () => {
  const [allBootcamps, setAllBootcamps] = useState(bootcampData);
  let { path } = useRouteMatch();

  return (
    <div className="page-container">
      <Switch>
        <Route exact path={path}>
          <h2 className="page-title">All Bootcamps</h2>
          <div className="bootcamp-list">
            <CardComponent data={allBootcamps} />
          </div>
        </Route>
        <Route exact path={`${path}/:id`}>
          <SingleBootcamp />
        </Route>
      </Switch>
    </div>
  );
};

export default AllBootcamps;
