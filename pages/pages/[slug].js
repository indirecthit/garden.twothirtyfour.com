import { getAllPages, getPageBySlug } from "../../lib/api";
import Layout from "../../components/layout";
import Head from 'next/head'
import { markdown2html } from "../../lib/markdown2html";

export default function Page({ page }) {
  const content = markdown2html(page.content)

  return (
    <Layout>
      <Head>
        <title>{page.title} | Chris's Digital Garden</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <article className="prose markdown">
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
