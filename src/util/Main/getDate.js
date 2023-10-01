const months = [
    "January",  "February",  "March",  "April",
    "May", "June",   "July",    "August",  "September",  "October",
    "November", "December"
 ];

const daysOfWeek = [
"Sunday", "Monday", "Tuesday",   "Wednesday",
"Thursday", "Friday",    "Saturday"
];
  
const date = new Date();
const dateNum = date.getDate();
const month = months[date.getMonth()]
const day = daysOfWeek[date.getDay()]

const fullDate = `${day}, ${month} ${dateNum}`


export default fullDate