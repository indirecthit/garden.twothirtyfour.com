import fs from "fs";
import path from "path";
import matter from "gray-matter";
import * as urlSlug from "url-slug";

const titleSh = require("title");

const obsidianDirectory = "./data";

export function getAllPageFiles() {
  return fs.readdirSync(obsidianDirectory).filter((file) => {
    return path.extname(file).toLowerCase() === ".md";
  });
}

export function getPageSlug(title) {
  return urlSlug.convert(title);
}

export function getPageFilename(slug) {
  const files = getAllPageFiles();
  const pagesMap = files.reduce((pages, filename) => {
    pages[getPageSlug(filename.replace(/\.md$/, ""))] = filename;
    return pages;
  }, {});
  if (slug in pagesMap) {
    return pagesMap[slug];
  }
}

export function getPageBySlug(slug) {
  const filename = getPageFilename(slug);
  return getPageByFilename(filename);
}

export function getPageByFilename(filename) {
  const title = titleSh(filename.replace(/\.md$/, ""));
  const slug = getPageSlug(title);
  const fullPath = path.join(obsidianDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content } = matter(fileContents);

  const items = { slug, content, title };
  return items;
}

export function getAllPages() {
  const files = getAllPageFiles();
  const pages = files.map((filename) => getPageByFilename(filename));
  return pages;
}

export function getRecentPages(limit = 5) {
  const files = getAllPageFiles()
    .map(function (v) {
      return { name: v, time: fs.statSync(path.join(obsidianDirectory, v)).mtime.getTime() };
    })
    .sort(function (a, b) {
      return a.time - b.time;
    })
    .map(function (v) {
      return v.name;
    });
  return files.slice(0, limit).map((filename) => getPageByFilename(filename));
}
