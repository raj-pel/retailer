(function() {
  'use strict';
  angular
    .module('rt.admin.categories', ['rt.admin.categories.list'])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider) {
    // State
    $stateProvider
      .state('app.admin_categories', {
        url: '/admin/categories',
        views: {
          'content@app': {
            templateUrl: 'app/main/admin/category/categories.html',
          }
        }
      });
    $translatePartialLoaderProvider.addPart('app/main/admin/category');
  }
})();
