import Ember from 'ember';
import layout from '../../templates/components/bay-zat/spinner';

export default Ember.Component.extend({
  layout,

  classNames: ['spinner'],
  classNameBindings: ['isLoading:is-loading'],

  loadingText: 'Loading...',
  isLoading: false
});
