/* jshint -W117, -W030 */
describe('TodoController', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('app.todo');
        bard.inject('$controller', '$log', '$rootScope','dataservice','$q');
    });

    beforeEach(function () {
        bard.mockService(dataservice, {
            createTodo: $q.when({ title: "todo title", description: "todo description"}),
            getTodos: $q.when(mockData.getMockTodos())
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
                expect(controller.todos[0].title).to.equal(mockData.getMockTodos()[0].title);
            });
        });

        describe('createTodo', function(){
            var todo;

            beforeEach(function() {
                todo = { title: "todo title", description: "todo description"}
                controller.createTodo(todo);
                $rootScope.$apply();
            });

            it('tells the dataservice to create the todo',function(){
                expect(dataservice.createTodo).to.have.been.calledWith(todo);
            });

            it('updates vm.todos',function(){
                expect(dataservice.getTodos).to.have.been.calledTwice;
            })
        });
    });
});
