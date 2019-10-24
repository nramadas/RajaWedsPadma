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
        <h3>Program</h3>
      </p>
      <p>
        <h1>Saturday December 7th, 2019</h1>
      </p>
      <p>
        <h3>Vratham: 7:00am - 8:20am</h3>
        <h3>Nischayathartham: 9:00am - 11:00am</h3>
      </p>
      <p>
        <h3>Mehendi</h3>
        <h3>2:00pm - 4:00pm</h3>
      </p>
      <p>
        <h3>Baraath and Dinner</h3>
        <h3>6:00pm - 10:00pm</h3>
      </p>
      <p>
        <h1>Sunday December 8th, 2019</h1>
      </p>
      <p>
        <h3>Kasi Yatra / Oonjal Ceremony</h3>
        <h3>6:30am - 8:30am</h3>
      </p>
      <p>
        <h2>Muhurtham</h2>
        <h3>9:00am - 10:30am</h3>
      </p>
      <p>
        <h3>Lunch</h3>
        <h3>11:00am - 2:00pm</h3>
      </p>
      <p>
        <a href="https://www.zola.com/wedding/padmaandraja" target="_blank">www.zola.com/wedding/padmaandraja</a>
        <a href="mailto:royal.lotus.0405@gmail.com">royal.lotus.0405@gmail.com</a>
      </p>
      <p>
        <h3>
          Please avoid bouquets and boxed gifts. Thank you
        </h3>
      </p>
    </article>
  );
}
