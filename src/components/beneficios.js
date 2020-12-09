import React from "react"
import Beneficio1 from "../images/beneficio-1.png"
import Beneficio2 from "../images/beneficio-2.png"
import Beneficio3 from "../images/beneficio-3.png"
import Beneficio4 from "../images/beneficio-4.png"

const Beneficios = () => {
  return (
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
            Ofrecemos contratos a corto y largo plazo, con cancelación flexible.
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
            Ofrecemos contratos a corto y largo plazo, con cancelación flexible.
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
            Contamos con un equipo focalizado en conseguir talentos las 24hs del
            día.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Beneficios
