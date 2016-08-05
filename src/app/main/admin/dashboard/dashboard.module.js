(function() {
  'use strict';
  angular
    .module('rt.admin.dashboard', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msApiProvider) {
    // State
    $stateProvider
      .state('app.admin_dashboard', {
        url: '/admin/dashboard',
        views: {
          'content@app': {
            templateUrl: 'app/main/admin/dashboard/dashboard.html',
            controller: 'RtAdminDashboardController as vm'
          }
        },
        resolve  : {
            DashboardData: function (msApi)
            {
                return msApi.resolve('dashboard.project@get');
            }
        },
        bodyClass: 'dashboard-project'
      });
    // Api
    msApiProvider.register('dashboard.project', ['app/data/dashboard/project/data.json']);  
    $translatePartialLoaderProvider.addPart('app/main/admin/dashboard');
  }
})();
