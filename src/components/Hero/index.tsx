import banner from '../../assets/img/img-fundo.jpg'

import * as S from './styles'

const Hero = () => {
    return (
        <S.Hero style={{ backgroundImage: `url(${banner})` }}>
            <S.BoxText>
                <h2>Pousada Secreta</h2>
                <p>
                    A pousada reservada em Angra dos Reis
                </p>
            </S.BoxText>
        </S.Hero>
    )
}

export default Hero