import React from 'react';
import Dot from '../img/icons/dot.svg';
import TimerDot from '../img/icons/timer-dot.svg';

const Controls = () => (
  <>
    <span className="dot"><img src={Dot} alt="Inactive Slide" /></span>
    <span className="dot active"><img src={TimerDot} alt="Active Slide" /></span>
    <span className="dot"><img src={Dot} alt="Inactive Slide" /></span>
    <span className="dot"><img src={Dot} alt="Inactive Slide" /></span>
  </>
);
export default Controls;
