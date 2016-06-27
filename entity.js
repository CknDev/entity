const R = require('ramda')

const update = (prop, value, data) => {
  if (prop.includes('.')) {
    const [path, subProp] = prop.split('.').reverse()
    const pathLens = R.lensPath([path])
    const subPropLens = R.lensProp(subProp)

    return R.set(R.compose(subPropLens, pathLens), value, data)
  }
  return R.set(R.lensProp(prop), value, data)
}

module.exports = { update }
