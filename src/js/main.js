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

import { Countdown } from './components/countdown.js';

$(document).ready(function() {
  var endtime = document.getElementById('timer-endtime').value;
  // console.log(endtime);
  // let countdown = new Countdown(endtime, "#timer-months", 
  //                               "#timer-weeks", 
  //                               "#timer-days", "#timer-hours", 
  //                               "#timer-minutes", "#timer-seconds");
  let countdown = new Countdown(endtime, "#timer-days", "#timer-hours", "#timer-minutes", "#timer-seconds");
  countdown.triggerCountdown();
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
