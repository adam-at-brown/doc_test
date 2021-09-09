import React from "react"
import styled from "styled-components"

const FontSizes = ({ color }) => (
  <>
    <Text style={{ fontSize: 12 }} color={color}>
      small font size 12 <b>& bold</b>
    </Text>
    <Text style={{ fontSize: 14 }} color={color}>
      medium font size 14 <b>& bold</b>
    </Text>
    <Text style={{ fontSize: 18 }} color={color}>
      large font size 18 <b>& bold</b>
    </Text>
    <Text style={{ fontSize: 24 }} color={color}>
      extra large font size 24 <b>& bold</b>
    </Text>
  </>
)

export default function Preview({ color1, color2 }) {
  return (
    <Wrap>
      <Block bg={color1}>
        <Text color={color2}>
          Text: {color2} Background: {color1}
        </Text>
        <FontSizes color={color2} />
      </Block>
      <Block bg={color2} color={color1}>
        <Text color={color1}>
          Text: {color1} Background: {color2}
        </Text>
        <FontSizes color={color1} />
      </Block>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Block = styled.div`
  background-color: ${props => props.bg};
  padding: 1rem;
  border: 0.5px solid white;
  flex: 1;
  margin: 10px;
  box-shadow: 0 1px 2.2px rgba(0, 0, 0, 0.02),
    0 2.4px 5.3px rgba(0, 0, 0, 0.028), 0 4.5px 10px rgba(0, 0, 0, 0.035),
    0 8px 17.9px rgba(0, 0, 0, 0.042), 0 15px 33.4px rgba(0, 0, 0, 0.05),
    0 36px 80px rgba(0, 0, 0, 0.07);

  p {
    margin: 10px 0;
  }
`

const Text = styled.p`
  color: ${props => props.color};
`
