(function() {

  'use strict';

  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(initialize);

  function initialize() {
    loadGraphs('alcatraz');

    $('.nav-tabs a').click(function(){
      var team = $(this).data('team');
      loadGraphs(team);
    });
  }

  function loadGraphs(team) {
    Graphic.pointsPerSprint(team, 'pointsPerSprintChart');
    Graphic.pointsPerEndpoint(team, 'pointsPerEndpointChart');
    Graphic.pointsPerEndpointGrouped(team, 'pointsPerEndpointGroupedChart');
  }

})();
