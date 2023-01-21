"use strict";

let dog = document.querySelector(".dog img");
if (dog) {
	dog.addEventListener("mouseover", () => {
		dog.src = dog.dataset.bark;
	});
	dog.addEventListener("mouseout", () => {
		dog.src = dog.dataset.idle;
	});
}
