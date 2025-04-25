import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ProVideo = ({
  desc = '',
  dt = '',
  videoId = '1018659107',
  title = 'Acne Safe Best Sellers Zoom Training',
  tags = [],
  paramTag = '',
  ...props
}) => {
  return (
    <IframeVideoWrapper>
      <div className="video">
        <iframe
          type="media"
          src={`https://player.vimeo.com/video/${videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div>
        <div className="title">{title}</div>
        <div className="dt">{dt && dt}</div>
        <div className="tags">
          {tags.map(tag => {
            return (
              <Link
                key={`${tag}-${videoId}`}
                className={tag === paramTag ? 'active tag' : 'tag'}
                to={`/pros/classes/${tag}`}
              >
                {tag}
              </Link>
            )
          })}
        </div>
      </div>
      <hr />
    </IframeVideoWrapper>
  )
}

const IframeVideoWrapper = styled.div`
  & {
    margin: 0 auto 2rem;
    max-width: 500px;
    width: 50%;
    transition:
      margin 0.2s ease,
      width 0.8s ease;
    & .video {
      padding: 56.25% 0 0 0;
      position: relative;
      & iframe {
        border: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    & .dt {
      font-size: xx-small;
      line-height: 0.8rem;
    }

    & .tags {
      margin-block: 0;
      padding-block: 0;
    }
    & hr {
      margin-block-start: 0;
      margin-block-end: 0.5rem;
    }
  }
  @media (max-width: 800px) {
    & {
      width: 100%;
      & .dt{
        display: none;
      }
    }
  }
`

export default ProVideo
