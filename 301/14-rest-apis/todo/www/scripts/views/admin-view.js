'use strict';

(function (module) {

  const adminView = {};

  adminView.initAdminPage = function(ctx,next) {

    show('admin');

    $('#admin form').on('submit', function(event) {
      event.preventDefault();
      let token = event.target.passphrase.value;

      $.get(`${ENVIRONMENT.apiUrl}/authenticate`, {token})
      .then((token) => {
        if( ! token ) {
          throw new Error("Invalid Token");
        }
        localStorage.token = true;
        next();
      })
      .catch(() => page('/'));
    });
  };

  adminView.verify = function(ctx, next) {
    if( localStorage.token ) { next(); }
  }

  module.adminView = adminView;
})(app)
