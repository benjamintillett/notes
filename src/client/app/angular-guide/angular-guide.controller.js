(function() {
    'use strict';

    angular
      .module('app.angular-guide')
      .controller('AngularGuideController', AngularGuideController);

    // Controller.$inject = [];

    /* @ngInject */
    function AngularGuideController() {
      var vm = this;
      vm.title = 'AngularGuideController';
      vm.format = 'M/d/yy h:mm:ss a';

      vm.naomi = { name: "Naomi", address: "1693 Ampitheatre"}
      vm.igor = { name: "Igor", address: "121 Somewhere"}  
    }
})();
