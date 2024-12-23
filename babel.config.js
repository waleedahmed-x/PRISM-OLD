module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
          '@': './',
          '@components': './components',
          '@screens': './screens',
          '@interfaces': './interfaces',
          '@assets': './assets',
        },
      },
    ],
  ],
};
