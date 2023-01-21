"use strict";

let clock;

function Clock(element) {
	this.element = null;
	this.parts = {};
	this.updateInterval = null;
	this.time = null;

	if (element) this.setElement(element);
}

Clock.prototype.setElement = function (element) {
	this.element = null;
	this.parts = {};
	if (this.updateInterval) clearInterval(this.updateInterval);
	this.updateInterval = null;
	if (!element) {
		return;
	}
	this.element = element;
	for (let i of ["year", "month", "date", "day", "hour", "minute", "second"])
		this.parts[i] = this.element.querySelector(".clock-" + i);
	this.update();
	this.updateInterval = setInterval(this.update.bind(this));
};

Clock.prototype.setTime = function (time) {
	this.time = time;
	this.setPart("year", this.time.getFullYear());
	this.setPart("month", this.time.getMonth() + 1);
	this.setPart("date", this.time.getDate());
	this.setPart("day", this.getLocalizedDay(this.time.getDay()));
	this.setPart("hour", this.time.getHours());
	this.setPart("minute", this.time.getMinutes());
	this.setPart("second", this.time.getSeconds());
};

Clock.prototype.setPart = function (part, num) {
	let str = num.toString();
	if (typeof num == "number") {
		let padToLength = part == "year" ? 4 : 2;
		str = str.padStart(padToLength, "0");
	}
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
