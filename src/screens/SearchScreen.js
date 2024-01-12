import React from 'react'
import { useParams } from 'react-router-dom'

const SearchScreen = () => {
    const { query } = useParams()
  return (
    <div>
      Search
    </div>
  )
}

export default SearchScreen
