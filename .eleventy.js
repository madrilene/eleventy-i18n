import {EleventyI18nPlugin} from '@11ty/eleventy';

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'en', // Required
    errorMode: 'allow-fallback' // Opting out of "strict"
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
}
