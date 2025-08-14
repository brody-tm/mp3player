export default function (eleventyConfig) {	
	eleventyConfig.addPassthroughCopy("src/bundle.css");
  eleventyConfig.addPassthroughCopy("src/assets");
};

export const config = {
  dir: {
    input: "src",
    output: "docs"
  }
};