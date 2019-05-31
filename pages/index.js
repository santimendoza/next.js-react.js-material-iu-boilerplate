import React, { useState } from 'react';
import SEO from '../seo/index-seo'
import NextSeo from 'next-seo';
import Layout from '../components/layout'
const index = props => {
  return(
    <>
    <NextSeo config={SEO}/>
    <Layout/>
    </>
  )
};
export default index
