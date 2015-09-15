(function() {
    'use strict';

    angular
        .module('app.thinkster2')
        .directive('drink', drink);



    /* @ngInject */
    function drink () {
        
        var drink = {
            restrict: 'E',
            scope: {
            	flavour: "="
            },
            template: '<input type="text" ng-model="flavour">'
            
        };
        return drink;
    }

})();