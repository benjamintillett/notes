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

      vm.customer = {
        name: "Naomi",
        address: "1693 Ampitheatre"
      }  
    }
})();
