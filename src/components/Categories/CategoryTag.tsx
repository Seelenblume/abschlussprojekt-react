import React from 'react'

const CategoryTag = ({categoryName}:{categoryName: string}) => {
  return (
    <div>
        <p>{categoryName}</p>
    </div>
  )
}

export default CategoryTag