(function() {
    'use strict';

    angular
        .module('app.thinkster2')
        .controller('Thinkster2Controller', Thinkster2Controller);

    // Controller.$inject = [];

    /* @ngInject */
    function Thinkster2Controller() {
        var vm = this;

        vm.ctrlFlavour = "blackberry";
        
        vm.logChore = function(chore){
        	if(chore) {
        		alert(chore + ' is done');
        	}
        }
    }
})();
