import React from 'react'
import SingleArticle from './Article'

const Articles = ({ articles }) => {
  return (
    <section className="article-list">
      {articles.map(data => {
        return <SingleArticle key={data.id} data={data} />
      })}
    </section>
  )
}
export default Articles
