import { HeaderContainer, LocationContainer, RightContainer } from './styles'
import { MapPin } from '@phosphor-icons/react'
import logoImg from '../../assets/Logo.svg'
import CheckoutCart from '../CheckoutCart'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to="" title="Home">
                <img src={logoImg} alt="" />
            </NavLink>
            <RightContainer>
                <LocationContainer>
                    <MapPin size={22} weight="fill" />
                    <span>Fortaleza, CE</span>
                </LocationContainer>
                <NavLink to="/checkout" title="Checkout">
                    <CheckoutCart />
                </NavLink>
            </RightContainer>
        </HeaderContainer>
    )
}

export default Header
