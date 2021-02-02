import { ThemeProvider } from 'styled-components';
import {GlobalStyle, theme} from '../../styles/global.styles'; 
import styles from '../../styles/material-dashboard.css'; 
import {Provider} from 'next-auth/client'; 


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider session={pageProps.session}>
      <GlobalStyle />
      <styles/>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;