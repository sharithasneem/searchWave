const ham = document.querySelector(".ham");
var dropDown = document.querySelector(".dropDown");
var drop = document.querySelector(".drop");
const menuIcon = document.getElementById("menuIcon");
const computedStyle = getComputedStyle(dropDown);
const displayValue = computedStyle.getPropertyValue("display");
const cancel = document.querySelector(".cancel");
const pricing_card = document.querySelector(".pricing-card");

menuIcon.addEventListener("click", () => {
	if (displayValue == "none") {
		dropDown.style.display = "flex";
		drop.style.display = "flex";
	}
});
cancel.addEventListener("click", () => {
	if (displayValue == "none") {
		dropDown.style.display = "none";
	}
});
