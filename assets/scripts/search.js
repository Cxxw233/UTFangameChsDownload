const searchDataURL = document.querySelector("link[name='search-data']").href;
let searchData = {};
let searcher;
const searcherOptions = {
	keys: [
		"title",
		"authors"
	],
	getFn: getSearchDataProp
};

const form = document.querySelector("form[name='search-form']");
const screens = document.querySelector(".search-screens");
const searchResults = document.querySelector("#search-results");
const searchResultsBackup = document.querySelector("#search-results-backup");
const searchInitScreen = document.querySelector("#search-initial-screen");
const searchResultTemplate = document.querySelector("#template-search-result").innerHTML;

async function initSearchData() {
	const response = await fetch(searchDataURL);
	searchData = await response.json();
}

function getSearchDataProp(obj, _path) {
	let path = typeof _path == "string" ? _path.split(".") : _path.slice();
	if (path[0] != "authors")
		return Fuse.config.getFn(obj, path);

	const translatedAuthors = obj.authors.map(x => searchData.authors[x]);

	path.shift();
	if (path.length == 0)
		return translatedAuthors;
	return Fuse.config.getFn(translatedAuthors, path);
}

async function initalizeSearcher() {
	searcher = new Fuse(searchData.translations, searcherOptions);
}

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

function setLoading(isLoading) {
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

async function renderSearchResults(results) {
	try {
		const output = ejs.render(searchResultTemplate, { results: results });
		searchResults.innerHTML = output;
	} catch (e) {
		searchResults.innerText = e;
	}
}

async function executeSearch(query) {
	setLoading(true);

	const results = searcher.search(query);
	renderSearchResults(results);

	setLoading(false);
}

function onSearchSubmit(e) {
	e.preventDefault();

	const query = form.elements.query.value;

	let url = new URL(location);
	url.searchParams.set("query", query);
	history.pushState("", "", url);

	executeSearch(query);
}
form.addEventListener("submit", onSearchSubmit);

async function init() {
	await initSearchData();
	await initalizeSearcher();
	onSearchReady();

	let url = new URL(location);
	let query = url.searchParams.get("query");
	if (query)
		executeSearch(query);
}
document.addEventListener("DOMContentLoaded", () => init());
