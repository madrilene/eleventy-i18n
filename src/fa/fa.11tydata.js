export default {
  lang: 'fa',
  eleventyComputed: {
    key: data => {
      if (data.key) {
        return data.key;
      }
      return data.page.fileSlug;
    }
  }
};
