import { reconvertReminderTime } from "../helper/reconvertReminderTime";

export default function SupplementListCard(/**{
  name,
  time,
  intakeFrequency,
  intakeQuantity,
  stockQuantity,
  image,
  effectiveness,
  refilLevel,
  dosageType,
  startDate,
  endDate,
  price,
  purchasedFrom,
  additionalNotes,
  setEditClicked
}**/props) {

  // const {
  //   name,
  //   time,
  //   intakeFrequency,
  //   intakeQuantity,
  //   stockQuantity,
  //   image,
  //   effectiveness,
  //   refillLevel,
  //   dosageType,
  //   startDate,
  //   endDate,
  //   price,
  //   purchasedFrom,
  //   additionalNotes,
  //   setEditClicked
  // } = props;

  // console.log (props)
  // Importing images
  const imageUrl = props.image.src;

  // console.log({
  //   name: name,
  //   time: time,
  //   intakeFrequency: intakeFrequency,
  //   intakeQuantity: intakeQuantity,
  //   stockQuantity: stockQuantity,
  //   image: image,
  //   effectiveness: effectiveness,
  //   refilLevel: refilLevel,
  //   dosageType: dosageType,
  //   startDate: startDate,
  //   endDate: endDate,
  //   price: price,
  //   purchasedFrom: purchasedFrom,
  //   additionalNotes: additionalNotes
  // })

  const handleEditButton = () => {
    props.setEditClicked();
  };

  const formatedTime = reconvertReminderTime(props.time);
  const formattedStartDate = new Date(props.startDate).toISOString().split('T')[0];
  const formattedEndDate = new Date(props.endDate).toISOString().split('T')[0];

  
  console.log ({
    formattedStartDate: formattedStartDate,
    formattedEndDate: formattedEndDate
  });

  return (
    <>
      <div className="supplementListCard">
        <div className="card">
          <div className="skip-btn" onClick={handleEditButton}>edit</div>
          <div className="details">
            <div className="details__supplement-name">
              <img src={imageUrl} alt="pills" />
              <span>{props.name}</span>
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
              </div>
            </div>
            <div className="details__notes">
              <hr></hr>
              <span className="title">Additional Notes: </span>
              <span className="content">{props.additionalnotes}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

