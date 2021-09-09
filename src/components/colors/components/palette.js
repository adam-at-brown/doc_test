import React from "react"
import styled from "styled-components"
import dark from "../data/dark"
import light from "../data/light"

const keys = Object.keys(light)

export default function Palette() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {keys.map(key => {
        return (
          <div
            key={key}
            style={{
              padding: "10px",
              border: "1px solid dimgrey",
              margin: "5px",
              minWidth: "150px",
              flex: 1
            }}
          >
            <p style={{ margin: 0, fontSize: "14px" }}>{key}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ColorBlock color={light[key]} />
              <ColorBlock color={dark[key]} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

const ColorBlock = styled.div`
  width: 50px;
  height: 50px;
  margin: 2px;
  background-color: ${props => props.color};
  border: 1px solid dimgrey;
`
