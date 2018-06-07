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
        access_token: YELP_KEY,
        sort_by: 'distance',
        limit: 3
      }
    };

    return $.ajax(config);
  }
}

function YelpMap(response={lat:33.633985,lng:-117.733393},businesses=[{name:"Learning Fuze",coordinates:{latitude:33.633985,longitude:-117.733393}}]){

      let myLatLng = {lat:response.lat, lng:response.lng};
      
    
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
      });
    
      for (let i = 0; i < businesses.length; i++){
        let businessesLocation={lat:businesses[i].coordinates.latitude,lng:businesses[i].coordinates.longitude};
        let marker = new google.maps.Marker({
          position: businessesLocation,
          map: map,
          title: businesses[i].name
        });
        marker.setMap(map);
      }
    }
   






