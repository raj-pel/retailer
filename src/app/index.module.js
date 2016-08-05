(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('retailer', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick panel
            'app.quick-panel',

            // admin
            'rt.admin'
        ]);
})();