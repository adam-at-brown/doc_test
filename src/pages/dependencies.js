import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { filterPaths, kebabToTitleCase } from "../helpers"

export default function DependenciesPage({ data }) {
  const { allSitePage } = data
  const { distinct } = allSitePage
  const paths = filterPaths(distinct, "dependencies")

  return (
    <Layout>
      <Seo title="Dependencies Guide" />
      <h1>Dependencies Guide</h1>
      <ul>
        {paths.map(path => {
          return (
            <li key={path}>
              <Link key={path} to={`/dependencies/${path}`}>
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
  query DependenciesQuery {
    allSitePage {
      distinct(field: path)
    }
  }
`
