(function() {
    'use strict';

    angular
        .module('app.angular-guide')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'angular-guide',
                config: {
                    url: '/angular-guide',
                    templateUrl: 'app/angular-guide/angular-guide.html',
                    controller: 'AngularGuideController',
                    controllerAs: 'vm',
                    title: 'angular-guide',
                    settings: {
                        nav: 7,
                        content: '<i class="fa fa-lock"></i> angular guide'
                    }
                }
            }
        ];
    }
})();