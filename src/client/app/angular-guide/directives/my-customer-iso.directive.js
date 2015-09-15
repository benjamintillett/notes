(function() {
    'use strict';

    angular
        .module('app.angular-guide')
        .directive('myCustomerIso', myCustomerIso);

    function myCustomerIso() {
        var myCustomerIso = {
        	templateUrl: "app/angular-guide/directives/my-customer-iso.tmpl.html",
            scope: {
                customerInfo: '=info'
            }
        };
        return myCustomerIso;
    }

})();