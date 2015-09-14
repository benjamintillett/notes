(function() {
    'use strict';

    angular
        .module('app.tabs')
        .directive('tab', tab);

    function tab() {
    	console.log('hello');
        var tab = {
        	restrict: "E",
        	transclude: true,
        	template: '<div role="tabpanel" ng-show="active" ng-transclude></div>',
        	require: '^tabset',
            scope: {
                heading: "@"
            },
        	link: link
        };
        return tab;

        function link(scope, element, attr,tabsetCtrl) {
            scope.active = false
            scope.disabled = false
            
            if(attr.disabled){
                attr.$observe('disabled',function(value){
                    scope.disabled = (value !== 'false')
                })
            }
            tabsetCtrl.addTab(scope);
        }
    }

    /* @ngInject */
    function Controller() {

    }
})();
