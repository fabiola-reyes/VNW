import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Inicio from '../../pages/inicio/Inicio';
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados';
import QueroDoar from '../../pages/querodoar/QueroDoar'
import logolivro from '../../assets/logoLivro.png';
import lupa from '../../assets/lupa.png'
import S from './Header.module.scss'

export default function Header() {
    return (
        <BrowserRouter>
        <header className={S.header}>
            <section className={S.logoheader}>
                <img src={logolivro} alt="livro com paginas abertas" />
                <h1>Livros Vai Na Web</h1>
            </section>
            <nav className={S.navheader}>
                <ul>
                    <li><Link className={S.link} to="/"> Inicio</Link></li>
                    <li><Link className={S.link} to="/livrosdoados">Livros Doados</Link></li>
                    <li><Link className={S.link} to="/querodoar">Quero Doar</Link></li>
                   
                </ul>
            </nav>
            <div className={S.boxmenu}>
            <input 
            type="search"
            name=""
            id=""
            placeholder="O que você procura?"
          />
          <button>
            <img src={lupa} alt="Icone de lupa branca" />
          </button>  
            
            </div>
        </header>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/livrosdoados" element={<LivrosDoados/>} />
            <Route path="/querodoar"  element={<QueroDoar/>} />     
        </Routes>
        </BrowserRouter>
    );
}