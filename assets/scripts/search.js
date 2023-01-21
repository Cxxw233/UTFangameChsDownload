const form = document.querySelector("form[name='search-form']");
const screens = document.querySelector(".search-screens");
const searchResults = document.querySelector("#search-results");
const searchResultsBackup = document.querySelector("#search-results-backup");
const searchInitScreen = document.querySelector("#search-initial-screen");

function setFormEnabled(form, enabled) {
	for (let i of form.querySelectorAll("input, button, textarea, select")) {
		i.disabled = !enabled;
	}
	return enabled;
}

function onSearchReady() {
	setFormEnabled(form, true);
	screens.classList.add("search-ready");
}

function setIsLoading(isLoading) {
	screens.classList.remove("search-loading");
	if (isLoading) {
		setFormEnabled(form, false);
		if (searchResults.hasChildNodes()) {
			searchResultsBackup.replaceChildren(...searchResults.childNodes);
			searchResults.replaceChildren();
		}
		screens.classList.add("search-loading");
	} else {
		setFormEnabled(form, true);
		searchResultsBackup.replaceChildren();
	}
	return isLoading;
}

setTimeout(onSearchReady, 1000);
setTimeout(() => setIsLoading(true), 1500);
setTimeout(() => setIsLoading(false), 2000);
