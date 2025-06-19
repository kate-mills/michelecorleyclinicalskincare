import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Link } from 'gatsby'

import VideoPlayer from './VideoPlayer'

const Product = ({ singleProductPage = false, data, className }) => {
  const {
    imgRetail: { gatsbyImageData },
    name,
    slug,
    skinType,
    description: { description },
    keyIngredients,
    video,
  } = data

  return (
    <article
      className={`${className}`}
      id={slug}
    >
      <ProductTitle singleProductPage={singleProductPage} data={data} />
      <h4 className={`product-skintypes`}>
        {skinType.map((item, index) => (
          <span className={'skintype bold'} key={index}>
            {item}
          </span>
        ))}
      </h4>
      <p className="product-description">{description}</p>
      <div className="product-media">
        <div className="product-image">
          <Link to={`/product-images-and-logos/${slug}`} state={{id: slug}}>
            <GatsbyImage image={gatsbyImageData} alt={`Retail size ${name}`} />
          </Link>
        </div>
        {video && (
          <VideoPlayer
            title={`${name} from Michele Corley on Vimeo`}
            src={`https://player.vimeo.com/video/${video}`}
            className="video"
          />
        )}
      </div>
      <div className="product-ingredients">
        <p className="bold">A FEW KEY Ingredients & Benefits:</p>
        <ul data-bullet-list id="ingredient-list">
          {keyIngredients.map(ing => {
            let {
              name: { formatted: fmtNm },
              benefit,
            } = ing
            return (
              <li className="key-ingredient" key={ing.id}>
                <p>
                  <span>{`${fmtNm}: `}</span>
                  <span>{` ${benefit}`}</span>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
      <hr />
    </article>
  )
}

const ProductTitle = ({ data, singleProductPage }) => {
  let { name, award, awardImage } = data
  return !singleProductPage ? (
    <h2>
      <div className="product-name">
        <span className={'nm-img'}>
          <span className="name">{name}</span>{' '}<AwardImage award={award} awardImage={awardImage} />
        </span>
        <ProductBadges product={data} />
      </div>
    </h2>
  ) : (
    <h1>
      <div className="product-name poppy">
        <span className={'nm-img'}>
          <span className="name">{name}</span>{' '}<AwardImage award={award} awardImage={awardImage} />
        </span>
        <ProductBadges product={data} />
      </div>
    </h1>
  )
}

const AwardImage = ({ award, awardImage }) => {
  return (
    !!award && (
      <GatsbyImage
        width={60}
        height={60}
        className="award-winner"
        image={awardImage?.gatsbyImageData}
        alt={`Best Product ${award} Award Emblem`}
      />
    )
  )
}

const ProductBadges = ({ product }) => {
  let {
    name,
    acneSafe,
    professionalOnly: proOnly,
    isBestSeller: isBst,
    profiles: pdf,
  } = product
  return (
    <div className="product-badges">
      {acneSafe && <span className={`badge acne-safe`}>ACNE SAFE</span>}
      {isBst && <span className={`badge best-seller`}>BEST-SELLER</span>}
      {proOnly && <span className={`badge pro-only`}>PRO USE ONLY</span>}
      {!!pdf && (
        <a
          className="pdf badge"
          title={`Download pdf with product details and usage instructions for ${name}.`}
          href={pdf[0].file.url}
          target="_blank"
          rel="noreferrer"
        >GET PRODUCT DETS</a>
      )}
    </div>
  )
}

export default styled(Product)`
  & {
    margin: 0 auto;
    padding: 0.5rem 1rem;
    h1,
    h2 {
      text-align: left;
      display: contents;
      & .product-name {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        & .nm-img{
          display: contents;
          .name, .award-winner{
            margin-inline-end: 0.5rem;
            line-height: normal;
          }
          .award-winner{
            width: 50px;
            height: 50px;
          }
          @media screen and (max-width 576px){
            .name {
              margin-inline-end: 0;
            }
          }
        }
        & .product-badges {
          display: contents;
          .badge {
            background: var(--mcSummerBright);
            border: 2px solid var(--darkGrey);
            color: var(--offWhite);
            font-size: 0.85rem;
            letter-spacing: normal;
            line-height: 1.3em;
            height: fit-content;
            margin-block-end: 2px;
            margin-inline-end: 8px;
            overflow: hidden;
            padding-block: 0.125rem;
            padding-inline: 0.3125rem;
            text-align: center;
            text-overflow: ellipsis;
            vertical-align: middle;
            white-space: nowrap;
            &.best-seller,
            &.pro-only {
              background: var(--offWhite);
              color: var(--poppy);
            }
            &.best-seller {
              border-color: var(--poppy);
            }
            &.pdf {
              background: var(--poppy);
              border-color: var(--mcSummerBright);
              margin-inline-end: 0;
              transition: var(--mainTransition);
              &:hover {
                background: var(--m6);
              }
            }
          }
        }
      }
    }
    & .product-description {
      margin-inline: 1rem;
    }
    & .product-media,
    & .product-skintypes {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    & .product-skintypes {
      justify-content: flex-start;
      & span {
        font-style: italic;
        &:not(:last-of-type) {
          &:after {
            content: ', ';
            margin-inline-end: 0.3rem;
          }
        }
      }
    }
    & .product-ingredients {
      margin-block-start: 0.5rem;
      & > p.bold {
        font-size: 1.3rem;
        font-weight: 600;
        padding-block-end: 0;
      }
      & .key-ingredient {
        margin-inline-start: 1rem;
        &:first-child p {
          padding-block-start: 0;
          margin-block-start: 0;
        }
        p {
          padding-block-end: 0;
          > :first-child {
            font-weight: 600;
            margin-inline-end: 4px;
          }
        }
      }
    }
    @media (max-width: 676px) {
      margin-inline: 0.2rem;
      & .product-ingredients {
        & .key-ingredient {
          margin-inline-start: 0;
        }
      }
    }
    hr {
      margin-block: 0.5rem 1rem;
    }
  }
`
