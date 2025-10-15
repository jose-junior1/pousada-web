import singleRoom from '../../assets/img/quarto-solteiro1.jpg'
import coupleRoom from '../../assets/img/quarto-casal1.jpg'
import familyRoom from '../../assets/img/quarto-familia1.jpg'

import * as S from './styles'

const Welcome = () => {
    return (
        <S.Section>
            <S.ContainerText>
                <h3>SEJA BEM-VINDO(A)</h3>
                <p>
                    Relaxe em nossas acomodações e curta o melhor de Angra dos Reis.
                </p>
                <p>
                    Temos quartos para solteiro, casal ou família.
                </p>
            </S.ContainerText>
            <S.ContainerRooms>
                <S.BoxRooms>
                    <img src={singleRoom} alt="" />
                    <S.LinkItem to='/rooms#single'>Quarto de solteiro</S.LinkItem>
                </S.BoxRooms>
                <S.BoxRooms>
                    <img src={coupleRoom} alt="" />
                    <S.LinkItem to='/rooms#couple'>Quarto de casal</S.LinkItem>
                </S.BoxRooms>
                <S.BoxRooms>
                    <img src={familyRoom} alt="" />
                    <S.LinkItem to='/rooms#family'>Quarto família</S.LinkItem>
                </S.BoxRooms>
            </S.ContainerRooms>
        </S.Section>
    )
}

export default Welcome 