export default function PillIntakeDetails({ pillIntakes, selectedDate }) {
  const takenPills = pillIntakes.filter((intake) => intake.taken);
  const skippedPills = pillIntakes.filter((intake) => !intake.taken);

  return (
    <div className="pill-details">
      <h4>Pills Taken</h4>
      {takenPills.length > 0 ? (
        <ul className="pills-details-taken">
          {takenPills.map((intake, index) => (
            <li key={index}>
              <img
                src={intake.image.src}
                alt={intake.name}
                className="pill-image"
              />
              <div>
                <span>
                  {intake.name} ({intake.manufacturer})
                </span>
                <span>
                  {intake.quantity} {intake.dosageType} at {intake.time}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-reminder-intakes-skipped">
          <p>No Intakes Recorded</p>
        </div>
      )}
      <h4>Pills Skipped</h4>
      {skippedPills.length > 0 ? (
        <ul className="pills-details-skipped">
          {skippedPills.map((intake, index) => (
            <li key={index}>
              <img
                src={intake.image.src}
                alt={intake.name}
                className="pill-image"
              />
              <div>
                <span>
                  {intake.name} ({intake.manufacturer})
                </span>
                <span>
                  {intake.quantity} {intake.dosageType} at {intake.time}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-reminder-intakes-skipped">
          <p>No Skipped Pills</p>
        </div>
      )}
    </div>
  );
}
