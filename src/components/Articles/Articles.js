import React from 'react'
import Article from './Article'

const Articles = ({ lst }) => {
  return (
    <ul className="articles">
      {lst.map(data => {
        const {node} = data
        return <Article key={node.id} article={node} />
      })}
    </ul>
  )
}
export default Articles
