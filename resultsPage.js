$(document).ready(initializeApp);

function initializeApp() {
  //grab url params here
  const { search } = window.location; // gets current url
  const [, countryCode] = search.split("="); // splits url into array and gets the second index.

  const countryName = CountryApi.getCountryNameFromCode(countryCode);
  const countryLogoUrl = CountryApi.getCountryLogoUrl(countryCode);
  const food = CountryApi.getFoodFromCountry(countryCode);
  ajaxGoogleImageSearch(food); //searches google search API for food
  getWikipediaDescription(food); // gets wiki description
  YoutubeApi.youtubeServerCall(food); //gets related videos from youtube APi

  renderCountryName(countryName); //display's country name
  renderLogoImage(countryLogoUrl); //displays country flag

  //data.results[0].geometry.location
  Geolocation.cityLocation("irvine").done(({ results: [first] }) => {
    const { location } = first.geometry;
    Yelp.getLocalBusinesses(location, food).done(response => {
      // YelpMap.renderMap(location, response);
      renderYelpResults(response);
    });
  });

  addEventHandlers();
}

function renderYelpResults({ businesses }) {
  console.log(businesses);
  businesses.forEach(business => {
    const {
      name,
      rating,
      review_count,
      display_phone,
      image_url,
      location,
      url
    } = business;
  });
}

function addEventHandlers() {
  $(".brand").on("click", returnToHomepage);
  $(".modal").on("click", closeYoutubeModal); //closes fixed youtube modal
  document.querySelector(".flag img").addEventListener("error", addDummyFlag);
}

function renderCountryName(name) {
  $("h2.name").text(name);
}

function renderLogoImage(url) {
  $(".flag img").attr("src", url);
}

function addDummyFlag() {
  $(".flag img").attr("src", "images/UN_flag.png");
}

function returnToHomepage() {
  window.location.href = "index.html";
}

//AIzaSyDCZkB-dNOWPZKRKZ8qExgMivNbyyAUcPQ
function ajaxGoogleImageSearch(inputFoodStr) {
  var ajaxObject = {
    dataType: "json",
    data: {
      key: "",
      q: `${inputFoodStr}+gourmet+meal`,
      num: 2,
      type: "image/jpeg",
      imgSize: "huge",
      cx: "010569814504410284789:dq0xetlzofa",
      safe: "high"
    },
    url: "https://www.googleapis.com/customsearch/v1",
    method: "GET",
    success: function(response) {
      let headerHtml = makeheader(inputFoodStr);
      let foodHeaderTag = $("<h1>").html(headerHtml);
      let foodImgTag = $("<img>").attr(
        "src",
        response.items["1"].pagemap.cse_image["0"].src
      );
      $(".food-section").prepend(foodHeaderTag, foodImgTag);
    },
    error: function() {
      let headerHtml = makeheader(inputFoodStr);
      let foodHeaderTag = $("<h1>").html(headerHtml);
      $(".food-section").prepend(foodHeaderTag);
    }
  };
  $.ajax(ajaxObject);
}

function makeheader(inputString) {
  let strArray = inputString.split(" "); //splits string into array
  let result = "";
  for (let i = 0; i < strArray.length; i++) {
    // concats html into result for $.html
    result += `<span>${strArray[i][0]}</span>${strArray[i].substr(
      1,
      strArray[i].length
    )} `;
  }
  return result;
}

function getWikipediaDescription(inputStr) {
  let pageTitle = null;
  let pageID = null;
  const urlSearchStr =
    "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" +
    inputStr +
    "&format=json&srprop=snippet";
  let descrSearchStr = null;

  $.ajax({
    url: urlSearchStr,
    dataType: "jsonp",

    success: function getPageTitle(data) {
      const paulsTitle = data.query.search[0].title;
      pageTitle = data.query.search[0].title;
      pageID = data.query.search[0].pageid;
      descrSearchStr =
        "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=" +
        pageTitle;
      getDescription();
    }
  });

  function getDescription() {
    $.ajax({
      url: descrSearchStr,
      dataType: "jsonp",
      success: function(data) {
        var pageSummary = data.query.pages[pageID].extract;
        /*****Save pageSummary onto DOM element here*****/
        $(".wikiDescription").text(pageSummary);
        /*$('DOMelement').text(pageSummary) */
        /***** ^^Do it here^^ ******/
      }
    });
  }
}
