(function() {
    'use strict';

    angular
        .module('app.thinkster')
        .directive('entering', entering);

    function entering() {

        var directive = {
        	link: link
        };
        return directive;

        function link(scope, element, attrs) {
        	element.bind("mouseenter",function(){
        		console.log("Mouse has entered the div");
        	})
        }
    }

    /* @ngInject */
    function Controller() {

    }
})();