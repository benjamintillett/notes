(function() {
    'use strict';

    angular
        .module('app.thinkster')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'thinkster',
                config: {
                    url: '/thinkster',
                    templateUrl: 'app/thinkster/thinkster.html',
                    controller: 'ThinksterController',
                    controllerAs: 'vm',
                    title: 'thinkster',
                    settings: {
                        nav: 4,
                        content: '<i class="fa fa-lock"></i> thinkster'
                    }
                }
            }
        ];
    }
})();