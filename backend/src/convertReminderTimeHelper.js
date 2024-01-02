const convertReminderTimeHelper = (reminderTime) => {
  // Split the time string into hours and minutes
  const [hours, minutes] = reminderTime.split(':').map(Number); // Extract hours and minutes
  
  // Get current date
  const currentDate = new Date();
  
  // Set hours and minutes to the current date
  currentDate.setHours(hours);
  currentDate.setMinutes(minutes);
  currentDate.setSeconds(0); // Set seconds to 0
  
  // Format the date as 'YYYY-MM-DD HH:mm:ss'
  const formattedDateTime = currentDate.toISOString().slice(0, 19).replace('T', ' ');

  console.log(formattedDateTime);

  return formattedDateTime;
};

module.exports = {
  convertReminderTimeHelper
};
