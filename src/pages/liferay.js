import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { filterPaths, kebabToTitleCase } from "../helpers"

export default function LiferayPage({ data }) {
  const { allSitePage } = data
  const { distinct } = allSitePage
  const paths = filterPaths(distinct, "liferay")

  return (
    <Layout>
      <Seo title="Liferay CMS Guide" />
      <h1>Liferay CMS Guide</h1>
      <p>The Mobile app uses myBrown's Liferay portal as a headless CMS.</p>
      <ul>
        {paths.map(path => {
          return (
            <li key={path}>
              <Link key={path} to={`/liferay/${path}`}>
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
  query LifeRayQuery {
    allSitePage {
      distinct(field: path)
    }
  }
`
