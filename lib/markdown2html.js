import remark2react from "remark-react";
import remark from "remark";
var footnotes = require("remark-footnotes");
var toc = require('remark-toc')

import ObsidianImage from "../components/obsidian-image";
var obsidianLinks = require("./remark-obsidian-links");
var obsidianImages = require("./remark-obsidian-images");
var increaseHeadings = require("./remark-increase-heading");

const customHandler = (type) => (h, node) => {
  const props = { node };

  return h(node, type, props);
};

export function markdown2html(content, addToc = true) {
  if(addToc) {
    content = "# Table of Contents\n" + content;
  }
  return remark()
    .use(footnotes, { inlineNotes: true })
    .use(increaseHeadings)
    .use(toc)
    .use(obsidianImages) //Has to be before Links, otherwise the Links code processes images
    .use(obsidianLinks)
    .use(remark2react, {
      sanitize: false,
      remarkReactComponents: {
        obsidianimage: ObsidianImage,
      },
      toHast: {
        handlers: {
          obsidianimage: customHandler("obsidianimage"),
        },
      },
    })
    .processSync(content).result;
}
