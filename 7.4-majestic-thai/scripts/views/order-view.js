import OrderItemView from './order-item';

export default Backbone.View.extend({
  template: JST.sidebar,

  tagName: 'ul',

  initialize: function(){
    this.order = this.collection.order;
    this.render();
    this.listenTo(this.collection, 'add remove', this.render);
  },

  render: function(){
    this.$el.html(this.template({
      subtotal: this.collection.findTotal()
    }));
    this.renderChildren();
  },

  renderChildren: function(){
      _.invoke(this.children || [], 'remove');

      this.order = this.collection.order;

      this.children = this.collection.order.map(function(child) {
        var view = new OrderItemView({
          model: child,
          collection: this.order
        });
        this.$el.prepend(view.el);
        return view;
      }.bind(this));

      return this;
    },

    remove: function(){
      _.invoke(this.children || [], 'remove');
      Backbone.View.prototype.remove.apply(this, arguments);
    }
});
