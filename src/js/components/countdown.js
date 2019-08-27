// momentjs
var moment = require("moment");

class Countdown {

    constructor(endDate, timerDays, timerHours, timerMinutes, timerSeconds) {
        this.endDate = endDate;
        // this.timerMonths = timerMonths; // if needed
        // this.timerWeeks = timerWeeks; // if needed
        this.timerDays = timerDays;
        this.timerHours = timerHours;
        this.timerMinutes = timerMinutes;
        this.timerSeconds = timerSeconds;
    }

    setupCountdown() {
        // define fields
        const eventTime = moment(this.endDate, "DD-MM-YYYY hh:mm:ss Z");
        const currentTime = moment();
        const diffTime = eventTime.diff(currentTime);
        const duration = moment.duration(diffTime);

        // primary time unit used. for example, days.
        const days = eventTime.diff(currentTime, 'days'); // = duration.asDays().toFixed(0)

        // change / update usage. for example, from asDays() to days() if not primary
        // $(this.timerMonths).html(duration.asMonths().toFixed(0) + "<span>Months</span>");
        // $(this.timerWeeks).html(duration.asWeeks().toFixed(0) + "<span>Weeks</span>");
        $(this.timerDays).html(duration.asDays().toFixed(0) + "<span>Days</span>");
        $(this.timerHours).html(duration.hours() + "<span>Hours</span>");
        $(this.timerMinutes).html(duration.minutes() + "<span>Minutes</span>");
        $(this.timerSeconds).html(duration.seconds() + "<span>Seconds</span>");
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