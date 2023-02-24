import React from 'react'
import styled from 'styled-components'
import Email from './Email'
import { getAnnouncementStatus, setHideStatus } from '../utils/announcement'
import { areaCode, prefix, suffix } from '../constants/contact-info'

class Announcement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      details: <div style={{ display: 'none' }} />,
      hiddenDetails: <div style={{ display: 'none' }} />,
      visibleDetails: (
        <div id="x" className={`${this.props.className} grid-container`}>
          <div className="grid-item"></div>
          <div className="grid-item">
            <p
              style={{
                padding: '0',
                paddingTop: '0px',
                textAlign: 'center',
                color: 'var(--blackText)',
                fontFamily: 'Times, serif',
                letterSpacing: '1.5px',
              }}
            >
              {areaCode}.{prefix}.{suffix}
              <span
                className={`tilda`}
                style={{
                  padding: '0 .1em 0',
                }}
              >
                ~
              </span>
              <Email
                color={`var(--blackText)`}
                fontFamily="Times, serif"
                subject={`General Information`}
              />
            </p>
          </div>
          <div className="grid-item">
            <button
              onClick={() => {
                this.handleClick()
              }}
              style={{ color: 'var(--blackText)' }}
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
    background: inherit;
    color: #ffffff;
    display: grid;
    font-size: 18px;
    font-weight: 400;
    grid-template-columns: 1fr 20fr 1fr;
    grid-template-rows: 40px;
    width: 100%;
  }
  & .grid-item {
    font-family: Times, serif;
    font-size: 16px;
    align-items: center;
    display: flex;
    justify-content: center;
    white-space: nowrap;
  }
  & .grid-item:last-child {
    align-items: center;
  }
  & .grid-item .tilda {
    margin: 0 2px 0;
    font-family: Times, serif;
  }

  & button {
    line-height: 5px;
    background: inherit;
    border: 1px solid transparent;
    border-radius: 5px;
    background-clip: border-box !important;
    box-sizing: border-box;
    color: var(--mainBlack);
    cursor: pointer;
    display: inline-block;
    padding: 1.0rem 1.6rem;
    text-decoration: none;
    transition: background 100ms linear;
  }
  & button:hover {
    background: var(--mainWhite);
    color: var(--mainBlack);
    border 1px solid #ffffff;
  }
  @media (max-width: 570px){
    & { display: none; }
  }
`
export default WrappedAnnouncement
