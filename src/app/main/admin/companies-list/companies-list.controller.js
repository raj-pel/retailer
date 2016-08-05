(function() {
  'use strict';

  angular
    .module('rt.admin.companiesList')
    .controller('RtAdminCompaniesListController', RtAdminCompaniesListController);

  /** @ngInject */
  function RtAdminCompaniesListController() {
    var vm = this;
    vm.employees = [{"id": 1,"name": "Brian Franklin","position": "Project Manager","office": "Ungca","age": 36,"startDate": "2015/03/04","salary": "$354326.51"},{"id": 2,"name": "Brian Franklin","position": "Project Manager","office": "Ungca","age": 36,"startDate": "2015/03/04","salary": "$354326.51"}];
    
    vm.dtOptions = {
      dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
      pagingType: 'simple',
      autoWidth : false,
      responsive: true
    };
  }

})();
