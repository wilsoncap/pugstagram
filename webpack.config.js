// path es un modulo disponible dentro de node para identificar donde esta un valor dentro del sistema operativo donde estamos trabajando 
const path = require('path'); 
// plugin que nis va permitir mover un archivo html a otro lugar con ciertas configuraciones que vamos a necesitar 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // punto de entrada 
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.mjs', '.js', '.svelte']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    })
  ]
}