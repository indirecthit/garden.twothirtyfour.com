import Link from "next/link";
import Head from 'next/head';
import { getAllPages, getPageBySlug, getRecentPages } from "../lib/api";
import Layout from "../components/layout";
import { markdown2html } from "../lib/markdown2html";

const Index = ({ recentPages, indexPage }) => {
  const indexContent = markdown2html(indexPage.content, false)
  return (
    <Layout>
      <Head>
        <title>Home | Chris's Digital Garden</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="prose prose-sm sm:prose lg:prose-lg">
        <h1>Welcome to my digital garden</h1>
        {indexContent}
        <h2>Recent Updates</h2>
        <ul>
          {recentPages.map(({ title, slug }) => (
            <li>
              <Link href={`/pages/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const recentPages = getRecentPages();
  const indexPage = getPageBySlug('index');
  return {
    props: { recentPages, indexPage },
  };
}

export default Index;
