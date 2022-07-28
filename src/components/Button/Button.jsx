import React from 'react'
import { StyledButton } from './StyledButton'

const Button = ({outline, text, styles, link}) => {
  return (
    <StyledButton className={styles}  outline={outline} href={link}>{text}</StyledButton>
  )
}

export default Button