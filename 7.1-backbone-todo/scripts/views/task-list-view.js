import TaskItemView from './task-item-view';

export default Backbone.View.extend({
  template: JST['task-list'],

  tagName: 'ul',

  id: 'todo-list',

  initialize: function(){
    this.render();
  },

  render: function(){
    this.renderChildren();
  },

  renderChildren: function(){
      _.invoke(this.children || [], 'remove');

      this.children = this.collection.map(function(child) {
        var view = new TaskItemView({
          model: child
        });
        this.$el.append(view.el);
        return view;
      }.bind(this));

      return this;
    },

    remove: function(){
      _.invoke(this.children || [], 'remove');
      Backbone.View.prototype.remove.apply(this, arguments);
    }
});
