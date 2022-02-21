import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Project from '../../components/Project'
import {web} from '../../styles/projects.module.css'

export default function index({data}) {
    return (
        <div>
            <Layout>
            <title>Projects | ArogyaMagar</title>
            <h1 className={web} style={{borderBottom:"1px solid",width:"300px",marginLeft:"auto",marginRight:"auto"}}>Web Applications</h1>
            {data.allProjectsJson.nodes.map(node=>(
                <Project node={node} key={node.id}/>
            ))}
            
            </Layout>
        </div>
    )
}
export const query = graphql`
query MyQuery {
  allProjectsJson {
    nodes {
      title
      techs
      description
      repo
      demo
      src {
        childImageSharp {
          gatsbyImageData(layout:CONSTRAINED)
        }
      }
      id
    }
  }
}
`