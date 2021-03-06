(function() {
    'use strict';

    angular
        .module('app.todo')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'todo',
                config: {
                    url: '/todo',
                    templateUrl: 'app/todos/todo.html',
                    controller: 'TodoController',
                    controllerAs: 'vm',
                    title: 'todo',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Todo'
                    }
                }
            }
        ];
    }
})();

