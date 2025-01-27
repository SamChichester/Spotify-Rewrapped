import type { AppProps } from 'next/app';
import "../styles/global.scss";
import Head from 'next/head';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;