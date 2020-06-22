import packager from 'electron-packager'

(async (options = {}) => {
  const appPaths = await packager(options)
  console.log(`Electron app bundles created:\n${appPaths.join("\n")}`)
})()