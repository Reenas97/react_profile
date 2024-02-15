import styles from "./styles.module.css"

export default function ProfileButton(props){

    return (
        <a 
            className={styles.profileButton}  
            href={props.href} 
            target="_blank"
        >
            {props.children}
        </a>

    )

}