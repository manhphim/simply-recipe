import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { setupTags } from "../utils/utils"
import slugify from "slugify"
import SEO from "../components/SEO"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [tagName, tagCount] = tag
            const tagSlug = slugify(tagName, { lower: true })
            return (
              <Link key={index} to={`/tags/${tagSlug}`} className="tag">
                <h5>{tagName}</h5>
                <p>
                  {tagCount} {tagCount > 1 ? "recipes" : "recipe"}
                </p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
