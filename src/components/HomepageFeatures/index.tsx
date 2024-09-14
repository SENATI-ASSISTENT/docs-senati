import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Descripcion del Proyecto',
    Svg: require('@site/static/img/undraw_figure.svg').default,
    description: (
      <>
       El proyecto consiste en desarrollar un asistente robótico capaz de desplazarse de forma autónoma, interactuar con los usuarios mediante procesamiento de lenguaje natural para responder preguntas, y ejecutar órdenes simples según las instrucciones dadas por el usuario.
      </>
    ),
  },
  {
    title: 'Proposito del Proyecto',
    Svg: require('@site/static/img/undraw_artificial_intelligence.svg').default,
    description: (
      <>
       El propósito del robot es interactuar de manera fluida y natural para responder preguntas, ejecutar órdenes como controlar dispositivos encender/apagar o realizar tareas básicas, y desplazarse de forma autónoma para interactuar con su entorno.
      </>
    ),
  },
  {
    title: 'Objetivos del Proyecto',
    Svg: require('@site/static/img/undraw_firma.svg').default,
    description: (
      <>
        <>
          El robot utilise una interaccion fluida utilizando lenguaje natural para responder preguntas, ejecutar ordenes como controlar dispositivos encender/apagar o realizar tareas básicas, y desplazarse de forma autónoma para interactuar con su entorno.
        </>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
