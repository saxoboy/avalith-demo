import React from "react"
import DeliveryTeam from "../images/delivery-team.png"
import StaffAugmentation from "../images/staff-augmentation.png"
import MvpDevelopment from "../images/mvp-development.png"
import ProjectStrategy from "../images/project-strategy.png"

const Services = () => {
  return (
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
            Crear un MVP para cada proyecto nos ayuda a evaluar de forma rápida
            y cuantitativa si la propuesta en cuestión es de valor para sus
            futuros usuarios.
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
  )
}

export default Services
