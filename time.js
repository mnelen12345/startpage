window.onload = function() {
  updateDate();
  updateTime();
};

function updateTime() {
  var time = new Date();
  var hour = time.getHours();
  var min = time.getMinutes();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }

  var currentTime = hour + ":" + min;
  document.getElementById("time").innerHTML = currentTime;

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
  
  var date = new Date();
  var dayOfWeek = dayNames[date.getDay()];
  var day = date.getDate();
  var month = monthNames[date.getMonth()];
  
  var currentDate = dayOfWeek + ", " + day + " " + month;
  document.getElementById("date").innerHTML = currentDate;
}