import ajaxConfig from './ajax-config';

import MenuView from './views/menu-view';
import {MenuCollection} from './models/menu';

import OrderView from './views/order-view';
import {OrderCollection} from './models/order';

(function(){
  'use strict';

  $(document).ready(function(){

    var menuCollection = new MenuCollection();
    var orderCollection = new OrderCollection();

    menuCollection.fetch().then(function(){
      var menu = new MenuView({
        order: orderCollection,
        collection: menuCollection
      });
      $('#menu').html(menu.el);
    }, console.error.bind(console));

    var order = new OrderView({collection: orderCollection});
    $('#order').prepend(order.el);

    $(document).on('click', '.show', function(){
      $(this).siblings('.menu-categories').slideToggle("slow", function(){});
      $(this).siblings('.menu-items').toggle("slow", function(){});
    });
  });
})();
