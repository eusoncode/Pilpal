import React, { useState } from 'react';

export default function SupplementCard({
  id,
  name,
  time,
  intakequantity,
  stockquantity,
  image,
  type,
  hideCard,
  skipCard,
  handleRefillAlert
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTake = () => {
    hideCard(id, stockquantity, intakequantity);
  };

  const handleSkip = () => {
    skipCard(id);
  };

  const handleRefillButton = () => {
    handleRefillAlert(id);
  }
  
  const imageUrl = image.src;
  const cardStyles = type === 'restock' ? 'restock-card' : 'intake-card';

  return (
    <div className="notification" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`notification-card ${cardStyles}`}>
        {type === 'intake' && (
          <>
            <div className="skip-btn" onClick={handleSkip}>skip</div>
            <img src={imageUrl} alt="pills" />
            <div className="details">
              <div className="details--message">Time to Take Your Pill 💊</div>
              <div className="details--supplement-name">{name}</div>
              <div className="details--reminder">
                <span className="time">{time}</span>, <span className="quantity">{intakequantity} pills</span>
              </div>
            </div>
          </>
        )}
        {type === 'restock' && (
          <>
            <img src={imageUrl} alt="pills" />
            <div className="details">
              <div className="details--message">Running Low! Time to Restock 🛍</div>
              <div className="details--supplement-name">{name}</div>
              <div className="details--quantity-left">{stockquantity} left</div>
            </div>
          </>
        )}
      </div>
      {type === 'intake' && (
        <div className={`notification-card-btn intake-card-btn ${isHovered ? 'active' : ''}`}>
          <span className="btn-cta" onClick={handleTake}>take</span>
        </div>
      )}
      {type === 'restock' && (
        <div className={`notification-card-btn restock-card-btn ${isHovered ? 'active' : ''}`}>
          <span className="btn-cta-restock" onClick={handleRefillButton}>refill</span>
        </div>
      )}
    </div>
  );
}
