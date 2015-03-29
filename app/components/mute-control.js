import Ember from 'ember';
import layout from '../templates/components/mute-control';

export default Ember.Component.extend({
  layout: layout,
  classNames: ["nav", "navbar-nav", "navbar-right"],

  setup: function () {
    var that = this;
    this.get("mop").getMute().then(function (mute) {
      that.set("isMuted", mute);
    });

    this.get("mop.client").on("event:muteChanged", function (changes) {
      that.set("isMuted", changes.mute);
    });
  }.on("init"),

  actions: {
    mute: function () {
      this.get("mop").setMute(true);
    },

    unmute: function () {
      this.get("mop").setMute(false);
    }
  }
});