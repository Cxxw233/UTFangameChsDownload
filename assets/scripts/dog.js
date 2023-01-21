let dog = document.querySelector("footer .dog img");
dog.addEventListener("mouseover", () => {
	dog.src = dog.dataset.bark;
});
dog.addEventListener("mouseout", () => {
	dog.src = dog.dataset.idle;
});
