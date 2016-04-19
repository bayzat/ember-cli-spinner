import Ember from 'ember';

const { computed, inject, getOwner } = Ember;
const addonName = 'ember-cli-spinner';

function toggleSpinner(value) {
  let config = getOwner(this).resolveRegistration('config:environment');
  let rootElement = Ember.$(config.rootElement || 'body');
  let loadingClassName = config[addonName].loadingClassName || 'is-loading';

  this.set('isLoading', value);
  this.get('spinner').set('isLoading', value);
  this.controllerFor('application').set('isLoading', value);
  rootElement.toggleClass(loadingClassName, value);
}

function hideSpinner() {
  toggleSpinner.call(this, false, ...arguments);
}

function showSpinner() {
  toggleSpinner.call(this, true, ...arguments);
}

export default Ember.Mixin.create({
  spinner: inject.service('bay-zat/spinner'),

  actions: {
    loading(transition, route) {
      showSpinner.call(this, arguments);

      if (transition) {
        transition.promise.finally(() => {
          hideSpinner.call(this, arguments);
        });

        return true;
      }
    },
    error(error, transition) {
      hideSpinner.call(this, arguments);

      if (transition) {
        return true;
      }
    },
    finished() {
      hideSpinner.call(this, arguments);
    }
  }
});
