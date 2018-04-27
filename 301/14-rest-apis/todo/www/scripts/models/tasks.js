'use strict';

(function(module) {

  let Model = {};
  Model.all = [];

  function Instance(obj) {
    Object.assign(this, obj);
  }

  Model.fetchAll = callback => {
    $.get(`${ENVIRONMENT.apiUrl}/api/v1/tasks`)
    .then( loadAll )
    .then( callback )
    .catch(errorCallback);
  };

  Model.add = task => {
    $.post(`${ENVIRONMENT.apiUrl}/tasks/add`, task)
    .then(() => page('/'))
    .catch(errorCallback);
  };

  let loadAll = rows => Model.all = rows.map(data => new Instance(data));
  let errorCallback = (err) => {
    throw new Error(err.message);
  };

  module.Task = Model;

})(app);

