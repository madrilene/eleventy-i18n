module.exports = {
  lang: 'fa',
  permalink: function (data) {
    // Slug override for localized URL slugs
    if (data.slugOverride) {
      console.log()
      return `/${data.lang}/${this.slugify(data.slugOverride)}/`;
    }
  }
};
