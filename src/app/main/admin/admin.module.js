(function ()
{
    'use strict';
    angular
        .module('rt.admin', [
          'ui.router',
          'rt.admin.productsList', 
          'rt.admin.dashboard',
          'rt.admin.companiesList',
          'rt.admin.customersList',
          'rt.admin.categories'])
})();