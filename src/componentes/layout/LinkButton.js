import styles from './LinkButton-mod.css'
import{Link} from 'react-router-dom'

function LinkButton({to, text}){
    return(
       <Link className='button' to={to}>
       
            {text}
        
       </Link>
    )
}

export default LinkButton