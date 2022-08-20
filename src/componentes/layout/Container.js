import styles from './Container.module.css'

function Container(props){

    return(

        <div className={`${styles.container} ${props.customeClass}`}>  {props.children}
           
        </div>
    )
}

export default Container