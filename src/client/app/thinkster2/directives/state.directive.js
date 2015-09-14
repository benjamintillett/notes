(function() {
    'use strict';

    angular
        .module('app.thinkster2')
        .directive('state', state);

    function state() {
        
        var state= {
            restrict: 'E',
            controller: StateCtrl,
            controllerAs: 'state',
            scope: {
            }
        };
        return state;
    }

    /* @ngInject */
    function StateCtrl() {
    	var vm = this;
    	this.makeLaw = function(law){
    		console.log("Law: " + law);
    	};
    }
})();
