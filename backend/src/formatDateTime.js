const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}Z`;
  return formattedDate;
};
// const currentDate = new Date();
// const formattedDate = formatDate(currentDate);
// console.log(formattedDate);


module.exports = {
  formatDate
};
