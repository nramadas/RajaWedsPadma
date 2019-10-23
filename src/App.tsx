import React from 'react';
import { useState } from 'react';
import cx from 'classnames';

import Intro from './Intro';
import Invitation from './Invitation';
import Program from './Program';

import styles from './App.module.scss';

enum Slide {
  Intro,
  Invitation,
  Program,
}

const App: React.FC = () => {
  const [currentSlide, setSlide] = useState(Slide.Intro);

  return (
    <div className={ styles.app }>
      { currentSlide === Slide.Intro &&
        <Intro onNext={ () => setSlide(Slide.Invitation) }/> }
      { currentSlide !== Slide.Intro &&
        <>
          <Invitation className={ cx(styles.invitation, {
            [styles.invitationSelected]: currentSlide === Slide.Invitation,
          }) }/>
          <Program className={ cx(styles.program, {
            [styles.programSelected]: currentSlide === Slide.Program,
          }) } />
          <div
            className={ cx(styles.circleLeft, {
              [styles.circleDisabled]: currentSlide !== Slide.Program,
            }) }
            onClick={ () => setSlide(Slide.Invitation) }
          >
            ◄
          </div>
          <div
            className={ cx(styles.circleRight, {
              [styles.circleDisabled]: currentSlide !== Slide.Invitation,
            }) }
            onClick={ () => setSlide(Slide.Program) }
          >
            ►
          </div>
        </> }
    </div>
  );
}

export default App;
