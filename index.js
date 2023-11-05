const ham = document.querySelector(".ham");
var dropDown = document.querySelector(".dropDown");
var drop = document.querySelector(".drop");
const menuIcon = document.getElementById("menuIcon");
const computedStyle = getComputedStyle(dropDown);
const displayValue = computedStyle.getPropertyValue("display");
const cancel = document.querySelector(".cancel");

// Get the "Show More" buttons and the hidden card
const leftShowMoreButton = document.querySelector(".left-top");
const rightShowMoreButton = document.querySelector(".right-top");
const hiddenCard = document.querySelector(".hidden");
const showCard = document.querySelector(".showCard");

/* nav bar */
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

// Add a click event listener to the left "Show More" button
leftShowMoreButton.addEventListener("click", function () {
	hiddenCard.style.display = "none";
	showCard.style.display = "block";
	leftShowMoreButton.style.display = "none";
	rightShowMoreButton.style.display = "flex";
	console.log("left");
});

// Add a click event listener to the right "Show More" button
rightShowMoreButton.addEventListener("click", function () {
	hiddenCard.style.display = "block";
	rightShowMoreButton.style.display = "none";
	leftShowMoreButton.style.display = "flex";
	showCard.style.display = "none";
	console.log("right");
});
