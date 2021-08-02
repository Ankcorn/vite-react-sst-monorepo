const { defineConfig } = require('vite');
const path = require('path')

module.exports = {
  stories: [
      '../stories/**/*.stories.mdx',
      '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
      // "@storybook/addon-a11y", // still breaks
      '@storybook/addon-links',
      '@storybook/addon-essentials',
  ],
  core: {
      builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType }) {
      // customize the Vite config here
      return config;
  },
};
