(function() {
  'use strict';

  angular
    .module('rt.admin.companiesList.company')
    .controller('RtAdminListCompanyController', RtAdminListCompanyController);

  /** @ngInject */
  function RtAdminListCompanyController($scope) {
    var vm = this;
    console.log($scope);
  }

})();
