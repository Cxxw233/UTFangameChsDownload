function myTime() {
	let time = new Date();
	let hh = time.getHours(); //时
	let mm = time.getMinutes(); //分
	let ss = time.getSeconds(); //秒
	let year = time.getFullYear(); //年
	let month = time.getMonth(); //月
	let day = time.getDate(); //日
	let dayy = time.getDay(); //星期
	//给日期设置条件，把得到的日期数字变为字符串(?)
	switch (dayy) {
		case 1:
			dayy = "周一 ";
			break;
		case 2:
			dayy = "周二 ";
			break;
		case 3:
			dayy = "周三 ";
			break;
		case 4:
			dayy = "周四 ";
			break;
		case 5:
			dayy = "周五 ";
			break;
		case 6:
			dayy = "周六 ";
			break;
		case 0:
			dayy = "周日 ";
			break;
		default:
			dayy = "";
			break;
	}
	// Math.floor() 向下取整
	document.getElementById("year").innerText = Math.floor(year);
	document.getElementById("month").innerText = Math.floor(month + 1);
	document.getElementById("day").innerText = Math.floor(day);
	document.getElementById("dayy").innerText = dayy;
	document.getElementById("1").innerText = Math.floor(hh / 10);
	document.getElementById("2").innerText = hh % 10;
	document.getElementById("4").innerText = Math.floor(mm / 10);
	document.getElementById("5").innerText = mm % 10;
	document.getElementById("7").innerText = Math.floor(ss / 10);
	document.getElementById("8").innerText = ss % 10;
}
document.addEventListener("DOMContentLoaded", () => {
	myTime();
	setInterval(myTime, 1000);
});
