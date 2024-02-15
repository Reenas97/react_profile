import ProfileButton from "../ProfileButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"
import iconGithub from "../../assets/images/github.png"
import iconLinkedin from "../../assets/images/linkedin.png"

export default function Profile(props){
    return(
        <div className={styles.container}>
            <img className={styles.photo} src={props.photo} alt="" />
            <Title>
                <span>{props.name}</span>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection className={styles.profileLinks}>
                <ProfileButton href={props.github}> <img src={iconGithub} alt="GitHub" /> GitHub</ProfileButton>
                <ProfileButton href={props.linkedin}> <img src={iconLinkedin} alt="LinkedIn" /> LinkedIn</ProfileButton>
            </ProfileSection>
        </div>
    )
}