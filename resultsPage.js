$(document).ready(initializeApp);

function initializeApp() {
  //grab url params here
  const { search } = window.location;
  const [, countryCode] = search.split("=");

  const countryName = CountryApi.getCountryNameFromCode(countryCode);
  const countryLogoUrl = CountryApi.getCountryLogoUrl(countryCode);

  renderCountryName(countryName);
  renderLogoImage(countryLogoUrl);
//get the food of the country and pass it to servercall youtube
  YoutubeApi.youtubeServerCall("goat water");
  addEventHandlers();
}

function addEventHandlers() {
  $(".modal").on("click", closeYoutubeModal);
}

function renderCountryName(name) {
  $("h2.name").text(name);
}

function renderLogoImage(url) {
  $(".flag img").attr("src", url);
}
