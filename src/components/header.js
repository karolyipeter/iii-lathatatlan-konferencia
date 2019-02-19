import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, showNav }) => (
  <header>
    <nav
      id="navbar"
      className="navbar fixed-top navbar-expand-lg navbar-dark bg-secondary"
    >
      <a className="navbar-brand" href="/">
        {siteTitle}
      </a>
      {showNav ? (
        <>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Navigáció megnyitása"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#esemenyrol">
                  Az eseményről
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#program">
                  Program
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#eloadok">
                  Előadók
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#helyszin">
                  Helyszín
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="http://salesautopilot.s3.amazonaws.com/newsletter/letter/nl90422/ns169359/subscribe.html"
                >
                  Jegyvásárlás
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#elerhetoseg">
                  Elérhetőség
                </a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  showNav: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
  showNav: false,
}

export default Header
