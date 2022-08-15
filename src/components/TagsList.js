import { Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import { setupTags } from "../utils/utils"

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  console.log(newTags)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [tagName, tagCount] = tag
          const tagSlug = slugify(tagName, { lower: true })
          return (
            <Link key={index} to={`/tags/${tagSlug}`}>
              {tagName} ({tagCount})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
