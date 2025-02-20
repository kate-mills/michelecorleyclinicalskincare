import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import {Link} from 'gatsby'
import VideoPlayer from '../Video'

const Product = ({ product, isTemplate }) => {
  const {
    acneSafe,
    isBestSeller,
    award,
    imgRetail,
    professionalOnly: proOnly,
    name,
    slug,
    skinType,
    description,
    keyIngredients,
    profiles,
    video,
  } = product

  return (
    <StyledProduct id={slug}>
      <div className={`product-heading`}>
        {isTemplate ? (
          <h1 className="product-name">
            <span className={`name`}>{`${name}`}</span>
            {acneSafe && <span className={`acne-safe`} />}
            {proOnly && <span className={`pro-only`} />}
            {isBestSeller && <span className={`best-seller`} />}
            {award && (
              <Image
                className="award-winner"
                fixed={product.awardImage.fixed}
                alt={`Best Product ${award} Award Emblem`}
              />
            )}
          </h1>
        ) : (
          <h2 className="product-name">
            <span className={`name`}>{`${name}`}</span>
            {acneSafe && <span className={`acne-safe`} />}
            {proOnly && <span className={`pro-only`} />}
            {isBestSeller && <span className={`best-seller`} />}
            {award && (
              <Image
                className="award-winner"
                fixed={product.awardImage.fixed}
                alt={`Best Product ${product.award} Award Emblem`}
              />
            )}
          </h2>
        )}
      </div>
      <div className="product-details">
        <p className={`product-skintypes`}>
          {skinType.map((item, index) => {
            return (
              <span key={index} className="skintype">
                {item}
              </span>
            )
          })}
        </p>
        <p className="product-description">{description.description}</p>

        <div className="product-media" id={`${slug}-media`}>
          <div className="product-media-imgs-box">
            <div className="product-media-img">
              <Link to={`/product-images-and-logos/${slug}/`}>
              <Image
                className="product-img product-img-retail"
                fixed={imgRetail?.fixed}
                alt={`${proOnly ? 'Pro-size' : 'Retail-size'} ${name}`}
              />
              </Link>
            {/*<a className="btn product-img-btn" download={`${proOnly ? 'Pro-size' : 'Retail-size'} ${name}`} href={imgRetail?.localFile?.publicURL} aria-label="Download image" > Download </a>*/}
            </div>
          </div>
          {video && (
            <VideoPlayer
              title={`${name} from Michele Corley on Vimeo`}
              src={`https://player.vimeo.com/video/${video}`}
            />
          )}
        </div>
        <div className="product-ingredients">
          {!!profiles ? (
            <a
              className="download-product-details-and-usage-instructions"
              title={`Download pdf with product details and usage instructions for ${name}.`}
              href={profiles[0].file.url}
              target="_blank"
              rel="noreferrer"
            >
              Download Product Details & Usage Instructions.
            </a>
          ) : null}
          <p className="bold">A FEW KEY Ingredients & Benefits:</p>
          <ul data-bullet-list id="ingredient-list">
            <li className="key-ingredients-pdf product-profile-sheet"></li>
            {keyIngredients.map(ing => {
              return (
                <li className="key-ingredient" key={ing.id}>
                  <p>
                    <span className="key-ingredient-name-formatted">
                      {ing.name.formatted}:
                    </span>{' '}
                    <span className="key-ingredient-benefit">
                      {ing.benefit}
                    </span>
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </StyledProduct>
  )
}
const StyledProduct = styled.article`
  & {
    margin: 20px 0;
    max-width: 100%;
    p {
      max-width: 100%;
      padding-bottom: 0;
    }
  }
  & .product-heading {
    & .product-name {
      font-family: var(--mainFont);
      align-items: center;
      color: var(--mainBlack);
      display: flex;
      font-size: 2rem;
      flex-flow: row wrap;
      line-height: normal !important;
      justify-content: flex-start;
      text-align: left;
      span {
        margin-top: 0.3rem;
        padding-left: 0;
        padding-right: 15px;
        white-space: pre-line;
      }
    }
    & h1.product-name {
      color: var(--poppy);
      font-family: var(--mainFont);
      font-size: 2.2rem;
      line-height: normal !important;
    }
    & .award-winner.gatsby-image-wrapper {
      max-width: 70px;
      max-height: 70px;
      img {
        object-fit: contain !important;
      }
    }
    & .best-seller,
    & .acne-safe,
    & .pro-only {
      ::after {
        display: block;
        border: 2px solid var(--darkGrey);
        font-size: 0.85rem;
        padding: 0.2rem;
        margin: 0;
      }
    }
    .best-seller::after,
    .pro-only::after {
      background: var(--offWhite);
      color: var(--poppy);
      content: 'PROFESSIONAL USE ONLY';
    }
    .best-seller::after {
      border-color: var(--poppy);
      content: 'BEST-SELLER';
    }
    .acne-safe::after {
      background: var(--poppy);
      color: var(--offWhite);
      content: 'ACNE-SAFE';
    }
  }
  & .product-skintypes {
    font-size: 1.1rem;
    padding: 0 0 0.5rem;
    .skintype {
      font-style: italic;
    }
    .skintype::after {
      content: ', ';
    }
    .skintype:last-child::after {
      content: '';
    }
  }
  & .product-description {
    margin-bottom: 0;
    padding: 0 1rem;
  }

  /** PRODUCT IMGS & VIDEO **/
  & .product-media {
    display: flex;
    flex-flow: row no-wrap;
    align-items: center;
    justify-content: space-around;
    height: fit-content;

    @media (max-width: 1000px) {
      justify-content: center;
      flex-wrap: wrap;
    }
    > .product-media-imgs-box {
      /*& a.product-img-btn {
        display: block;
        font-size: 8px;
        margin: 0 auto;
        width: fit-content;
        text-align: center;
        box-shadow: unset;
      }*/
    }
  }

  & .product-ingredients {
    padding-top: 1rem;
    & > p.bold {
      font-weight: 600;
      padding-bottom: 0;
    }
    a.download-product-details-and-usage-instructions {
      text-transform: capitalize;
      display: inline-block;
      font-weight: 600;
      font-size: 0.9rem;
      color: var(--poppy);
    }
    li.key-ingredient {
      margin-left: 1rem;
      p {
        padding-bottom: 0;
      }
      span.key-ingredient-name-formatted {
        font-weight: 600;
      }
      span.key-ingredient-benefit {
        padding-left: 5px;
      }
    }
  }
`
export default Product
