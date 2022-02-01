import React from 'react';
import Head from 'next/head';
import Card from '../../src/components/Card';
import Menu from '../../src/components/Menu';

const Animals: React.FC = () => (
  <main className="h-full flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover py-14 fadeIn">
    <Head>
      <title>Pruebas</title>
    </Head>
    <Menu />
    <section id="galery" className="w-10/12 flex flsex-wrap max-w-screen-xl ">
      <Card
        name="mapache"
        family="mustelido"
        eat="herbívoro"
        url="https://en.wikipedia.org/wiki/Raccoon"
        img="/img/mapache.jpeg"
      />
      <Card
        name="muflon"
        family="mustelido"
        eat="herbívoro"
        url="https://en.wikipedia.org/wiki/Raccoon"
        img="/img/mapache.jpeg"
      />
    </section>
  </main>
);

export default Animals;
