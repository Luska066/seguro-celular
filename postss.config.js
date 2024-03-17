module.exports = {
    plugins: {
      'postcss-preset-env': {
        browsers: 'last 2 versions',
      },
    },
    rules: [
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
        {
            test: /\.(ico|gif|png|jpg|jpeg|webp)$/i,
            type: 'assets/resource',
        },
        {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'assets/inline',
        },
        {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
  }