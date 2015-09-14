(function() {
    'use strict';

    angular
        .module('app.thinkster2')
        .directive('country', country);



    /* @ngInject */
    function country() {
        
        var country = {
            restrict: 'E',
            controller: CountryCtrl,
            controllerAs: 'country',
            scope: {
            }
        };
        return country;
    }

    /* @ngInject */
    function CountryCtrl() {
    	var vm = this;
    	this.makeAnnouncement = function(message){
    		console.log("Country says: " + message);
    	};
    }
})();
