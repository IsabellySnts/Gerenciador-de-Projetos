import styles from './Home.module.css'
import deposito from '../../img/deposito.png'
import { Link } from 'react-router-dom'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.homeContainer}>
            <h1> Bem-vindo ao <span>Cots</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo</p>
            <LinkButton to="/Contato" text="Criar Projeto"></LinkButton>
            <img src={deposito} alt='deposito'></img>
        </section>
    )
}

export default Home