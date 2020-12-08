import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Logo from "../images/avalith-logo.png"

import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="lg:mt-32 container mx-auto px-6 font-body">
        {children}
      </main>
      <footer className="container mx-auto px-6 font-body mb-4">
        <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-4 mb-12 gap-8">
          <div>
            <h4 className="text-2xl mb-4">Contact Us</h4>
            <p className="text-base">hello@avalith.net</p>
            <p className="text-base">+54 0223 464-4850</p>
          </div>
          <div>
            <h4 className="text-2xl mb-4">Suscribe to us</h4>
            <form>
              <input
                className="border focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent shadow-lg py-2 px-4 rounded-full w-full"
                placeholder="your mail here"
              />
              {/* <button className="bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">Suscribe</button> */}
            </form>
          </div>
          <div>
            <h4 className="text-2xl mb-4">Follow Us</h4>
            <Link to="/">
              <FaLinkedin className="text-3xl inline-block mx-2 hover:text-secondary" />
            </Link>
            <Link to="/">
              <FaFacebook className="text-3xl inline-block mx-2 hover:text-secondary" />
            </Link>
            <Link to="/">
              <FaTwitter className="text-3xl inline-block mx-2 hover:text-secondary" />
            </Link>
            <Link to="/">
              <FaInstagram className="text-3xl inline-block mx-2 hover:text-secondary" />
            </Link>
          </div>
          <div className="flex flex-col justify-center">
            <img src={Logo} alt="Avalith" width="208" className="mx-auto block" />
          </div>
        </div>
        <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-4 mb-12 gap-8 text-center">
          <p className="text-xs">All rights reserved 2020. Tres Cubos S.A.</p>
          <p className="text-xs">Privacy Policy</p>
          <p className="text-xs">Terms of Service</p>
          <p className="text-xs">Contract</p>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
