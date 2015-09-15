(function() {
    'use strict';

    angular
        .module('app.todo')
        .directive('todoSmall', todoSmall);

    todoSmall.$inject = [];

    /* @ngInject */
    function todoSmall() {
        // Usage:
        //
        // Creates:
        //
        var todoSmall = {
            templateUrl: 'app/todos/directives/todo-small.tmpl.html',
            controller: Controller,
            controllerAs: 'todoSmall',
            link: link,
            restrict: 'E'
        };
        return todoSmall;

        function link(scope, element, attrs,ctrl) {
            
        }   
    }

    /* @ngInject */
    function Controller() {

    }
})();
