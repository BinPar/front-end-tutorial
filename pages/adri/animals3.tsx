import React from 'react';
import Head from 'next/head';
import Card from '../../src/components/Card';
import Menu from '../../src/components/Menu';

const Animals: React.FC = () => (
  <main className="h-full flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover py-14 fadeIn">
    <Menu />
    <Head>
      <title>Pruebas3</title>
    </Head>
    <section id="galery" className="w-10/12 flex flsex-wrap max-w-screen-xl ">
      <Card
        name="gato"
        family="mustelido"
        eat="herbívoro"
        url="https://en.wikipedia.org/wiki/Raccoon"
        img="/img/mapache.jpeg"
      />
    </section>
  </main>
);

export default Animals;
