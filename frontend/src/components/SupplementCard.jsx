import React, { useState } from 'react';

export default function SupplementCard({
  name,
  time,
  intakeQuantity,
  stockQuantity,
  image,
  type,
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTake = () => {

  };

  const handleSkip = () => {

  };

  const handleOrder = () => {

  };

  // Importing images
  const imageUrl = image.src;
  const cardStyles = type === 'restock' ? 'restock-card' : 'intake-card';

  return (
    <>
      <div
        className="notification"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`notification-card ${cardStyles}`}>
          <div className="skip-btn" onClick={handleSkip}>skip</div>

          <img src={imageUrl} alt="pills" />
          <div className="details">
            {type === 'intake' && (
              <>
                <div className="details--message">
                  Time to Take Your Pill 💊
                </div>
                <div className="details--supplement-name">{name}</div>
                <div className="details--reminder">
                  <span className="time">{time}</span>
                  <span>, </span>
                  <span className="quantity">{intakeQuantity} pills</span>
                </div>
              </>
            )}
            {type === 'restock' && (
              <>
                <div className="details--message">
                  Running Low! Time to Restock 🛍
                </div>
                <div className="details--supplement-name">{name}</div>
                <div className="details--quantity-left">
                  {stockQuantity} left
                </div>
              </>
            )}
          </div>
        </div>
        {type === 'intake' && (
          <div
            className={`notification-card-btn intake-card-btn ${
              isHovered ? 'active' : ''
            }`}
          >
            <span className="btn-cta" onClick={handleTake}>take</span>
          </div>
        )}
        {type === 'restock' && (
          <div
            className={`notification-card-btn restock-card-btn ${
              isHovered ? 'active' : ''
            }`}
          >
            <span className="btn-cta-restock" onClick={handleOrder}>order</span>
          </div>
        )}
      </div>
    </>
  );
}
