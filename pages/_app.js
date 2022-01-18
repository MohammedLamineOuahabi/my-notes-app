import DefaultLayout from '@/components/Layout/DefaultLayout';
import '@/styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || DefaultLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
