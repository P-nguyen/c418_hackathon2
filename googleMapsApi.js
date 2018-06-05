var globalArray = [];

function countrySeparateArray() {
    const singleCountryArray = CountryApi.getAllCountries();
    for (let countryCount = 0; countryCount<singleCountryArray.length; countryCount++) {
        const countryCountArray = [];
        const randomValue = Math.floor((Math.random() * 20));
        countryCountArray.push(singleCountryArray[countryCount], randomValue, 'Cuisine');
        globalArray.push(countryCountArray);
    }
}

google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyBcB4StL9IQqNuDsMzO7j_uvPvQXnVhn8U'
  });
  countrySeparateArray();
  google.charts.setOnLoadCallback(drawRegionsMap);
  function drawRegionsMap() {
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Country');
    data.addColumn('number', 'Value'); 
    data.addColumn({type:'string', role:'tooltip'});
    data.addRows(globalArray);

    let options = {
        minValue: 0,
        maxValue: 20,
        colorAxis: {values:[0,20], colors:['#FD297B', 'orange']},
        legend: 'none',
        datalessRegionColor: 'orange',
        chartArea: {'width': '100%', 'height': '100%'},
        height: $(window).height()*0.65
    };

    let chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    function clickingCountry(){
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
        console.log(message);
    
    }
    google.visualization.events.addListener(chart, 'select', clickingCountry);
    
    chart.draw(data, options);
}

