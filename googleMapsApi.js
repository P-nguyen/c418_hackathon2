var globalArray = [];

function countrySeparateArray() {
    let singleCountryArray = CountryApi.getAllCountries();
    for (let countryCount = 0; countryCount<singleCountryArray.length; countryCount++) {
        let countryCountArray = [];
        countryCountArray.push(singleCountryArray[countryCount]);
        globalArray.push(countryCountArray);
    }
    globalArray.unshift(['Country']);
}

google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyBcB4StL9IQqNuDsMzO7j_uvPvQXnVhn8U'
  });
  countrySeparateArray();
  google.charts.setOnLoadCallback(drawRegionsMap);
  function drawRegionsMap() {
    let data = google.visualization.arrayToDataTable(globalArray);

    let options = {};

    let chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    function myClickHandler(){
        const selection = chart.getSelection();
        let message = '';
        for (let i = 0; i < selection.length; i++) {
          let item = selection[i];
          if (item.row != null && item.column != null) {
            let str = data.getFormattedValue(item.row, item.column);
            message += str;
          } else if (item.row != null) {
            let str = data.getFormattedValue(item.row, 0);
            message += str;
          } else if (item.column != null) {
            let str = data.getFormattedValue(0, item.column);
            message += str;
          }
        }
        if (message == '') {
          message = 'nothing';
        }
        console.log('You selected ' + message);
      
    }
    google.visualization.events.addListener(chart, 'select', myClickHandler);

    chart.draw(data, options);
  }
