import Ember from 'ember';
import BayZatSpinnerMixin from 'ember-cli-spinner/mixins/bay-zat/spinner';
import { module, test } from 'qunit';

module('Unit | Mixin | bay zat/spinner');

// Replace this with your real tests.
test('it works', function(assert) {
  let BayZatSpinnerObject = Ember.Object.extend(BayZatSpinnerMixin);
  let subject = BayZatSpinnerObject.create();
  assert.ok(subject);
});
