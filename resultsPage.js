$(document).ready(initializeApp);

function initializeApp() {
  //grab url params here
  const { search } = window.location;
  const [, countryCode] = search.split("=");

  const countryName = CountryApi.getCountryNameFromCode(countryCode);
  const countryLogoUrl = CountryApi.getCountryLogoUrl(countryCode);
  const food = CountryApi.getFoodFromCountry(countryCode);
  ajaxGoogleImageSearch(food); //insert name of food as string here
  getWikipediaDescription(food);
  YoutubeApi.youtubeServerCall(food);
  
  renderCountryName(countryName);
  renderLogoImage(countryLogoUrl);
  
  addEventHandlers();
}

function addEventHandlers() {
  $('.brand').on('click', returnToHomepage );
  $(".modal").on("click", closeYoutubeModal);
}

function renderCountryName(name) {
  $("h2.name").text(name);
}

function renderLogoImage(url) {
  $(".flag img").attr("src", url);
}

function returnToHomepage(){
    window.location.href = ( "index.html" );
}

function ajaxGoogleImageSearch( inputFoodStr ){
    var ajaxObject = {
        dataType: 'json',
        data:{
          key: "AIzaSyCV18q5ZdhaazVuu7Msq2td6RMUbSKb_o8",
            q: inputFoodStr,
            type: 'image/jpeg',
            imgSize: 'huge',
            cx: "010569814504410284789:dq0xetlzofa"
        },
        url: "https://www.googleapis.com/customsearch/v1",
        method: "GET",
        success: function(response){
          console.log(response);
          console.log(response.items["1"].pagemap.cse_image["0"].src);
        }
    }
    $.ajax(ajaxObject);
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