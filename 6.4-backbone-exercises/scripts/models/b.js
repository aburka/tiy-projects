var B = Backbone.Model.extend({
  urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/amyb',

  defaults: {
    firstName: '',
    lastName: '',
    addressLineOne: '',
    addressLineTwo: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  }
});

var BCollection = Backbone.Collection.extend({
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/amyb',
  model: B
});

export default {B, BCollection};
