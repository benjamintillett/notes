(function() {
    'use strict';

    angular
        .module('app.thinkster')
        .directive('welcomes', welcomes);


    /* @ngInject */
    function welcomes() {
        // Usage:
        //
        // Creates:
        //
        var welcomes = {
            bindToController: true,
            controller: welcomesController,
            controllerAs: 'welcomes',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return welcomes;

        function link(scope, element, attrs) {
        	element.bind("mouseenter",function(){
        		console.log(scope.welcomes.words);
        	});
        }
    }

    /* @ngInject */
    function welcomesController() {
    	var vm = this;

    	vm.sayHello = function(){
    		vm.words.push("hello");
    	}
    	
    	vm.sayHowdy = function(){
    		vm.words.push("howdy");
    	}

    	vm.sayHi = function(){
    		vm.words.push("hi");
    	}
    	vm.words = [];

    }
})();
