'use strict';
var API = 'http://localhost:3000/';
var Graphic = {};

Graphic.pointsPerSprint = function pointsPerSprint(team, target) {
  $.getJSON(API + team + '/issues', onGetData);

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

Graphic.pointsPerEndpoint = function pointsPerEndpoint(team, target) {
  $.getJSON(API + team + '/endpoints', onGetData);

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

Graphic.pointsPerEndpointGrouped = function pointsPerEndpointGrouped(team, target) {
  $.getJSON(API + team + '/endpoints/grouped', onGetData);

  function onGetData(endpoints) {
    var arr = objectToArray(endpoints);
    arr.unshift(['endpoint name', 'points']);
    var data = google.visualization.arrayToDataTable(arr);
    var options = {
      title: 'Endpoints Grouped Points',
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
