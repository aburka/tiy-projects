export default Backbone.View.extend({

  template: JST['order-item'],

  events: {
    'click .remove': 'removeFromOrder',
  },

  initialize: function(){
    this.render();
  },

  render: function(){

    this.$el.html(this.template(this.model.toJSON()));
  },

  removeFromOrder: function(){
    this.collection.remove(this.model);
  }
});
