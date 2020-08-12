$(document).ready(function () {
	$("#search").on("click", function () {
		var cityName = $("#city").val()
		console.log(cityName)
		searchWeather(cityName)
		searchForecast(cityName)
	})



	function searchWeather(citySearch) {
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=8439103e642ad3d44f7bafaa0e94e84f&units=imperial",
			dataType: "json",
			success: function (data) {
				var temp = data.main.temp;
				console.log(data.main.temp)
				var humidity = data.main.humidity;
				console.log(data.main.humidity)
				var speed = data.wind.speed;
				console.log(data.wind.speed)
				var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
				var newCard = `<div class="card" style="width: 18rem;">
				<div class="card-header">
				  ${citySearch}
			
				</div>
				<ul class="list-group list-group-flush">
				  <li class="list-group-item">Temp: ${temp}</li>
				  <li class="list-group-item">Humidity: ${humidity}</li>
				  <li class="list-group-item">Wind Speed: ${speed}</li>
				</ul>
			  </div>`
				var weather = $("today");
				console.log(weather)
				$("#today").empty()
				$("#today").append(img, newCard)
				// show the data on the DOM
			}
		})
	}



	function searchForecast(citySearch) {
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=8439103e642ad3d44f7bafaa0e94e84f&units=imperial",
			dataType: "json",
			success: function (data) {
				// console.log(data.list[0].dt_txt)
				console.log(data)

				for (var i = 0; i < data.list.length; i++) {
					let curr = data.list[i]
					var date = data.list.dt_txt;
					var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
					var temp = data.list.temp[i];
					var humidity = data.list.humidity[i];
					var speed = data.wind.speed[i];

					$("#forecast").append(date, img, temp, humidity, newCard)
				}
				
			}
		})

	}

	// perpare the url that is different
	// is returning and array of objects
	// loop the array inside the object in the response of the ajax call and append the card to the other section


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

