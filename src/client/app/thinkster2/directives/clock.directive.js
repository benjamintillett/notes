(function() {
    'use strict';

    angular
        .module('app.thinkster2')
        .directive('clock', clock);

   
    function clock() {

        var clock = {
            restrict: 'E',
            scope: {
            	timezone:"@"
            },
            template: "<p>12.54 {{ timezone }}</p>"
        };
        return clock;
    }

})();
