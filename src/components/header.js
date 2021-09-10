import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
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
    name: "LifeRay (CMS)",
    link: "/liferay",
  },
  {
    name: "Build & Deploy",
    link: "/builds",
  },
  {
    name: "Dependencies",
    link: "/dependencies",
  },
]

export default function Header({ siteTitle }) {
  return(
  <header
    style={{
      background: `#4e3629`,
      marginBottom: `1.45rem`,
    }}
  >
    <TitleWrap>
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
    </TitleWrap>
    <Nav>
      {navItems.map(link => {
        return (
          <Link
            key={link.name}
            to={link.link}
          >
            {link.name}
          </Link>
        )
      })}
    </Nav>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  margin: auto;
  padding: 1rem 0 2rem 0;

  a {
    color: white;
    font-weight: 700;
  }

  @media(max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 2rem;
    text-align: center;

    a {
      margin: 10px;
      padding: 0;
    }
  }
`

const TitleWrap = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 0;

@media(max-width: 768px) {
  padding-left: 1rem;
}
`
