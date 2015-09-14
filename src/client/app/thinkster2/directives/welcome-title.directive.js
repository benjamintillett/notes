(function() {
    'use strict';

    angular
        .module('app.thinkster')
        .directive('welcome', welcome);

    // directive.$inject = ['dependencies'];

    /* @ngInject */
    function welcome() {
        // Usage:
        //
        // Creates:
        //
        var welcome = {
            // bindToController: true,
            restrict: 'E',
            template: "<h1>Hey there I am the welcome directive</h1>"            
            // scope: {
            // }
        };
        return welcome;

    }

})();
