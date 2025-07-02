import React from 'react'
import styled from 'styled-components'
import {
  getAnnouncementStatus,
  setHideStatus,
} from '../../../../utils/announcement'
import { PhoneInfo, EmailInfo } from '../../../../constants/contact-info'

class Announcement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      details: null,
      hiddenDetails: null,
      visibleDetails: (
        <div className={`${this.props.className}`}>
          <div className="announcement-info txt-center">
            <span className="serif">{PhoneInfo.fullPhone}</span>
            <span className="tilda serif" />
            <a
              className="serif"
              href={`mailto:${EmailInfo.fullEmail}?subject=${EmailInfo.defaultSubject}`}
            >
              {EmailInfo.fullEmail}
            </a>
          </div>
          <div className="announcement-close">
            <button className="bold" onClick={() => { this.handleClick() }}>X</button>
          </div>
        </div>
      ),
    }
  }
  componentDidMount() {
    if (getAnnouncementStatus()) {
      this.setState({ details: this.state.visibleDetails })
    }
  }
  handleClick = () => {
    setHideStatus()
    this.setState({ details: this.state.hiddenDetails })
  }
  render() {
    return this.state.details
  }
}

const WrappedAnnouncement = styled(Announcement)`
  & {
    line-height: 40px;
    .announcement-info {
      & .serif {
        display: inline-block;
      }
      .tilda {
        width: 30px;
        &::after {
          content: '~';
        }
      }
    }
    .announcement-close {
      position: absolute;
      right: 2px;
      top: 0;
      button {
        font-size: 1rem;
        background: inherit;
        background-clip: border-box !important;
        border: 1px solid transparent;
        border-radius: 5px;
        padding: 7px 1.6rem;
        transition: background 100ms linear;
        &:hover {
          background: var(--mainWhite);
        }
      }
    }
    @media (max-width: 720px) {
      display: none;
    }
  }
`
export default WrappedAnnouncement
