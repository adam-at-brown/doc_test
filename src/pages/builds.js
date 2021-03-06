import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { filterPaths, kebabToTitleCase } from "../helpers"

export default function BuildsPage({ data }) {
  const { allSitePage } = data
  const { distinct } = allSitePage
  const paths = filterPaths(distinct, "builds")

  return (
    <Layout>
      <Seo title="Builds & Deployment Guide" />
      <h1>Builds & Deployment Guide</h1>
      <ul>
        {paths.map(path => {
          return (
            <li key={path}>
              <Link key={path} to={`/builds/${path}`}>
                {kebabToTitleCase(path)}
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const navQuery = graphql`
  query BuildsQuery {
    allSitePage {
      distinct(field: path)
    }
  }
`
