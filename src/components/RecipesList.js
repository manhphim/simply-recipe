import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
import { pluralTime } from "../utils/utils"
const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, image, prepTime, cookTime } = recipe
        const imageData = getImage(image)
        const slug = slugify(title, { lower: true, replacement: "-" })
        return (
          <Link to={`/${slug}`} key={id} className="recipe">
            <GatsbyImage image={imageData} alt={title} className="recipe-img" />
            <h5>{title}</h5>
            <p>
              Prep: {pluralTime(prepTime)} | Cook: {pluralTime(cookTime)}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
