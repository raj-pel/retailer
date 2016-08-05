(function() {
  'use strict';
  angular
    .module('rt.admin.customersList.customer', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider) {
    // State
    $stateProvider
      .state('app.admin_customers.new', {
        url: '/new',
        views: {
          'content@app': {
            templateUrl: 'app/main/admin/customers-list/customer/customer.html',
            controller: 'RtAdminListCustomerController as vm'
          }
        }
      });
    $translatePartialLoaderProvider.addPart('app/main/admin/customers-list/customer');
  }
})();
