(function() {
    'use strict';

    angular
        .module('app.thinkster2')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'thinkster2',
                config: {
                    url: '/thinkster2',
                    templateUrl: 'app/thinkster2/thinkster2.html',
                    controller: 'Thinkster2Controller',
                    controllerAs: 'vm',
                    title: 'Thinkster2',
                    settings: {
                        nav: 5,
                        content: '<i class="fa fa-lock"></i> Thinkster2'
                    }
                }
            }
        ];
    }
})();