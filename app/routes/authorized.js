import Ember from "ember";

export default Ember.Route.extend({
  beforeModel: function () {
    const serverHost = "18.239.0.62";
    const serverPort = "6680";
    this.controllerFor("application").set("bare", false);
    this.get("mop").setProperties({
      serverHost: serverHost,
      serverPort: serverPort,
    });
  },
});
