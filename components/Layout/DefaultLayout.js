import Container from '@/components/Layout/Container';
const Header = () => <div>{'Header'}</div>;
const Footer = () => <div>{'Footer'}</div>;
const DefaultLayout = ({ children }) => (
  <>
    <Container containerStyle='container container__header' wrapStyle='wrap wrap__header'>
      <Header />
    </Container>
    <Container containerStyle='container container__main' wrapStyle='wrap wrap__main'>
      {children}
    </Container>
    <Container containerStyle='container container__footer' wrapStyle='wrap wrap__footer'>
      <Footer />
    </Container>
  </>
);
export default DefaultLayout;
