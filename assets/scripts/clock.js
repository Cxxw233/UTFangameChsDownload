function myTime() {
	let time = new Date();
	let hh = time.getHours(); //时
	let mm = time.getMinutes(); //分
	let ss = time.getSeconds(); //秒
	let year = time.getFullYear(); //年
	let month = time.getMonth(); //月
	let day = time.getDate(); //日
	let dayy = time.getDay(); //星期
	let dayyStringified = "周" + ["日", "一", "二", "三", "四", "五", "六", "日"][dayy];
	document.getElementById("clock-year").innerText = Math.floor(year);
	document.getElementById("clock-month").innerText = Math.floor(month + 1);
	document.getElementById("clock-day").innerText = Math.floor(day);
	document.getElementById("clock-dayy").innerText = dayyStringified;
	document.getElementById("clock-1").innerText = Math.floor(hh / 10);
	document.getElementById("clock-2").innerText = hh % 10;
	document.getElementById("clock-4").innerText = Math.floor(mm / 10);
	document.getElementById("clock-5").innerText = mm % 10;
	document.getElementById("clock-7").innerText = Math.floor(ss / 10);
	document.getElementById("clock-8").innerText = ss % 10;
}
document.addEventListener("DOMContentLoaded", () => {
	myTime();
	setInterval(myTime, 1000);
});
