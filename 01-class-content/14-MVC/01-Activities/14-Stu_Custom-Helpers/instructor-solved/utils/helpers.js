module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    const dateToFormat = new Date(date);
    return `${dateToFormat.getMonth() + 1}\\${dateToFormat.getDate()}\\${dateToFormat.getFullYear() + 5}`;
  }
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
};
