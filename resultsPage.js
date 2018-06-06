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
  $('.brand').on('click', returnToHomepage );
  ajaxGoogleImageSearch();
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
