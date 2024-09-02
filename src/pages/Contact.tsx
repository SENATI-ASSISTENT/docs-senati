import React from 'react';
import Layout from '@theme/Layout';

const Contact: React.FC = () => {
  return (
    <Layout
      title="Contactos"
      description="Ponte en contacto con nosotros a través del formulario o por correo electrónico.">
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Contactos</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <p>Esta es la página de Contacto. Puedes enviarnos un mensaje a través del formulario o por correo electrónico.</p>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
