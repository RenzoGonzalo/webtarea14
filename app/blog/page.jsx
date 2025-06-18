// app/blog/page.jsx
import Head from 'next/head';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Mi Sitio SEO</title>
        <meta name="description" content="Lee nuestros artículos optimizados sobre SEO y desarrollo web." />
        <meta property="og:title" content="Blog | Mi Sitio SEO" />
        <meta property="og:description" content="Consejos y técnicas de SEO para mejorar tu sitio web." />
        <meta property="og:type" content="article" />
      </Head>
      <main>
        <h1>Blog</h1>
      </main>
    </>
  );
}
