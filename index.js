const fs = require("fs");
const Parser = require("rss-parser");

const parser = new Parser();

const feedUrl = "https://oreo.is-a.dev/rss.xml";
const blogPostLimit = 5;

loadBlogPosts()

async function loadBlogPosts() {
    const feed = await parser.parseURL(feedUrl);
    // console.log(feed)

    let links = "";

    feed.items.slice(0, blogPostLimit).forEach((item) => {
        links += `           Blog {title: \"${item.title}\", url: \"${item.link}\"},`;
    });
    // console.log(links)
    //
    let blogPosts = `vec![\n${links}\n        ]`;
    console.log(blogPosts)

    fs.readFile('README.md', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        let md = data;
        const reg = /\s+pub fn latest_blogs\(\) -> Vec<Blog> {\n(.*\n){0,}\s+}/;
        console.log(blogPosts)
        const newStr = md.replace(reg, "\n\n    pub fn latest_blogs() -> Vec<Blog> {\n        " + blogPosts + "\n    }");
        console.log(newStr)
        fs.writeFile("README.md", newStr, function(err) {
            if (err) return console.log(err);
            console.log(`${newStr} > README.md`);
        });
    });
}
