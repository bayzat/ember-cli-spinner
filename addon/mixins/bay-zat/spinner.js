import Ember from 'ember';
import DS from 'ember-data';

const { computed, getOwner } = Ember;
const addonName = 'ember-cli-spinner';

function toggleSpinner(value) {
  let controller = this.controllerFor('application');
  let config = getOwner(this).resolveRegistration('config:environment');
  let rootElement = Ember.$(config.rootElement || 'body');
  let loadingClassName = config[addonName].loadingClassName || 'is-loading';

  this.set('isLoading', value);
  controller.set('isLoading', value);
  rootElement.toggleClass(loadingClassName, value);

  if(this.router) {
    this.router.one('didTransition', () => {
      this.set('isLoading', !value);
      controller.set('isLoading', !value);
      rootElement.toggleClass(loadingClassName, !value);
    });
  }
}

function hideSpinner() {
  toggleSpinner.call(this, false, ...arguments);
}

function showSpinner() {
  toggleSpinner.call(this, true, ...arguments);
}

export default Ember.Mixin.create({
  actions: {
    loading(transition, route) {
      showSpinner.call(this, arguments);

      if (transition) {
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
