"use strict";

let clock;

function Clock(element) {
	this.element = element;

	this.parts = {
		year: null,
		month: null,
		day: null,
		dayy: null,
		hour: null,
		minute: null,
		second: null
	};
	for (let i of Object.keys(this.parts)) this.parts[i] = this.element.querySelector(".clock-" + i);

	this.update();
	this.interval = setInterval(this.update.bind(this));
}

Clock.prototype.setTime = function (time) {
	this.setPart("year", time.getFullYear(), 4);
	this.setPart("month", time.getMonth() + 1);
	this.setPart("day", time.getDate());
	this.setPart("dayy", this.getLocalizedDay(time.getDay()), -1);
	this.setPart("hour", time.getHours());
	this.setPart("minute", time.getMinutes());
	this.setPart("second", time.getSeconds());
};

Clock.prototype.setPart = function (part, num, padToLength = 2, padString = "0") {
	let str = num.toString();
	if (padToLength > 0) str = str.padStart(padToLength, padString);
	this.parts[part].innerText = str;
};

Clock.prototype.getLocalizedDay = function (day) {
	return "周" + ["日", "一", "二", "三", "四", "五", "六", "日"][day];
};

Clock.prototype.update = function () {
	this.setTime(new Date());
};

let clockElem = document.querySelector(".clock");
if (clockElem) clock = new Clock(clockElem);
