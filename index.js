const ham = document.querySelector(".ham");
var dropDown = document.querySelector(".dropDown");
var drop = document.querySelector(".drop");
const menuIcon = document.getElementById("menuIcon");
const computedStyle = getComputedStyle(dropDown);
const displayValue = computedStyle.getPropertyValue("display");
const cancel = document.querySelector(".cancel");
const leftShowMoreButton = document.querySelector(".left-top");
const rightShowMoreButton = document.querySelector(".right-top");
const hiddenCard = document.querySelector(".hidden");
const showCard = document.querySelector(".showCard");
const faqCards = document.querySelectorAll(".faq-card");

// Add click event listeners to each question
faqCards.forEach((card, index) => {
	const question = card.querySelector(".question");
	const answer = card.querySelector(".answer");

	question.addEventListener("click", () => {
		// Toggle answer visibility
		if (answer.style.display === "none") {
			answer.style.display = "block";
			question.classList.add("active"); // Add a class to style the active question
		} else {
			answer.style.display = "none";
			question.classList.remove("active"); // Remove the active class
		}
	});
});

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
