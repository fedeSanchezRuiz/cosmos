import Cardwrapper from '../components/UI/CardWrapper';
import ErrorCustom from '../components/UI/ErrorCustom';
import Footer from '../components/UI/Footer';

const ErrorPage = () => {
  return (
    <>
      <Cardwrapper>
        <ErrorCustom
          imageHeight={{
            base: '270px',
            sm: '300px',
            md: '350px',
            lg: '380px',
            xl: '400px',
          }}
          marginTop={{
              base: '15%',
              sm: '14%',
              md: '3%',
              lg: '0%',
              xl: '-2%'
          }}
        />
      </Cardwrapper>
      <Footer />
    </>
  );
};

export default ErrorPage;
