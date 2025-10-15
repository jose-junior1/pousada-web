import { Section } from './styles'

const Route = () => {
    return (
        <Section id="route">
            <h3>Rota</h3>
            <p>Veja como chegar até a pousada.</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1129992802557!2d-43.36665818133439!3d-22.982871862130665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c2293fa63%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1675380266081!5m2!1spt-BR!2sbr" width="100%" height="450" style={{ border: '0' }} loading="lazy" allowFullScreen={true} title="rota" />
        </Section>
    )
}

export default Route