# ember-cli-spinner ![Ember Community Badge](https://embadge.io/b/6.svg)

## Installation

```
npm install --save-dev github:kepek/ember-cli-spinner
```

## Usage

```javascript
// app/routes/application.js`

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

```hbs
{{!-- app/templates/application.hbs --}}
{{!-- app/templates/application-loading.hbs --}}

{{bay-zat/spinner class="spinner--application" isLoading=isLoading}}
```

```js
// config/environment.js

/*jshint node: true*/

module.exports = function (environment) {
    var ENV = {
        // Spinner
        'ember-cli-spinner': {
            className: 'spinner',
            loadingClassName: 'ember-application--loading'
        }
    }

    return ENV
}
```
