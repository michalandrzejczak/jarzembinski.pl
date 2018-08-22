(function NavModule() {

		const $ = require("jquery");
		const hamburger = $(".hamburger");
		const navigation = $("nav");
		const navigationList = $("ul.navbar");

		// Hamburger toggle    
		hamburger.on("click", hamburgerToggle)
		function hamburgerToggle() {
			hamburger.toggleClass("is-active");
			navigationList.toggleClass("show_navigation");
			navigation.toggleClass("nav-toggle");
		}
})();