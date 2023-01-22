"use strict";

let icon = document.getElementById("change-accent");
if (icon)
	icon.addEventListener("click", function () {
		document.body.classList.toggle("dark-theme");
		let iconImage = document.querySelector("#change-accent img");
		if (iconImage)
			iconImage.src = document.body.classList.contains("dark-theme")
				? iconImage.dataset.lightIcon
				: iconImage.dataset.darkIcon;
	});
