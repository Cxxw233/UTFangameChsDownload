var icon = document.getElementById("change-accent");
icon.addEventListener("click", function () {
	document.body.classList.toggle("dark-theme");
	var iconImage = document.querySelector("#change-accent img");
	if (document.body.classList.contains("dark-theme")) {
		iconImage.src = iconImage.dataset.lightIcon;
	} else {
		iconImage.src = iconImage.dataset.darkIcon;
	}
});
