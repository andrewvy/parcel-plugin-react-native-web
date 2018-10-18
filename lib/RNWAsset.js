const path = require('path')
const resolve = require('resolve')
const utils = require('./utils')
const preset = require('./preset')
const JSAsset = require(path.join(utils.getParcelPath(), 'lib/assets/JSAsset'))

class RNWAsset extends JSAsset {
  constructor(name, options) {
    super(name, options)

    let pkg = await this.getPackage()

    if (
      !!(pkg.dependencies && pkg.dependencies['react-native']) ||
      !!(pkg.devDependencies && pkg.devDependencies['react-native']) ||
      !!(pkg.peerDependencies && pkg.peerDependencies['react-native']) ||
      !!(pkg.sourceDependencies && pkg.sourceDependencies['react-native']) ||
      !!(pkg.keywords && pkg.keywords.includes('react-native')) ||
      !!(pkg['parcel-rnw'] && pkg['parcel-rnw'].includes(pkg.name)) ||
      !/node_modules/g.test(this.name)
    ) {
      this.babelConfig = utils.mergeConfigs(this.babelConfig, preset)
    }
  }

  addDependency(name, opts) {
    name = utils.getWebExtension(name, this.name)
    super.addDependency(name, opts)
  }
}

module.exports = RNWAsset
