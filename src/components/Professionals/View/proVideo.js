import React from 'react'
import styled from 'styled-components'

const ProVideo = ({ videoId, title, ...props }) => {
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
    </IframeVideoWrapper>
  )
}

const IframeVideoWrapper = styled.div`
  margin: 0 auto;
  width: 75%;
  transition: margin .2s ease, width .8s ease;

  .video {
    padding: 56.25% 0 0 0;
    position: relative;
  }
  .video iframe {
    border: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    margin: 0 0;
  }
`

ProVideo.defaultProps = {
  videoId: '1018659107',
  title: 'Acne Safe Best Sellers Zoom Training',
}

export default ProVideo
