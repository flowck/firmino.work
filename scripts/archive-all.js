const path = require("path");
const fs = require("fs/promises");
const matter = require("gray-matter");
const yaml = require("yaml");

(async()=> {
  const dir = await fs.readdir(path.join(process.cwd(), "/src/posts"))

  for (const item of dir) {
    // read file content with matter
    const { data: props, content } = matter(await fs.readFile(path.join(process.cwd(), "src/posts", item)))

    props.isArchive = true

    const body = `---\n${yaml.stringify(props)}---\n${content}`;

    await fs.writeFile(path.join(process.cwd(), "src/posts/", item), body, {encoding: "utf-8"})
  }
})()
