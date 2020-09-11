import React from "react";
import {graphql} from 'gatsby';
import PageModel from "../components/PageModel";
import UpcomingClassList from '../components/UpcomingClasses/UpcomingClassList';
import styled from 'styled-components'

const UpcomingClasses = ({data, className}) => {
  return (
    <PageModel centeredTitle title="Upcoming Classes"
      description="These classes are being taught by Michele Corley.  Michele is an Esthetician with more than 18 years of experience in the field of skin health and beauty.  She has been directly involved in sales for over 28 years.  Michele has had the honor of being a top producer for all of the companies she has represented and has won numerous awards and trips all around the world for her talent in selling. Michele has seen and worked with thousands of spas and can’t wait to share what works with you.">
      <div className={className}>
          <p className="description">These classes are being taught by Michele Corley.  Michele is an Esthetician with more than 18 years of experience in the field of skin health and beauty.  She has been directly involved in sales for over 28 years.  Michele has had the honor of being a top producer for all of the companies she has represented and has won numerous awards and trips all around the world for her talent in selling. Michele has seen and worked with thousands of spas and can’t wait to share what works with you.</p>
      <UpcomingClassList upcomingClasses={data.allAirtable.classes}/>
      <h3 style={{textAlign: "center", color: "var(--poppy)"}}>Please contact us at (707) 637-4996 if you have questions about our upcoming classes. We'd love to hear from you!</h3>
      </div>
    </PageModel>
  )
}
export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Classes"}}, sort: {fields: data___name, order: DESC}){
      classes: nodes {
        id
        data {
          name
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          heading
          heading_details
          datestr
          description
          location
          address
          city_state
          mapquery
        }
      }
    }
  }
`

export default styled(UpcomingClasses)`
  & > p.description{
    color: var(--mainBlack);
    text-align: justify;
    margin-bottom: 20px;
  }
  & .upcoming-class{
    margin: 10px auto;
  }
  & .upcoming-class:first-child{
    margin-top: 0!important; 
  }
  & .upcoming-class:last-child{
    margin-bottom: 0!important;
  }
`
