import React, { useState } from 'react';

interface Props {}

const FlipCard: React.FC<Props> = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={
          isHovered
            ? require('../images/noice.PNG')
            : require('../images/federalagent.PNG')
        }
        alt="Card"
      />
    </div>
  );
};

export default FlipCard;
