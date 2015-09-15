(function() {
    'use strict';

    angular
        .module('app.angular-guide')
        .directive('myCurrentTime', myCurrentTime);

    myCurrentTime.$inject = ['$interval','dateFilter'];

    /* @ngInject */
    function myCurrentTime($interval,dateFilter) {

        var myCurrentTime = {
            link: link,
        };
        return myCurrentTime;

        function link(scope, element, attrs) {
        	var format,
        		timeoutId;

        	function updateTime(){
        		element.text(dateFilter(new Date(),format));
        	}

        	scope.$watch(attrs.myCurrentTime, function(value){
        		format = value;
        		updateTime();
        	});

        	element.on('$destroy',function(){
        		$interval.cancel(timeoutId);	
        	});

        	timeoutId = $interval(function(){
        		updateTime();
        	}, 1000);
        }
    }

    /* @ngInject */
    function Controller() {

    }
})();