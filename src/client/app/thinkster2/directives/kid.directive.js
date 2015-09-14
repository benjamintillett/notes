(function() {
    'use strict';

    angular
        .module('app.thinkster2')
        .directive('kid', kid);

    function kid() {

        var kid = {
    		restrict: "E",
	        scope: {
	        	done: '&'
	        },
    		template: '<input type="text" ng-model="chore">' + 
    		'{{ chore }}' +
    		'<button class="btn" ng-click="done({chore: chore})"> I\'m done</button><br>'
        };
        return kid;
    }
})();
