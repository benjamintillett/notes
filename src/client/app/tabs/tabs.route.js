(function() {
    'use strict';

    angular
        .module('app.tabs')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'tabs',
                config: {
                    url: '/tabs',
                    templateUrl: 'app/tabs/tabs.html',
                    controller: 'TabsController',
                    controllerAs: 'vm',
                    title: 'tabs',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> tabs'
                    }
                }
            }
        ];
    }
})();


