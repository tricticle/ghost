module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/about/');
    eleventyConfig.addPassthroughCopy('./src/assets/');
    eleventyConfig.addPassthroughCopy('./src/blogs/');
    eleventyConfig.addPassthroughCopy('./src/tricticle/');
    eleventyConfig.addPassthroughCopy('./src/ads.txt');
    eleventyConfig.addPassthroughCopy('./src/Product\ Sans\ Bold.ttf');


    return {
        dir:{
            input: "src",
            output: "public"
        }
    };
}
