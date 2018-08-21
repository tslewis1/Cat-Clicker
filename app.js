$(document).ready(function() {

	let clicks = 0;

	$("#liLucifer").click(function() {
		$("#Lucifer").toggle();
		$("#Lucifer").siblings().css("display", "none");
		clicks = 0;
		$(".clicks").text("0 clicks");
	});

	$("#liFigaro").click(function() {
		$("#Figaro").toggle();
		$("#Figaro").siblings().css("display", "none");
		clicks = 0;
		$(".clicks").text("0 clicks");
	});

	$("#liMarie").click(function() {
		$("#Marie").toggle();
		$("#Marie").siblings().css("display", "none");
		clicks = 0;
		$(".clicks").text("0 clicks");
	})

	$("#liSimba").click(function() {
		$("#Simba").toggle();
		$("#Simba").siblings().css("display", "none");
		clicks = 0;
		$(".clicks").text("0 clicks");
	})

	$("#liRajah").click(function() {
		$("#Rajah").toggle();
		$("#Rajah").siblings().css("display", "none");
		clicks = 0;
		$(".clicks").text("0 clicks");
	})

	$("img").click(function() {
		clicks++;
		$(".clicks").text(clicks + " clicks");
	});
});