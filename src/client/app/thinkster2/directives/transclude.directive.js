(function() {
    'use strict';

    angular
        .module('app.thinkster')
        .directive('transclude',transclude);

    /* @ngInject */
    function transclude() {

        var transclude = {
            restrict: 'E',
            transclude: true,
            scope: {},
            template: "<div>This is the {{ transcludeController.title }} directive</div><ng-transclude><ng-transclude>",
            controller: transcludeController,
            controllerAs: "transcludeController"
        };
        return transclude;
    }

    function transcludeController(){
    	var vm = this;
    	vm.title = 'transclude';
   	} 
})();
