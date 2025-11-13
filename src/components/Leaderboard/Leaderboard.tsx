import React from 'react';

const Leaderboard: React.FC = () => {
  return (
    <div className="p-4 bg-neutral-900 rounded">
      <h3 className="font-semibold">Leaderboard</h3>
      <p className="text-sm text-neutral-400">Top users by tokens and kWh saved</p>
    </div>
  );
};

export default Leaderboard;
