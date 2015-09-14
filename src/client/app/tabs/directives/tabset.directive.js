(function() {
    'use strict';

    angular
        .module('app.tabs')
        .directive('tabset', tabset);

    function tabset() {

        var tabset = {
        	restrict: 'E',
        	transclude: true,
        	scope: {},
        	templateUrl: 'app/tabs/directives/tabset.tmpl.html',
        	bindToController: true,
        	controllerAs: 'tabset',
        	controller: TabsetController
        };
        return tabset;

        function link(scope, element, attrs) {
        }
    }

    /* @ngInject */
    function TabsetController() {
    	var vm = this;
    	vm.tabs = [];

    	vm.addTab = function addTab(tab){
    		vm.tabs.push(tab);
    		if(vm.tabs.length === 1){
    			tab.active = true
    		}
    	}
    	vm.select = function(selectedTab){
    		if(selectedTab.disabled) { return }

    		angular.forEach(vm.tabs, function(tab){
    			if(tab.active && tab !== selectedTab){
    				tab.active = false;
    			}
    		});
    		selectedTab.active = true;

    	}
    }
})();