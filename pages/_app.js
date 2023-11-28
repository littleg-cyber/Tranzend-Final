/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import NoAuth from '../components/NoAuth'; // TODO: COMMENT OUT FOR AUTH
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NoAuth
        component={Component}
        pageProps={pageProps}
      />

    </>
  );
}

export default MyApp;
