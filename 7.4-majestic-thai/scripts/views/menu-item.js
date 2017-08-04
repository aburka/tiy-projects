import {OrderCollection} from '../models/order';

export default Backbone.View.extend({
  template: JST['menu-item'],

  tagName: 'ul',

  className: 'menu-items',

  events: {
    'click .add': 'addToOrder'
  },

  initialize: function(options){
    this.render();
    this.order = options.order;
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  addToOrder: function(){
    this.order.add(this.model);
  }
});
