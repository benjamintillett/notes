(function() {
    'use strict';

    angular
        .module('app.thinkster')
        .controller('ThinksterController', ThinksterController);

    // Controller.$inject = [];

    /* @ngInject */
    function ThinksterController() {
        var vm = this;
        vm.title = 'ThinksterController';

      	vm.startFun = startFun;



        function startFun(){
        	console.log("fun times have started!");
        }

    }
})();
