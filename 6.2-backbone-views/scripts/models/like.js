var Like = Backbone.Model.extend({
  defaults: {
    count: 0,
    like: 'likes'
  },

  like: function(){
    //if count is equal to 0 (b/c count below is equal to original count plus 1), button needs to say "like" instead of "likes"
    if (this.get('count') === 0){
      this.set('like', 'like');
    } else {
      this.set('like', 'likes');
    }

    //get count from default and add 1, return value of count to view
    var count = this.get('count') + 1;
    this.set('count', count);
  }
});

export default Like;
