(function() {
    'use strict';

    angular
        .module('app.thinkster')
        .directive('hello', hello);

    /* @ngInject */
    function hello() {

        var hello = {
        	require: "welcomes",
            link: link
        };
        return hello;

        function link(scope, element, attrs, welcomeCtrl) {
        	welcomeCtrl.sayHello();
        }
    }

})();