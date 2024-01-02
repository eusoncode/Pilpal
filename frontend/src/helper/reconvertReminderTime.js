
const reconvertReminderTime = (dateTime) => {
  const parsedTime = new Date(dateTime);
  // Get hours and minutes
  const hours = parsedTime.getHours();
  const minutes = parsedTime.getMinutes();

  // Format hours and minutes to HH:MM format
  const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  // Get AM/PM
  const amOrPm = hours >= 12 ? 'PM' : 'AM';

  // Return formatted time
  return `${formattedTime} ${amOrPm}`;
};

module.exports = {
  reconvertReminderTime
};