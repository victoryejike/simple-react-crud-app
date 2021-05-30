import React from "react";
import "./CardComponent.scss";

import { Link, useRouteMatch } from "react-router-dom";

const CardComponent = ({ data }) => {
  let { url } = useRouteMatch();

  return (
    <>
      {data.map((data, i) => (
        <div key={i} className="card-container">
          <div className="card-header">
            <div className="card-avatar-container">
              <img src={data.bootcamp_avatar} alt="bootcamp-avatar" />
            </div>
            <div className="card-name">
              <h4>{data.bootcamp_name}</h4>
            </div>
          </div>
          <div className="card-description">
            <h4>Overview</h4>
            <div>{data.bootcamp_overview}</div>
          </div>
          <div className="card-footer">
            <div className="card-stats">
              <p className="card-stat-name">Trained</p>
              <div className="card-stat-value">
                <span></span>
                <p>{data.bootcamp_trainees}</p>
              </div>
            </div>
            <div className="card-rating">
              <p>Avg. Rating</p>
              <div className="card-rating-value">
                <span></span>
                <p>{data.bootcamp_rating}</p>
              </div>
            </div>
          </div>
          <div className="card-btn">
            <button>
              <Link to={`singlebootcamps/${data.bootcamp_id}`}>
                View Bootcamp
              </Link>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardComponent;
