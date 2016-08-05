(function() {
  'use strict';
  angular
    .module('rt.admin.companiesList.company', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider) {
    // State
    $stateProvider
      .state('app.admin_companies.new', {
        url: '/new',
        views: {
          'content@app': {
            templateUrl: 'app/main/admin/companies-list/company/company.html',
            controller: 'RtAdminListCompanyController as vm'
          }
        }
      });
    $translatePartialLoaderProvider.addPart('app/main/admin/companies-list/company');
  }
})();
