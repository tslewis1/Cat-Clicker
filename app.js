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

// Admin form functionality. Opens form when admin button is clicked. 
// When user clicks cancel, form closes. When user clicks submit, values
// passed in replace the current cat's values.

	$("#admin").click(function() {
		$("#adminForm").toggle();
		$("#cancelButton").click(function() {
			$("#adminForm").hide();
		})
	});

	$("input").keyup(function() {
		let value = $(this).val();
		$("h3").text(value);
	});

});