// app/page.jsx
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Sitio SEO</title>
        <meta name="description" content="Bienvenido a la página de inicio optimizada para buscadores." />
        <meta property="og:title" content="Inicio | Mi Sitio SEO" />
        <meta property="og:description" content="Explora contenido optimizado en nuestra página principal." />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <h1>Inicio</h1>
      </main>
    </>
  );
}
