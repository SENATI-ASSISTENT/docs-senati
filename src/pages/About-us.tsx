import React from 'react';
import Layout from '@theme/Layout';

const AboutUs: React.FC = () => {
  return (
    <Layout
      title="Sobre Nosotros"
      description="Conoce más sobre nuestro equipo y nuestra misión.">
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Sobre Nosotros</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <p>Bienvenido a la página de Sobre Nosotros. Aquí encontrarás información acerca de nuestro equipo y nuestra misión.</p>
        </div>
      </main>
    </Layout>
  );
};

export default AboutUs;
