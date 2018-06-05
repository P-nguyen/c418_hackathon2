google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyBcB4StL9IQqNuDsMzO7j_uvPvQXnVhn8U'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    let data = google.visualization.arrayToDataTable([
      ['Country', 'Hover'],
    ]);

    let options = {};

    let chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }
