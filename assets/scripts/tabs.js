let title = document.querySelectorAll("div.tabbed-table > ul.tabbed-table-title");
let content = document.querySelectorAll("div.tabbed-table > ul.tabbed-table-content");
for (let tabi = 0; tabi < title.length; tabi++) {
	let titleelem = title[tabi];
	let titlelist = titleelem.children;
	let contentlist = content[tabi].children;
	if (titlelist.length != contentlist.length || titlelist.length <= 0) {
		console.error("发现了格式错误的表格！", titleelem);
		continue;
	}
	function activateTab(i) {
		let active = titleelem.getElementsByClassName("active");
		if (active.length > 0) active[0].classList.remove("tabbed-table-title-active");
		titlelist[i].classList.add("tabbed-table-title-active");
		for (let j = 0; j < contentlist.length; j++) {
			contentlist[j].classList.add("tabbed-table-content-hidden");
		}
		contentlist[i].classList.remove("tabbed-table-content-hidden");
	}
	activateTab(0);
	for (let i = 0; i < titlelist.length; i++) {
		titlelist[i].addEventListener("click", () => {
			activateTab(i);
		});
	}
}
