window.onload = function() {
	setTimeout(function() {
		let getLoader = document.getElementsByClassName("loader")[0];
		getLoader.setAttribute("id", "endOfLoader");
	}, 1000);
}