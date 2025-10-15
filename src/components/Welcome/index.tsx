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
                    <h4>Quarto de solteiro</h4>
                </S.BoxRooms>
                <S.BoxRooms>
                    <img src={coupleRoom} alt="" />
                    <h4>Quarto de casal</h4>
                </S.BoxRooms>
                <S.BoxRooms>
                    <img src={familyRoom} alt="" />
                    <h4>Quarto família</h4>
                </S.BoxRooms>
            </S.ContainerRooms>
        </S.Section>
    )
}

export default Welcome