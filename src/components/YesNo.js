import React from 'react'
import styled from 'styled-components'

import ScreenReaderText from '../components/ScreenReaderText'

const YesNo = ({ className }) => {
  return (
    <div className={className}>
      <ScreenReaderText
        element="p"
        text="Discover premium skincare loaded with powerful peptides, potent antioxidants, stable vitamin c, active enzymes, nutritious plant oils, balancing essential oils, and gentle preservatives."
      />

      <div className="flex-row">
        <div className="list">
          <h2 className="list-title poppy">
            We say YES to{' '}
            <ScreenReaderText
              element="span"
              text="powerful peptides, potent antioxidants, stable vitamin c, active enzymes, nutritious plant oils, balancing essential oils, and gentle preservatives."
            />
          </h2>
          <ul data-bullet-list>
            <li>
              <p className="li">Powerful Peptides</p>
            </li>
            <li>
              <p className="li">Potent Antioxidants</p>
            </li>
            <li>
              <p className="li">Stable Vitamin C</p>
            </li>
            <li>
              <p className="li">Active Enzymes</p>
            </li>
            <li>
              <p className="li">Nutritious Plant Oils</p>
            </li>
            <li>
              <p className="li">Balancing Essential Oils</p>
            </li>
            <li>
              <p className="li">Gentle Preservatives</p>
            </li>
          </ul>
        </div>

        <div className="list">
          <h2 className="list-title poppy">
            We say NO to{` `}
            <ScreenReaderText
              element="span"
              text="parabens, synthetic colorants, synthetic fragrance, phthalates, formaldehyde releasing preservatives, and sodium lauryl sulfate."
            />
          </h2>
          <ul data-bullet-list>
            <li>
              <p className="li">Parabens</p>
            </li>
            <li>
              <p className="li">Synthetic Colorants</p>
            </li>
            <li>
              <p className="li">Synthetic Fragrance</p>
            </li>
            <li>
              <p className="li">Phthalates</p>
            </li>
            <li>
              <p className="li">
                Formaldehyde Releasing
                <span className="long-list-item" style={{}}>
                  {' '}
                  Preservatives
                </span>
              </p>
            </li>
            <li>
              <p className="li">Sodium Lauryl Sulfate</p>
            </li>
          </ul>
        </div>
      </div>
      <h3 className="yn-header poppy">
        Professional skincare that delivers. Clean, safe, efficacious formulas.
      </h3>
      <h4 className="yn-header italic">
        Only available through your licensed skincare professional.
      </h4>
    </div>
  )
}
const Wrapper = styled(YesNo)`
  & .flex-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;
  }
  & .list {
    width: fit-content;
    max-width: fit-content;
    margin: 0 auto;
  }
  & .list-title {
    font-weight: 400;
    line-height: var(--bodyLineHeight);
    white-space: pre-wrap;
    text-align: left;
    font-size: 2rem;
  }
  & .li {
    margin-bottom: 1.26rem;
    .long-list-item {
      display: block;
      margin: 1rem 0 1rem 0.4rem;
    }
  }
  & .yn-header {
    text-align: center;
    font-weight: 400;
  }
  & .yn-header.poppy {
    font-size: 1.6rem;
    margin-top: 2rem;
  }
  & .yn-header.italic {
    font-size: 21px;
    font-style: italic;
  }
  @media (max-width: 672px) {
    & .flex-row {
      justify-content: center;
      margin: 0 auto;
    }
  }
`
export default Wrapper
