module.exports = {
  context: __dirname,
  entry: "./scripts/game.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  watch: true,
  devtool: "source-map",
}
