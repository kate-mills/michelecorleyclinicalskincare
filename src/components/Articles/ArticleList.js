import React from 'react'
import SingleArticle from './Article'

const ArticleList = ({ articleList }) => {
  return (
    <section className="article-list">
      {articleList.map(data => {
        return <SingleArticle key={data.id} data={data} />
      })}
    </section>
  )
}
export default ArticleList
