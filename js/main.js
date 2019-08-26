var jquery = require("jquery");
window.$ = window.jQuery = jquery; // notice the definition of global variables here

var moment = require("moment");

function makeTimer() {
  var eventTime = moment('16 September 2019 00:00:00 +1000','DD MMMM YYYY hh:mm:ss Z');
  var currentTime = moment();
  var diffTime = eventTime - currentTime;
  var duration = moment.duration(diffTime);

  $("#days").html(duration.days() + "<span>Days</span>");
  $("#hours").html(duration.hours() + "<span>Hours</span>");
  $("#minutes").html(duration.minutes() + "<span>Minutes</span>");
  $("#seconds").html(duration.seconds() + "<span>Seconds</span>");
}

// per second tick
setInterval(function() {
  makeTimer();
}, 1000);
