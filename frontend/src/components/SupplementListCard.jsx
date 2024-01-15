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
  isActive,
  onToggleActive,
  onDelete,
}) {
  // Importing images
  const imageUrl = image.src;
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/edit/${id}`); // Navigate to the edit page for this supplement
  };

  // Conditional class names
  const cardClassName = `${isActive ? '' : 'deactivated'}`;
  const buttonClassName = `${isActive ? 'active' : ''}`;

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <>
      <div className="supplementListCard">
        <div className={`card ${cardClassName}`}>
          <div className="number">{number}.</div>
          <div className="edit-btn" onClick={handleEditClick}>
            edit
          </div>
          <div className="delete-btn" onClick={handleDeleteClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2.0"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
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
                  {props.intakequantity} {props.dosagetype}, {props.intakefrequency} {formatedTime}
                </div>
                <div className="current-stock">
                  <span className="title">Current Stock: </span>
                  <span className="content">
                    {props.stockquantity} {props.dosagetype}
                  </span>
                </div>
                <div className="refill-level">
                  <span className="title">Refill Level: </span>
                  <span className="content">
                    Refill at {props.refilllevel} {props.dosagetype}
                  </span>
                </div>
                <div className="duration">
                  <span className="title">Duration: </span>
                  <span className="content">
                    {formattedStartDate} - {formattedEndDate}
                  </span>
                </div>
              </div>
              <div className="details__contents--right">
                <div className="effectiveness">
                  <span className="title">Effectiveness: </span>
                  <span className="content">{props.effectiveness}</span>
                </div>
                <div className="price">
                  <span className="title">Price: </span>
                  <span className="content">${props.price}</span> from {props.purchasedfrom}
                </div>
                <div className="status">
                  <span className="title">Status: </span>
                  <strong className="content">{props.status}</strong>
                </div>
                {reason && <div className="reason">
                  <span className="title">Reason: </span>
                  <strong className="content">{props.status_reason}</strong>
                </div>}
              </div>
            </div>
            <div className="details__notes">
              <span className="title">Additional Notes: </span>
              <span className="content">{props.additionalnotes}</span>
            </div>
          </div>
        </div>
        <div className="activation-btn-container">
          <button
            className={`btn-secondary ${buttonClassName}`}
            onClick={() => onToggleActive(id)}
          >
            {isActive ? 'Deactivate' : 'Activate'}
          </button>
        </div>
      </div>
    </>
  );
}
