(function(){
  'use strict';

  $(document).ready(function(){
    $('.categories').hide();
  });

  $(".header").click(function() {
    $('.categories').siblings('.categories').slideUp("slow", function(){});
    $(this).next().slideDown("slow", function(){});
  });

})();
