import React from 'react'
import ReactPlayer from 'react-player/vimeo'

class VimeoPlayer extends React.Component {
  render() {
    return (
      <ReactPlayer
        url={this.props.url}
        className={`${this.props.uniqueClassName || 'react-player'}`}
        width={this.props.width} //425px
        height={this.props.height} //238px
        controls={true}
        playsinline={true}
        config={{
          vimeo: {
            playerOptions: {
              autopause: true,
              byline: true,
              controls: true,
              portrait: true,
              title: true,
              playing: false,
              frameborder: false,
            },
          },
        }}
      />
    )
  }
}
export default VimeoPlayer
