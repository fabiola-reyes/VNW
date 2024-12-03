import facebook from '../../assets/facebook..png'
import twuiten from '../../assets/twuiten.png'
import youtube from '../../assets/youtube..png'
import likendin from '../../assets/likendin.png'
import instagran from '../../assets/instagran.png'
import S from './footer.module.scss'

export default function footer(){
    return(
        <footer>
       <section className={S.boxSocial}>
       <h3>4002-8922</h3>
       <nav>
       <img src={facebook} alt="" />
        <img src={twuiten} alt="" />
        <img src={youtube} alt="" />
        <img src={likendin} alt="" />
        <img src={instagran} alt="" />
        
       </nav>
       </section>
       <section className={S.boxTexto}>
              <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}
