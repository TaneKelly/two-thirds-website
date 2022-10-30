const scriptURL =
	"https://script.google.com/macros/s/AKfycbzyXNlqYJTZtnkJFwYv5M69H-Dxs3NO1FmtBFSbw6Uq4__vL9LUWXzhDgTBHCeIJ7L3/exec";
const form = document.forms["contact-us"];

form.addEventListener("submit", (e) => {
	e.preventDefault();
	fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then((response) => window.alert("Message sent!"))
		.catch((error) => window.alert("There was an error. please try again"));
});
