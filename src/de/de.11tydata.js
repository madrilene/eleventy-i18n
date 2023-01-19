module.exports = {
  lang: 'de',
  permalink: function (data) {
    // Slug override for localized URL slugs
    if (data.slugOverride) {
      return `/${data.lang}/${this.slugify(data.slugOverride)}/`;
    }
  }
};
