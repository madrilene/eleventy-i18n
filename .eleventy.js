const {EleventyI18nPlugin} = require('@11ty/eleventy');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'en' // Required
  });

  eleventyConfig.addPassthroughCopy('src/favicon.ico');

  ['src/favicon.ico', 'src/opengraph.jpg'].forEach(item =>
    eleventyConfig.addPassthroughCopy(item)
  );

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};
