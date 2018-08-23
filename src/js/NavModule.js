(function NavModule() {

	const $ = require("jquery");
	const hamburger = $(".hamburger");
	const navMenu = $("nav ul");
	const navLink = $("nav ul a");
	const container = $(".container");
	let windowSize = window.innerWidth;
	let scrollTarget;

	// Hamburger toggle    
	hamburger.on("click", hamburgerToggle)

	function hamburgerToggle() {
		hamburger.toggleClass("is-active");
		navMenu.toggleClass("show_navigation");
	}
	
	// Checking window viewport and scroll target
	function checkWindow() {
		windowSize = window.innerWidth;
		if (windowSize > 768) {
			scrollTarget = (container.offset().top-104); // 104px = margin-top + navbar height
		} else {
			scrollTarget = container.offset().top
		}
	}
	checkWindow();

	// NavLinks - close menu at click, scrolls to section
	navLink.on('click', closeMenu)
	
	function closeMenu() {
		checkWindow();
		hamburgerToggle();
		$("html, body").stop().animate({
					scrollTop: scrollTarget
			}, 1000);	
	}
	
})();
