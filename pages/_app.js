import { useState, useEffect } from 'react';
import { Provider } from '../context/Context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild)
    return null;
    
  if (typeof window === 'undefined')
    return <></>;

  else
    return (
      <Provider>
        <Component {...pageProps} />
      </Provider>
    );
}

export default MyApp;
