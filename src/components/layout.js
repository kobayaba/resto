import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from 'styled-components'

import Navbar from './globals/navbar/Navbar'
import Footer from '../components/globals/Footer'


const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle/>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body{
    font-family: 'Open Sans', sans-serif;
    color: #262626;
    background: #fff;
  }
`


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
