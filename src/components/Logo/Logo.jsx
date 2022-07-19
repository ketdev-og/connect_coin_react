import React from 'react'
import { StyledLogo } from './StyledLogo'
import SiteLogo from '../../assets/img/logo.png'

const Logo = ({styles}) => {
  return (
    <StyledLogo className={styles}>
         <img src={SiteLogo} alt="Logo" />
        <span >ConnectCoin</span>
    </StyledLogo>
  )
}

export default Logo