(function() {
    'use strict';

    angular
        .module('app.todo')
        .directive('todoForm', todoForm);

    function todoForm() {

        var todoForm = {
            // bindToController: true,
            // controller: Controller,
            // controllerAs: 'vm',
            // link: link,
            // restrict: 'A',
            scope: {
            	createTodo: "&"
            },
            templateUrl: 'app/todos/directives/todo-form.tmpl.html'
        };
        return todoForm;

        function link(scope, element, attrs) {
        }
    }

    /* @ngInject */
    function Controller() {

    }
})();