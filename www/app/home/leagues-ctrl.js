(function() {
  'use strict';

  angular.module('eliteApp')
    .controller('LeaguesCtrl',
      ['eliteApi', '$state', LeaguesCtrl]);

  function LeaguesCtrl(eliteApi, $state) {
    var vm = this;

    var leagues = eliteApi.getLeagues();
    vm.leagues = leagues;
    //var leagueData = eliteApi.getLeagueData();

    vm.selectLeague = function(leagueId) {
      // todo: select correct league
      $state.go('app.teams');
    }

  }

})();