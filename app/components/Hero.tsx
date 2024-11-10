import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center  justify-center"> {/* Set my-0 to eliminate vertical margin */}
      {/* Main heading */}
      <h1 className="text-6xl font-bold text-white mb-4">
      Find the Right Medicine, Fast and Easy
      </h1>
      {/* Description */}
      <p className="text-1/3 text-gray-400 mb-8 text-center"> {/* Added text-center to align text */}
      Effortlessly find the right medicine with accurate details and secure, fast search powered by medinfo AI. <br />
      Get the info you need in seconds!
      </p>



      
      {/* Call to action button */}
      <a 
        href="/tool"
        className="bg-cyan-500 text-white mt-10 px-6 py-3 rounded-md hover:bg-cyan-600 transition duration-300"
      >
        Go to Search
      </a>
    </div>
  );
};

export default Hero;
