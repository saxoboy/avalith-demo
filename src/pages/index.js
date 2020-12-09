import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Tecnologias from "../images/tecnologias.png"
import Services from "../components/services"
import Beneficios from "../components/beneficios"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Avalith" />
      <Hero />    
      <hr className="mt-8 md:hidden" />
      <Services />
      <hr className="mt-10 md:hidden" />
      <section className="flex flex-col md:flex-row-reverse justify-center content-center lg:mt-16">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold text-center lg:text-left lg:text-5xl my-10">
            <span className="font-bold w-full block text-secondary">Our</span>{" "}
            Technologies
          </h2>
          <p className="text-justify lg:text-center mb-8">
            We work on several cutting edge tenchnoly and we keep our team and
            us learning about them and new ones that could benefit a future
            project.
          </p>
          <button className="mx-auto block bg-white text-primary shadow-lg hover:bg-red-700 hover:text-variant font-bold py-4 px-12 rounded-full transition duration-300 ease-in-out">
            Let´s begin
          </button>
        </div>
        <div className="flex-1">
          <img
            src={Tecnologias}
            alt="Our Technologies"
            className="my-8 mx-auto block"
          />
        </div>
      </section>
      <hr className="mt-10 md:hidden" />
      <Beneficios />
      <hr className="mt-10 md:hidden" />
      <section className="flex flex-col md:flex-row mt-6 md:mt-10">
        <div className="md:w-3/4">
          <h2 className="text-4xl font-bold w-full block text-secondary mb-4 md:text-6xl">
            We are
          </h2>
          <p className="text-justify mb-4">
            una empresa joven con ideas nuevas, enfocados en crecer
            continuamente
          </p>
          <button className="block mx-auto md:mx-px bg-white text-primary shadow-lg hover:bg-red-700 hover:text-variant font-bold py-4 px-12 rounded-full transition duration-300 ease-in-out">
            Get in touch
          </button>
        </div>
        <div className="hidden md:block md:w-1/4 pt-10 pl-8 lg:pl-0">
          <ul className="font-black">
            <li className="py-2 border-red-700 border-b-2">
              <Link to="/">About Us</Link>
            </li>
            <li className="py-2 border-red-700 border-b-2">
              <Link to="/">Services</Link>
            </li>
            <li className="py-2 border-red-700 border-b-2">
              <Link to="/">Carrers</Link>
            </li>
            <li className="py-2 border-red-700 border-b-2">
              <Link to="/">Our partners</Link>
            </li>
          </ul>
        </div>
      </section>
      <hr className="my-12 border-b-1 border-black" />
    </Layout>
  )
}

export default IndexPage
