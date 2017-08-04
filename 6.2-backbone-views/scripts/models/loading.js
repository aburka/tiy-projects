var Loading = Backbone.Model.extend({
  defaults: {
    text: 'Submit',
    isLoading: false,
  },

  submit: function(){
    //does everything way better
    this.set('isLoading', true);
    window.setTimeout(() => this.set('isLoading', false), 4000);
  }
});

export default Loading;
