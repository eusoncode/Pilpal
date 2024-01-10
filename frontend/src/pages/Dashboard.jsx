import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SupplementCard from '../components/SupplementCard';
import mockReminder from '../data/mocks/mockReminder';
import mockPillIntakes from '../data/mocks/mockPillIntakes';

export default function Dashboard() {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const isFutureDate = selectedDate > new Date();

  // Check if the selected date falls within the supplement's date range
  const supplementsForSelectedDate = mockReminder.filter((supplement) => {
    const supplementStartDate = new Date(supplement.startDate);
    let supplementEndDate = supplement.endDate
      ? new Date(supplement.endDate)
      : new Date();

    // If no end date is provided
    if (!supplement.endDate) {
      supplementEndDate = new Date('9999-12-31');
    }

    return (
      selectedDate >= supplementStartDate && selectedDate <= supplementEndDate
    );
  });

  // Check if pills were taken on a given date
  const pillTakenOnDate = (date) => {
    return mockPillIntakes.some(
      (intake) => intake.date.toDateString() === date.toDateString()
    );
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  const pillDetailsForSelectedDate = selectedDate
    ? mockPillIntakes.filter(
        (intake) => intake.date.toDateString() === selectedDate.toDateString()
      )
    : [];

  return (
    <>
      <main className="dashboard-container container">
        <section className="container-top">
          <h1 className="accent">
            Pilpal Dashboard<span>✷</span>
          </h1>
          <h2>
            Hi, Luwam! <br></br>Let’s make today a healthy one.
          </h2>
        </section>
        <section className="container-bottom">
          <article className="container-left">
            <h3>Reminders for {selectedDate.toDateString()}</h3>
            {/* Check if there are supplements for the selected date */}
            {supplementsForSelectedDate.length > 0 ? (
              supplementsForSelectedDate.map((reminder) => (
                <SupplementCard
                  key={reminder.id}
                  {...reminder}
                  isFutureDate={isFutureDate}
                />
              ))
            ) : (
              <div className="no-reminders">
                <p>
                  No reminders yet?<br></br> Let's get healthier together! 💪
                </p>
                <button
                  className="btn-main"
                  onClick={() => navigate('/add-new')}
                >
                  Start Tracking Your Supplements
                </button>
              </div>
            )}
          </article>
          <article className="container-right">
            <div className="container-right--box">
              <Calendar
                onChange={setDate}
                value={date}
                onClickDay={handleDayClick}
                tileContent={({ date, view }) =>
                  view === 'month' && pillTakenOnDate(date) ? (
                    <div className="pill-taken-indicator"></div>
                  ) : null
                }
              />

              {/* Pill Details Display */}
              {selectedDate && (
                <div className="pill-details">
                  <h4>Pills Taken on {selectedDate.toDateString()}:</h4>
                  <ul>
                    {pillDetailsForSelectedDate.map((intake, index) => (
                      <li key={index}>
                        {intake.name} - {intake.quantity} {intake.dosageType} at{' '}
                        {intake.time}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
