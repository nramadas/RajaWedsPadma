import React, { useState } from 'react';
import cx from 'classnames';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

export default function Invitation(props: Props) {
  return (
    <article className={ cx(props.className, styles.container) }>
      <p>
        <h2>௳</h2>
        <h3>Sri Rama Jayam</h3>
      </p>
      <p>
        <h2>Smt. Leelavathi Ramadas & Sri. Ram Ramadas</h2>
      </p>
      <p>
        <h3>request your gracious presence and blessings at the wedding of their son</h3>
      </p>
      <p>
        <h1>Chiranjeevi <em>Balaji Guru Raja</em></h1>
        <h3>Grandson of</h3>
        <h2>Smt. Balambal and Sri. G. Sundararaman</h2>
        <h2>Smt. Sarojaratnam and Sri. S. Sellaratnam</h2>
      </p>
      <p>
        <h3>with</h3>
      </p>
      <p>
        <h1>Sowbaghyavathi <em>Dr. Padma Mangala Vani</em></h1>
        <h3>Daughter of</h3>
        <h2>Smt. Aparna and Sri. Venkat Swamy</h2>
      </p>
      <p>
        <h1>On Sunday the 8<sup>th</sup> December, 2019</h1>
      </p>
      <p>
        <h3>at</h3>
        <h2>VijayRaja Thirumana Mandapam</h2>
        <h2>Old No.2/322, New No.2/351, Medavakkam Main Road</h2>
        <h2>Kovilambakkam, Chennai 600 177</h2>
        <h2>Ph: 044 4864 5555, +91 98407 71476</h2>
        <a href="https://www.vrtm.in">www.vrtm.in</a>
      </p>
      <p>
        <h3>Muhurtam: 9:00am to 10:30am</h3>
      </p>
      <p>
        <h3>With a warm welcome from</h3>
        <h2>Niranjan Ramadas</h2>
      </p>
    </article>
  );
}
