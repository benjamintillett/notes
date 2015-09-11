(function() {
    'use strict';

    angular
        .module('app.thinkster')
        .directive('welcomeAlert', welcomeAlert);


    /* @ngInject */
    function welcomeAlert() {
        var directive = {
        	restrict: "A",
        	link: link
        };
        return directive;

        function link(scope, element, attrs) {
        	console.log("Howdy!");
        }
    }
})();