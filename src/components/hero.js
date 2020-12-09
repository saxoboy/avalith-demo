import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query ServiceImageQuery {
      file(relativePath: { eq: "services-header.png" }) {
        childImageSharp {
          fluid(maxWidth: 663, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.file?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  
  return (
    <div className="mt-8 lg:mt-24 flex flex-col md:flex-row-reverse lg:content-end">
      <div className="flex-none md:flex-1 w-full md:w-1/2">
        <Img fluid={data.file.childImageSharp.fluid} alt="Service Avalith" />
      </div>
      <div className="font-light mt-4 w-full md:w-1/2">
        <p className="text-3xl md:text-4xl lg:text-7xl pb-5">
          <span className="font-bold w-full block text-secondary">Our</span>
          differentiators
        </p>
        <p className="text-3xl md:text-4xl lg:text-5xl pb-5">
          <span className="font-bold">
            Over <span className="text-secondary">10</span> years
          </span>{" "}
          of experience
        </p>
        <p className="text-3xl md:text-4xl lg:text-5xl pb-5">
          <span className="font-bold">
            <span className="text-secondary">90</span> + Employees
          </span>{" "}
          around the world
        </p>
      </div>
    </div>
  )
}

export default Hero
