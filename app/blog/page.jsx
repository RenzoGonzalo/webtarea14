// app/blog/page.jsx
import Head from 'next/head';

// app/blog/page.jsx

export const metadata = {
  title: 'Blog | Mi Sitio SEO',
  description: 'Lee nuestros artículos optimizados sobre SEO y desarrollo web.',
  openGraph: {
    title: 'Blog | Mi Sitio SEO',
    description: 'Consejos y técnicas de SEO para mejorar tu sitio web.',
    type: 'article',
  },
};

export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
    </main>
  );
}
