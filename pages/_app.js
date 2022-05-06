import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import MainLayout from '../components/layouts/mainlayout';
function MyApp({ Component, pageProps }) {
  return (
    
    <NextUIProvider>
         <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
