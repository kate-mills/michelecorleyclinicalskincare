import React from 'react'
import styled from 'styled-components'

import ScreenReaderText from '../components/ScreenReaderText'

//export const srOnlySpan = <span className="sr-only">Michele Corley Clinical Skin Care is packed with </span>

const YesNo = ({ className }) => {

  return (
    <div className={className}>

        <ScreenReaderText element="h2" text="Discover premium skincare loaded with powerful peptides, potent antioxidants, stable vitamin c, active enzymes, nutritious plant oils, balancing essential oils, and gentle preservatives."/>

      <div className="flex-row">
        <div className="list">
          <h3 className="list-title poppy">We say YES to <ScreenReaderText element="span" text="powerful peptides, potent antioxidants, stable vitamin c, active enzymes, nutritious plant oils, balancing essential oils, and gentle preservatives."/>
    </h3>
          <ul data-bullet-list>
            <li>
              <h6 className="li">Powerful Peptides</h6>
            </li>
            <li>
              <h6 className="li">Potent Antioxidants</h6>
            </li>
            <li>
              <h6 className="li">Stable Vitamin C</h6>
            </li>
            <li>
              <h6 className="li">Active Enzymes</h6>
            </li>
            <li>
              <h6 className="li">Nutritious Plant Oils</h6>
            </li>
            <li>
              <h6 className="li">Balancing Essential Oils</h6>
            </li>
            <li>
              <h6 className="li">Gentle Preservatives</h6>
            </li>
          </ul>
        </div>

        <div className="list">
          <h3 className="list-title poppy">We say NO to <ScreenReaderText element="span" text=" Parabens, Synthetic Colorants, Synthetic Fragrance, Phthalates, Formaldehyde Releasing Preservatives, and Sodium Lauryl Sulfate."/></h3>
          <ul data-bullet-list>
            <li>
              <h6 className="li"><ScreenReaderText element="span" text="NO"/> Parabens</h6>
            </li>
            <li>
              <h6 className="li"><ScreenReaderText element="span" text="NO"/> Synthetic Colorants</h6>
            </li>
            <li>
              <h6 className="li"><ScreenReaderText element="span" text="NO"/> Synthetic Fragrance</h6>
            </li>
            <li>
              <h6 className="li"><ScreenReaderText element="span" text="NO"/> Phthalates</h6>
            </li>
            <li>
              <h6 className="li"><ScreenReaderText element="span" text="NO"/> Formaldehyde Releasing
                <span
                  style={{
                      display: 'block',
                      margin: '1rem 0 1rem .4rem',
                    }}> Preservatives
                </span>
              </h6>
            </li>
            <li>
              <h6 className="li"><ScreenReaderText element="span" text="NO"/> Sodium Lauryl Sulfate</h6>
            </li>
          </ul>
        </div>
      </div>
      <h5 className="yn-header poppy">
        Professional skincare that delivers. Clean, safe, efficacious formulas.
      </h5>
      <h5 className="yn-header italic">
        Only available through your licensed skincare professional.
      </h5>
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

  & .li{
    margin-bottom: 1.26rem;
  }
  & .yn-header {
    text-align: center;
  }
  & .yn-header.poppy {
    font-weight: 400;
    font-size: 1.6rem;  
    margin-top: 2rem;
  }
  & .yn-header.italic {
    font-size: 21px;
    font-style: italic;
    font-weight: 300;
  }
  @media (max-width: 672px) {
    & .flex-row {
      justify-content: center;
      margin: 0 auto;
    }
  }
`
export default Wrapper
