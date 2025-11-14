
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center my-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
          Microblog Simple
        </span>
      </h1>
      <p className="mt-2 text-slate-500">Your space to share thoughts.</p>
    </header>
  );
};
