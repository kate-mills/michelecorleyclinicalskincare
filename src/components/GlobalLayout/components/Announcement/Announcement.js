import React from 'react'
import styled from 'styled-components'
import { getAnnouncementStatus, setHideStatus, } from '../../../../utils/announcement'
import { PhoneInfo, EmailInfo } from '../../../../constants/contact-info'

class Announcement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      details: null,
      hiddenDetails: null,
      visibleDetails: (
        <div className={`${this.props.className} grid-container`}>
          <div className="announcement-info">
            <span>{PhoneInfo.fullPhone}</span>
            <span className="tilda" />
            <a
              href={`mailto:${EmailInfo.fullEmail}?subject=${EmailInfo.defaultSubject}`}
            >
              {EmailInfo.fullEmail}
            </a>
          </div>
          <div className="announcement-close">
            <button
              onClick={() => {
                this.handleClick()
              }}
            >
              X
            </button>
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
    color: var(--mainBlack);
    font-size: 18px;
    font-family: Times, serif;
    font-weight: 400;
    position: relative;
    width: 100%;
    white-space: nowrap;

    > .announcement-info {
      width: 100%;
    }
    > .announcement-close {
      position: absolute;
      right: 3px;
      top: 0;
    }
    > .announcement-info,
    > .announcement-close {
      align-items: center;
      display: flex;
      height: 40px;
      justify-content: center;
      line-height: 40px;
      text-align: center;
      > .tilda {
        position: relative;
        width: 30px;
        &::after {
          content: '~';
        }
      }
      > button {
        background: inherit;
        background-clip: border-box !important;
        border: 1px solid transparent;
        border-radius: 5px;
        box-sizing: border-box;
        cursor: pointer;
        padding: 0.65rem 1.6rem;
        text-decoration: none;
        transition: background 100ms linear;
        &:hover {
          background: var(--mainWhite);
        }
      }
    }
    @media (max-width: 570px) {
      display: none;
    }
  }
`
export default WrappedAnnouncement
