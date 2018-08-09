module.exports = {

    create: function(req, res, next) {
        console.log("create controller");

        Todolist.create(req.params.all(), function todoListCreated(err, todoList) {
            if(err) return next(err);
            
            res.redirect('todo-list');
        });
    },

    edit: function(req, res, next) {
        console.log("edit controller");
       
        res.redirect('todo-list');
    },

    destroy: function(req, res, next) {
        console.log("destroy controller");

        Todolist.destroy(req.param('id'), function destroyedList(err) {
            if(err) return next(err);

            res.redirect('todo-list');
        });
    },
    index: function(req, res, next) {
        console.log("default controller");


        Todolist.find(function todoListsFind(err, lists) {

            if(err) return next(err);

            res.view({lists: lists });
        });
    },
    update: function(req, res, next) {

    }
}