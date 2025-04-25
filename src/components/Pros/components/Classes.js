import React from 'react'
import ProVideo from './ProVideo'
import { Link } from 'gatsby'
import styled from 'styled-components'

const getUniqueTags = arr => {
  return Array.from(
    new Set(
      arr.reduce((acc, curr) => {
        return [...acc, ...curr.tags]
      }, [])
    )
  )
}

const Classes = props => {
  let { tag } = props
  let filteredClasses = !!tag
    ? virtualClasses.reduce((acc, curr) => {
        curr.tags.forEach(tg => {
          if (tg === tag) {
            acc.push(curr)
            return acc
          }
        })
        return acc
      }, [])
    : virtualClasses

  let uTags = getUniqueTags(virtualClasses)

  return (
    <StyledArticle>
      <div className="tags">
        <Link
          className={`${!tag ? 'active tag' : 'tag'}`}
          to={`/pros/classes/`}
        >
          all classes
        </Link>
        {uTags.map(tg => {
          return (
            <Link
              className={`${tg === tag ? 'active tag' : 'tag'}`}
              key={tg}
              to={`/pros/classes/${tg}`}
            >{tg}
            </Link>
          )
        })}
      </div>

      <section>
        {filteredClasses.map(({ title, dt, tags, videoId }) => {
          return (
            <ProVideo
              key={videoId}
              title={title}
              dt={dt}
              tags={tags}
              videoId={videoId}
              paramTag={tag}
            />
          )
        })}
      </section>
    </StyledArticle>
  )
}

const virtualClasses = [
  {
    title: 'Moisturizers & Masks Zoom Training',
    dt: '01/07/2025',
    tags: ['moisturizers', 'masks'],
    videoId: '1055674922',
  },
  {
    title: 'Acne Safe Best Sellers Zoom Training',
    dt: '09/23/2024',
    tags: ['acne-safe', 'best-sellers'],
    videoId: '1018659107',
  },
  {
    title: 'Serums Session Zoom Training',
    dt: '12/03/2024',
    tags: ['serums'],
    videoId: '1035709332',
  },
  {
    videoId: '1036018318',
    title: 'All Acne Safe Products Zoom Training',
    dt: '10/11/2024',
    tags: ['acne-safe'],
  },
]

const StyledArticle = styled.article`
  & {
    .tags{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-block: 2rem;
      a.tag{
        border: 1px solid var(--m0);
        color: #000000;
        font-size: small;
        background: var(--m0);
        border-radius: 5em;
        padding-inline: 5px;
        margin: 0.5rem;
        &.active{
          border: 1px solid var(--poppy);
          cursor: default;
          background: var(--clear);
          color: var(--m1);
          }
        }
      }
    }
    section {
      width: 100%;
      margin: 0 auto 1rem;
      text-align: center;
        display: flex;
        flex-wrap: wrap;
        > div {
          margin: 0 auto;
        }
      }
    }
  }
`

export default Classes
