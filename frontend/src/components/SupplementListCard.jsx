export default function SupplementListCard({
  name,
  time,
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
  setEditClicked
}) {
  // Importing images
  const imageUrl = image.src;

  return (
    <>
      <div className="supplementListCard">
        <div className="card">
          <div className="skip-btn" onClick={setEditClicked}>edit</div>
          <div className="details">
            <div className="details__supplement-name">
              <img src={imageUrl} alt="pills" />
              <span>{name}</span>
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
              <hr></hr>
              <span className="title">Additional Notes: </span>
              <span className="content">{additionalNotes}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}