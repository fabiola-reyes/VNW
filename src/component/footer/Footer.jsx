import facebook from '../../assets/facebook..png'
import passaro from '../../assets/passaro.png'
import youtube from '../../assets/youtube.png'
import likendin from '../../assets/likendin.png'
import instagran from '../../assets/instagran.png'
import S from './footer/Footer.module.scss'

export default function footer(){
    return(
        <footer>
       <section className={S.boxSocial}>
       <h3>4002-8922</h3>
       <nav>
       <img src={facebook} alt="icon de facebook" />
        <img src={passaro} alt="icon de twitten" />
        <img src={youtube} alt="icon de youtube" />
        <img src={likendin} alt="icon de likendin" />
        <img src={instagran} alt="icon de instagran" />
        
       </nav>
       </section>
       <section className={S.boxTexto}>
              <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}
