const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'src/PaintTools/[name].[ext]'
            } 
        }]
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  }
};