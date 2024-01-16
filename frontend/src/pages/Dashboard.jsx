// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import SupplementCard from '../components/SupplementCard';
// import mockPillIntakes from '../data/mocks/mockPillIntakes';
// import userProfileImage from '../assets/user-profile.png';

// export default function Dashboard({
//   user,
//   filteredUserSupplements,
//   takeSupplement,
//   handleRefillAlert,
// }) {
//   const navigate = useNavigate();
//   const [takenSupplements, setTakenSupplements] = useState([]);
//   const [skippedSupplements, setSkippedSupplements] = useState([]);

//   // Format Date to Day - Date, Year
//   function formatDate(date) {
//     const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
//     const monthName = date.toLocaleDateString('en-US', { month: 'long' });
//     const dayNumber = date.getDate();
//     const year = date.getFullYear();

//     return `${dayName} ${monthName} ${dayNumber}, ${year}`;
//   }

//   // console.log({
//   // filteredUserSupplements: filteredUserSupplements
//   // user: user
//   // });

//   const hideCard = (
//     supplementCardId,
//     cardStockQuantity,
//     CardIntakeQuantity,
//     currentDate,
//     nextDateToTakeSupplement
//   ) => {
//     setTakenSupplements([...takenSupplements, supplementCardId]);

//     const stockLevelEstimate = (arg1, arg2) => {
//       let result = 0;
//       return (result += arg1 - arg2);
//     };

//     const newStockLevel = stockLevelEstimate(
//       cardStockQuantity,
//       CardIntakeQuantity
//     );
//     // console.log('newStockLevel:', newStockLevel);

//     takeSupplement(
//       supplementCardId,
//       newStockLevel,
//       currentDate,
//       nextDateToTakeSupplement
//     );
//   };

//   const skipCard = (supplementCardId) => {
//     setSkippedSupplements([...skippedSupplements, supplementCardId]);
//   };

//   const clearTakenSupplements = () => {
//     setTakenSupplements([]);
//   };

//   const clearSkippedSupplements = () => {
//     setSkippedSupplements([]);
//   };

//   // console.log('takenSupplements:', takenSupplements);
//   //  console.log('skippedSupplements:', skippedSupplements);

//   const filteredSupplements = filteredUserSupplements.filter(
//     (supplement) =>
//       !takenSupplements.includes(supplement.id) &&
//       !skippedSupplements.includes(supplement.id) &&
//       (supplement.status === 'Active' || supplement.status === 'active')
//   );

//   //  ---------------------------------------------------------------------------------------------------

//   const [date, setDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(null);

//   // Function to check if pills were taken on a given date
//   const pillTakenOnDate = (date) => {
//     return mockPillIntakes.some(
//       (intake) => intake.date.toDateString() === date.toDateString()
//     );
//   };

//   const handleDayClick = (date) => {
//     setSelectedDate(date);
//   };

//   const pillDetailsForSelectedDate = selectedDate
//     ? mockPillIntakes.filter(
//         (intake) => intake.date.toDateString() === selectedDate.toDateString()
//       )
//     : [];

//   return (
//     <>
//       <main className="dashboard-container container">
//         <section className="container-top">
//           <p className="title-date">
//             <span className="icon">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 class="icon icon-tabler icon-tabler-asterisk"
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 stroke-width="2.0"
//                 stroke="#000000"
//                 fill="none"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                 <path d="M12 12l8 -4.5" />
//                 <path d="M12 12v9" />
//                 <path d="M12 12l-8 -4.5" />
//                 <path d="M12 12l8 4.5" />
//                 <path d="M12 3v9" />
//                 <path d="M12 12l-8 4.5" />
//               </svg>
//             </span>
//             {formatDate(new Date())}
//           </p>
//           <div className="greetings">
//             {user && (
//               <h2>
//                 Hi, {user.username}!<br></br> Let’s make today a healthy one.
//               </h2>
//             )}
//             <div className="profile-image-container">
//               <img src={userProfileImage} alt="User Profile" />
//             </div>
//           </div>
//         </section>
//         <section className="container-bottom">
//           <article className="container-left">
//             <h3>
//               Reminders <span>***</span>
//             </h3>
//             {filteredSupplements &&
//               filteredSupplements.map((userSupplement) => (
//                 <SupplementCard
//                   key={userSupplement.id}
//                   {...userSupplement}
//                   hideCard={hideCard}
//                   skipCard={skipCard}
//                   handleRefillAlert={handleRefillAlert}
//                 />
//               ))}
//             {filteredSupplements.length === 0 && (
//               <p>
//                 <strong>
//                   No supplements available for this user. Would you like to add
//                   new supplements?
//                 </strong>
//               </p>
//             )}
//             <button
//               className="btn success"
//               type="button"
//               onClick={clearTakenSupplements}
//             >
//               Clear Hidden Cards
//             </button>
//             <br />
//             <br />
//             <button
//               className="btn success"
//               type="button"
//               onClick={clearSkippedSupplements}
//             >
//               Clear Skipped Cards
//             </button>
//             <br />
//             <br />
//           </article>
//           <article className="container-right">
//             <div className="container-right--box">
//               <h3>Calender</h3>
//               <Calendar
//                 onChange={setDate}
//                 value={date}
//                 onClickDay={handleDayClick}
//                 tileContent={({ date, view }) =>
//                   view === 'month' && pillTakenOnDate(date) ? (
//                     <div className="pill-taken-indicator"></div>
//                   ) : null
//                 }
//               />

