import React, { useState } from "react"
import { filterColors, compareColors } from "./helpers"
import Results from "./results"
import Preview from "./preview"
import Picker from "./picker"
import dark from "../data/dark"
import light from "../data/light"

export default function Checker() {
  const hexOnlyColors = filterColors(light)
  const defaultValue = Object.keys(hexOnlyColors)[0]

  const [color1, setColor1] = useState(defaultValue)
  const [color2, setColor2] = useState(defaultValue)

  const lightMode = compareColors(light[color1], light[color2])
  const darkMode = compareColors(dark[color1], dark[color2])

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <select
          onChange={e => setColor1(e.target.value)}
          style={{ padding: "10px", margin: "5px" }}
        >
          {Object.keys(hexOnlyColors).map(k => {
            return (
              <option key={k} value={k}>
                {k}
              </option>
            )
          })}
        </select>
        <select
          onChange={e => setColor2(e.target.value)}
          style={{ padding: "10px", margin: "5px" }}
        >
          {Object.keys(hexOnlyColors).map(k => {
            return (
              <option key={k} value={k}>
                {k}
              </option>
            )
          })}
        </select>
      </div>
      <div style={{ padding: "2rem 0" }}>
        <h2>Light Mode Results</h2>
        <p>
          {color1}: {light[color1]} | {color2}: {light[color2]}{" "}
        </p>
        <Preview color1={light[color1]} color2={light[color2]} />
        <Results large={lightMode.large} small={lightMode.small} />
      </div>
      <div style={{ padding: "2rem 0" }}>
        <h2>Dark Mode Results</h2>
        <p>
          {color1}: {dark[color1]} | {color2}: {dark[color2]}{" "}
        </p>
        <Preview color1={dark[color1]} color2={dark[color2]} />
        <Results large={darkMode.large} small={darkMode.small} />
      </div>
      <Picker />
    </div>
  )
}
