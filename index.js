const fs = require("fs");
const Parser = require("rss-parser");

const parser = new Parser();

const feedUrl = "https://oreo.is-a.dev/rss.xml";

md.use(emoji);

(async () => {
  let blogPosts = "";
  try {
    blogPosts = await loadBlogPosts();
  } catch (e) {
    console.error(`Failed to load blog posts from ${websiteUrl}`, e);
  }

  fs.readFile('README.md', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let md = data;
    const reg = /\s+pub fn latest_blogs\(\) -> Vec<Blog> {(\n.*){0,}}/;
    const newStr = str.replace(reg, `    pub fn latest_blogs() -> Vec<Blog> {\n{        {data}\n    }`);
    fs.writeFile("README.md", newStr, function (err) {
    if (err) return console.log(err);
    console.log(`${newStr} > README.md`);
  });
});
})();

async function loadBlogPosts() {
  const feed = await parser.parseURL(feedUrl);

  let links = "";

  feed.items.slice(0, blogPostLimit).forEach((item) => {
    links += `        Blog {title: {item.title}, url: {item.link}},\n`;
  });
  return `Vec![\n{links}\n]`
}
