/*
 * enabled strict mode
 * https://www.w3schools.com/js/js_strict.asp
 *
 */
"use strict";

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

// trigger countdown timer (per second = 1000)
function triggerCountdown() {
  setInterval(function() {
    setupCountdown();
  }, 1000);
}

$(document).ready(function() {
  // console.log(endDate);
  triggerCountdown();
});

/*
 * checking the loading state of document
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
 *
 *
 */
// if (document.readyState === "complete") {
//   // console.log(endDate);
//   triggerCountdown();
//   console.log("if you see me, my work here is done..");
// } else {
//   if (window.addEventListener) {
//     window.addEventListener("load", triggerCountdown(), false);
//     console.log("loaded..");
//   } else {
//     window.attachEvent("onload", triggerCountdown());
//     console.log("onload..");
//   }
// }
