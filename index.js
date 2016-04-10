/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-spinner',

  included: function(app) {
    this._super.included(app);
    app.import('vendor/spinner.css');
  }
};
