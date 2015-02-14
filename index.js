/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-model',

  included: function(app) {
    this._super.included(app);
    
    app.import(app.bowerDirectory + '/ember-model/ember-model.js');
  }
};
