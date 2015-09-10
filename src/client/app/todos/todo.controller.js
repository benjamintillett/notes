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

        function activate() {
            logger.info('Activated Todo View');
            dataservice.getTodos().then(function(todos){
                vm.todos = todos;
            });
        }
    }
})();
