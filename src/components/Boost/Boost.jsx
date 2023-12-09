import React from 'react';
import Button from '../common/Button';  

const Boost = () => {
  return (
    <section className="flex flex-col items-center bg-darkViolet py-8">
      <h3 className="text-2xl font-bold mb-3 text-white">Boost your links today</h3>
      <Button label="Get Started" onClick={() => console.log("Get Started clicked")} className="mt-4 bg-cyan" />
    </section>
  );
};

export default Boost;
