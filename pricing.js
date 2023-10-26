const text = "How It Works";
const cursor = document.getElementById("cursor");
let index = 0;

function type() {
	if (index < text.length) {
		document.querySelector(".animated-text").textContent += text.charAt(index);
		index++;
		setTimeout(type, 100);
	} else {
		cursor.style.display = "none";
	}
}

type();
