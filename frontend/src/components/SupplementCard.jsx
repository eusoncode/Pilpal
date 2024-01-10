import React, { useState } from 'react';

export default function SupplementCard({
  name,
  manufacturer,
  time,
  dosageType,
  intakeQuantity,
  stockQuantity,
  image,
  type,
  isFutureDate,
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

  // Importing images
  const imageUrl = image.src;
  const cardStyles = type === 'restock' ? 'restock-card' : 'intake-card';

  // Determine if the buttons should be disabled
  const disabledClass = isFutureDate ? 'disabled' : '';

  return (
    <>
      <div
        className="notification"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`notification-card ${cardStyles}`}>
          <div className={`skip-btn ${disabledClass}`}>skip</div>

          <img src={imageUrl} alt="pills" />
          <div className="details">
            {type === 'intake' && (
              <>
                <div className="details--message">
                  Time to Take Your Pill 💊
                </div>
                <div className="details--supplement-name">
                  {name} ({manufacturer})
                </div>
                <div className="details--reminder">
                  <span className="time">{time}</span>
                  <span>, </span>
                  <span className="quantity">
                    {intakeQuantity} {dosageType}
                  </span>
                </div>
              </>
            )}
            {type === 'restock' && (
              <>
                <div className="details--message">
                  Running Low! Time to Restock 🛍
                </div>
                <div className="details--supplement-name">
                  {name} ({manufacturer})
                </div>
                <div className="details--quantity-left">
                  {stockQuantity} left
                </div>
              </>
            )}
          </div>
        </div>
        {type === 'intake' && (
          <div
            className={`notification-card-btn intake-card-btn ${disabledClass} ${
              isHovered ? 'active' : ''
            }`}
          >
            <span className="btn-cta">take</span>
          </div>
        )}
        {type === 'restock' && (
          <div
            className={`notification-card-btn restock-card-btn ${disabledClass} ${
              isHovered ? 'active' : ''
            }`}
          >
            <span className="btn-cta-restock">refill</span>
          </div>
        )}
      </div>
    </>
  );
}
