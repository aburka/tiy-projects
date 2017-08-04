(function(){
  'use strict';

  $(document).ready(function(){

  $.ajax({
    url: "https://api.github.com/users/aburka",
    type: "GET"
  })
  .then(function(data){
      $('.user').prepend(JST['user'](data));
      $('.user-nav').prepend(JST['header'](data));
      $('.nav-tabs').prepend(JST['tabs'](data));
      console.log(data);
  });

  $.ajax({
    url: "https://api.github.com/users/aburka/repos?sort=created",
    type: "GET"
  })
  .then(function(data){
      $('.repo-list').prepend(JST['repo'](data.reverse()));
      console.log(data);
  });

});

})();
