import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import VideoPlayer from '../Video'

const Product = ({ product, isTemplate }) => {
  const {
    acneSafe,
    professionalOnly: proOnly,
    name,
    slug,
    skinType,
    description,
    keyIngredients,
    profiles,
  } = product

  return (
    <StyledProduct id={slug}>
      <div className={`product-heading`}>
        {isTemplate ? (
          <h1 className="product-name">
            <span className={`name`}>{`${name}`}</span>
            {acneSafe && <span className={`acne-safe`} />}
            {proOnly && <span className={`pro-only`} />}
            {product.award && (
              <Image
                className="award-winner"
                fixed={product.awardImage.fixed}
                alt={`Best Product ${product.award} Award Emblem`}
              />
            )}
          </h1>
        ) : (
          <h2 className="product-name">
            <span className={`name`}>{`${name}`}</span>
            {acneSafe && <span className={`acne-safe`} />}
            {proOnly && <span className={`pro-only`} />}
            {product.award && (
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
          <AniLink
            fade
            to={`/product-images-and-logos/${slug}/`}
            aria-label="View image"
          >
            <Image className="product-image"
              fixed={product?.imgRetail?.fixed}
              alt={`Retail Size ${name}`}
            />
          </AniLink>
          {product.video && (
            <VideoPlayer
              className="product-video"
              title={`${product.name} from Michele Corley on Vimeo`}
              src={`https://player.vimeo.com/video/${product.video}`}
            />
          )}
        </div>
        <div className="product-ingredients">
          <p className="bold">A FEW KEY Ingredients & Benefits:</p>
          <ul data-bullet-list id="ingredient-list">
            <li className="key-ingredients-pdf product-profile-sheet">
              {!!profiles ? (
                <a
                  className="get-product-profile-sheet no-bullet"
                  title={`View pdf with full ingredient list for ${name}`}
                  href={profiles[0].file.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View FULL Ingredient List Here
                </a>
              ) : null}
            </li>
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
    margin: 20px auto;
    max-width: 100%;
    font-weight: 400;
    p {
      font-weight: 400;
      max-width: 100%;
      padding-bottom: 0;
    }
  }
  & .product-heading {
    & .product-name {
      align-items: center;
      color: var(--mainBlack);
      display: flex;
      flex-flow: row wrap;
      font-size: 2rem;
      font-weight: 300;
      line-height: 2.4rem;
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
      font-size: 2.7rem;
      line-height: 3.24rem;
    }
    & .award-winner.gatsby-image-wrapper {
      max-width: 70px;
      width: 100%;
      img {
        object-fit: contain !important;
      }
    }
    & .acne-safe,
    & .pro-only {
      ::after {
        border: 2px solid var(--darkGrey);
        display: block;
        font-size: 0.85rem;
        font-weight: 400;
        line-height: 1;
        padding: 0.3rem;
        margin: 0 15px 0 0;
      }
    }
    .pro-only::after {
      background: var(--offWhite);
      color: var(--poppy);
      content: 'PROFESSIONAL USE ONLY';
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
    padding: 0 2rem 1rem 1rem;
  }
  & .product-media {
    background: var(--mainWhite);
    align-items: center;
    display: flex;
    flex-flow: row wrap-reverse;
    justify-content: space-around;
    div.product-image-wrapper {
      width: 300px;
      img {
        object-fit: contain !important;
      }
    }
  }
  & .product-ingredients {
    padding-top: 1rem;
    & > p.bold {
      font-weight: 600;
      padding-bottom: 0;
    }
    li.key-ingredients-pdf.product-profile-sheet {
      margin-left: 15px;
      a.get-product-profile-sheet.no-bullet {
        font-weight: 500;
        font-size: 0.9rem;
        color: var(--poppy);
        ::before {
          content: '';
        }
      }
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
        font-weight: 300;
        padding-left: 5px;
      }
    }
  }
`
export default Product
