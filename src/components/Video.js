import React from 'react'
import styled from 'styled-components'

const Video = ({ src, title, ...props }) => {
  return (
    <IframeVideoWrapper>
      <div className="video">
        <iframe
          type="media"
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </IframeVideoWrapper>
  )
}

const IframeVideoWrapper = styled.div`
  width: 90vw;
  max-width: 525px;

  .video {
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
    width: 90vw;
  }
`

Video.defaultProps = {
  src: 'https://player.vimeo.com/video/360311714',
  title: 'Peptide Rich & Radiant Eye Cream',
}

export default Video
