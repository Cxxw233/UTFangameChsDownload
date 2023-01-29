"use strict";

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

function activateTab(titles, content, i) {
	for (let title of titles) title.classList.remove("tabbed-table-title-active");
	titles[i].classList.add("tabbed-table-title-active");
	for (let tab of content) {
		tab.style.display = "none";
	}
	content[i].style.display = "";
}

function installAccentChanger() {
	let icon = document.getElementById("change-accent");
	if (!icon) return;
	icon.addEventListener("click", function () {
		document.body.classList.toggle("dark-theme");
		let iconImage = document.querySelector("#change-accent img");
		if (iconImage)
			iconImage.src = document.body.classList.contains("dark-theme")
				? iconImage.dataset.lightIcon
				: iconImage.dataset.darkIcon;
	});
}

function installClock() {
	let clockElem = document.querySelector(".clock");
	if (!clockElem) return;
	new Clock(clockElem);
}

function installTabbedTables() {
	for (let table of document.querySelectorAll(".tabbed-table")) {
		let titles = table.querySelector(":scope > .tabbed-table-title").children;
		let content = table.querySelector(":scope > .tabbed-table-content").children;
		if (titles.length != content.length || titles.length <= 0) {
			console.error("发现了格式错误的表格！", table);
			continue;
		}
		const activateTabHere = (i) => activateTab(titles, content, i);
		[...titles].forEach((title, tab) => {
			title.addEventListener("click", () => {
				activateTabHere(tab);
			});
		});
		activateTabHere(0);
	}
}

function installDog() {
	let dog = document.querySelector(".dog img");
	if (!dog) return;
	dog.addEventListener("mouseover", () => {
		dog.src = dog.dataset.bark;
	});
	dog.addEventListener("mouseout", () => {
		dog.src = dog.dataset.idle;
	});
}

installAccentChanger();
installClock();
installTabbedTables();
installDog();
