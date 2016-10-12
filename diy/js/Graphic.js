class Graphic {

  constructor(team, period) {
    this.api = 'http://localhost:3000/';
    this.team = team;
    this.period = period || {};
    this.util = new Util();
  }

  pointsPerSprint(target) {
    let self = this;
    $.getJSON(`${this.api}${this.team}/issues?startDate=${this.period.startDate}&endDate=${this.period.endDate}`, onGetData);

    function onGetData(issues) {
      var arr = self.util.objectToArray(issues);
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

  pointsPerEndpoint(target) {
    let self = this;
    $.getJSON(`${this.api}${this.team}/endpoints?startDate=${this.period.startDate}&endDate=${this.period.endDate}`, onGetData);

    function onGetData(endpoints) {
      var arr = self.util.objectToArray(endpoints);
      arr.unshift(['endpoint name', 'points']);
      var data = google.visualization.arrayToDataTable(arr);
      var options = {
        title: 'Endpoints Points',
        curveType: 'function',
        legend: { position: 'bottom' }
      }
      var chart = new google.visualization.ColumnChart(document.getElementById(target));
      chart.draw(data, options);
    }
  }

  pointsPerEndpointGrouped(target) {
    let self = this;
    $.getJSON(`${this.api}${this.team}/endpoints/grouped?startDate=${this.period.startDate}&endDate=${this.period.endDate}`, onGetData);

    function onGetData(endpoints) {
      var arr = self.util.objectToArray(endpoints);
      arr.unshift(['endpoint name', 'points']);
      var data = google.visualization.arrayToDataTable(renameEndpointGroupedColumn(arr));
      var options = {
        title: 'Endpoints Grouped Points',
        curveType: 'function',
        legend: { position: 'bottom' }
      }
      var chart = new google.visualization.ColumnChart(document.getElementById(target));
      chart.draw(data, options);
    }

    function renameEndpointGroupedColumn(arr){
      for(var i = 0; i < arr.length; i++ ){
        if(arr[i][0] === 'marketing'){
          arr[i][0] = 'outros';
        }
      }
      return arr;
    }
  }

};




// options: {
//   team: 'accountancy',
//   period: null
// }

// Graphic.pointsPerSprint = function pointsPerSprint(team, target, period) {
//   console.log(this.options.team);
//   $.getJSON(`${API}${Graphic.options.team}/issues?period=${Graphic.options.period}`, onGetData);
//
//   function onGetData(issues) {
//     var arr = objectToArray(issues);
//     arr.unshift(['sprint name', 'points']);
//     var data = google.visualization.arrayToDataTable(arr);
//     var options = {
//       title: 'Sprint Points',
//       curveType: 'function',
//       legend: { position: 'bottom' },
//       vAxis: {
//         viewWindow: {
//           min: 0,
//           max: 50
//         }
//       }
//     }
//     var chart = new google.visualization.ColumnChart(document.getElementById(target));
//     chart.draw(data, options);
//   }
// };
//
// Graphic.pointsPerEndpoint = function pointsPerEndpoint(team, target) {
//   $.getJSON(`${API}${Graphic.options.team}/endpoints?period=${Graphic.options.period}`, onGetData);
//
//   function onGetData(endpoints) {
//     var arr = objectToArray(endpoints);
//     arr.unshift(['endpoint name', 'points']);
//     var data = google.visualization.arrayToDataTable(arr);
//     var options = {
//       title: 'Endpoints Points',
//       curveType: 'function',
//       legend: { position: 'bottom' }
//     }
//     var chart = new google.visualization.ColumnChart(document.getElementById(target));
//     chart.draw(data, options);
//   }
// };
//
// Graphic.pointsPerEndpointGrouped = function pointsPerEndpointGrouped(team, target) {
//   $.getJSON(`${API}${Graphic.options.team}/endpoints/grouped?period=${Graphic.options.period}`, onGetData);
//
//   function onGetData(endpoints) {
//     var arr = objectToArray(endpoints);
//     arr.unshift(['endpoint name', 'points']);
//     var data = google.visualization.arrayToDataTable(renameEndpointGroupedColumn(arr));
//     var options = {
//       title: 'Endpoints Grouped Points',
//       curveType: 'function',
//       legend: { position: 'bottom' }
//     }
//     var chart = new google.visualization.ColumnChart(document.getElementById(target));
//     chart.draw(data, options);
//   }
//
//   function renameEndpointGroupedColumn(arr){
//     for(var i = 0; i < arr.length; i++ ){
//       if(arr[i][0] === 'marketing'){
//         arr[i][0] = 'outros';
//       }
//     }
//     return arr;
//   }
// };
//
// function objectToArray(obj) {
//   return Object.keys(obj).map(function(key) { return [key, obj[key]];  });
// }
