"use strict";

const nav = document.querySelector(".navi");

// SMOOTH SCROLLING

document.querySelector(".navi__list").addEventListener("click", function (e) {
	e.preventDefault();

	// Matching strategy
	if (e.target.classList.contains("navi__list--link")) {
		const id = e.target.getAttribute("href");
		document.querySelector(id).scrollIntoView({ behavior: "smooth" });
	}
});

// Fading menu buttons

const handleHover = function (e) {
	if (e.target.classList.contains("navi__list--link")) {
		const link = e.target;
		const siblings = link
			.closest(".navi")
			.querySelectorAll(".navi__list--link");
		const logo = link.closest(".navi").querySelector(".navi__logo");

		siblings.forEach((el) => {
			if (el !== link) el.style.opacity = this;
		});
		logo.style.opacity = this;
	}
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));
