import React from "react"
import Checker from "./components/checker"
import Palette from "./components/palette"
import styled from "styled-components"
import GlobalStyle from "./components/global_style"

export default function App() {
  return (
    <Wrap>
      <GlobalStyle />
      <div>
        <h2>Color Palette</h2>
        <h3>Light & Dark Modes</h3>
        <Palette />
      </div>
      <div style={{ marginTop: "2rem" }}>
        <h2>A11Y Color Contrast Checker</h2>
        <Checker />
      </div>
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 1rem;
  text-align: center;
  max-width: 1000px;
  margin: auto;
`
