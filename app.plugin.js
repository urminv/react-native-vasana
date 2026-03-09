const withReactNativeVasana = (config) => {
  // Nitro requires TurboModules/new architecture.
  if (config.newArchEnabled !== true) {
    config.newArchEnabled = true
  }

  return config
}

module.exports = withReactNativeVasana
