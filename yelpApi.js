const BASE_URL = "http://yelp.ongandy.com";

const YELP_KEY =
  "Cd4enAsuP8-RJG72Vu-KcFGjRFkklvvzsNer3NMokc800e5Apv5KhDncyYi56ptObgLpyU5EMxJoq4HueQ_vOmDd5igDri7DMW-lP4VNHu8TZ3fWLGp3reHoqTcWW3Yx";

class Yelp {
  static getLocalBusinesses({ lat: latitude, lng: longitude }, term = "food") {
    const query = "businesses";
    const config = {
      crossDomain: true,
      method: "POST",
      url: `${BASE_URL}/${query}`,
      data: {
        latitude,
        longitude,
        term,
        access_token: YELP_KEY
      }
    };

    return $.ajax(config);
  }
}

function YelpMap(response={lat:33.633985,lng:-117.733393},businesses={name:"Learning Fuze",coordinates:{latitude:null,longitude:null}}){

      let myLatLng = {lat:response.lat, lng:response.lng};
      let businessesLocation={lat:businesses.coordinates.latitude,lng:businesses.coordinates.longitude};
    
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
      });
    
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: businesses.name
      });
    }
   






