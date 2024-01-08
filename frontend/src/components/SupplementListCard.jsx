import { reconvertReminderTime } from "../helper/reconvertReminderTime";

export default function SupplementListCard(props) {

  // console.log ({props:props})

  // Importing images
  const imageUrl = props.image.src;
  
  // Format time to HH:MM AM OR PM and format start date and end date to 'YYYY-MM-DD' format
  const formatedTime = reconvertReminderTime(props.time);
  const formattedStartDate = props.startdate ? props.startdate.split('T')[0] : '';
  const formattedEndDate = props.enddate ? props.enddate.split('T')[0] : '';
  
  // console.log ({
  //   formattedStartDate: formattedStartDate,
  //   formattedEndDate: formattedEndDate
  // });

  return (
    <>
      <div className="supplementListCard">
        <div className="card">
          <div className="skip-btn">edit</div>
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

