
const reconvertReminderTime = (dateTime) => {

  //24-hours format
  // const parsedTime = new Date(dateTime);
  // // Get hours and minutes
  // const hours = parsedTime.getHours();
  // const minutes = parsedTime.getMinutes();

  // // Format hours and minutes to HH:MM format
  // const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  // // Get AM/PM
  // const amOrPm = hours >= 12 ? 'PM' : 'AM';

  // // Return formatted time
  // return `${formattedTime} ${amOrPm}`;

  //12-hours format
  const parsedTime = new Date(dateTime);
  // Get hours and minutes
  const hours = parsedTime.getHours();
  const minutes = parsedTime.getMinutes();

  // Calculate hours in 12-hour format and determine AM/PM
  const hoursIn12HourFormat = hours % 12 || 12; // If hours is 0, convert it to 12 for 12-hour format
  const amOrPm = hours >= 12 ? 'PM' : 'AM';

  // Format hours and minutes to HH:MM format
  const formattedHours = hoursIn12HourFormat < 10 ? `0${hoursIn12HourFormat}` : `${hoursIn12HourFormat}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  // Return formatted time in 12-hour format
  return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
};

module.exports = {
  reconvertReminderTime
};