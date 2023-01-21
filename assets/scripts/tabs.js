"use strict";

function activateTab(titles, content, i) {
	for (let title of titles) title.classList.remove("tabbed-table-title-active");
	titles[i].classList.add("tabbed-table-title-active");
	for (let tab of content) {
		tab.style.display = "none";
	}
	content[i].style.display = "";
}

function applyTabFunctionality() {
	for (let table of document.querySelectorAll(".tabbed-table")) {
		let titles = table.querySelector(":scope > .tabbed-table-title").children;
		let content = table.querySelector(":scope > .tabbed-table-content").children;
		if (titles.length != content.length || titles.length <= 0) {
			console.error("发现了格式错误的表格！", table);
			continue;
		}
		[...titles].forEach((title, tab) => {
			title.addEventListener("click", () => {
				activateTab(titles, content, tab);
			});
		});
		activateTab(titles, content, 0);
	}
}
applyTabFunctionality();
