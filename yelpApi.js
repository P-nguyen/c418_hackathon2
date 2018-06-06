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
