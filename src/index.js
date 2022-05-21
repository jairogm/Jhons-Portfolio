import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home, About, Blog, Contact, Projects } from './Pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'

const root = ReactDOM.createRoot(document.getElementById('root'));
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('black', 'whiteAlpha.900')(props),
        bg: mode('white', '#1111')(props),
        lineHeight: 'base',
      },
    }),
  },
})


root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
