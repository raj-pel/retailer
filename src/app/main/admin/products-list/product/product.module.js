(function() {
  'use strict';
  angular
    .module('rt.admin.productsList.product', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider) {
    // State
    $stateProvider
      .state('app.admin_products.new', {
        url: '/new',
        views: {
          'content@app': {
            templateUrl: 'app/main/admin/products-list/product/product.html',
            controller: 'RtAdminListProductController as vm'
          }
        }
      });
    $translatePartialLoaderProvider.addPart('app/main/admin/products-list/product');
  }
})();
