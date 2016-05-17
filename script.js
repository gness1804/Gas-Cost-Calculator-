function calcCost() {
	var m = document.getElementById("mileage").value;
	var y = document.getElementById("mpg").value;
	var c = document.getElementById("costgas").value;
	var r = m/1;
	var s = 1/y;
	var t = c/1;
	var u = 1/1;
	var q = Math.round(r * s* t* u);
	document.getElementById("test").innerHTML = "Your estimated gas cost is" + " " + "$" +q;
}