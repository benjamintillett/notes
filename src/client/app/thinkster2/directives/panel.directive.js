(function() {
    'use strict';

    angular
        .module('app.thinkster2')
        .directive('panel', panel);

    function panel() {

        var panel = {
            restrict: 'E',
            transclude: true,
            scope: {
            	title: "@"
            },
            templateUrl: "app/thinkster2/directives/panel.tmpl.html"
        };
        return panel;

        function link(scope, element, attrs) {
        }
    }

    /* @ngInject */
    function Controller() {

    }
})();