//               {/* Pill Details Display */}
//               {selectedDate && (
//                 <div className="pill-details">
//                   <h4>Pills Taken on {selectedDate.toDateString()}:</h4>
//                   <ul>
//                     {pillDetailsForSelectedDate.map((intake, index) => (
//                       <li key={index}>
//                         {intake.name} - {intake.quantity} {intake.dosageType} at{' '}
//                         {intake.time}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </article>
//         </section>
//       </main>
//     </>
//   );
// }

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import userProfileImage from '../assets/user-profile.png';
import SupplementCard from '../components/SupplementCard';
import PillIntakeDetails from '../components/PillIntakeDetails';

export default function Dashboard({
  user,
  filteredUserSupplements,
  takeSupplement,
  handleRefillAlert,
}) {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => {
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const monthName = date.toLocaleDateString('en-US', { month: 'long' });
    const dayNumber = date.getDate();
    const year = date.getFullYear();
    return `${dayName} - ${monthName} ${dayNumber}, ${year}`;
  };

  // Check if the current date is the same as the selected date
  const isToday = selectedDate.toDateString() === new Date().toDateString();

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  // Function to check if pills were taken on a given date
  // ... Implementation for pillTakenOnDate

  return (
    <main className="dashboard-container container">
      <section className="container-top">
        <p className="title-date">
          {' '}
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-asterisk"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              stroke-width="2.0"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12l8 -4.5" />
              <path d="M12 12v9" />
              <path d="M12 12l-8 -4.5" />
              <path d="M12 12l8 4.5" />
              <path d="M12 3v9" />
              <path d="M12 12l-8 4.5" />
            </svg>
          </span>
          {formatDate(new Date())}
        </p>
        <div className="greetings">
          <h2>
            Hi, {user ? user.username : 'User'}! <br />
            Let’s make today a healthy one.
          </h2>
          <div className="profile-image-container">
            <img src={userProfileImage} alt="User Profile" />
          </div>
        </div>
      </section>

      <section className="container-bottom">
        <article className="container-left">
          <p className="today-title">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-list-check"
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
                <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
                <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
                <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
                <path d="M11 6l9 0" />
                <path d="M11 12l9 0" />
                <path d="M11 18l9 0" />
              </svg>
            </span>
            {isToday ? (
              <>
                Your reminders for
                <span> today</span>
              </>
            ) : (
              <>
                Your reminders for
                <span> {formatDate(selectedDate)}</span>
              </>
            )}
          </p>
          {filteredUserSupplements.map((supplement) => (
            <SupplementCard
              key={supplement.id}
              {...supplement}
              handleRefillAlert={handleRefillAlert}
            />
          ))}
          {filteredUserSupplements.length === 0 && (
            <div className="no-reminders">
              <p>
                No reminders yet?<br></br> Let's get healthier together! 💪
              </p>
              <button className="btn-main" onClick={() => navigate('/add-new')}>
                Start Tracking Your Supplements
              </button>
            </div>
          )}
        </article>

        <article className="container-right">
          <Calendar
            onChange={setDate}
            value={date}
            onClickDay={handleDayClick}
            // ... Other Calendar properties
          />
          <PillIntakeDetails
          // ... Pass necessary props to PillIntakeDetails
          />
        </article>
      </section>
    </main>
  );
}
