(function() {
  'use strict';
  angular
    .module('rt.admin.categories.list')
    .directive('rtAdminCategoriesList', rtAdminCategoriesListDirective);

  /** @ngInject */
  function rtAdminCategoriesListDirective() {
    return {
      restrict: 'E',
      scope: { },
      templateUrl: 'app/main/admin/category/list/list.html',
      controllerAs: 'vm',
      controller: 'RtAdminCategoriesListController',
      bindToController: true
    };
  }
})();
