import Ember from 'ember';
import layout from '../../templates/components/bay-zat/spinner';

const { computed, inject, getOwner } = Ember;

export default Ember.Component.extend({
  layout,

  spinner: inject.service(),

  classNames: ['spinner spinner--animating'],
  classNameBindings: ['isLoading:is-loading'],

  loadingText: 'Loading...',
  isLoading: false
});
