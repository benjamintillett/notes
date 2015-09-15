(function() {
    'use strict';

    angular
        .module('app.angular-guide')
        .directive('myDraggable', myDraggable);

    myDraggable.$inject = ['$document'];

    /* @ngInject */
    function myDraggable($document) {
        
        var myDraggable = {
            link: link
        };
        return myDraggable;

        function link(scope, element, attrs) {
        	var startX = 0, startY = 0, x = 0, y = 0;

        	element.css({
        		position: 'relative',
        		border: '1px solid red',
        		backgroundColor: 'lightgrey',
        		cursor: 'pointer'
        	});

        	element.on('mousedown',function(event){
        		event.preventDefault();
        		startX = event.pageX - x;
        		startY = event.pageY - y;
        		$document.on('mousemove',mousemove);
        		$document.on('mouseup',mouseup);
        	});

        	function mousemove(event){
        		y = event.pageY - startY;
        		x = event.pageX - startX;
        		element.css({
        			top: y + 'px',
        			left: x + 'px'
        		});
        	}

        	function mouseup(){
        		$document.off('mousemove',mousemove);
        		$document.off('mouseup',mouseup);
        	}
        }
    }

})();
