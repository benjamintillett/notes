(function () {
    'use strict';

    angular
        .module('app.tabs')
        .controller('TabsController', TabsController);

    TabsController.$inject = ['logger','dataservice'];
    /* @ngInject */
    function TabsController(logger,dataservice) {
        var vm = this;
        vm.title = 'Tabs';

        activate();

        function activate() {
            logger.info('Activated Tabs View');
        }
    }
})();

