/* jshint -W117, -W030 */
describe('TodoController', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('app.todo');
        bard.inject('$controller', '$log', '$rootScope','dataservice','$q');
    });

    beforeEach(function () {
        bard.mockService(dataservice, {
            getTodos: $q.when(mockData.getMockTodos()),
        });


        controller = $controller('TodoController');
        $rootScope.$apply();

    });



    bard.verifyNoOutstandingHttpRequests();

    describe('Todo controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Todo', function() {
                expect(controller.title).to.equal('Todos');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });
            it("should have a list of todo's",function(){
                expect(controller.todos).to.equal(mockData.getMockTodos());
            });
        });
    });
});
