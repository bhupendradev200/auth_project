import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  // Specify the mode (development or production)
  mode: 'development', // Change to 'production' for optimized builds

  // The entry point of your application
  entry: './index.js', // Ensure this path is correct

  // The output configuration
  output: {
    filename: 'bundle.js', // The name of the bundled output file
    path: path.resolve('dist'), // Output directory
    publicPath: '/'
  },

  // Specify that we're building for a Node.js environment
  target: 'node',

  // Exclude node_modules from being bundled
  externals: [nodeExternals()],

  // Set up the module rules
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the rule to JavaScript files
        exclude: /node_modules/, // Don't transpile node_modules
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript
          options: {
            presets: ['@babel/preset-env'] // Use Babel preset for modern JavaScript
          }
        }
      }
    ]
  },

  // Additional settings
  resolve: {
    extensions: ['.js'] // Resolve these file extensions
  },

  // Optional: Source maps for easier debugging
  devtool: 'source-map'
};
