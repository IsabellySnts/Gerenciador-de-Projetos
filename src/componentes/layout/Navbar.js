import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar-module.css'
import logo from '../../img/moedas.png'

function Nav() {

    return (
        <nav className='navbar'>
            <Container>
            <Link to="/"><img src={logo} alt="grafico" className='logo'></img></Link>
                <ul className='list'>
                    <li className='item'><Link to="/">Home</Link></li>
                    <li className='item'><Link to="/Project">Projetos</Link></li>
                    <li className='item'><Link to="/Cadastro">Contato</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Nav