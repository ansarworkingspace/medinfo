'use client';

import { Outfit } from 'next/font/google';
import React from 'react';

// Initialize the font at the module scope
const outfit = Outfit({ subsets: ["latin"] });

const Header: React.FC = () => {
  return (
    <div className={`flex sticky p-10 top-0 justify-start w-full ${outfit.className}`}>
      <h1 className="text-3xl font-bold text-white">
        medinfo<span className="text-cyan-500">.</span>
      </h1>
    </div>
  );
};

export default Header;
