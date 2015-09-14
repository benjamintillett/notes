(function() {
    'use strict';

    angular
        .module('app.thinkster')
        .directive('funTimes', funTimes);

    /* @ngInject */
    function funTimes() {
        // Usage:
        //
        // Creates:
        //
        var funTimes = {
        	link: link
        };
        return funTimes;

        function link(scope, element, attrs) {
        	element.bind("click",function(){
        		scope.vm.startFun();
        	})
        }
    }

})();