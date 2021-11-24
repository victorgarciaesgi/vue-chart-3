module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        jsx: { compositionAPI: true, injectH: true, vModel: false },
        modules: false,
      },
    ],
  ],
};
