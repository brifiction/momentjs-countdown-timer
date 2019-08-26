"use strict"; //https://www.w3schools.com/js/js_strict.asp

// normalize.css
import "normalize.css";

// jquery
var jquery = require("jquery");
window.$ = window.jQuery = jquery;

// momentjs
var moment = require("moment");

// global variables
const endDate = "6 September 2019 00:00:00 +1000";
const timerDays = "#timer-days";
const timerHours = "#timer-hours";
const timerMinutes = "#timer-minutes";
const timerSeconds = "#timer-seconds";

// setup countdown timer
function setupCountdown() {
  let eventTime = moment(endDate, "DD MMMM YYYY hh:mm:ss Z");
  let currentTime = moment();
  let diffTime = eventTime - currentTime;
  let duration = moment.duration(diffTime);

  $(timerDays).html(duration.days() + "<span>Days</span>");
  $(timerHours).html(duration.hours() + "<span>Hours</span>");
  $(timerMinutes).html(duration.minutes() + "<span>Minutes</span>");
  $(timerSeconds).html(duration.seconds() + "<span>Seconds</span>");

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
