import type { AppProps } from 'next/app';
import "../styles/global.scss";
import Navbar from './components/Navbar/Navbar';

const App = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default App;