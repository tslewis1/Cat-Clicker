$(document).ready(function() {

	let clicks = 0;

// Cat clicking functionality. Opens cat image when nav is clicked and 
// hides siblings when another is clicked

	$("#liLucifer").click(function() {
		$("#Lucifer").toggle();
		$("#Lucifer").siblings().css("display", "none");
		clicks = 0;
		$(".clicks").text("0 clicks");
		$("#admin").show();
	});

	$("#liFigaro").click(function() {
		$("#Figaro").toggle();
		$("#Figaro").siblings().css("display", "none");
		clicks = 0;
		$(".clicks").text("0 clicks");
		$("#admin").show();
	});

	$("#liMarie").click(function() {
		$("#Marie").toggle();
		$("#Marie").siblings().css("display", "none");
		clicks = 0;
		$(".clicks").text("0 clicks");
		$("#admin").show();
	})

	$("#liSimba").click(function() {
		$("#Simba").toggle();
		$("#Simba").siblings().css("display", "none");
		clicks = 0;
		$(".clicks").text("0 clicks");
		$("#admin").show();
	})

	$("#liRajah").click(function() {
		$("#Rajah").toggle();
		$("#Rajah").siblings().css("display", "none");
		clicks = 0;
		$(".clicks").text("0 clicks");
		$("#admin").show();
	})

	$("img").click(function() {
		clicks++;
		$(".clicks").text(clicks + " clicks");
	});

// var cats = [
// 	{name: "Lucifer", image: "images/Lucifer.jpg"},
// 	{name: "Figaro", image: "images/Figaro.jpg"},
// 	{name: "Marie", image: "images/Marie.jpeg"},
// 	{name: "Simba", image: "images/Simba.jpg"},
// 	{name: "Rajah", image: "images/Rajah.jpg"}
// ];

// document.getElementById("clickableCats").innerHTML = cats[i];

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

	// function formEdit() {
	// 	let catNameInput = document.adminForm.elements.catName;
	// 	let catImgSrc = document.adminForm.elements.imageURL;
	// 	let catClicks = document.adminForm.elements.numOfClicks;

	// 	for(var i = 0; i <= catNameInput.length; i++) {
	// 		catNameInput[i].disabled = false;
	// 	}
	// }
});