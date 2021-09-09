import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const navItems = [
  {
    name: "Getting Started",
    link: "/getting-started",
  },
  {
    name: "Style Guide",
    link: "/style-guide",
  },
  {
    name: "Contributing",
    link: "/contributing",
  },
  {
    name: "LifeRay",
    link: "/liferay",
  },
  {
    name: "Build & Deploy",
    link: "/builds",
  },
]

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#4e3629`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "900px",
        margin: "auto",
        padding: "1rem 0 2rem 0",
      }}
    >
      {navItems.map(link => {
        return (
          <Link
            key={link.name}
            to={link.link}
            style={{ color: "white", fontWeight: 700 }}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
