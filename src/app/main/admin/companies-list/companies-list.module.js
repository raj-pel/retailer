(function() {
  'use strict';
  angular
    .module('rt.admin.companiesList', ['rt.admin.companiesList.company'])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider) {
    // State
    $stateProvider
      .state('app.admin_companies', {
        url: '/admin/company',
        views: {
          'content@app': {
            templateUrl: 'app/main/admin/companies-list/companies-list.html',
            controller: 'RtAdminCompaniesListController as vm'
          }
        }
      });
    $translatePartialLoaderProvider.addPart('app/main/admin/companies-list');
  }
})();
