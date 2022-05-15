import React from 'react'
import styled from 'styled-components'

import ScreenReaderText from '../components/ScreenReaderText'

//export const srOnlySpan = <span className="sr-only">Michele Corley Clinical Skin Care is packed with </span>

const YesNo = ({ className }) => {

  return (
    <div className={className}>

        <h2 className="sr-only">We say YES to Powerful Peptides, Potent Antioxidants, Stable Vitamin C, Active Enzymes, Nutritious Plant Oils, Balancing Essential Oils, and Gentle Preservatives.</h2>
        <h2 className="sr-only">We say NO to Parabens, Synthetic Colorants, Synthetic Fragrance, Phthalates, Formaldehyde Releasing Preservatives, and Sodium Lauryl Sulfate.</h2>

      <div className="flex-row">
        <div className="list">
          <p className="list-title poppy">We say YES to</p>
          <ul data-bullet-list>
            <li>
              <h3><ScreenReaderText text="Michele Corely serums and specialty products are packed with " />Powerful Peptides</h3>
            </li>
            <li>
              <h3>Potent Antioxidants</h3>
            </li>
            <li>
              <h3>Stable Vitamin C</h3>
            </li>
            <li>
              <h3>Active Enzymes</h3>
            </li>
            <li>
              <h3>Nutritious Plant Oils</h3>
            </li>
            <li>
              <h3>Balancing Essential Oils</h3>
            </li>
            <li>
              <h3>Gentle Preservatives</h3>
            </li>
          </ul>
        </div>
        <div className="list">
          <p className="list-title poppy">We say NO to</p>
          <ul data-bullet-list>
            <li>
              <h3>Parabens</h3>
            </li>
            <li>
              <h3>Synthetic Colorants</h3>
            </li>
            <li>
              <h3>Synthetic Fragrance</h3>
            </li>
            <li>
              <h3>Phthalates</h3>
            </li>
            <li>
              <h3>
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
              </h3>
            </li>
            <li>
              <h3>Sodium Lauryl Sulfate</h3>
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
    margin: 0.5rem 0 0.3rem;
    padding-bottom: 0;
    text-align: center;
    position: relative;
    right: 15px;
    font-size: 2rem;
  }
  & .yn-header {
    text-align: center;
  }
  & .yn-header.poppy {
    font-size: 1.4rem;  
    margin-top: 2rem;
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
