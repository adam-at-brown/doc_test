import React, { useState } from "react"
import { compareColors } from "./helpers"
import styled from "styled-components"
import Results from "./results"
import Preview from "./preview"
import { ChromePicker } from "react-color"

export default function Checker() {
  const [color1, setColor1] = useState("#000000")
  const [color2, setColor2] = useState("#ffffff")
  const choices = compareColors(color1, color2)

  return (
    <div>
      <h2>Try Your Own Colors</h2>
      <PickWrap>
        <div style={{ margin: "10px auto" }}>
          <ChromePicker
            onChangeComplete={color => setColor1(color.hex)}
            color={color1}
          />
        </div>
        <div style={{ margin: "10px auto" }}>
          <ChromePicker
            onChangeComplete={color => setColor2(color.hex)}
            color={color2}
          />
        </div>
      </PickWrap>
      {choices && (
        <>
          <Preview color1={color1} color2={color2} />
          <Results large={choices.large} small={choices.small} />
        </>
      )}
    </div>
  )
}

const PickWrap = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
