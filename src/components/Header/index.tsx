/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-scroll'
import * as S from './styles'

const Header = () => {
    return (
        <S.Header>
            <a className='link-home' href="#">
                Pousada <span>Secreta</span>
            </a>
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
                        <Link
                            to='/rooms'
                        >
                            Quartos
                        </Link>
                    </li>
                </S.NavLinks>
            </nav>
        </S.Header>
    )
}

export default Header