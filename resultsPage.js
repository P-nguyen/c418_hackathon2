$(document).ready(initializeApp);

function initializeApp() {
  //grab url params here
  const { search } = window.location;
  const [, countryCode] = search.split("=");
  const countryName = CountryApi.getCountryNameFromCode(countryCode);
  const countryLogoUrl = CountryApi.getCountryLogoUrl(countryCode)
  console.log(countryLogoUrl);
  $('h2.name').text(countryName);
  $('.flag img').attr('src',countryLogoUrl);
}
