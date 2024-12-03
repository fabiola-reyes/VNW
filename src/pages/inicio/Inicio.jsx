import S from './inicio.module.scss'
import comunidad from '../../assets/comunidad.png'
import reading from '../../assets/reading.png'
import balanza from '../../assets/balanza.png'
import trasformacion from '../../assets/transformacion.png'

export default function Inicio(){
    return(
        <main>
            <section className={S.post}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={S.devoDoar}>
                <div>
                    <h2>Por que devo Doar?</h2>
                </div>
                <section className={S.boxCard}>
                    <article>
                            <img src={comunidad} alt="grupo de pessoas reunidas em circulo " />
                            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                        </article> 
                        <article>
                            <img src={reading} alt="uma pesso lendo" />
                            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                        </article>
                        <article>
                            <img src={trasformacion} alt="grupo de pessoas en fila" />
                            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                        </article>
                        <article>
                            <img src={balanza} alt="balanza" />
                            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
            </section>
        </section>
    </main>
        
    )
}