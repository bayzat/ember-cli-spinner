import Ember from 'ember';

const { getOwner } = Ember;
const addonName = 'ember-cli-spinner';

function toggleSpinner(value) {
  try {
    let controller = this.controllerFor('application');
    let config = getOwner(this).resolveRegistration('config:environment');
    let rootElement = Ember.$(config.rootElement || 'body');

    const loadingClassName = config[addonName].loadingClassName || 'is-loading';

    if (controller) {
      controller.set('isLoading', value);
    }

    rootElement.toggleClass(loadingClassName, value);

    if(this.router) {
      this.router.one('didTransition', function() {
        if (controller) {
          controller.set('isLoading', !value);
        }

        rootElement.toggleClass(loadingClassName, !value);
      });
    }
  } catch (err) {}
}

function showSpinner() {
  return toggleSpinner.call(this, true, ...arguments);
}

function hideSpinner() {
  return toggleSpinner.call(this, false, ...arguments);
}

export default Ember.Mixin.create({
  actions: {
    loading: showSpinner,
    error: hideSpinner,
    finished: hideSpinner
  }
});
