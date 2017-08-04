var Task = Backbone.Model.extend({
  idAttribute: 'id',

  defaults: {
    task: ''
  }
});

var TaskCollection = Backbone.Collection.extend({
  url: 'todo.json',
  model: Task,
});

export default {Task, TaskCollection};
