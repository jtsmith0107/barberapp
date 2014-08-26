window.BarberApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new BarberApp.Routers.BarberAppRouter();
    Backbone.history.start();
  }
};
