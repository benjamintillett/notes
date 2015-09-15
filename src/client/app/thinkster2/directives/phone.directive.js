(function() {
    'use strict';

    angular
        .module('app.thinkster2')
        .directive('phone', phone);


    function phone () {
        
        var phone = {
            scope: {
            	dial: "&"
            },
            template: '<input ng-model="value"><div class="btn" ng-click="dial({message: value})">Call home!</div>'
        };
        return phone;
    }

})();
