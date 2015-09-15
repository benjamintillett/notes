(function() {
    'use strict';

    angular
        .module('app.angular-guide')
        .directive('myCustomer', myCustomer);

    function myCustomer() {

        var myCustomer = {
        	templateUrl: function(elem,attr){
        		return 'app/angular-guide/directives/customer-'+attr.type+'.tmpl.html'
        	}
        };
        return myCustomer;
    }

})();