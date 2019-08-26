// jquery
var jquery = require("jquery");
window.$ = window.jQuery = jquery;

// momentjs
var moment = require("moment");

// define end date
var endDate = "6 September 2019 00:00:00 +1000";

// setup countdown timer
function setupCountdown() {
  let eventTime = moment(endDate, "DD MMMM YYYY hh:mm:ss Z");
  let currentTime = moment();
  let diffTime = eventTime - currentTime;
  let duration = moment.duration(diffTime);

  $("#days").html(duration.days() + "<span>Days</span>");
  $("#hours").html(duration.hours() + "<span>Hours</span>");
  $("#minutes").html(duration.minutes() + "<span>Minutes</span>");
  $("#seconds").html(duration.seconds() + "<span>Seconds</span>");

  // console.log(
  //   duration.days() +
  //     " | " +
  //     duration.hours() +
  //     " | " +
  //     duration.minutes() +
  //     " | " +
  //     duration.seconds()
  // );
}

function triggerCountdown() {
  setInterval(function() {
    setupCountdown();
  }, 1000);
}

// console.log(endDate);
triggerCountdown();
