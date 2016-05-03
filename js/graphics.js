'use strict';
var API = 'http://poker-metrics.localhost:3000';
var Graphic = {};

Graphic.pointsPerSprint = function pointsPerSprint(target) {
  $.getJSON(API + '/issues', onGetData);

  function onGetData(issues) {
    var arr = objectToArray(issues);
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
};

Graphic.pointsPerEndpoint = function pointsPerEndpoint(target) {
  $.getJSON(API + '/endpoints', onGetData);

  function onGetData(endpoints) {
    var arr = objectToArray(endpoints);
    arr.unshift(['endpoint name', 'points']);
    var data = google.visualization.arrayToDataTable(arr);
    var options = {
      title: 'Endpoints Points',
      curveType: 'function',
      legend: { position: 'bottom' },
      vAxis: {
        viewWindow: {
          min: 0,
          max: 100
        }
      }
    }
    var chart = new google.visualization.ColumnChart(document.getElementById(target));
    chart.draw(data, options);
  }
};

function objectToArray(obj) {
  return Object.keys(obj).map(function(key) { return [key, obj[key]];  });
}
