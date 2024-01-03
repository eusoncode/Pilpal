import React, { useState } from 'react';
import '../styles/dashboard.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Header from '../components/Header';
import SupplementCard from '../components/SupplementCard';
import mockReminder from '../data/mocks/mockReminder';
import mockPillIntakes from '../data/mocks/mockPillIntakes';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to check if pills were taken on a given date
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
      <Header />
      <main className="dashboard-container container">
        <section className="container-top">
          <h1 className="accent">
            Pilpal Dashboard<span>✷</span>
          </h1>
          <h2>Hi, Luwam! Let’s make today a healthy one.</h2>
        </section>
        <section className="container-bottom">
          <article className="container-left">
            <h3>
              Reminders <span>***</span>
            </h3>
            {mockReminder.map((reminder) => (
              <SupplementCard key={reminder.id} {...reminder} />
            ))}
          </article>
          <article className="container-right">
            <div className="container-right--box">
              <h3>Calendar</h3>
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
