import DefaultLayout from '@/components/Layout/DefaultLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
