// Stats.js
import React from "react";
import StatsCard from "./StatsCard";


const Stats = () => {
  return (
    <section className="stats bg-gray-100  ">
      <div className="container p-6 md:p-10">
        <div className="stats-text p-5 m-5 md:p-10">
          <h2 className="text-center text-3xl font-bold mb-3 ">Advanced Statistics</h2>
          <p className="text-center text-l italic text-gray-400 md:pl-30 md:pr-30">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="stats-cards grid md:grid-cols-3 gap-8 ">
          <StatsCard 
            imgSrc='src/assets/images/icon-brand-recognition.svg'
            imgAlt="brand recognition icon"
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          />

          <StatsCard
            imgSrc='src/assets/images/icon-detailed-records.svg'
            imgAlt="detailed records"
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />

          <StatsCard
            imgSrc='src/assets/images/icon-fully-customizable.svg'
            imgAlt="fully customizable icon"
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
