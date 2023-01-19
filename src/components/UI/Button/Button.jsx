import React from 'react'
import styled from 'styled-components'

export const Button = ({children}) => {
  return (
    <StyledButton>
        {children}
    </StyledButton>
  )
}
const StyledButton=styled.button`
    padding: 5px;
    border-radius: 15px;
`