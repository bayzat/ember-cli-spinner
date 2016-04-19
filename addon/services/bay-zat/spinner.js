import Ember from 'ember';

export default Ember.Service.extend({
  isLoading: false,
  isSpinning: Ember.computed.alias('isLoading')
});
