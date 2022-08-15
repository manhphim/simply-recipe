import React from "react"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"
import { useStaticQuery, graphql } from "gatsby"

const AllRecipes = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulRecipe(sort: { fields: title, order: ASC }) {
        nodes {
          cookTime
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
          prepTime
          title
          id
          content {
            tags
          }
        }
      }
    }
  `)

  const recipes = data.allContentfulRecipe.nodes

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
