import React, { useEffect, useState } from "react";

const PostItem = ({ name, image, status, location, origin, species }) => {
  const [statusColor, setStatusColor] = useState("unknown");
  useEffect(() => {
    if (status === "Alive") {
      setStatusColor("alive");
    } else if (status === "Dead") {
      setStatusColor("dead");
    }
  }, [status]);
  return (
    <div className="cardContainer">
      <img src={image} alt="character" />
      <div className="infoContainer">
        <div>
          <h2 className="name">{name}</h2>
          <div className="secondPart">
            <div className={statusColor}></div> <p>{status}</p>-<p>{species}</p>
          </div>
        </div>
        <div>
          <p className="greyText">Last known location:</p>
          <p className="originAndLocationName">{origin.name}</p>
        </div>
        <div>
          <p className="greyText">First seen in:</p>
          <p className="originAndLocationName">{location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
