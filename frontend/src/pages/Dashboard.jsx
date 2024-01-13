import React, { useState } from 'react';
import '../styles/dashboard.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SupplementCard from '../components/SupplementCard';
import mockPillIntakes from '../data/mocks/mockPillIntakes';
import 'react-calendar/dist/Calendar.css';

export default function Dashboard({ user, userSupplements, takeSupplement, handleRefillAlert }) {
  const [takenSupplements, setTakenSupplements] = useState([]);
  const [skippedSupplements, setSkippedSupplements] = useState([]);
  
  // console.log({
    // userSupplements: userSupplements
    // user: user
  // });

  const hideCard = (supplementCardId, cardStockQuantity, CardIntakeQuantity, currentDate, nextDateToTakeSupplement) => {
    setTakenSupplements([...takenSupplements, supplementCardId]); 

    const stockLevelEstimate = (arg1, arg2) => {
      let result = 0;
      return result += arg1 - arg2;       
    };

    const newStockLevel = stockLevelEstimate(cardStockQuantity, CardIntakeQuantity);  
    // console.log('newStockLevel:', newStockLevel);

    takeSupplement(supplementCardId, newStockLevel, currentDate, nextDateToTakeSupplement);
  };

  const skipCard = (supplementCardId) => {
    setSkippedSupplements([...skippedSupplements, supplementCardId]); 
  };
 
  const clearTakenSupplements = () => {
    setTakenSupplements([]);
  }

  const clearSkippedSupplements = () => {
    setSkippedSupplements([]);
 }

  // console.log('takenSupplements:', takenSupplements);
  //  console.log('skippedSupplements:', skippedSupplements);

  const filteredSupplements = userSupplements.filter((supplement) => !takenSupplements.includes(supplement.id) && !skippedSupplements.includes(supplement.id) && supplement.status === 'Active' || supplement.status === 'active');
  
  //  ---------------------------------------------------------------------------------------------------

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
      {/* <Header /> */}
      <main className="dashboard-container container">
        <section className="container-top">
          <h1 className="accent">
            Pilpal Dashboard<span>✷</span>
          </h1>
          {user && <h2>Hi, {user.username}! Let’s make today a healthy one.</h2>}
        </section>
        <section className="container-bottom">          
          <article className="container-left">
            <h3>
              Reminders <span>***</span>
            </h3>
            {filteredSupplements && filteredSupplements.map((userSupplement) => (
              <SupplementCard
                key={userSupplement.id}
                {...userSupplement}
                hideCard={hideCard}
                skipCard={skipCard}
                handleRefillAlert={handleRefillAlert}
              />
            ))}
            {filteredSupplements.length === 0 && <p>
              <strong>
                No supplements available for this user. Would you like to add new supplements?
              </strong>
            </p>}
            <button className='btn success' type="button" onClick={clearTakenSupplements}>Clear Hidden Cards</button>
            <br /><br />
            <button className='btn success' type="button" onClick={clearSkippedSupplements}>Clear Skipped Cards</button>
            <br /><br />
          </article>
          <article className="container-right">
            <div className="container-right--box">
              <h3>Calender</h3>
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