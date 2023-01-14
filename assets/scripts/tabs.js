let title = document.getElementsByClassName("title");
let content = document.getElementsByClassName("label-table-content");
for (let tabi = 0; tabi < title.length; tabi++) {
	let titleelem = title[tabi];
	let titlelist = titleelem.children;
	let contentlist = content[tabi].children;
	function activateTab(i) {
		for (let j = 0; j < titlelist.length; j++) {
			contentlist[j].classList.add("label-table-content-hidden");
		}
		contentlist[i].classList.remove("label-table-content-hidden");
	}
	activateTab(0);
	for (let i = 0; i < titlelist.length; i++) {
		let item = titlelist[i];
		item.addEventListener("click", () => {
			let active = titleelem.getElementsByClassName("active")[0];
			active.classList.remove("active");
			item.classList.add("active");
			activateTab(i);
		});
	}
}
