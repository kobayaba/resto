import React from 'react'
import { FaBlackTie } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'
import img from '../images/bcg/homeBcg.jpg'
import { HomeHeader, Banner, BannerButton } from '../utils'
import QuickInfo from '../components/HomeComponents/QuickInfo'
import Gallery from '../components/HomeComponents/Gallery'
import Menu from '../components/HomeComponents/Menu'


const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <HomeHeader img={img}>
      <Banner title='Fine Dining' subtitle='65, MG Abidjan, San Andre'>
        <BannerButton style={{margin:'2rem auto'}}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo/>
    <Gallery />
    <Menu />
  </Layout>
)

export default IndexPage