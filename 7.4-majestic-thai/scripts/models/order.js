import {MenuCollection} from './menu';

var OrderCollection = Backbone.Collection.extend({
    // idAttribute: 'id',

    defaults: function() {
      return {
        isComplete: false,
        item: '',
        price: 0,
        description: '',
        category: '',
        popularity: 0,
      };
    },

    initialize: function(){
      // Create a task collection to keep track of our tasks
      this.order = new MenuCollection();

      // Trigger all tasks events on myself
      this.listenTo(this.order, 'all', this.trigger.bind(this));
    },

    // Proxy the add method to the underlying task collection
    add: function(models, options){
      return this.order.add(models, options);
    },

    // Proxy the remove method to the underlying task collection
    remove: function(models, options){
      return this.order.remove(models, options);
    },

    toJSON: function(){
      return _.extend({}, this.attributes, {
        order: this.order.map(function(item){
            return {
              "__type": "Pointer",
              "className": "Task",
              "objectId": item.id
            };
        })
      });
    },

    findTotal: function(){
      return this.order.reduce(function(a,b){
        return a + b.get('price');
      }, 0);
    }
});

// var OrderCollection = Backbone.Collection.extend({
//   model: Order,
//   url: 'https://api.parse.com/1/classes/Order'
// });

export default {OrderCollection};
