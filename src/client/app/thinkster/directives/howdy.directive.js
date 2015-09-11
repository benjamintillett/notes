(function() {
    'use strict';

    angular
        .module('app.thinkster')
        .directive('howdy', howdy);

    /* @ngInject */
    function howdy() {

        var howdy = {
        	require: "welcomes",
            link: link
        };
        return howdy;

        function link(scope, element, attrs, welcomeCtrl) {
        	welcomeCtrl.sayHowdy();
        }
    }

})();