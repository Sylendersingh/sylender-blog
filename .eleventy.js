module.exports = function(eleventyConfig) {
  // Pass-through files (CSS, images, admin)
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      includes: "_includes", // 
      data: "_data",
      output: "_site" // Netlify 
    }
  };
};