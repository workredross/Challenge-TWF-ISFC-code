var webpack = require('webpack');
  module.exports = {
    entry: [
      'script!jquery/dist/jquery.min.js',
      './public/app.js'
    ],
    externals:{
      jquery:'jQuery'
    },
    plugins:[
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
      })
    ],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    resolve: {
      root:__dirname,
      alias: {
        IfscCodeFormField: 'public/components/IfscCodeFormField.jsx',
        InputBarCSS: 'public/styles/InputBar.css',
        GetIFSCDataAPI:'public/API/GetIFSCData.jsx',
        GetGeoCodeAPI: 'public/API/GetGeoCode.jsx',
        DisplayIfscData: 'public/components/DisplayIfscData.jsx',
        LoaderCSS: 'public/styles/Loader.css'
      },
      extension: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_module|bower_components)/
      }
    ]

  }
};
