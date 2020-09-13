import React from "react"
import Img from 'gatsby-image'
import styled from "styled-components"
import {screen} from "../../css/js/media-functions"

import {RiArrowRightLine} from "react-icons/ri";

const Arrow = ({top})=> {
  return <RiArrowRightLine style={{position: "relative", top: top}} />
}

const SingleArticle = ({data}) => {
  const{name, image, link, date, preview} = data.article
  return (
    <ArticleWrapper>
      <a href={link} target="_blank" rel="noreferrer"><h5 className="article-name">{name}<Arrow top={6}/></h5></a>
      <p className="article-date">{date}</p>
      <div className="article-image-container">
        <a href={link} target="_blank" rel="noreferrer">
          <Img fluid={image.localFiles[0].childImageSharp.fluid} alt={`Shows a preview of the article titled '${name}' in the ${date} Dermascope magazine.`}/>
        </a>
        <p className="article-preview">{preview}<a href={link} target="_blank" rel="noreferrer"><span className="article-readmore"><span className="article-dots">{`...`}</span>Read more <Arrow top={3}/></span></a></p>
      </div>
    </ArticleWrapper>
  )
}
const ArticleWrapper = styled.article`
& {margin-top: 40px;}
&:first-of-type {margin-top: 10px;}

& .article-image-container{ margin: 0 auto; }

& a {text-decoration: none; display:  block;}
& a:last-child {display: inline;}
& .article-name, & .article-date {
  text-align: center;
  white-space: pre-wrap;
}
& .article-name{
  font-weight: 300;
  font-style: normal;
  font-size: 30px;
  line-height: 36px;
  margin: unset;
}
& .article-date{
  padding: unset;
  margin: unset;
  font-style: italic;
  color: rgba(0, 0, 0, 0.4);
  display:block;
  font-weight: 300;
}
& .article-preview{
  text-align: center;
  padding-bottom: 0px;
  white-space: pre-wrap;
}
& span.article-readmore{
  text-align: right;
  white-space: nowrap;
  color:#5c5c5c;
  font-weight: 300;
  font-style: italic;
}
& span.article-readmore span.article-dots{
  color: var(--mainWhite);
  cursor: default;
}
& .arrow{
  font-family: fantasy;
  font-size: 15px;
  font-style: normal;
  position: relative;
  top: 3px;
  left: 2px;
}

${screen.phone.phone`
  & .article-image-container{
    max-width: 100%;
  }
`};
${screen.tablet.tablet`
  & .article-image-container{
    max-width: 75%;
  }
`};
${screen.desktop.desktop`
  & .article-image-container{
    max-width: 50%;
  }
`};
`;

export default SingleArticle;

