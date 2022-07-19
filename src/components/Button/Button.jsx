import React from 'react'
import { StyledButton } from './StyledButton'

const Button = ({outline, text, styles}) => {
  return (
    <StyledButton className={styles}  outline={outline}>{text}</StyledButton>
  )
}

export default Button