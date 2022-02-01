import React from 'react';
import Image from 'next/image';

interface CardProps {
  name: string;
  family: string;
  eat: 'omnívoro' | 'carnívoro' | 'herbívoro';
  url: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ name, family, eat, url, img }) => (
  <article className="lg:w-[24%] md:w-[49%] sm:w-[49%] w-full lg:mr-[1.33%] md:mr-[2%] sm:mr-[2%] mr-0 mb-4 bg-white shadow-lg rounded-lg overflow-hidden border border-solid border-white hover:transition-all hover:duration-700 duration-700 hover:translate-y-[-1rem] fadeIn delay3">
    <div className="bg-center bg-no-repeat bg-cover h-56 animal">
      <Image width={1706} height={960} src={img} alt={name} />
    </div>
    <div className=" py-10 px-10 text-center">
      <h2 className="font-['Merriweather'] text-lg">{name}</h2>
      <h3 className="font-sans font-thin md:tracking-[10px] sm:tracking-[7.5px] tracking-[3px] md:text-sm text-xs ml-2">
        {family}
      </h3>
      <h3 className="font-sans sm:text-base text-sm text-center font-thin tracking-[1px] mb-3">
        {eat}
      </h3>
      <a
        className="text-amber-400 py-1 px-8 inline-block border-2 border-solid border-amber-400 hover:bg-amber-400 hover:text-white hover:transition-colors hover:duration-700 duration-700"
        href={url}
        title={name}
        rel="noreferrer"
        target="_blank"
      >
        Detalles
      </a>
    </div>
  </article>
);

export default Card;
