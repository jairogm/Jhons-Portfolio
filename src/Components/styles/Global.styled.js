import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}
html {font-size: 100%;} /*16px*/

body {
  background: white;
  color: #000000;
  margin-top: 15px;
}

h1, h2, h3, h4, h5 {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  margin: 0.8rem 0;
}

h1 {
  margin-top: 0;
  font-size: 2.488rem;
}
p{font-size:1rem}

h2 { font-size: 2.074rem; }

h3 {font-size: 1.728rem;}

h4 {font-size: 1.44rem;}

h5 {font-size: 1.2rem;}

small, .text_small {font-size: 0.833rem;}

img {
  max-width: 100%;
}
`

export default GlobalStyles