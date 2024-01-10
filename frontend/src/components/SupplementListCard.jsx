import { useNavigate } from 'react-router-dom';

export default function SupplementListCard({
  id,
  name,
  time,
  manufacturer,
  intakeFrequency,
  intakeQuantity,
  stockQuantity,
  image,
  effectiveness,
  reorderLevel,
  dosageType,
  startDate,
  endDate,
  price,
  purchasedFrom,
  additionalNotes,
  number, // For numbering each supplement
}) {
  // Importing images
  const imageUrl = image.src;
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/edit/${id}`); // Navigate to the edit page for this supplement
  };

  return (
    <>
      <div className="supplementListCard">
        <div className="card">
          <div className="number">{number}.</div>
          <div className="skip-btn" onClick={handleEditClick}>
            edit
          </div>
          <div className="details">
            <div className="details__supplement-name">
              <img src={imageUrl} alt="pills" />
              <span>
                {name} ({manufacturer})
              </span>
            </div>
            <div className="details__contents">
              <div className="details__contents--left">
                <div className="time">
                  {intakeQuantity} {dosageType}, {intakeFrequency} {time}
                </div>
                <div className="current-stock">
                  <span className="title">Current Stock: </span>
                  <span className="content">
                    {stockQuantity} {dosageType}
                  </span>
                </div>
                <div className="reorder-level">
                  <span className="title">Reorder Level: </span>
                  <span className="content">
                    Reorder at {reorderLevel} {dosageType}
                  </span>
                </div>
                <div className="duration">
                  <span className="title">Duration: </span>
                  <span className="content">
                    {startDate} - {endDate}
                  </span>
                </div>
              </div>
              <div className="details__contents--right">
                <div className="effectiveness">
                  <span className="title">Effectiveness: </span>
                  <span className="content">{effectiveness}</span>
                </div>
                <div className="price">
                  <span className="title">Price: </span>
                  <span className="content">${price}</span> from {purchasedFrom}
                </div>
              </div>
            </div>
            <div className="details__notes">
              {/* <hr></hr> */}
              <span className="title">Additional Notes: </span>
              <span className="content">{additionalNotes}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
