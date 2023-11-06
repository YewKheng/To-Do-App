const inputArea = document.getElementById("input-area");
const listContainer = document.getElementById("list-container");

addTask = () => {
	if (inputArea.value === "") {
		alert("Please write something.");
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputArea.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputArea.value = "";
	saveData();
};

listContainer.addEventListener(
	"click",
	(event) => {
		if (event.target.tagName === "LI") {
			event.target.classList.toggle("checked");
			saveData();
		} else if (event.target.tagName === "SPAN") {
			event.target.parentElement.remove();
			saveData();
		}
	},
	false
);

saveData = () => {
	localStorage.setItem("data", listContainer.innerHTML);
};

showTask = () => {
	listContainer.innerHTML = localStorage.getItem("data");
};
showTask();
