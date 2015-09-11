(function() {
    'use strict';

    angular
        .module('app.thinkster')
        .directive('leaving', leaving);

    function leaving() {

        var directive = {
        	link: link
        };
        return directive;

        function link(scope, element, attrs) {
        	element.bind("mouseleave",function(){
        		console.log("Mouse has left the div");
        	})
        }
    }

    /* @ngInject */
    function Controller() {

    }
})();
