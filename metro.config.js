const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    alias: {
      '@': path.resolve(__dirname),
      '@components': path.resolve(__dirname, 'components'),
      '@screens': path.resolve(__dirname, 'screens'),
      '@interfaces': path.resolve(__dirname, 'interfaces'),
      '@assets': path.resolve(__dirname, 'assets'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
