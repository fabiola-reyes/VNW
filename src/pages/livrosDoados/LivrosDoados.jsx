
       
        import S from './LivrosDoados.module.scss'
        import livro from '../../assets/livro.png'
        import harry from '../../assets/harry.jpg'
        import axios from 'axios'
        import {useState, useEffect} from 'react' 
        
        export default function Doados(){

            const [livros, setLivros] = useState([])

         
            const getLivros = async () => {
                try {
                    const response = await axios.get("https://teste-deploy-bkai.onrender.com/livros")
                    setLivros(response.data)
                } catch (error) {
                    console.error("Erro ao buscar livros:", error)
                }
            }
        
        
            useEffect(() => {
                getLivros()
            }, [])
            return(
                <section className={S.boxDoados}>
                    <h2>Livros Doados</h2>
                    <section className={S.boxcard}>
                        <article>
                            <img src={livro} alt="imagem de um livro que se chama o protagonista" />
                            
                            <h3>O Protagonista</h3>
                            <p>Susanne Andrade</p>
                            <p>Ficção</p>
                            
                        </article>

                        <article>
                            <img src={livro} alt="imagem de um livro que se chama o protagonista" />
                            
                            <h3>A Arte da Guerra</h3>
                            <p>Sun Tzu</p>
                            <p>NaoFicção</p>
                            
                        </article>

                        <article>
                            <img src={harry} alt="imagem de um livro que se chama o protagonista" />
                            
                            <h3>Harry Potter e a Pedra filosofal</h3>
                            <p>J.K Rowling</p>
                            <p>Ficção</p>
                            
                        </article>
                    </section>
                </section>
            )
        }
