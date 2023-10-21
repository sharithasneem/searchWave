const ham = document.querySelector(".ham");
const nav = document.querySelector(".nav");
var dropDown = document.querySelector(".dropDown");
const menuIcon = document.getElementById("menuIcon");
const computedStyle = getComputedStyle(dropDown);
const displayValue = computedStyle.getPropertyValue("display");

ham.addEventListener("click", () => {
	nav.classList.toggle("active");
});

menuIcon.addEventListener("click", () => {
	menuIcon.classList.toggle("close");
	console.log(dropDown);

	if (displayValue == "none") {
		dropDown.style.display = "flex";
	}
});
const cancelIcon = document.getElementById("cancelIcon");
const dropDownMenu = document.getElementById("dropDownMenu");

menuIcon.addEventListener("click", () => {
	menuIcon.classList.toggle("close");
	cancelIcon.style.display = "block";
	dropDownMenu.style.display = "block";
});

cancelIcon.addEventListener("click", () => {
	menuIcon.classList.toggle("close");
	cancelIcon.style.display = "none";
	dropDownMenu.style.display = "none";
});
