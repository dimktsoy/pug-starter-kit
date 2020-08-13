module.exports = (api) => {
  const env = api.env();

  api.cache.never();

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          debug: false,
          spec: true,
          loose: false,
          modules: false,
        },
      ],
    ],
    plugins: ['@babel/plugin-proposal-class-properties'],
  };
};
