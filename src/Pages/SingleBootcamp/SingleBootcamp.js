import React, { useEffect, useState } from "react";
import "./SingleBootcamp.scss";

const SingleBootcamp = ({ data, match }) => {
  const [bootcamp, setBootcamp] = useState([]);
  const [inputValue, setInputvalue] = useState('')

  const getSingleBootcamp = () => {
    const getBootcamp = data.filter(
      (singlebootcamp) => singlebootcamp.bootcamp_id == match.params.id
    );
    setBootcamp(getBootcamp);
  };

  useEffect(() => {
    getSingleBootcamp();
  });

  const handleChange = (e) => {
    setInputvalue(e.target.value)
  }

  return (
    <>
      {bootcamp.map((onebootcamp) => (
        <div className="card-container">
          <div className="card-header">
            <div className="card-avatar-container">
              <img src={onebootcamp.bootcamp_avatar} alt="bootcamp-avatar" />
            </div>
            <div className="card-name">
              <input defaultValue={onebootcamp.bootcamp_name} type='text' onChange={handleChange} />
            </div>
          </div>
          <div className="card-description">
            <h4>Overview</h4>
            <textarea rows="10" cols="35" name="comment" onChange={handleChange}>{onebootcamp.bootcamp_overview}</textarea>
          </div>
          <div className="card-footer">
            <div className="card-stats">
              <p className="card-stat-name">Trained</p>
              <div className="card-stat-value">
                <span></span>
                <p>{onebootcamp.bootcamp_trainees}</p>
              </div>
            </div>
            <div className="card-rating">
              <p>Avg. Rating</p>
              <div className="card-rating-value">
                <span></span>
                <p>{onebootcamp.bootcamp_rating}</p>
              </div>
            </div>
          </div>
          <div className="card-btn">
            <button>
              Save
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleBootcamp;
