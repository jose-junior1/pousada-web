import single1 from '../assets/img/quarto-solteiro1.jpg'
import single2 from '../assets/img/quarto-solteiro2.jpg'
import single3 from '../assets/img/quarto-solteiro3.jpg'

import couple1 from '../assets/img/quarto-casal1.jpg'
import couple2 from '../assets/img/quarto-casal2.jpg'
import couple3 from '../assets/img/quarto-casal3.jpg'

import family1 from '../assets/img/quarto-familia1.jpg'
import family2 from '../assets/img/quarto-familia2.jpg'
import family3 from '../assets/img/quarto-familia3.jpg'

export type RoomProps = {
    id: number
    title: string
    image: string[]
    description: string
    tags?: string[]
}

export const rooms: RoomProps[] = [
    {
        id: 1,
        title: "Quarto de solteiro",
        image: [single1, single2, single3],
        description: "Conheça os nossos quartos de solteiro.",
        tags: [
            "TV de tela plana a cabo",
            "Cozinha compacta",
            "Área para refeições",
            "Ar-condicionado",
            "1 ou 2 camas de solteiro",
            "Não permite cancelamento"
        ]
    },
    {
        id: 2,
        title: "Quarto de casal",
        image: [couple1, couple2, couple3],
        description: "Conheça nossos quartos de casal.",
        tags: [
            "TV de tela plana a cabo",
            "Cozinha compacta",
            "Área para refeições",
            "Ar-condicionado",
            "1 cama de casal",
            "Cancelamento grátis"
        ]
    },
    {
        id: 3,
        title: "Quarto família",
        image: [family1, family2, family3],
        description: "Conheça nossos quartos família.",
        tags: [
            "TV de tela plana a cabo",
            "Cozinha compacta",
            "Área para refeições",
            "Ar-condicionado",
            "1 cama de casal e 1 de solteiro",
            "Cancelamento grátis"
        ]
    }
]
