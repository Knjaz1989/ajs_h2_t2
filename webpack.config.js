const htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    entry: "./app.js",
    devServer: {
      port: 8001 
    },    
    output: {
      filename: "app.bundle.js"
    },
    plugins: [
      new htmlWebpackPlugin({
        template: "./src/index.html"
      })
    ]
  };