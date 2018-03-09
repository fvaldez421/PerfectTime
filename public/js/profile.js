

$(document).ready(function() {

	var googleId = $("#googleId").html()

	var name = $("#q1").val().trim();
	var age = $("#q2").val().trim();
	var height = $("#q3").val().trim();
	var weight = $("#q4").val().trim();
	var gender = $("#q5").val().trim();
	var conceive = $("#q6").val();

	var info = {
		googleId: googleId,
	    nickName: name,
	   	age: age,
	    height: height,
	   	weight: weight,
	    gender: gender,
	    conception: conceive
	};
	console.log("Im loaded");

	$("#submitButton").on("click", function(event) {
		event.preventDefault();
		console.log(info.nickName);
		console.log("name here: " + name);
		console.log("age: " + age);
		console.log(height);
		console.log(weight);
		console.log(gender);


		$.ajax({
			method: "PUT",
			url: "/api/profile", 
			data: info
		}).done(function(data){
			console.log("shut up!")
			console.log("im submitting");
		});
	});
	
})