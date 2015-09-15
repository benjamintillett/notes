(function() {
    'use strict';

    angular
        .module('app.angular-guide')
        .directive('myTabs', myTabs);

    function myTabs() {

        var myTabs = {
        	transclude: true,
            link: link,
            controller: MyTabsController,
            controllerAs: 'myTabs',
            restrict: 'E',
            scope: {
            },
            templateUrl: 'app/angular-guide/directives/my-tabs.tmpl.html'
        };
        return myTabs;

        function link(scope, element, attrs) {
        }
    }

    /* @ngInject */
    function MyTabsController() {
    	var vm = this;
    	var panes = vm.panes = [];

    	vm.select = function(pane){
    		panes.forEach(function(pane){
    			pane.selected = false;
    		});

    		pane.selected = true;
    	};

    	vm.addPane = function(pane){
    		if(panes.length === 0){
    			vm.select(pane);
    		}
    		panes.push(pane);
    	};
    }
})();
