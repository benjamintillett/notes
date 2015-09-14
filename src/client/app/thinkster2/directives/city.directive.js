(function() {
    'use strict';

    angular
        .module('app.thinkster2')
        .directive('city', city);



    /* @ngInject */
    function city () {
        
        var city = {
            restrict: 'E',
            require: ["^country","^state"],
            link: function(scope,element,attrs,ctrls){
                ctrls[0].makeAnnouncement("This city rocks");
                ctrls[1].makeLaw("No pooing in the street");
            }
        };
        return city;
    }

})();
