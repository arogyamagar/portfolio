import React from 'react'
import Layout from '../components/Layout'
import About from '../components/About';
import Tech from '../components/Tech';

export default function index() {
  return (
    <Layout>
      <title>Home | ArogyaMagar</title>
      <About />
      <Tech />
    </Layout>
  )
}
