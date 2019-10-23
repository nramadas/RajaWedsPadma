import React, { useState } from 'react';
import cx from 'classnames';

import styles from './index.module.scss';

import Stamp from '../Stamp';

interface Props {
  style?: React.CSSProperties;
  onNext?(): void;
}

export default function Intro(props: Props) {
  const [phase, setPhase] = useState(0);

  return (
    <div
      className={ cx({
        [styles.x1]: phase >= 1,
        [styles.x2]: phase >= 2,
        [styles.x3]: phase >= 3,
      })}
      style={ props.style }
    >
      { phase < 4 &&
      <>
        <div className={ styles.envelope }>
          <article
            className={ styles.front }
            onAnimationEnd={ () => setPhase(2) }
            onClick={ () => setPhase(1) }
          >
            <Stamp className={ styles.stamp } />
            <header className={ styles.title }>
              <div className={ styles.name }>Raja</div>
              <div className={ styles.text }>weds</div>
              <div className={ styles.name }>Padma</div>
            </header>
            <button className={ styles.button }>
              open
          </button>
          </article>
          <article className={ styles.back }>
            <div className={ styles.letter1 } />
            <div className={ styles.letter2 } />
            <div className={ styles.clip }>
              <div className={ styles.trbl } />
            </div>
            <div className={ styles.clip }>
              <div className={ styles.tlbr } />
            </div>
            <div className={ styles.bottom } />
            <div
              className={ styles.flapFront }
              onAnimationEnd={ () => (phase === 2) && setPhase(3) }
            >
              <div className={ styles.flapBuffer } />
              <div className={ styles.flapTriangle } />
            </div>
          </article>
        </div>
      </> }
      { phase >= 3 && (
        <>
          <div
            className={ styles.letter3 }
            onAnimationEnd={ () => props.onNext && props.onNext() }
          />
          <div className={ styles.letter4 } />
        </>
      ) }
    </div>
  );
}
