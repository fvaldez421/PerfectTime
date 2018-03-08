

$(document).ready(function() {

	var nickName = $("#q1").val().trim();
	var age = $("#q2").val().trim();
	var height = $("#q3").val().trim();
	var weight = $("#q4").val().trim();
	var gender = $("#q5").val().trim();
	var conceive = $("#q8").val().trim();

	var info = {
	    name: nickName,
	   	age: age,
	    height: height,
	   	weight: weight,
	    gender: gender,
	    conceive: conceive
	};
	console.log("Im loaded");

	$("#submitButton").on("click", function(event) {
		event.preventDefault();
		console.log("im submitting");
		// debugger;
		$.post("/api/profile", info).done(function(data){
			console.log("shut up!")
		});
	});
	
})