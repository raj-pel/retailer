(function() {
  'use strict';
  angular
    .module('rt.admin.customersList', ['rt.admin.customersList.customer'])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider) {
    // State
    $stateProvider
      .state('app.admin_customers', {
        url: '/admin/customer',
        views: {
          'content@app': {
            templateUrl: 'app/main/admin/customers-list/customers-list.html',
            controller: 'RtAdminCustomersListController as vm'
          }
        }
      });
    $translatePartialLoaderProvider.addPart('app/main/admin/customers-list');
  }
})();
