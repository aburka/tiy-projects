(function(){
  'use strict';

  var username = '';
  var message = '';


  $(document).ready(function(){
    window.chatRouter = new ChatRouter();
    Backbone.history.start();

  });

  $(document).on('submit', '.login-form', function(event){
    event.preventDefault();
    username = $(this).find('.login-form-username').val();
    window.chatRouter.navigate('/chat', {trigger: true});
  });

  $(document).on('submit', '.new-message', function(event){
    event.preventDefault();
    message = $(this).find('.message-input').val();
    postMessage(message);
  });

  var ChatRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'chat': 'chat'
    },

    index: function(){
      $('.application').html(JST['login']());
    },

    chat: renderChat
  });

  function fetchMessages(){
    $.ajax({
      url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/",
    })
    .then(function(data){
        $('.application').html(JST['chat'](data));
    });
  }

  function postMessage(newMessage){
    $.ajax({
      url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/",
      data: {
        username: username,
        created_at: new Date(),
        content: newMessage,
      },
      type: "POST",
    });
    fetchMessages();
  }

  function renderChat(){
    fetchMessages();
    $('.application').html(JST['chat']());
  }
  
  window.setInterval(fetchMessages, 10000);

})();
