(function() {
  'use strict';

  angular
    .module('rt.admin.customersList.customer')
    .controller('RtAdminListCustomerController', RtAdminListCustomerController);

  /** @ngInject */
  function RtAdminListCustomerController($scope) {
    var vm = this;
    console.log($scope);
  }

})();
