

import { useEffect, useState } from 'react';

function WindowSize() {

  const [windowSize,setwindowSize] = useState('0');

  useEffect(() => {
    console.log(window.innerWidth);
    // setwindowSize(window.innerWidth);
  });


  return (
    <div className="WindowSize">
      <h1 onResize={windowSize}>Window size is : {windowSize}</h1>
    </div>
  );
}

export default WindowSize;
