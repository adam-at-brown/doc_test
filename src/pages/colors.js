import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Colors from "../components/colors"

export default function ColorsPage() {
  return (
    <Layout>
      <Seo title="Colors Guide" />
      <Colors />
    </Layout>
  )
}
