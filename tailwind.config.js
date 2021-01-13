module.exports = {
  purge: {
      mode: 'all',
      content: ['./**/**/*.html', './**/**/*.svelte'],

      options: {
          whitelistPatterns: [/svelte-/],
          defaultExtractor: (content) =>
              [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
      },
  },

  theme: {
      extend: {
        spacing: {
            '160': '37rem'
          }, 
      },
  },
  variants: {},
  plugins: [],
  future: {
      // purgeLayersByDefault: true,
      // removeDeprecatedGapUtilities: true,
  },
};
