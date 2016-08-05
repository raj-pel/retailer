(function ()
{
    'use strict';

    angular
        .module('retailer')
        .config(sideBarNavigation);

    /** @ngInject */
  function sideBarNavigation(msNavigationServiceProvider) {
    // You should add  inside of svg next classes `.svg-fill` or `.svg-stroke`
    // depending on what draw style it use.
    // See example:
    //  - svg-stroke dashboard.svg,
    //  - svg-fill - r-t-b-exchanges.svg

    msNavigationServiceProvider.saveItem('dashboard', {
      title: 'Dashboard',
      icon: 'icon-tile-four',
      state: 'app.admin_dashboard',
      weight: 1
    });

    msNavigationServiceProvider.saveItem('product', {
      title: 'Products',
      icon: 'icon-content-copy',
      state: 'app.admin_products',
      weight: 2
    });
    msNavigationServiceProvider.saveItem('company', {
      title: 'Companies',
      icon: 'icon-content-copy',
      state: 'app.admin_companies',
      weight: 3
    });
    msNavigationServiceProvider.saveItem('customer', {
      title: 'Customers',
      icon: 'icon-content-copy',
      state: 'app.admin_customers',
      weight: 4
    });
    msNavigationServiceProvider.saveItem('category', {
      title: 'Categories',
      icon: 'icon-content-copy',
      state: 'app.admin_categories',
      weight: 5
    });

    

  }

})();