// Foursquare API Info
const clientId = 'UUPS02EXIGDC1HMXQGEJQI4SGDS11DSCHNSVFV5WEHJ45THM';
const clientSecret = 'IBM50LLIGR1ERI3QNGN3S3J3Z5XP1PLXKXFDX0IXYBINH3QE';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';
const imgPrefix = 'https://igx.4sqi.net/img/general/150x200';

// APIXU Info
const apiKey = '8111d5d309fb4dc4bfd123048172311';
const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// AJAX functions
async function getVenues(){
  const city = $input.val();
  const urlToFetch = url + city + '&venuePhotos=1&limit=10&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20171123';
  try{
    let response = await fetch(urlToFetch);
    if (response.ok){console.log(response)

    } throw new Error('Request failed!');
  }
  catch(error){console.log(error)}
}

// Render functions
function renderVenues(venues) {
  $venueDivs.forEach(($venue, index) => {
    let venueContent =
      '<h2>' + venues[index].name + '</h2>' +
      '<img class="venueimage" src="' + imgPrefix +
      '<img suffix>' + '"/>' +
      '<h3>Address:</h3>' +
      '<p>' + '<address>' + '</p>' +
      '<p>' + '<city>' + '</p>' +
      '<p>' + '<country>' + '</p>';
    $venue.append(venueContent);
  });
  $destination.append('<h2>' + venues[0].location.city + '</h2>');
}

function renderForecast(days) {
  $weatherDivs.forEach(($day, index) => {
    let weatherContent =
      '<h2> High: ' + '<max temp>' + '</h2>' +
      '<h2> Low: ' + '<min temp>' + '</h2>' +
      '<img src="http://' + '<icon>' +
      '" class="weathericon" />' +
      '<h2>' + '<day of the week>' + '</h2>';
    $day.append(weatherContent);
  });
}

function executeSearch() {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDivs.forEach(day => day.empty());
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues();
  getForecast();
  return false;
}

$submit.click(executeSearch)
