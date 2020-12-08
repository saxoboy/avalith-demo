import React, { Fragment, useEffect, useRef, useState } from "react"
//import { FaBars } from "react-icons/fa"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

const SecondPage = () => {
  const [isSticky, setSticky] = useState(false)
  const ref = useRef(null)
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])

  return (
    <Fragment>
      <p>Lorem ipsum...</p>
      <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
        <h1 className="sticky-inner">Sticky</h1>
      </div>
      <p>Lorem ipsum...</p>
    </Fragment>
  )
}

export default SecondPage
