import React from 'react'
import styled from 'styled-components'

const YesNo = ({ className }) => {
  return (
    <div className={className}>
    <p className="sr-only">Discover premium skincare loaded with powerful peptides, potent antioxidants, stable vitamin c, active enzymes, nutritious plant oils, balancing essential oils, and gentle preservatives.</p>
      <section className="flex-row">
        <article className="list-of-ingredients" role="region" aria-labelledby="we-say-yes">
          <h2 className="list-title poppy" id="we-say-yes">We say YES to</h2>
          <ul data-bullet-list>
            <li><p className="ingredient">Powerful Peptides</p></li>
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
              <p className="ingredient"><span className="sr-only">{`and `}</span>Gentle Preservatives</p>
            </li>
          </ul>
        </article>

        <article className="list-of-ingredients" role="region" aria-labelledby="we-say-no">
          <h2 className="list-title poppy" id="we-say-no">
            We say NO to<span className="sr-only">parabens, synthetic colorants, synthetic fragrance, phthalates, formaldehyde releasing preservatives, and sodium lauryl sulfate.</span>
          </h2>
          <ul data-bullet-list>
            <li><p className="ingredient">Parabens</p></li>
            <li><p className="ingredient">Synthetic Colorants</p></li>
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
        </article>
      </section>
      <h3 className="michele-corley-promise poppy">
        Professional skincare that delivers. Clean, safe, efficacious formulas.
      </h3>
      <h4 className="michele-corley-promise">
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
  & .list-of-ingredients {
    width: fit-content;
    max-width: fit-content;
    margin: 0 auto;
  }
  & .list-title {
    line-height: var(--bodyLineHeight);
    white-space: pre-wrap;
    text-align: left;
    font-size: 2rem;
    word-spacing: -2px;
  }
  & .ingredient {
    display: block;
    line-height: var(--headingLineHeight);
    margin-block-start: 2.33em;
    margin-block-end: 2.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 0.5em 0 1rem;

    .long-ingredient-name {
      display: block;
      margin: 1rem 0px 0px 0.2rem;
    }
  }
  & .michele-corley-promise {
    font-size: 1.3125rem;
    text-align: center;
  }
  & h3.michele-corley-promise.poppy {
    font-size: 1.6rem;
    margin-top: 2rem;
  }
  @media (max-width: 672px) {
    & #we-say-no,
    & #we-say-yes{
      margin-right: 1rem;
    }
    & .flex-row {
      justify-content: center;
      margin: 0 auto;
    }
  }
`
export default Wrapper
