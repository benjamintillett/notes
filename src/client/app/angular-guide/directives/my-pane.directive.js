(function() {
    'use strict';

    angular
        .module('app.angular-guide')
        .directive('myPane', myPane);

    /* @ngInject */
    function myPane() {
        // Usage:
        //
        // Creates:
        //
        var myPane = {
            require: '^myTabs',
            restrict: 'E',
            transclude: true,
            scope: {
            	title: '@'
            },
            link: link,
            templateUrl: 'app/angular-guide/directives/my-pane.tmpl.html'

        };
        return myPane;

        function link(scope, element, attrs,tabsCtrl) {
        	tabsCtrl.addPane(scope);
        }
    }

    /* @ngInject */
    function Controller() {

    }
})();