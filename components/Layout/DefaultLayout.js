import Container from '@/components/Layout/WrapContainer/WrapContainer';
const DefaultLayout = ({ children }) => (
  <Container className='container__simple'>{children}</Container>
);
export default DefaultLayout;
