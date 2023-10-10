import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ThreeDots
        height={80}
        width={80}
        radius={9}
        color="#4fa94d"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loader;
