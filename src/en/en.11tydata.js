export default {
  lang: 'en',
  eleventyComputed: {
    key: data => {
      if (data.key) {
        return data.key;
      }
      return data.page.fileSlug;
    }
  }
};
