(function() {
  'use strict';
  angular
    .module('rt.admin.productsList', ['rt.admin.productsList.product'])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider) {
    // State
    $stateProvider
      .state('app.admin_products', {
        url: '/admin/product',
        views: {
          'content@app': {
            templateUrl: 'app/main/admin/products-list/products-list.html',
            controller: 'RtAdminProductsListController as vm'
          }
        }
      });
    $translatePartialLoaderProvider.addPart('app/main/admin/products-list');
  }
})();
