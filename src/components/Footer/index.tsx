import calendarIcon from '../../assets/img/calendario.png'
import telIcon from '../../assets/img/telefone.png'
import addressIcon from '../../assets/img/endereco.png'

import * as S from './styles'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <S.Footer>
            <div>
                <h4>Entre em contato conosco:</h4>
                <S.ListContact>
                    <li>
                        <img src={addressIcon} alt="" />
                        <a href="https://goo.gl/maps/wPAS58QxiTopxK6w7">Endereço Av. 123, 222 - Rio de Janeiro</a>
                    </li>
                    <li>
                        <img src={telIcon} alt="" />
                        <p>
                            Cel: +55 (21) 9999-999
                        </p>
                    </li>
                    <li>
                        <img src={calendarIcon} alt="" />
                        <a href="https://www.booking.com/searchresults.pt-br.html?aid=375635;label=msn-wLZ0m4wRNI00wFHQAaaO3w-79920787059858%3Atikwd-79920803013016%3Aaud-808219487%3Aloc-20%3Aneo%3Amte%3Adec%3Aqsbooking;sid=9ca5cbe6c9db71b34b98c0738ea780f4;dest_id=-666610;dest_type=city&">Faça sua reserva pelo Booking.com</a>
                    </li>
                </S.ListContact>
            </div>
            <p className='copy'>&copy; Copyright - Pousada - {year}</p>
        </S.Footer>
    )
}

export default Footer