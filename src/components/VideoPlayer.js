import React from 'react'
import styled from 'styled-components'

const VideoPlayer = ({
  src = 'https://player.vimeo.com/video/360311714',
  title = 'Michele Corley Clinical Skin Care',
  maxWidth = '',
  className,
}) => {
  return (
    <div className={className}>
      <div className="video" >
        <iframe
          type="media"
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  )
}

const IframeVideoWrapper = styled(VideoPlayer)`
  height: 100%;
  margin: 0 0 0 0;
  max-width: ${props => (props.maxWidth ? props.maxWidth : `600px`)};
  width: 50%;

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
  @media (max-width: 1024px) {
    margin: 1rem 0 0;
    width: 100%;
  }
`

export default IframeVideoWrapper
