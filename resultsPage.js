$(document).ready(initializeApp);

function initializeApp() {
  //grab url params here
  const { search } = window.location;
  const [, countryCode] = search.split("=");
  const countryName = CountryApi.getCountryNameFromCode(countryCode);
  const countryLogoUrl = CountryApi.getCountryLogoUrl(countryCode)
  console.log(countryLogoUrl);
  $('h2.name').text(countryName);
  $('.flag img').attr('src', countryLogoUrl);
  //getFoodFrom Martin;
  const food = CountryApi.getFoodFromCountry(countryCode);
  getWikipediaDescription(food);
}



function getWikipediaDescription(inputStr) {
  let pageTitle = null;
  let pageID = null;
  const urlSearchStr = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + inputStr + "&format=json&srprop=snippet";
  let descrSearchStr = null;

  $.ajax({
    url: urlSearchStr,
    dataType: 'jsonp',

    success: function getPageTitle(data) {
      const paulsTitle = data.query.search[0].title;
      pageTitle = data.query.search[0].title;
      pageID = data.query.search[0].pageid;
      descrSearchStr = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=" + pageTitle;
      getDescription();
    }
  });

  function getDescription() {
    $.ajax({
      url: descrSearchStr,
      dataType: 'jsonp',

      success: function (data) {
        var pageSummary = data.query.pages[pageID].extract
        console.log('pageSummary:', pageSummary)
        /*****Save pageSummary onto DOM element here*****/

        /*$('DOMelement').text(pageSummary) */
        /***** ^^Do it here^^ ******/
      }
    });
  }
}