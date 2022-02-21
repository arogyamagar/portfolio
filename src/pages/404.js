import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <div style={{fontWeight:'400',marginTop:'7%',textAlign:'center'}}>
        <h1>404 Not Found</h1>
        <h2>Might want to go back to <Link to="/" style={{color:"rgb(204, 186, 94)"}}>homepage..</Link></h2>
      </div>
    </Layout>
  )
}
