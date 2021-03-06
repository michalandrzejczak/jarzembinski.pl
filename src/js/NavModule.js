import $ from 'jquery';

(function NavModule() {

	const hamburger = $(".hamburger"),
		navMenu = $("nav ul"),
		navLinks = $("nav ul a"),
		container = $(".container"),
		arrow = $("#scrollToTopArrow");
	let windowSize = window.innerWidth,
		scrollTime = 500,
		scrollTarget;

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
			scrollTarget = (container.offset().top-108); // 108px = margin-top of container + navbar height
		} else {
			scrollTarget = container.offset().top
		}
	}
	checkWindow();

	// NavLinks - close menu at click, scrolls to section
	navLinks.on('click', closeMenu)
	
	function closeMenu() {
		checkWindow();
		if (windowSize < 768) {
			hamburgerToggle();
		}
		if (window.pageYOffset !== 392) {  /// if offsetY is 392px movement is useless
			$("html, body").stop().animate({
				scrollTop: scrollTarget
			}, scrollTime);	
		}
	}
	
	// ScrollToTop arrow toggle is defined in App class in App.js, due to scroll event problems in react :)
	
	arrow.on('click', scrollToTop);
	
	function scrollToTop() {
		$("html, body").stop().animate({
			scrollTop: 0
		}, scrollTime)
	}
	
})();
