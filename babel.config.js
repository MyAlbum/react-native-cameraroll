module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@myalbum/cameraroll": "./js/CameraRoll.js"
        },
        cwd: "babelrc"
      }
    ]
  ]
};
