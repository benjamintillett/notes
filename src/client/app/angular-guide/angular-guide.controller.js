(function() {
    'use strict';

    angular
      .module('app.angular-guide')
      .controller('AngularGuideController', AngularGuideController);

    AngularGuideController.$inject = ['$timeout'];

    /* @ngInject */
    function AngularGuideController($timeout) {
      var vm = this;
      vm.title = 'AngularGuideController';
      vm.format = 'M/d/yy h:mm:ss a';
      vm.name = 'Tobias';
      vm.message = '';
      vm.hideDialog = function(message){
        vm.message = message;
        vm.dialogIsHidden = true;
        $timeout(function(){
          vm.message = '';
          vm.dialogIsHidden = false;
        }, 2000);
      }

      vm.naomi = { name: "Naomi", address: "1693 Ampitheatre"}
      vm.igor = { name: "Igor", address: "121 Somewhere"}  
    }
})();
