(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount,
            getTodos: getTodos,
            createTodo: createTodo
        };

        service.todos = [
            { title: "The 1st todo", description: "this is some thing that I really need to do" },
            { title: "The 2nd todo", description: "this is some  else thing that I really need to do" } 
        ];

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            return $http.get('/api/people')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
        }

        function getTodos(){
            var deferred = $q.defer();

            deferred.resolve(service.todos);
            
            return deferred.promise;
        }

        function createTodo(todo){
            service.todos.push(todo);
            
            var deferred = $q.defer();

            deferred.resolve(todo);
            
            return deferred.promise;
        }

        // function getTodos() {
        //     return $http.get('/api/todos')
        //         .then(success)
        //         .catch(fail);

        //     function success(response) {
        //         return response.data;
        //     }

        //     function fail(e) {
        //         return exception.catcher('XHR Failed for getTodos')(e);
        //     }
        // }



    }
})();
