export default function PillIntakeDetails({ pillIntakes, selectedDate }) {
  const takenPills = pillIntakes.filter((intake) => intake.taken);
  const skippedPills = pillIntakes.filter((intake) => !intake.taken);

  return (
    <div className="pill-details">
      <h4>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-pill"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7" />
            <path d="M8.5 8.5l7 7" />
          </svg>
        </span>
        Pills Taken
      </h4>
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
      <h4>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-pill-off"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10.495 6.505l2 -2a4.95 4.95 0 0 1 7 7l-2 2m-2 2l-4 4a4.95 4.95 0 0 1 -7 -7l4 -4" />
            <path d="M8.5 8.5l7 7" />
            <path d="M3 3l18 18" />
          </svg>
        </span>
        Pills Skipped
      </h4>
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
