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
              <p className="ingredient">Powerful Peptides</p>
            </li>
            <li>
              <p className="ingredient">Potent Antioxidants</p>
            </li>
            <li>
              <p className="ingredient">Stable Vitamin C</p>
            </li>
            <li>
              <p className="ingredient">Active Enzymes</p>
            </li>
            <li>
              <p className="ingredient">Nutritious Plant Oils</p>
            </li>
            <li>
              <p className="ingredient">Balancing Essential Oils</p>
            </li>
            <li>
              <p className="ingredient">Gentle Preservatives</p>
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
              <p className="ingredient">Parabens</p>
            </li>
            <li>
              <p className="ingredient">Synthetic Colorants</p>
            </li>
            <li>
              <p className="ingredient">Synthetic Fragrance</p>
            </li>
            <li>
              <p className="ingredient">Phthalates</p>
            </li>
            <li>
              <p className="ingredient">
                Formaldehyde Releasing
                <span className="long-ingredient-name">Preservatives</span>
              </p>
            </li>
            <li>
              <p className="ingredient">Sodium Lauryl Sulfate</p>
            </li>
          </ul>
        </div>
      </div>
      <h3 className="michele-corley-header poppy">
        Professional skincare that delivers. Clean, safe, efficacious formulas.
      </h3>
      <h4 className="michele-corley-header italic">
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
  & .ingredient {
    display: block;
    margin-block-start: 2.33em;
    margin-block-end: 2.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: var(--mainBlack);
    font-family: var(--mainFont);
    font-weight: 300;
    margin: 0.5em 0 0.3em;
    margin-bottom: 1.26rem;
    line-height: var(--headingLineHeight);
    font-weight: 300;

    .long-ingredient-name {
      display: block;
      margin: 1rem 0px 1rem 0.4rem;
    }
  }
  & .michele-corley-header {
    text-align: center;
    font-weight: 400;
  }
  & .michele-corley-header.poppy {
    font-size: 1.6rem;
    margin-top: 2rem;
  }
  & .michele-corley-header.italic {
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
