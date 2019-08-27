// momentjs
var moment = require("moment");

class Countdown {

    constructor(endDate, timerDays, timerHours, timerMinutes, timerSeconds) {
        this.endDate = endDate;
        // this.timerMonths = timerMonths;
        // this.timerWeeks = timerWeeks;
        this.timerDays = timerDays;
        this.timerHours = timerHours;
        this.timerMinutes = timerMinutes;
        this.timerSeconds = timerSeconds;
    }

    setupCountdown() {
        const eventTime = moment(this.endDate, "DD-MM-YYYY hh:mm:ss Z");
        const currentTime = moment();
        const diffTime = eventTime.diff(currentTime);
        const duration = moment.duration(diffTime);

        const days = eventTime.diff(currentTime, 'days'); // = duration.asDays().toFixed(0)

        // $(this.timerMonths).html(duration.asMonths().toFixed(0) + "<span>Months</span>");
        // $(this.timerWeeks).html(duration.weeks() + "<span>Days</span>");

        $(this.timerDays).html(duration.asDays().toFixed(0) + "<span>Days</span>");
        $(this.timerHours).html(duration.hours() + "<span>Hours</span>");
        $(this.timerMinutes).html(duration.minutes() + "<span>Minutes</span>");
        $(this.timerSeconds).html(duration.seconds() + "<span>Seconds</span>");

        // console.log(currentTime);
        // console.log(
        //     duration.days() +
        //     " | " +
        //     duration.hours() +
        //     " | " +
        //     duration.minutes() +
        //     " | " +
        //     duration.seconds()
        // );
    }

    triggerCountdown() {
        //starts the interval function
        var self = this;

        // per second tick
        this.timer = setInterval(function () {
            self.setupCountdown();
        }, 1000);
    }
}

export { Countdown };

// // global variables
// const vars = {
//     endDate: "6 September 2019 00:00:00 +1000",
//     timerDays: "#timer-days",
//     timerHours: "#timer-hours",
//     timerMinutes: "#timer-minutes",
//     timerSeconds: "#timer-seconds"
// };

// // setup countdown timer
// function setupCountdown() {
//     let eventTime = moment(vars.endDate, "DD MMMM YYYY hh:mm:ss Z");
//     let currentTime = moment();
//     let diffTime = eventTime - currentTime;
//     let duration = moment.duration(diffTime);

//     $(vars.timerDays).html(duration.days() + "<span>Days</span>");
//     $(vars.timerHours).html(duration.hours() + "<span>Hours</span>");
//     $(vars.timerMinutes).html(duration.minutes() + "<span>Minutes</span>");
//     $(vars.timerSeconds).html(duration.seconds() + "<span>Seconds</span>");
// }

// // trigger countdown timer (per second = 1000)
// function triggerCountdown() {
//     // per second tick
//     setInterval(function () {
//         setupCountdown();
//     }, 1000);
// }

// export { triggerCountdown };