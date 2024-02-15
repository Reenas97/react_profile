import Profile from "./components/Profile";
import photo from "./assets/images/foto.jpeg"

export default function App(){
  return(
    <main className="app">
      <Profile
        photo = {photo}
        name = {"Renata Sanchez"}
        bio = {"Front-End Jr. Developer"}
        github = {"https://github.com/Reenas97"}
        linkedin = {"https://www.linkedin.com/in/renatadbsanchez/"}
      />
    </main>
  )
}