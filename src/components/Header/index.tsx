/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-scroll'
import { Link as LinkRoute, useLocation } from 'react-router-dom'

import * as S from './styles'

const Header = ({ isOpen, closeMenu }: Props) => {
    const location = useLocation()

    const isRooms = location.pathname === '/rooms'

    return (
        <>
            <S.Header className={isOpen ? 'is-active' : ''} id={isRooms ? 'rooms-page' : ''}>
                <LinkRoute onClick={closeMenu} className='link-home' to="/">
                    Pousada <span>Secreta</span>
                </LinkRoute>
                {!isRooms && (
                    <nav>
                        <S.NavLinks>
                            <li>
                                <Link
                                    to='about'
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                >
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='route'
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                >
                                    Rotas
                                </Link>
                            </li>
                            <li>
                                <LinkRoute
                                    to='/rooms'
                                    onClick={closeMenu}
                                >
                                    Quartos
                                </LinkRoute>
                            </li>
                        </S.NavLinks>
                    </nav>
                )}
            </S.Header>
        </>
    )
}

export default Header