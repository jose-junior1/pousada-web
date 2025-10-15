/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-scroll'
import { Link as LinkRoute, useLocation } from 'react-router-dom'

import * as S from './styles'

const Header = () => {
    const location = useLocation()

    const isRooms = location.pathname === '/rooms'

    return (
        <S.Header className={isRooms ? 'rooms-page' : ''}>
            <LinkRoute className='link-home' to="/">
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
                            >
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='route'
                                smooth={true}
                                duration={500}
                            >
                                Rotas
                            </Link>
                        </li>
                        <li>
                            <LinkRoute
                                to='/rooms'
                            >
                                Quartos
                            </LinkRoute>
                        </li>
                    </S.NavLinks>
                </nav>
            )}
        </S.Header>
    )
}

export default Header