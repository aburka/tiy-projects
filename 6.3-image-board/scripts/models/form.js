var Form = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: function() {
    return {
      url: '',
      caption: '',
    };
  }
});

var FormCollection = Backbone.Collection.extend({
  model: Form,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages'
});

export default {Form, FormCollection};
