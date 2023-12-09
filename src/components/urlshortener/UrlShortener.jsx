import React, { useState } from 'react';
import Button from '../common/Button';

const UrlShortener = () => {
  const [linkToShorten, setLinkToShorten] = useState('');

  const handleLinkInputChange = (e) => {
    setLinkToShorten(e.target.value);
  };

  const handleShortenLink = (e) => {
    e.preventDefault();
    console.log('Shortening link:', linkToShorten);
    
  };

  return (
    <div className="bg-darkViolet p-6 rounded-md mx-10 z-20">
      <form onSubmit={handleShortenLink} className="mt-6 mb-6 md:flex md:gap-5 items-center justify-center">
        <input
          type="text"
          id="linkToShorten"
          placeholder="Shorten a link here ..."
          className=" p-2 mb-4 border border-gray-300 rounded-md bg-white flex-1 w-full md:w-3/5 md:mb-0"
          name="linkToShorten"
          value={linkToShorten}
          onChange={handleLinkInputChange}
          required
        />

        <Button
          label="Shorten It"
          onClick={handleShortenLink}
          className="bg-cyan text-white w-full rounded-md md:w-2/12"
        />
      </form>
    </div>
  );
};

export default UrlShortener;
