import React from 'react';
import Link from 'next/link';

const Menu: React.FC = () => (
  <ul className="mb-4">
    <li className="inline p-4">
      <Link href="./animals">
        <a>Animales</a>
      </Link>
    </li>
    <li className="inline p-4">
      <Link href="./animals2">
        <a>Animales2</a>
      </Link>
    </li>
    <li className="inline p-4">
      <Link href="./animals3">
        <a>Animales3</a>
      </Link>
    </li>
  </ul>
);

export default Menu;
