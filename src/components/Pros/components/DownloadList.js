import React from 'react'

import styled from 'styled-components'

const DownloadList = ({ className, data }) => {
  return (
    <StyledDiv className={className}>
      {data.map(({ id, data }) => {
        return (
          <div key={id} className={'download'}>
            <h3>{data.name}</h3>
            <p>{data.notes}</p>
            {data.dateUpdated && (
              <div className={'date-info'}>
                <div>
                  {data.isNew && (
                    <input
                      type="button"
                      value="NEW"
                      title="Show date"
                      className={'ibtn'}
                      onClick={e => {
                        if (e.target.value === 'NEW') {
                          e.target.value = data.dateUpdated
                          e.target.className = 'ibtn'
                          e.target.title = 'Hide date'
                        } else {
                          e.target.value = 'NEW'
                          e.target.className = 'ibtn'
                          e.target.title = 'Show date'
                        }
                      }}
                    />
                  )}
                  {!data.isNew && (
                    <input
                      type="button"
                      value="UPDATED"
                      title="Show date"
                      className={'ibtn'}
                      onClick={e => {
                        if (e.target.value === 'UPDATED') {
                          e.target.value = data.dateUpdated
                          e.target.className = 'ibtn'
                          e.target.title = 'Hide date'
                        } else {
                          e.target.value = 'UPDATED'
                          e.target.title = 'Show date'
                          e.target.className = 'ibtn'
                        }
                      }}
                    />
                  )}
                </div>
              </div>
            )}
            <a
              className={'btn'}
              href={data?.pdf?.localFiles[0]?.publicURL}
              target="_blank"
              rel="noreferrer"
              download={data.name}
            >
              Download PDF
            </a>
          </div>
        )
      })}
    </StyledDiv>
  )
}
const StyledDiv = styled.div`
  & {
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    & .download {
      font-size: x-small;
      margin-block-end: 1.88rem;
      margin-inline: auto;
      text-align: center;
      width: 100%;
      h3 {
        font-size: 1.5rem;
        letter-spacing: -0.09rem;
        margin-block-end: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        font-size: 14px;
        padding-inline: 10%;
        padding-block-end: 0;
        min-height: 1rem; /* if no value */
      }
      /* Toggle Date Info */
      .date-info {
        display: flex;
        justify-content: center;
        margin: 5px auto 0;
        .ibtn {
          background: var(--mainWhite);
          border: 1px solid var(--mainMcc);
          border-radius: 0.9rem;
          color: var(--mainBlack);
          cursor: pointer;
          display: inline-block;
          font-size: xx-small;
          line-height: normal;
          letter-spacing: 1.5px;
          padding: 6px;
          text-decoration: none;
          transition: border 0.2s ease-in;
          &:hover,
          &:focus,
          &:active {
            border: 1px solid var(--poppy) !important;
          }
        }
      }
    }
  }
`
export default DownloadList
