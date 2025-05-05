import React from 'react'
import logodesktop from '../assets/logopc.png'
import logolaptop from '../assets/logolaptop.png'
import logomobile from '../assets/logophone.png'

function Header() {
  return (
    <div>
      <picture>
              <source srcSet={logodesktop} media="(min-width: 1920px)" />
              <source srcSet={logolaptop} media="(min-width: 1440px)" />
              <img src={logomobile} alt="logo" />
            </picture>
    </div>
  )
}

export default Header
