define('views/todos_view', ['backbone', 'views/todo_view'], function (Backbone, TodoView) {
    //TodosView
    return Backbone.View.extend({
        tagName: 'tbody',
        initialize: function () {
            this.collection.on('add', this.addOne, this);
            this.collection.on('reset', this.addAll, this);
        },

        render: function () {
            this.addAll();
            return this;
        },

        addAll: function () {
            this.$el.empty();
            this.collection.forEach(this.addOne, this);
        },

        addOne: function (todoItem) {
            var todoView = new TodoView({model: todoItem});
            this.$el.append(todoView.render().el);
        }
    });
});