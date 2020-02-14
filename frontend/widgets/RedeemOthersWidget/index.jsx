import React from 'react';
import connect from './connector';

const RedeemOthersWidget = ({ redemptionOptions }) => {
  if (!redemptionOptions.length) {
    return null; 
  }
  
  return (
    <div>
      {redemptionOptions.map((option) => (
        <div></div>
      ))}
    </div>
  );
};

export default connect(RedeemOthersWidget);
