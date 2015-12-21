function kissanime() {}

function toonova() {}

// function changeColor() {
// 	var btn = document.getElementById("button");
// 	btn.color = "black";
// }

function enableButton() {
	var btn = document.getElementById("button");

	if(btn.innerHTML == 'Disable') {
		btn.innerHTML = 'Enable';
		btn.setAttribute("background-color", "green");
	}

	else {
		btn.innerHTML = 'Disable';
		btn.setAttribute("background-color", "red");

	}
}