(function () {
    'use strict';

    angular
        .module('app.todo')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['logger','dataservice'];
    /* @ngInject */
    function TodoController(logger,dataservice) {
        var vm = this;
        vm.title = 'Todos';

        activate();

        vm.deleteTodo = function(index){
            dataservice.deleteTodo(index).then(function(todo){
                logger.info("deleted todo");
                getTodos();
            })
        }

        vm.createTodo = function(todo) {
            dataservice.createTodo(todo).then(function(todo){
                logger.info('Created todo');
                getTodos();
            });
        }

        function getTodos(){
            dataservice.getTodos().then(function(todos){
                vm.todos = todos;
            });
        }

        function activate() {
            logger.info('Activated Todo View');
            getTodos();
        }
    }
})();
