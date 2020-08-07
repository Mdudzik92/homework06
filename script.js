$(document).ready(function () {
	$("#search").on("click", function () {
		var cityName = $("#city").val()
		console.log(cityName)
		searchWeather(cityName)
	})

	$

	function searchWeather(citySearch) {
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=8439103e642ad3d44f7bafaa0e94e84f",
			dataType: "json",
			success: function (data) {
				console.log(data.main.temp)
			}
		})
	}

	// function searchWeather(citySearch) {
	// 	$.ajax({
	// 		url: "http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=8439103e642ad3d44f7bafaa0e94e84f",
	// 		dataType: "json",
	// 		success: function (data) {
	// 			console.log(data)
	// 		}
	// 	})
	// }

})

