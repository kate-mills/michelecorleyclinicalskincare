import React from 'react'
import styled from 'styled-components'

const Video = ({ src, title, ...props }) => {
  return (
    <IframeVideoWrapper>
      <h4>{title}</h4>
      <div className="video">
        <iframe
          type="media"
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </IframeVideoWrapper>
  )
}

const IframeVideoWrapper = styled.div`
  width: 50vw;
  max-width: 525px;
  & h4{
    font-weight: 300;
    font-family: cursive;
    color: var(--poppy);
    position: relative;
    top: 30px;
    z-index: 20;
    text-align: center;
    height: fit-content;
    padding: unset;
    margin: unset;
  }
  .video {
    overflow: hidden;
    /* // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625) */
    padding-top: 56.25%;
    position: relative;
    border-radius: var(--radius);
  }

  .video iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 100%;
    & h4{
      top: 35px;
      text-align: left;
      margin-left: 10px;
    }
  }
`

Video.defaultProps = {
  src: 'https://player.vimeo.com/video/360311714',
  title: 'Default Title',
}

export default Video
