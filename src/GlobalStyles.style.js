import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap');
* {
    margin: 0;
    padding: 0;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    position: relative;
    background: grey;
}

body {
  font-family: 'Lato', sans-serif;
}


body{
    color:#fff;
     margin:0px;
     padding:0px;
     font-family: 'Roboto', 'Open Sans, sans-serif';
     background-color:#040406;

}
`