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

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Revealing
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
	const [entry] = entries;

	if (!entry.isIntersecting) return;

	entry.target.classList.remove("section__hidden");
	observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
	root: null,
	threshold: 0.15
});

allSections.forEach(function (section) {
	sectionObserver.observe(section);
	section.classList.add("section__hidden");
});
