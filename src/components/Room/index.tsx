import { RoomProps } from "../../data/rooms.mock"

import * as S from './styles'

const Room = ({ id, title, description, image, tags }: RoomProps) => {
    return (
        <S.Section id={id === 1 ? 'single' : id === 2 ? 'couple' : id === 3 ? 'family' : ''}>
            <h3>{title}</h3>
            <p>{description}</p>
            <S.BoxImage>
                <img src={image[0]} alt="" />
                <img src={image[1]} alt="" />
                <img src={image[2]} alt="" />
            </S.BoxImage>
            <S.BoxText>
                <h4>Informações sobre o quarto</h4>
                <ul>
                    {tags?.map((tag) => (
                        <li>
                            {tag}
                        </li>
                    ))}
                </ul>
            </S.BoxText>
        </S.Section>
    )
}

export default Room