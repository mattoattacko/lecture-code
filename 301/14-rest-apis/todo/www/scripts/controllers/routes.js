page( "/", () => app.Task.fetchAll(app.tasksView.initIndexPage) );
page( "/task/:id",  ctx => app.tasksView.initTaskPage(ctx) );

page( "/add", app.adminView.verify, app.tasksView.initAddPage );

page( "/update/:id",
  (ctx,next) => app.adminView.verify(ctx,next),
  (ctx,next) => app.tasksView.initUpdatePage(ctx,next)
);

page( "/update/:id",
  (ctx,next) => app.adminView.verify(ctx,next),
  (ctx,next) => app.tasksView.initUpdatePage(ctx,next)
);

page( "/delete/:id",
  (ctx,next) => app.adminView.verify(ctx,next),
  (ctx,next) => app.tasksView.initDeletePage(ctx,next)
);

page( "/admin",
  (ctx,next) => app.adminView.initAdminPage(ctx,next)
);

page();


