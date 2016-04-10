# Ember-cli-spinner

This README outlines the details of collaborating on this Ember addon.

## Installation

* `npm install github:kepek/ember-cli-spinner`

## Usage

`app/routes/application.js`
```javascript
import Ember from 'ember'
import SpinnerRouteMixin from 'ember-cli-spinner/mixins/bay-zat/spinner'

export default Ember.Route.extend(SpinnerRouteMixin, {
  actions: {
    createUser(model) {
      this.send('loading');

      model
        .save()
        .then((response) => {
          // (...)
        })
        .catch((error) => {
          // (...)
        })
        .finally(() => {
          this.send('finished');
        });
    }
  }
})

```

`app/templates/application.hbs`
`app/templates/application-loading.hbs`
```hbs
{{bay-zat/spinner class="spinner--application" isLoading=isLoading}}
```
