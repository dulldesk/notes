// cannot directly assign .focus function?
let focus = _ => document.getElementById("searchbar").focus();
let last_hr;

function filter(phrase) {
	phrase = phrase.toLowerCase()
	try {last_hr.classList.remove("hide"); last_hr = undefined;} catch {}
	
	document.querySelectorAll(".list__node").forEach(i => {
		if (i.getAttribute("data-tags").toLowerCase().includes(phrase)) {
			i.classList.remove("hide");
			last_hr = i.querySelector("hr");
		} else i.classList.add("hide");
	});
	try {last_hr.classList.add("hide")} catch {}
}

function populateQuery() {
	const urlParams = new URLSearchParams(window.location.search);
	const query = urlParams.get("q")
	filter(query);
	document.getElementById("searchbar").value = query;
}

window.addEventListener("load", () => {
	focus();
	window.addEventListener("keyup", focus);
	populateQuery();
});
