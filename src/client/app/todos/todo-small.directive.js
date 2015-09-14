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
            templateUrl: 'app/todos/todo-small.tmpl.html',
            bindToController: true,
            controller: Controller,
            controllerAs: 'todoSmall',
            link: link,
            restrict: 'E',
            scope: {
            	todo: "="
            }
        };
        return todoSmall;

        function link(scope, element, attrs) {
    
        }
    }

    /* @ngInject */
    function Controller() {

    }
})();
