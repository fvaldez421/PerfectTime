
function update() {
  $('#clock').html(moment().format("MMM Do YYYY, h:mm:ss a"));
}

setInterval(update, 1000);



var chartData = {
		labels: [
			"Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13", "Mar 14", "Mar 15", "Mar 16", "Mar 17", "Mar 18", "Mar 19", "Mar 20", "Mar 21", "Mar 22", "Mar 23", "Mar 24", "Mar 25", "Mar 26", "Mar 27", "Mar 28"
		],
		datasets: [{
			type: "line",
			label: "Basal Body Temp",
			borderColor: "rgb(24, 90, 104)",
            backgroundColor: "rgb(24, 90, 104)",
            fill: false,
            radius: 5,
            hoverRadius: 6,
            spanGaps: true,
            yAxisID: "temp-left-y",
            data: [98.18, 97.79, 98.2, 98.34, 97.43, 97.66, 97.39, 
            	   97.22, 97.69, 97.66, 97.76, 97.67, 97.79, 97.64,
            	   97.79, 98.18, 98.47, 98.61, 98.59, 98.7, 98.60,
            	   98.51, 98.51, 98.61, 98.92, 98.08, 98.33, 98.48]
		}, {
			type: "line",
			label: "Happiness",
			borderColor: "rgb(182, 166, 232)",
            backgroundColor: "rgb(182, 166, 232)",
            borderDash: ([5,15]),
            fill: false,
            spanGaps: true,
            yAxisID: "happy-right-y",
            data: [3, 4, 3, 5, 5, 6, 6, 5, 7, 8, 8, 8, 7, 8, 7, 8, 9, 10, 9, 8, 9, 9, 8, 7, 4, 5, 4, 3]
		}, {
			type: "line",
			label: "Energy",
			borderColor: "rgb(50, 159, 210)",
			backgroundColor: "rgb(50, 159, 210)",
            borderDash: ([3,6]),
            fill: false,
            spanGaps: true,
            yAxisID: "energy-right-y",
            data: [2, 2, 3, 4, 7, 7, 8, 9, 7, 8, 10, 9, 8, 9, 7, 10, 8, 9, 9, 6, 5, 5, 4, 4, 3, 3, 3, 4]
		}]
	};

	var ctx = $("#cycle-chart");
	var myChart = new Chart(ctx, {
		type: "line",
		data: chartData,
		options: {
			responsive: true,
			scales: {
				yAxes: [{
					id: "temp-left-y",
					type: "linear",
					position: "left",
					ticks: {
						min: 96.5,
						max: 99.5,
						autoSkip: false
					}
				}, {
					id: "happy-right-y",
					type: "linear",
					position: "right",
					ticks: {
						beginAtZero: true,
						min: 0,
						max: 10
					},
					gridLines: {
						display: false
					}
				}, {
					id: "energy-right-y",
					type: "linear",
					position: "right",
					ticks: {
						display: false,
						beginAtZero: true,
						min: 0,
						max: 10
					},
					gridLines: {
						display: false
					}
				}]
			}
		}

	});

$(document).ready(function() {

	$("#submitButton2").on("click", function(event) {
		event.preventDefault();

		var date = $("#date-input").val().trim();
		var bbt = $("#Q1").val().trim();
		var mood = $("#Q2").val().trim();
		var energy = $("#Q3").val().trim();
		var symptoms = $("#Q4").val();
		var cervMuc = $("#Q5").val().trim();
		var intercourse = $("#Q6").val().trim();
		var conceptMeth = $("#Q7").val().trim();
		var meds = $("#Q8").val().trim();
		var supplements = $("#Q9").val().trim();

		var info = {
		    date: date,
		   	bbt: bbt,
		    mood: mood,
		   	energy: energy,
		    symptoms: symptoms,
		    cervMuc: cervMuc,
		    intercourse: intercourse,
		   	conceptMeth: conceptMeth,
		    meds: meds,
		    supplements: supplements
		};

		$.post("/api/daily", info).done(function(data){
		});
	});
	
})