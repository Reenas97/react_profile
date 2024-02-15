import styles from "./styles.module.css"

export default function ProfileSection(props){
    return (
        <div 
            {...props}
            className={`${styles.profileSection} ${props.className}`}
        >
            {props.children}
        </div>
    )
}