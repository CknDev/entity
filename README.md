# entity
----

Manage an entity

## Installation

```bash
npm i entity
```

## Usage

```js
// node.js
const entity = require('entity')
// es6
import entity from 'entity'
```

```js
// import { update } from 'entity'
const { update } = require('entity')

update('name', 'foo', { id: 1, name: 'bar' })
```
Check ``spec/entity_spec.js`` for further usage

## Development

```js
npm i # install deps
npm test # test
```

## Contributing

1. Fork it ( https://github.com/ckndev/entity/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

## Contributors

- [ckn](https://github.com/ckndev) - creator, maintainer
