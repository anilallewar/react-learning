var htmlWebPackPlugin = require('html-webpack-plugin')

var htmlWebPackPluginConfig = new htmlWebPackPlugin ({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_module/, loader: "babel-loader"},
            {test: /\.cssmodule\.css$/,
              loaders: [
                { loader: 'style-loader' },
                {
                  loader: 'css-loader',
                  query: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[name]-[local]-[hash:base64:5]'
                  }
                }
              ]
            },
          {test: /^.((?!cssmodule).)*\.css$/,
            loaders: [
              { loader: 'style-loader' },
              { loader: 'css-loader' }
            ]
          },
          {
            test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
            loader: 'file-loader'
          }
        ]
    },
    output: {
        filename: "index_bundle.js",
        path: __dirname + '/dist'
    },
    plugins: [htmlWebPackPluginConfig]
}
