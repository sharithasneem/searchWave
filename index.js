const ham = document.querySelector(".ham");
var dropDown = document.querySelector(".dropDown");
const menuIcon = document.getElementById("menuIcon");
const computedStyle = getComputedStyle(dropDown);
const displayValue = computedStyle.getPropertyValue("display");
const cancel = document.querySelector(".cancel");

menuIcon.addEventListener("click", () => {
	if (displayValue == "none") {
		dropDown.style.display = "flex";
	}
});
cancel.addEventListener("click", () => {
	if (displayValue == "none") {
		dropDown.style.display = "none";
	}
});
