var API = 'http://pocker-metrics.localhost:3000';
var Graphic = {};

Graphic.pointsPerSprint = function pointsPerSprint(target) {
  $.getJSON(API + '/issues', onGetData);

  function onGetData(issues) {
    var sprintsName = Object.keys(issues);
    var arr = Object.keys(issues).map(function(sprintName) { return [sprintName, issues[sprintName]];  });
    arr.unshift(['sprint name', 'points']);
    var data = google.visualization.arrayToDataTable(arr);
    var options = {
      title: 'Sprint Points',
      curveType: 'function',
      legend: { position: 'bottom' },
      vAxis: {
        viewWindow: {
          min: 0,
          max: 50
        }
      }
    }
    var chart = new google.visualization.ColumnChart(document.getElementById(target));
    chart.draw(data, options);
  }
}
