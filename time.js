let date = new Date();

window.onload = function() {
  updateDate();
  updateTime();
};

function updateTime() {
  let hour = date.getHours();
  let min = date.getMinutes();

  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;

  document.getElementById("time").innerHTML = `${hour}:${min}`;

  setTimeout(updateTime, 1000);
}

function updateDate() {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
  document.getElementById("date").innerHTML = `${dayNames[date.getDay()]}, ${date.getDate()} ${monthNames[date.getMonth()]}`;
}
