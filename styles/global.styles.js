import {createGlobalStyle} from 'styled-components';

export const theme = {
  colors: {
    primary: '#0070f3',
  },
};


export const GlobalStyle = createGlobalStyle`
  html,
  body{
    background-color: rgba(250,254,253,0.5);
    margin: 0;
    padding: 0; 
  }
`;