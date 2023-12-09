import React from "react";

const StatsCard = ({ imgSrc, imgAlt, title, description }) => {
  return (
    <div className="card relative bg-white p-6">
      <span className="card-img absolute -top-6 right-1/2 rounded-full bg-darkViolet md:-top-6">
        <img src={imgSrc} alt={imgAlt} />
      </span>
      
      <h4 className="text-xl font-bold mt-6 mb-2 text-gray-400">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default StatsCard;
