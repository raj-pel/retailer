(function() {
  'use strict';

  angular
    .module('rt.admin.productsList.product')
    .controller('RtAdminListProductController', RtAdminListProductController);

  /** @ngInject */
  function RtAdminListProductController($scope) {
    var vm = this;
    console.log($scope);
  }

})();
