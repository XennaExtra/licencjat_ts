import './App.scss';
import {Navbar} from './components/Navbar';
import {LandingPagePicture} from './components/LandingPagePicture'
import {LandingPageShortcutButtons} from "./components/LandingPageShortcutButtons";
function App() {
  return (
      <>
          <Navbar/>
          <LandingPagePicture/>
          <LandingPageShortcutButtons/>
      </>
  )
}

export default App
