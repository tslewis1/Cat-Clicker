$(function() {

	var model = {
		cats: [
			{
				name: "Lucifer", 
				image: "images/Lucifer.jpg",
				clicks: 0
			},
			{
				name: "Figaro", 
				image: "images/Figaro.jpg",
				clicks: 0
			},
			{
				name: "Marie", 
				image: "images/Marie.jpeg",
				clicks: 0
			},
			{
				name: "Simba", 
				image: "images/Simba.jpg",
				clicks: 0
			},
			{
				name: "Rajah", 
				image: "images/Rajah.jpg",
				clicks: 0
			},
		],
};

	var octopus = {

	};

	var navListView = {

		// Initializes the cat name/navigation list view 
		init: function() {
			// the nav-list-view div
			this.$navListView = $('#nav-list-view');
			// the cat image list items
			this.catImageTemplate = $('script[data-template="cat-display-area"]').html();
			this.catNavList = $('<ul id="cat-nav-list"></ul>');

			this.$navListView.click('a', function() {
				let cat = $(this).parents().data();
				octopus.selectedCat(cat);
			});

			this.render();
		},

		// Render function visualizes the cat name/navigation list view
		render: function() {
			let $navListView = this.$navListView,
				catImageTemplate = this.catImageTemplate,
				catNavList = this.catNavList;

			octopus.getAllCats().forEach(function(cat) {
				let currentTemplate = catImageTemplate
				.replace(/{{id}}/, cat.id)
				.replace(/{{name}}/, cat.name);
				catNavList.append(currentTemplate);
				return false;
			});

			$navListView.html(catNavList);
		}
	};

	var displayView = {
		
	};

	var adminFormView = {

	};

	// octopus.init();
});