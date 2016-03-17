var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:4050',
    'webpack/hot/only-dev-server',
    './src/client/main',
  ],
  output: {
    path: __dirname + '/public/',
    filename: 'app.js',
    publicPath: 'http://localhost:4050/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    function () {
        this.plugin('done', function (stats) {
            if (stats.compilation.errors && stats.compilation.errors.length) {
                console.log('Found following error(s):');
                stats.compilation.errors.forEach(function(theError) {
                    console.log(theError.error);
                });
                process.exit(1);
            }
        });
    }
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname,'src'),
        loader: 'react-hot!babel'
      },
      {
        test:/\.css/,
        include:path.join(__dirname, 'src'),
        loader: 'style!css',
        output: {
          path: path.join(__dirname, 'lib')
        }
      },
      {
        test: /\.ejs$/,
        include:path.join(__dirname, 'src'),
        loader: "ejs-loader"
      }
    ]
  }
}
