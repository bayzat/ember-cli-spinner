import Ember from 'ember';

const { computed, getOwner } = Ember;
const addonName = 'ember-cli-spinner';

function toggleSpinner(value) {
  this.set('isLoading', value);
}

function showSpinner() {
  return toggleSpinner.call(this, true, ...arguments);
}

function hideSpinner() {
  return toggleSpinner.call(this, false, ...arguments);
}

export default Ember.Mixin.create({
  isLoading: computed('controller', {
    get(key) {
      return this._super(...arguments);
    },
    set(key, value) {
      let controller = this.controllerFor('application');
      let config = getOwner(this).resolveRegistration('config:environment');
      let rootElement = Ember.$(config.rootElement || 'body');
      let loadingClassName = config[addonName].loadingClassName || 'is-loading';

      controller.set('isLoading', value);
      rootElement.toggleClass(loadingClassName, value);

      if(this.router) {
        this.router.one('didTransition', function() {
          controller.set('isLoading', !value);
          rootElement.toggleClass(loadingClassName, !value);
        });
      }

      return this._super(...arguments);
    }
  }),

  actions: {
    loading: showSpinner,
    willTransition: showSpinner,
    error: hideSpinner,
    finished: hideSpinner
  }
});
