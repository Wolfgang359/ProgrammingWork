const APPID = "2659144553d7f4e3dac283eeb8bd7e7f";
const url = `http://api.openweathermap.org/data/2.5/forecast?appid=${APPID}`;

$(document).ready(function () {
  $("#search-button").on("click", function() {
    const searchValue = $("#search-value").val();

    // clear input box
    $("#search-value").val("");

    searchWeather(searchValue);
  }); // closes $("#search-button").on("click",...);

  $(".history").on("click", "li", function() {
    searchWeather($(this).text());
  });

  function makeRow(text) {
    const li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
    $(".history").append(li);
  }

  function updateSearchHistory(searchValue) {
    // create history link for this search
    if (history.indexOf(searchValue) === -1) {
      history.push(searchValue);
      window.localStorage.setItem("history", JSON.stringify(history));
    }
  }

  function createHtmlCurrentWeather(data) {
        // create html content for current weather
        const title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
        const card = $("<div>").addClass("card");
        const wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
        const humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
        const temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
        const cardBody = $("<div>").addClass("card-body");
        const img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

        // merge and add to page
        title.append(img);
        cardBody.append(title, temp, humid, wind);
        card.append(cardBody);
        $("#today").append(card);
  }

  async function searchWeather(searchValue) {
    const params = {
      q: searchValue,
      units: imperial,
    };
  
    try {
      const data = await $.ajax({
        type: "GET",
        url,
        dataType: "json",
        data: params,
      });

      updateSearchHistory(searchValue);
      makeRow(searchValue);
      // clear any old content
      $("#today").empty();
      createHtmlCurrentWeather(data);

      // call follow-up api endpoints
      getForecast(searchValue);
      getUVIndex(data.coord.lat, data.coord.lon);
      
    } catch (error) {
      console.log(error);
    }
  }
  
  async function getForecast(searchValue) {
    const params = {
      q: searchValue,
      units: "imperial",
    }

    try {
      const data = await $.ajax({
        type: "GET",
        url,
        dataType: "json",
        data: params,
      });
      $("#forecast").html(`<h4 class="mt-3">5-Day Forecast:</h4>`).append(`<div class="row">`);

      // loop over all forecasts (by 3-hour increments)
      data.list.forEach(forecast => {
        if (forecast.dt_txt.indexOf("15:00:00") !== -1) {
          // create html elements for a bootstrap card
          const col = $("<div>").addClass("col-md-2");
          const card = $("<div>").addClass("card bg-primary text-white");
          const body = $("<div>").addClass("card-body p-2");

          const title = $("<h5>").addClass("card-title").text(new Date(forecast.dt_txt).toLocaleDateString());

          const img = $("<img>").attr("src", `http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`);

          const p1 = $("<p>").addClass("card-text").text(`Temp:${forecast.main.temp_max}°F`);
          const p2 = $("<p>").addClass("card-text").text(`Humidity:${forecast.main.humidity}%`);

          // merge together and put on page
          col.append(card.append(body.append(title, img, p1, p2)));
          $("#forecast .row").append(col);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getUVIndex(lat, lon) {
    const url = `http://api.openweathermap.org/data/2.5/uvi?appid=${APPID}&lat=${lat}&lon=${lon}`;
    const params = {
      lat,
      lon,
    };
  
    try {
      const data = await $.ajax({
        type: "GET",
        url,
        dataType: "json",
        data: params
      });
      const uv = $("<p>").text("UV Index: ");
      const btn = $("<span>").addClass("btn btn-sm").text(data.value);

      // change color depending on uv value
      if (data.value < 3) {
        btn.addClass("btn-success");
      }
      else if (data.value < 7) {
        btn.addClass("btn-warning");
      }
      else {
        btn.addClass("btn-danger");
      }

      $("#today .card-body").append(uv.append(btn));
    } catch (error) {
      console.log(error);
    }
  }

  // get current history, if any
  const history = JSON.parse(window.localStorage.getItem("history")) || [];

  if (history.length > 0) {
    searchWeather(history[history.length-1]);
  }

  history.forEach(item => makeRow(item));

});
