var Link = Backbone.Model.extend({
  idAttribute: "_id",

  toJSON: function(){
    return _.extend({}, _.omit(this.attributes, '_id'), {
      id: this.id
    });
  },

  defaults: function(){
      return {
      title: '',
      url: '',
      tag: []
    };
  }
});

var LinkCollection = Backbone.Collection.extend({
  model: Link,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/amyd'
});

export default {Link, LinkCollection};
