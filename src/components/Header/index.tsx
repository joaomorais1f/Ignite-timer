import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import IgniteLogo from '../../assets/Ignite-logo.svg'

import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={IgniteLogo} alt="" width={40} height={40} />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
