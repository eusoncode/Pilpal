import { reconvertReminderTime } from "../helper/reconvertReminderTime";
import { useNavigate } from 'react-router-dom';

export default function SupplementListCard(props) {

  // console.log ({props:props})

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

  // const handleEditButton = () => {
  //   props.setEditClicked();
  // };

  // console.log ({
    // StartDate: props.startdate,
  //   EndDate: props.enddate
  // });

  // console.log ({
  //   StartDate: props
  // });
  const navigate = useNavigate();
  
  // Format time to HH:MM AM OR PM and format start date and end date to 'YYYY-MM-DD' format
  const formatedTime = reconvertReminderTime(props.time);
  const formattedStartDate = props.startdate ? props.startdate.split('T')[0] : '';
  const formattedEndDate = props.enddate ? props.enddate.split('T')[0] : '';

  let reason = false;  
  if (props.status === 'Suspended') {
    reason = true;
  }
  
  const handleEditClick = () => {
    // props.supplementToBeEdited(props.id);
    navigate(`/edit/${props.id}`); // Navigate to the edit page for this supplement
  };
  
  // console.log({supplementid:props.id});

  // console.log({
  //   inputTime: props.time,
  //   inputStartDate: props.startdate,
  //   inputEndDate: props.enddate
  // });

  // console.log ({
  //   formatedTime: formatedTime,
  //   formattedStartDate: formattedStartDate,
  //   formattedEndDate: formattedEndDate
  // });
  // console.log({props:props});

  return (
    <>
      <div className="supplementListCard">
        <div className={reason ? 'suspend' : 'card'}>
          <div className="skip-btn" onClick={handleEditClick}>edit</div>
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
