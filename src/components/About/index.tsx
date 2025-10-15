import frontage from '../../assets/img/img1.jpg'
import rooms from '../../assets/img/img2.jpg'
import buffet from '../../assets/img/img3.jpg'
import reception from '../../assets/img/img4.jpg'

import * as S from './styles'

const About = () => {
    return (
        <S.Section id='about'>
            <h3>Sobre a pousada</h3>
            <p className='text'>Conheça um pouco sobre nossa pousada.</p>
            <S.Container>
                <S.Box>
                    <div>
                        <h4>A pousada</h4>
                        <p>
                            A Pousada Dev dispõe de estacionamento privativo gratuito, piscina ao ar livre e bar.
                        </p>
                    </div>
                    <img src={frontage} alt="" />
                </S.Box>
                <S.Box>
                    <div>
                        <h4>Nossos quartos</h4>
                        <p>
                            
                            Os quartos possuem TV de tela plana a cabo, cozinha compacta e área para refeições. Além disso, as unidades da Pousada Dev contam com ar-condicionado e guarda-roupa.
                        </p>
                    </div>
                    <img src={rooms} alt="" />
                </S.Box>
                <S.Box>
                    <div>
                        <h4>Alimentação</h4>
                        <p>
                            A pousada serve café da manhã em estilo continental ou buffet. Nossos restaurantes funcionam 24hrs.
                        </p>
                    </div>
                    <img src={buffet} alt="" />
                </S.Box>
                <S.Box>
                    <div>
                        <h4>Recepção</h4>
                        <p>
                            Nossa recepção fica aberta 24hrs.
                        </p>
                    </div>
                    <img src={reception} alt="" />
                </S.Box>
            </S.Container>
        </S.Section>
    )
}

export default About