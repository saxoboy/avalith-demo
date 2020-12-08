import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import DeliveryTeam from "../images/delivery-team.png"
import StaffAugmentation from "../images/staff-augmentation.png"
import MvpDevelopment from "../images/mvp-development.png"
import ProjectStrategy from "../images/project-strategy.png"
import Tecnologias from "../images/tecnologias.png"
import Beneficio1 from "../images/beneficio-1.png"
import Beneficio2 from "../images/beneficio-2.png"
import Beneficio3 from "../images/beneficio-3.png"
import Beneficio4 from "../images/beneficio-4.png"

const IndexPage = () => {
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
    <Layout>
      <SEO title="Avalith" />
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
      <hr className="mt-8 md:hidden" />
      <section>
        <h2 className="text-4xl font-semibold text-center lg:text-left lg:text-5xl my-10">
          <span className="font-bold w-full block text-secondary">Our</span>{" "}
          Services
        </h2>
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-5 text-center">
          <div>
            <img
              src={DeliveryTeam}
              alt="Delivery Team"
              className=" block mx-auto"
            />
            <h3 className="text-3xl mb-8">Delivery Team</h3>
            <p className="text-center mb-8">
              Preparamos el{" "}
              <span className="font-black">equipo ideal para tu proyecto</span>{" "}
              teniendo en cuenta la experiencia de cada integrante de nuestro
              staff.
            </p>
            <button className="mr-5 bg-white text-primary shadow-lg hover:bg-red-700 hover:text-variant font-bold py-4 px-12 rounded-full transition duration-300 ease-in-out">
              Your Team
            </button>
          </div>
          <div>
            <img
              src={StaffAugmentation}
              alt="Staff Augmentation"
              className=" block mx-auto"
            />
            <h3 className="text-3xl mb-8">Staff Augmentation</h3>
            <p className="text-center mb-8">
              <span className="font-black">¡Potenciá tus servicios!</span> Desde
              Avalith te brindamos respaldo en momentos donde más necesitas
              soporte para tus proyectos.
            </p>
            <button className="mr-5 bg-white text-primary shadow-lg hover:bg-red-700 hover:text-variant font-bold py-4 px-12 rounded-full transition duration-300 ease-in-out">
              Let´s go bigger
            </button>
          </div>
          <div>
            <img
              src={MvpDevelopment}
              alt="MVP Development"
              className=" block mx-auto"
            />
            <h3 className="text-3xl mb-8">MVP Development</h3>
            <p className="text-center mb-8">
              Crear un MVP para cada proyecto nos ayuda a evaluar de forma
              rápida y cuantitativa si la propuesta en cuestión es de valor para
              sus futuros usuarios.
            </p>
            <button className="mr-5 bg-white text-primary shadow-lg hover:bg-red-700 hover:text-variant font-bold py-4 px-12 rounded-full transition duration-300 ease-in-out">
              Let´s do it
            </button>
          </div>
          <div>
            <img
              src={ProjectStrategy}
              alt="Project Strategy"
              className=" block mx-auto"
            />
            <h3 className="text-3xl mb-8">Project Strategy</h3>
            <p className="text-center mb-8">
              Cada proyecto es único y está formado por distintas fases que
              requieren tareas específicas, un equipo de trabajo concreto.
            </p>
            <button className="mr-5 bg-white text-primary shadow-lg hover:bg-red-700 hover:text-variant font-bold py-4 px-12 rounded-full transition duration-300 ease-in-out">
              Think with us
            </button>
          </div>
        </div>
      </section>
      <hr className="mt-10 md:hidden" />
      <section className="flex flex-col md:flex-row-reverse justify-center content-center lg:mt-20">
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
      <section>
        <h2 className="text-3xl font-semibold text-center lg:leading-extra-loose lg:text-left lg:text-5xl lg:w-4/6 my-10">
          <span className="font-bold w-full text-secondary">4 beneficios </span>
          por los cuales trabajar con nosotros.
        </h2>
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-8">
          <div id="beneficio1">
            <div className="flex flex-col-reverse md:items-end md:flex-row md:mb-4">
              <h3 className="text-2xl mt-8 mb-4 text-center md:my-0 md:flex-grow md:text-left md:text-xl">
                <span className="font-bold text-secondary">1.</span> Flexible
                Contracts
              </h3>
              <div className="mx-auto md:flex-grow-0">
                <img src={Beneficio1} alt="Flexible Contracts" />
              </div>
            </div>
            <p className="text-center md:text-left">
              Ofrecemos contratos a corto y largo plazo, con cancelación
              flexible.
            </p>
          </div>
          <div id="beneficio2">
            <div className="flex flex-col-reverse md:items-end md:flex-row md:mb-4">
              <h3 className="text-2xl mt-8 mb-4 text-center md:my-0 md:flex-grow md:text-left md:text-xl">
                <span className="font-bold text-secondary">2.</span> Account
                Manager
              </h3>
              <div className="mx-auto md:flex-grow-0">
                <img src={Beneficio2} alt="Account Manager" />
              </div>
            </div>
            <p className="text-center md:text-left">
              Listo para escalar tu equipo, disponibilidad full-time.
            </p>
          </div>
          <div id="beneficio3">
            <div className="flex flex-col-reverse md:items-end md:flex-row md:mb-4">
              <h3 className="text-2xl mt-8 mb-4 text-center md:my-0 md:flex-grow md:text-left md:text-xl">
                <span className="font-bold text-secondary">3.</span> Monthly
                Billing
              </h3>
              <div className="mx-auto md:flex-grow-0">
                <img src={Beneficio3} alt="Monthly Billing" />
              </div>
            </div>
            <p className="text-center md:text-left">
              Ofrecemos contratos a corto y largo plazo, con cancelación
              flexible.
            </p>
          </div>
          <div id="beneficio4">
            <div className="flex flex-col-reverse md:items-end md:flex-row md:mb-4">
              <h3 className="text-2xl mt-8 mb-4 text-center md:my-0 md:flex-grow md:text-left md:text-xl">
                <span className="font-bold text-secondary">4.</span> Recruitment
              </h3>
              <div className="mx-auto md:flex-grow-0">
                <img src={Beneficio4} alt="Recruitment" />
              </div>
            </div>
            <p className="text-center md:text-left">
              Contamos con un equipo focalizado en conseguir talentos las 24hs
              del día.
            </p>
          </div>
        </div>
      </section>

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
            <li className="py-2 border-red-700 border-b-2"><Link to="/">About Us</Link></li>
            <li className="py-2 border-red-700 border-b-2"><Link to="/">Services</Link></li>
            <li className="py-2 border-red-700 border-b-2"><Link to="/">Carrers</Link></li>
            <li className="py-2 border-red-700 border-b-2"><Link to="/">Our partners</Link></li>
          </ul>
        </div>
      </section>
      <hr className="my-12 border-b-1 border-black" />
    </Layout>
  )
}

export default IndexPage
