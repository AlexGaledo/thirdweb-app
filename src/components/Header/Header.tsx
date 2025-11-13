import React from 'react';

const Header: React.FC<{title?: string}> = ({ title }) => {
  return (
    <header className="w-full py-4 px-6 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold">{title ?? 'Sinag'}</h2>
      </div>
    </header>
  );
};

export default Header;
