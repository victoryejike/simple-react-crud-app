import React from "react";
import "./CardComponent.scss";

const CardComponent = () => {
  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <div className="card-avatar-container">
            <img src="" alt="bootcamp-avatar" />
          </div>
          <div className="card-name">
            <h4>Bootcamp Name</h4>
          </div>
        </div>
        <div className="card-description">Overview</div>
        <div className="card-footer">
          <div className="card-stats">
            <p className="card-stat-name">Trained</p>
            <div className="card-stat-value">
              <span></span>
              <p>1,230</p>
            </div>
          </div>
          <div className="card-rating">
            <p>Avg. Rating</p>
            <div className="card-rating-value">
              <span></span>
              <p>4.5</p>
            </div>
          </div>
        </div>
        <div className="card-btn">
          <button>View Bootcamp</button>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
