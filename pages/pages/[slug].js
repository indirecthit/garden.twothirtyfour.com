import { getAllPages, getPageBySlug } from "../../lib/api";
import Layout from "../../components/layout";
import remark2react from "remark-react";
import remark from "remark";
import Head from 'next/head'
var footnotes = require("remark-footnotes");

import ObsidianImage from "../../components/obsidian-image";
var obsidianLinks = require("../../lib/remark-obsidian-links");
var obsidianImages = require("../../lib/remark-obsidian-images");
var increaseHeadings = require("../../lib/remark-increase-heading");

const customHandler = (type) => (h, node) => {
  const props = { node };

  return h(node, type, props);
};

export default function Page({ page }) {
  const content = remark()
    .use(footnotes, { inlineNotes: true })
    .use(increaseHeadings)
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
    .processSync(page.content).result;

  return (
    <Layout>
      <Head>
        <title>{page.title} | Chris's Digital Garden</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <article className="prose prose-sm sm:prose lg:prose-lg">
        <h1>{page.title}</h1>
        {content}
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const page = getPageBySlug(params.slug);
  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const pages = getAllPages();
  return {
    paths: pages.map((page) => {
      return {
        params: {
          slug: page.slug,
        },
      };
    }),
    fallback: false,
  };
}
