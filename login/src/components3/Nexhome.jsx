import { React, useState, useEffect } from 'react';

const Nexhome = () => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHidden(false);
    }, 100); // Wait 100ms before triggering the transition

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`body-fade ${hidden ? 'body-fade-hidden' : 'body-fade-visible'}`}
      style={{
        transform: hidden ? 'translateX(-100%)' : 'translateX(0)',
    transitionProperty: 'transform',
    transitionDuration: '1.5s',
    transitionTimingFunction: 'ease-in-out',
    // transitionDelay: 's'
      }}
    >
      <div style={{ textAlign: 'right', marginRight: '450px' }}>
        <h1><i>Depth, Dimension, Discovery</i></h1>
        <h1><i>:The Nexus Effect</i></h1>
      </div>
    </div>
  );
};

export default Nexhome;