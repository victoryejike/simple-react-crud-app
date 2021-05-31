import React, { useEffect, useState } from "react";
import "./SingleBootcamp.scss";

const SingleBootcamp = ({ data, match }) => {
  const [bootcamp, setBootcamp] = useState([]);

  const getSingleBootcamp = () => {
    const getBootcamp = data.filter(
      (singlebootcamp) => singlebootcamp.bootcamp_id == match.params.id
    );
    setBootcamp(getBootcamp);
  };

  useEffect(() => {
    getSingleBootcamp();
  });

  return (
    <>
      {bootcamp.map((onebootcamp) => (
        <p>{onebootcamp.bootcamp_name}</p>
      ))}
    </>
  );
};

export default SingleBootcamp;
