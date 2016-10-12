var team = 'accountancy';

(function() {
  'use strict';

  moment.tz.setDefault('America/Sao_Paulo');

  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(initialize);

  function initialize() {
    loadGraphs(team);
  }

  function loadGraphs(repo) {
    team = repo;
    let Graphics = new Graphic(team, getPeriod());
    Graphics.pointsPerSprint('pointsPerSprintChart');
    Graphics.pointsPerEndpoint('pointsPerEndpointChart');
    Graphics.pointsPerEndpointGrouped('pointsPerEndpointGroupedChart');
  }

  /* Public methods */
  window.searchPerPeriod = function searchPerPeriod() {
    loadGraphs(team);
  };

  window.changeToTeam = function changeToTeam(team) {
    loadGraphs(team);
  };

  /* Private methods */

  function getPeriod() {
    let startDate = document.querySelector('#startDate').value;
    let endDate = document.querySelector('#endDate').value;
    return { startDate: startDate, endDate: endDate };
  }

})(window);
