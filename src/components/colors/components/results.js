import React from "react"
import styled from "styled-components"

export default function Results({ large, small }) {
  return (
    <Wrap>
      <Item color={large.aa.toString()}>
        large text AA: {large.aa ? "pass" : "fail"}
      </Item>
      <Item color={large.aaa.toString()}>
        large text AAA: {large.aaa ? "pass" : "fail"}
      </Item>
      <Item color={small.aa.toString()}>
        small text AA: {small.aa ? "pass" : "fail"}
      </Item>
      <Item color={small.aaa.toString()}>
        small text AAA: {small.aa ? "pass" : "fail"}
      </Item>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Item = styled.div`
  color: white;
  background-color: ${props => (props.color === "true" ? "green" : "red")};
  border: 1px solid white;
  padding: 20px;
  margin: 0.25rem;
  border-radius: 10px;
  font-weight: 700;
  box-shadow: 0 1px 2.2px rgba(0, 0, 0, 0.02),
    0 2.4px 5.3px rgba(0, 0, 0, 0.028), 0 4.5px 10px rgba(0, 0, 0, 0.035),
    0 8px 17.9px rgba(0, 0, 0, 0.042), 0 15px 33.4px rgba(0, 0, 0, 0.05),
    0 36px 80px rgba(0, 0, 0, 0.07);
`
