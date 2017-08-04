export default Backbone.View.extend({
  template: JST.b,

  events: {
    'click button': 'submitPerson'
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template);
  },

  submitPerson: function(e){
    e.preventDefault();
    this.collection.create({
      firstName: this.$('.first-name').val(),
      lastName: this.$('.last-name').val(),
      addressLineOne: this.$('.address-line-1').val(),
      addressLineTwo: this.$('.address-line-2').val(),
      city: this.$('.city').val(),
      state: this.$('.state').val(),
      zip: this.$('.zip').val(),
      phone: this.$('.phone').val(),
    });
  }
});
