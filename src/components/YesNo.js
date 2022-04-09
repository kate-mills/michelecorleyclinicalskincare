import React from 'react'
import styled from 'styled-components'

const YesNo = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex-row">
        <div className="list">
          <h2 className="list-title poppy">We say YES to</h2>
          <ul data-bullet-list>
            <li>
              <p>Powerful Peptides</p>
            </li>
            <li>
              <p>Potent Antioxidants</p>
            </li>
            <li>
              <p>Stable Vitamin C</p>
            </li>
            <li>
              <p>Active Enzymes</p>
            </li>
            <li>
              <p>Nutritious Plant Oils</p>
            </li>
            <li>
              <p>Balancing Essential Oils</p>
            </li>
            <li>
              <p>Gentle Preservatives</p>
            </li>
          </ul>
        </div>
        <div className="list">
          <h2 className="list-title poppy">We say NO to</h2>
          <ul data-bullet-list>
            <li>
              <p>Parabens</p>
            </li>
            <li>
              <p>Synthetic Colorants</p>
            </li>
            <li>
              <p>Synthetic Fragrance</p>
            </li>
            <li>
              <p>Phthalates</p>
            </li>
            <li>
              <p>
                Formaldehyde Releasing
                <span
                  style={{
                    margin: '7.5px auto',
                    marginBottom: '0',
                    display: 'block',
                  }}
                >
                  Preservatives
                </span>
              </p>
            </li>
            <li>
              <p>Sodium Lauryl Sulfate</p>
            </li>
          </ul>
        </div>
      </div>
      <h3 className="yn-header poppy">
        Professional skincare that delivers. Clean, safe, efficacious formulas.
      </h3>
      <h3 className="yn-header italic">
        Only available through your licensed skincare professional.
      </h3>
    </div>
  )
}
const Wrapper = styled(YesNo)`
  & .flex-row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }
  & .list {
    display: inline-block;
    width: fit-content;
    margin: 0 auto;
  }
  & .list-title {
    margin-bottom: 0;
    text-align: left;
    position: relative;
    right: 15px;
  }
  & .yn-header {
    text-align: center;
  }
  & .yn-header.italic {
    font-size: 21px;
    font-style: italic;
    font-weight: 400;
  }
  @media (max-width: 672px) {
    & .flex-row {
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 auto;
    }
    & .list-title {
      right: 10px;
    }
  }
`
export default Wrapper
