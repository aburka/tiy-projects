import TaskListView from './views/task-list-view';

import {TaskCollection} from './models/task';

(function(){
  'use strict';

  $(document).ready(function(){
    var taskCollection = new TaskCollection();

    taskCollection.fetch().then(function(){
      var taskList = new TaskListView({collection: taskCollection});
      $('#main').html(taskList.el);
    }, console.error.bind(console));
  });
})();
