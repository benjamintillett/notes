(function() {
    'use strict';

    angular
        .module('app.angular-guide')
        .directive('myDialog', myDialog);

	
    
    function myDialog() {

        var myDialog = {
        	restrict: "E",
        	transclude: true,
        	scope: {
        		close: '&onClose'
        	},
        	templateUrl: "app/angular-guide/directives/my-dialog.tmpl.html"
        };
        return myDialog;
    }

})();
